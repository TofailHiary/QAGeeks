import os
import httpx
from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

router = APIRouter()

# --- Configuration ---
NVIDIA_API_KEY = os.getenv("NVIDIA_API_KEY")
# Read API URL from env var, fallback to default if not set
NVIDIA_API_URL = os.getenv("NVIDIA_API_URL", "https://integrate.api.nvidia.com/v1/chat/completions")
# Read model name from env var, fallback to default if not set
MODEL_NAME = os.getenv("NVIDIA_MODEL_NAME", "qwen/qwen2.5-coder-32b-instruct")

# Read other parameters from env vars with defaults and type conversion
try:
    TEMPERATURE = float(os.getenv("NVIDIA_TEMPERATURE", "0.2"))
except ValueError:
    logger.warning("Invalid NVIDIA_TEMPERATURE value, using default 0.2")
    TEMPERATURE = 0.2

try:
    TOP_P = float(os.getenv("NVIDIA_TOP_P", "0.7"))
except ValueError:
    logger.warning("Invalid NVIDIA_TOP_P value, using default 0.7")
    TOP_P = 0.7

try:
    MAX_TOKENS = int(os.getenv("NVIDIA_MAX_TOKENS", "1024"))
except ValueError:
    logger.warning("Invalid NVIDIA_MAX_TOKENS value, using default 1024")
    MAX_TOKENS = 1024

try:
    PRESENCE_PENALTY = float(os.getenv("NVIDIA_PRESENCE_PENALTY", "0.1"))
except ValueError:
    logger.warning("Invalid NVIDIA_PRESENCE_PENALTY value, using default 0.1")
    PRESENCE_PENALTY = 0.1

try:
    FREQUENCY_PENALTY = float(os.getenv("NVIDIA_FREQUENCY_PENALTY", "0.0"))
except ValueError:
    logger.warning("Invalid NVIDIA_FREQUENCY_PENALTY value, using default 0.0")
    FREQUENCY_PENALTY = 0.0

# Read stop sequences as a comma-separated string and split into a list
# Default based on the example curl command
DEFAULT_STOP_SEQUENCES = "\\n\\nUser:,<|endoftext|>" # Use comma as separator, escape newline for env var
stop_sequences_str = os.getenv("NVIDIA_STOP_SEQUENCES", DEFAULT_STOP_SEQUENCES)
STOP_SEQUENCES = [seq.replace("\\n", "\n") for seq in stop_sequences_str.split(',')] if stop_sequences_str else None

# Google reCAPTCHA v3 Configuration
RECAPTCHA_SECRET_KEY = os.getenv("RECAPTCHA_SECRET_KEY")
RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify"
RECAPTCHA_SCORE_THRESHOLD = 0.5 # Adjust as needed (0.0 to 1.0)


# --- Pydantic Models ---
class ChatRequest(BaseModel):
    message: str
    recaptcha_token: str # Token from frontend reCAPTCHA v3
    # Optional: Add history if you want to send it from frontend
    # messages: list[dict] | None = None

class ChatResponse(BaseModel):
    reply: str

# --- Helper Functions ---

async def verify_recaptcha(token: str) -> bool:
    """Verifies the reCAPTCHA token with Google."""
    if not RECAPTCHA_SECRET_KEY:
        logger.error("RECAPTCHA_SECRET_KEY is not set. Cannot verify token.")
        # Depending on policy, you might allow requests if key isn't set (e.g., local dev)
        # or deny them. Denying is safer for production if setup is expected.
        # return True # Allow if key not set (less secure)
        raise HTTPException(status_code=500, detail="reCAPTCHA is not configured on the server.")

    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(RECAPTCHA_VERIFY_URL, data={
                'secret': RECAPTCHA_SECRET_KEY,
                'response': token
            })
            response.raise_for_status()
            result = response.json()

            logger.info(f"reCAPTCHA verification result: {result}")

            # Check success and score
            if result.get("success") and result.get("score", 0) >= RECAPTCHA_SCORE_THRESHOLD:
                logger.info(f"reCAPTCHA verification successful (score: {result.get('score')})")
                return True
            else:
                logger.warning(f"reCAPTCHA verification failed or score too low: {result}")
                return False
        except httpx.RequestError as exc:
            logger.error(f"HTTP Request Error calling reCAPTCHA API: {exc}")
            # Fail verification if we can't reach Google
            return False
        except httpx.HTTPStatusError as exc:
            logger.error(f"HTTP Status Error calling reCAPTCHA API: {exc.response.status_code} - {exc.response.text}")
             # Fail verification on error from Google
            return False
        except Exception as exc:
            logger.error(f"Unexpected error during reCAPTCHA verification: {exc}")
            # Fail verification on unexpected errors
            return False

