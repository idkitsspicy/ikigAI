from fastapi import APIRouter

from pydantic import BaseModel

from app.jac.roadmap_service import (
    generate_ai_roadmap
)



router = APIRouter()



class RoadmapRequest(BaseModel):

    role: str

    onboardingData: dict



@router.post("/generate-roadmap")

def generate_roadmap(
    data: RoadmapRequest
):

    result = generate_ai_roadmap(

        role=data.role,

        onboarding_data=
        data.onboardingData
    )



    return {
        "roadmap": result
    }
