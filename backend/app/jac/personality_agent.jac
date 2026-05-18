import from byllm.lib { Model }

glob llm = Model(
    model_name="gemini/gemini-2.5-flash"
);



obj PersonalityReport {

    has personality_summary: str;

    has strengths: list[str];

    has burnout_risks: list[str];

    has ideal_work_environments: list[str];

    has recommended_careers: list[str];

    has careers_to_avoid: list[str];
}



def interpret_personality(
    scores: dict,
    archetype: str
) -> PersonalityReport by llm();



with entry {

    scores = {
        "autonomy": 8,
        "variety": 7,
        "stability": 2,
        "pay": 4,
        "alignment": 6
    };



    result = interpret_personality(
        scores,
        "Escape Artist"
    );



    print(result);
}