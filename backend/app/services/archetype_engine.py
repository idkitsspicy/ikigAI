import json


with open("app/data/archetypes.json", "r") as file:

    archetypes = json.load(file)


def resolve_archetype(scores):

    sorted_scores = sorted(
        scores.items(),
        key=lambda x: x[1],
        reverse=True
    )

    top_1 = sorted_scores[0][0]
    top_2 = sorted_scores[1][0]

    combinations = [
        f"{top_1}_{top_2}",
        f"{top_2}_{top_1}"
    ]

    for combo in combinations:

        if combo in archetypes:
            return archetypes[combo]

    return {
        "name": "Undefined Explorer",
        "description": "Still discovering their path."
    }