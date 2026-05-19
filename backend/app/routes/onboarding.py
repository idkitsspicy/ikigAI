from fastapi import APIRouter
from uuid import uuid4

from app.models.session import SessionState
from app.data.questions import questions
from app.services.scoring_engine import update_scores

router = APIRouter()

sessions = {}


@router.post("/start")

def start_session():

    session_id = str(uuid4())

    session = SessionState(session_id=session_id)

    sessions[session_id] = session

    first_question = questions[0]

    return {
        "session_id": session_id,
        "question": first_question
    }



@router.post("/answer")

def answer_question(data: dict):

    session_id = data["session_id"]

    selected_traits = data["traits"]

    session = sessions[session_id]

    session.scores = update_scores(
        session.scores,
        selected_traits
    )

    session.answers.append(data)

    session.current_question += 1

    if session.current_question >= len(questions):

        return {
            "message": "completed",
            "scores": session.scores
        }

    next_question = questions[session.current_question]

    return {
        "question": next_question,
        "scores": session.scores
    }
