import os
import pathlib
import json
import dotenv
import logging # Import logging
from fastapi import FastAPI, APIRouter, Depends
from fastapi.middleware.cors import CORSMiddleware # Import CORS Middleware

dotenv.load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


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
    # Read allowed origins from environment variable (comma-separated)
    # Default to local development origins if not set
    default_origins = "http://localhost:5173,http://localhost:3000"
    allowed_origins_str = os.getenv("ALLOWED_ORIGINS", default_origins)
    origins = [origin.strip() for origin in allowed_origins_str.split(',')]

    logger.info(f"Configuring CORS for origins: {origins}")

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins, # Use the configured origins list
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
