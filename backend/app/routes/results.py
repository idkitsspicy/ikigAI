from fastapi import APIRouter

from app.routes.onboarding import sessions
from app.jac.jac_service import generate_personality_report
from app.services.archetype_engine import resolve_archetype


router = APIRouter()


@router.get("/result/{session_id}")

def get_result(session_id: str):

    session = sessions[session_id]

    archetype = resolve_archetype(session.scores)

    prompt = f"""

You are an emotionally intelligent AI career psychologist.

A user completed an IkigAI personality exploration.

Their psychological scores are:

{session.scores}

Their archetype is:

{archetype["name"]}

Archetype description:

{archetype["description"]}

Generate:
1. Deep personality insight
2. Strengths
3. Burnout risks
4. Ideal work environments
5. Careers that fit them
6. Careers they may dislike

Keep it emotionally intelligent, warm, reflective, and insightful.

Avoid corporate tone.
Avoid sounding robotic.

"""

    insight = generate_personality_report(
    session.scores,
    archetype
)

    return {

    "scores": session.scores,

    "archetype": archetype,

    "insight": insight
}