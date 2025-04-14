import os
import pathlib
import json
import dotenv
from fastapi import FastAPI, APIRouter, Depends
from fastapi.middleware.cors import CORSMiddleware # Import CORS Middleware

dotenv.load_dotenv()


def get_router_config() -> dict:
    try:
        # Note: This file is not available to the agent
        cfg = json.loads(open("routers.json").read())
    except:
        return False
    return cfg


def is_auth_disabled(router_config: dict, name: str) -> bool:
    return router_config["routers"][name]["disableAuth"]


def import_api_routers() -> APIRouter:
    """Create top level router including all user defined endpoints."""
    routes = APIRouter(prefix="/routes")

    router_config = get_router_config()

    src_path = pathlib.Path(__file__).parent

    # Import API routers from "src/app/apis/*/__init__.py"
    apis_path = src_path / "app" / "apis"

    api_names = [
        p.relative_to(apis_path).parent.as_posix()
        for p in apis_path.glob("*/__init__.py")
    ]

    api_module_prefix = "app.apis."

    for name in api_names:
        print(f"Importing API: {name}")
        try:
            api_module = __import__(api_module_prefix + name, fromlist=[name])
            api_router = getattr(api_module, "router", None)
            if isinstance(api_router, APIRouter):
                # Always include router without auth dependencies as databutton auth is removed
                routes.include_router(api_router, dependencies=[])
        except Exception as e:
            print(e)
            continue

    print(routes.routes)

    return routes


def create_app() -> FastAPI:
    """Create the app. This is called by uvicorn with the factory option to construct the app object."""
    app = FastAPI()

    # --- CORS Middleware Configuration ---
    # Allow requests from your frontend development server and deployed site
    origins = [
        "http://localhost:5173", # Vite default port
        "http://localhost:3000", # Common React dev port
        "https://tofailhiary.github.io", # Your deployed GitHub Pages URL
        # You might need to add your specific GitHub Pages URL if different, e.g. https://<username>.github.io/<repo-name>
    ]

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"], # Allow all methods (GET, POST, OPTIONS, etc.)
        allow_headers=["*"], # Allow all headers
    )
    # --- End CORS Configuration ---


    app.include_router(import_api_routers())

    for route in app.routes:
        if hasattr(route, "methods"):
            for method in route.methods:
                print(f"{method} {route.path}")

    # Removed firebase/auth config setup

    return app


app = create_app()
