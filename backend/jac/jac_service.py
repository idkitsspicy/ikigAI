import subprocess
import json


def generate_personality_report(scores, archetype):

    payload = {
        "scores": scores,
        "archetype": archetype["name"]
    }

    result = subprocess.run(

        [
            "jac",
            "run",
            "app/jac/personality_agent.jac"
        ],

        capture_output=True,
        text=True
    )

    return result.stdout
