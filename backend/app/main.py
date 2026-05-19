from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware
from app.routes.synthesis import router as synthesis_router
from app.routes.onboarding import router as onboarding_router
from app.routes.results import router as results_router

from app.routes.roadmap import (
    router as roadmap_router
)
app = FastAPI()


app.add_middleware(

    CORSMiddleware,

    allow_origins=["*"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)


app.include_router(onboarding_router)
app.include_router(results_router)
app.include_router(synthesis_router)
app.include_router(roadmap_router)


@app.get("/")

def home():

    return {
        "message": "IkigAI Backend Running"
    }
