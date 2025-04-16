# Quality Terms Study Website Project  

This project is a comprehensive website designed to help users learn and understand various quality terms in software development. It includes a frontend built with React and TypeScript using Vite, and a backend built with Python using FastAPI.  

## Project Structure  

The project is divided into two main directories:  

-   `backend`: Contains the backend code, written in Python using FastAPI. Key files include `main.py` and `app/apis/chat/__init__.py`.  
-   `frontend`: Contains the frontend code, written in React and TypeScript using Vite. Key files include `vite.config.ts`, `index.html`, and `src/components/Chatbot.tsx`.  

## Key Features  

-   **Chatbot Integration**: A chatbot component (`Chatbot.tsx`) is included for interactive learning.  
-   **Extensive Examples**: The project includes numerous examples and templates in the `public/Examples` directory, covering bug reports, FRS, SRS, test cases, test plans, and more.  
-   **Modular Design**: The frontend and backend are structured for easy maintenance and scalability.  

## Environment Variables  

The following environment variables are used in the project (defined in `backend/.env`):  
-   `NVIDIA_API_KEY`: Your Nvidia API key.  
-   `NVIDIA_API_URL`: The Nvidia API endpoint (default: `https://integrate.api.nvidia.com/v1/chat/completions`).  
-   `NVIDIA_MODEL_NAME`: The Nvidia model to use (default: `qwen/qwen2.5-coder-32b-instruct`).  
-   `RECAPTCHA_SECRET_KEY`: Your Google reCAPTCHA v3 secret key (for local testing).  
-   `ALLOWED_ORIGINS`: Comma-separated list of allowed origins for CORS (default: `http://localhost:5173,http://localhost:3000`).  

## Running the Project  

1.  **Install Dependencies**:  
    -   Backend: `cd backend && pip install -r requirements.txt`  
    -   Frontend: `cd frontend && npm install`  
2.  **Start the Backend**: `cd backend && make dev` (or `uvicorn main:app --reload`)  
3.  **Start the Frontend**: `cd frontend && npm run dev` (or `vite`)  

The frontend will run on `http://localhost:5173` and the backend on `http://localhost:8000`.  

## Getting Started  

To get started with the project, follow the instructions in the `backend/README.md` and `frontend/README.md` files.  

## Additional Resources  

For more information, refer to the following resources:  
-   `frontend/src/pages`: Contains various pages related to quality terms, such as testing methods, principles, and training materials.  
-   `public/templates`: Includes pre-built templates for common quality assurance documents.
