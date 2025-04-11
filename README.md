# QA Geeks - Software Testing Knowledge Base

This project is a comprehensive web application designed as a knowledge base for Quality Assurance (QA) and Software Testing concepts. It provides information on various topics relevant to software testing professionals and learners.

## Content Overview

The site covers a wide range of topics, including:

*   Software Development Life Cycle (SDLC)
*   Software Testing Life Cycle (STLC)
*   Core Testing Principles
*   Levels of Testing (Unit, Integration, System, Acceptance)
*   Types of Testing (Functional, Non-Functional, Performance, Security, etc.)
*   Testing Methods (Black Box, White Box, Grey Box)
*   Defect Management
*   API Testing
*   Common Testing Tools
*   QA Interview Questions
*   Templates and Resources (Test Plans, Test Cases, Bug Reports, etc.)

## Technical Stack

*   **Frontend:** React + TypeScript with Vite, styled using Tailwind CSS and shadcn/ui components. Uses `yarn` for package management.
*   **Backend:** Python FastAPI server. Uses `uv` for package management.

## Quickstart

1.  **Install Dependencies:**
    Run the following command in the root directory to install both frontend and backend dependencies:
    ```bash
    make
    ```

2.  **Run the Application:**
    Start the backend and frontend servers in separate terminals:

    *   **Backend:**
        ```bash
        make run-backend
        ```
    *   **Frontend:**
        ```bash
        make run-frontend
        ```

## Accessing the Application

*   The backend server runs on port `8000`.
*   The frontend development server runs on port `5173`.
*   The frontend Vite server proxies API requests (`/api`) to the backend on port `8000`.

Visit **<http://localhost:5173>** in your browser to view the application.
