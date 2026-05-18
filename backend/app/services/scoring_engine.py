def update_scores(scores, traits):

    for trait in traits:

        if trait in scores:
            scores[trait] += 2

    return scores