async def call_nvidia_api(user_message: str):
    if not NVIDIA_API_KEY:
        logger.error("NVIDIA_API_KEY environment variable not set.")
        raise HTTPException(status_code=500, detail="API key configuration error.")

    # Basic conversation history (can be expanded)
    # For simplicity, just sending the user message for now.
    # If you send history from frontend, use that instead.
    messages_payload = [{"role": "user", "content": user_message}]

    payload = {
        "model": MODEL_NAME,
        "messages": messages_payload,
        "temperature": TEMPERATURE,
        "top_p": TOP_P,
        "max_tokens": MAX_TOKENS,
        "stream": False, # Stream is kept hardcoded for now
        "presence_penalty": PRESENCE_PENALTY,
        "frequency_penalty": FREQUENCY_PENALTY,
        "stop": STOP_SEQUENCES
    }

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {NVIDIA_API_KEY}"
    }

    async with httpx.AsyncClient(timeout=60.0) as client: # Increased timeout
        try:
            logger.info(f"Sending request to NVIDIA API: {NVIDIA_API_URL}")
            response = await client.post(NVIDIA_API_URL, json=payload, headers=headers)
            response.raise_for_status() # Raise exception for bad status codes (4xx or 5xx)

            data = response.json()
            logger.info("Received response from NVIDIA API.")

            # Extract reply
            reply = data.get("choices", [{}])[0].get("message", {}).get("content", "").strip()
            if not reply:
                logger.warning("Could not parse reply from NVIDIA API response.")
                return "Sorry, I couldn't understand the response."
            return reply

        except httpx.RequestError as exc:
            logger.error(f"HTTP Request Error calling NVIDIA API: {exc}")
            raise HTTPException(status_code=503, detail=f"Error communicating with AI service: {exc}")
        except httpx.HTTPStatusError as exc:
            logger.error(f"HTTP Status Error calling NVIDIA API: {exc.response.status_code} - {exc.response.text}")
            raise HTTPException(status_code=exc.response.status_code, detail=f"Error from AI service: {exc.response.text}")
        except Exception as exc:
            logger.error(f"An unexpected error occurred: {exc}")
            raise HTTPException(status_code=500, detail="An internal error occurred.")


# --- API Endpoint ---
@router.post("/chat", response_model=ChatResponse)
async def handle_chat(chat_request: ChatRequest):
    """
    Receives a user message, verifies reCAPTCHA, calls the NVIDIA chat API,
    and returns the reply.
    """
    logger.info(f"Received chat request for message: '{chat_request.message}'")

    # --- Verify reCAPTCHA Token ---
    is_human = await verify_recaptcha(chat_request.recaptcha_token)
    if not is_human:
        logger.warning("reCAPTCHA verification failed. Rejecting request.")
        raise HTTPException(status_code=403, detail="reCAPTCHA verification failed.")
    # --- End Verification ---

    logger.info("reCAPTCHA verification passed.")
    try:
        ai_reply = await call_nvidia_api(chat_request.message)
        logger.info(f"Sending reply for message '{chat_request.message}'")
        return ChatResponse(reply=ai_reply)
    except HTTPException as http_exc:
        # Re-raise HTTPException to let FastAPI handle it
        raise http_exc
    except Exception as e:
        # Catch any other unexpected errors during the process
        logger.error(f"Error processing chat request: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="Failed to process chat request.")
