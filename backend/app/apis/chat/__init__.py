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
NVIDIA_API_URL = "https://integrate.api.nvidia.com/v1/chat/completions"
MODEL_NAME = "qwen/qwen2.5-coder-32b-instruct" # Or your desired model

# --- Pydantic Models ---
class ChatRequest(BaseModel):
    message: str
    # Optional: Add history if you want to send it from frontend
    # messages: list[dict] | None = None

class ChatResponse(BaseModel):
    reply: str

# --- Helper Function ---
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
        "temperature": 0.2,
        "top_p": 0.7,
        "max_tokens": 1024,
        "stream": False
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
    Receives a user message, calls the NVIDIA chat API, and returns the reply.
    """
    logger.info(f"Received chat request: {chat_request.message}")
    try:
        ai_reply = await call_nvidia_api(chat_request.message)
        logger.info(f"Sending reply: {ai_reply}")
        return ChatResponse(reply=ai_reply)
    except HTTPException as http_exc:
        # Re-raise HTTPException to let FastAPI handle it
        raise http_exc
    except Exception as e:
        # Catch any other unexpected errors during the process
        logger.error(f"Error processing chat request: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="Failed to process chat request.")
