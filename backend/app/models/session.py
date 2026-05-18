from pydantic import BaseModel
from typing import Dict, List


class SessionState(BaseModel):

    session_id: str

    current_question: int = 0

    scores: Dict[str, int] = {
        "autonomy": 0,
        "pay": 0,
        "stability": 0,
        "variety": 0,
        "alignment": 0
    }

    answers: List[dict] = []