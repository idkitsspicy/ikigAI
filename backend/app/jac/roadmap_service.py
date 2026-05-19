import subprocess
import litellm
litellm._turn_on_debug()
import tempfile



def generate_ai_roadmap(

    role,

    onboarding_data

):

    prompt = f"""

You are IkigAI,
an intelligent career architect.

Generate a deeply personalized
career roadmap.

DO NOT generate:
- generic tutorials
- shallow step lists
- repetitive advice

The roadmap should feel:
- strategic
- identity-aware
- emotionally intelligent
- practical
- ambitious
- structured

Return the roadmap in THIS format:

TITLE:
short roadmap title

OVERVIEW:
2-4 lines

PHASE:
phase title

FOCUS:
short explanation

SKILLS:
- bullet
- bullet

PROJECTS:
- bullet
- bullet

ENVIRONMENTS:
- bullet
- bullet

MINDSET SHIFTS:
- bullet
- bullet

---

PHASE:
phase title

(repeat format)

USER CONTEXT:

Selected Role:
{role}

Identity Data:
{onboarding_data}

"""



    jac_code = f'''

import from byllm.lib {{ Model }}

glob llm = Model(
    model_name="gemini/gemini-2.5-flash"
);

obj CareerRoadmap {{
    has roadmap: str;
}}

def generate_roadmap(
    prompt: str
) -> CareerRoadmap by llm();

with entry {{

    result = generate_roadmap(
        prompt="""{prompt}"""
    );

    print(result.roadmap);
}}
'''



    with tempfile.NamedTemporaryFile(

        suffix=".jac",

        delete=False,

        mode="w",

        encoding="utf-8"

    ) as f:

        f.write(jac_code)

        temp_path = f.name



    result = subprocess.run(

        [
            "jac",
            "run",
            temp_path
        ],

        capture_output=True,

        text=True
    )
    if result.stderr:
        print(result.stderr)


    return result.stdout
