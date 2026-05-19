import subprocess
import litellm
litellm._turn_on_debug()
import tempfile



def generate_personality_report(

    spark_selections,

    systems,

    anchors,

    environments,

    skills,

    education,

    domains,
    growth_style

):

    prompt = f"""

You are IkigAI,
an emotionally intelligent career architect.

Speak directly to the user.

Never refer to the user as:
- they
- this person
- the individual

Always use:
- you
- your

Avoid:
- giant paragraphs
- markdown formatting
- corporate coaching language
- generic motivational language

Keep responses:
- emotionally intelligent
- concise
- insightful
- visually scannable

IMPORTANT:
Return EXACTLY in this structure.

IDENTITY CORE:
2-4 lines only

ENERGY DRIVERS:
- bullet
- bullet
- bullet

HIDDEN TENSIONS:
- bullet
- bullet

BURNOUT RISKS:
- bullet
- bullet

IDEAL ENVIRONMENTS:
- bullet
- bullet

CAREER PATHS:

ROLE:
short role title

WHY IT FITS:
2-3 lines

IDEAL FOR:
- bullet
- bullet

---

ROLE:
short role title

WHY IT FITS:
2-3 lines

IDEAL FOR:
- bullet
- bullet

AVOID:
- bullet
- bullet

GROWTH ROADMAP:
- step
- step
- step

USER DATA:

Spark Selections:
{spark_selections}

Systems:
{systems}

Core Anchors:
{anchors}

Preferred Environments:
{environments}

Skills:
{skills}

Education:
{education}

Domains:
{domains}

Growth Style:
{growth_style}

"""



    jac_code = f'''

import from byllm.lib {{ Model }}

glob llm = Model(
    model_name="gemini/gemini-2.5-flash"
);

obj PersonalityReport {{
    has report: str;
}}

def synthesize_identity(
    prompt: str
) -> PersonalityReport by llm();

with entry {{

    result = synthesize_identity(
        prompt="""{prompt}"""
    );

    print(result.report);
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



    return result.stdout
