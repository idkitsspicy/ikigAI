from fastapi import APIRouter

from pydantic import BaseModel

from app.jac.jac_service import (
    generate_personality_report
)



router = APIRouter()



class SynthesisRequest(BaseModel):

    sparkSelections: list[str]

    systems: list[str]

    sacrifices: list[str]

    environments: list[str]

    skills: list[str]

    domains: list[str]

    education: str

    growthStyle: str



@router.post("/synthesize")

def synthesize(data: SynthesisRequest):

    result = generate_personality_report(

        spark_selections=data.sparkSelections,

        systems=data.systems,

        anchors=data.sacrifices,

        environments=data.environments,

        skills=data.skills,

        education=data.education,

        domains=data.domains,
        growth_style=data.growthStyle
    )

    return {
        "report": result
    }
