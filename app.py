from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os

# 🔥 Firebase
import firebase_admin
from firebase_admin import credentials, firestore

# ---------------- INIT ----------------
app = Flask(__name__)
CORS(app)

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel("gemini-2.5-flash")

cred = credentials.Certificate("firebase_key.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# ---------------- INIT USER ----------------
@app.route("/init-user", methods=["POST"])
def init_user():
    data = request.json
    uid = data["user_id"]

    db.collection("users").document(uid).set({
        "name": data.get("name"),
        "email": data.get("email"),
        "career_goal": "",
        "created_at": firestore.SERVER_TIMESTAMP
    }, merge=True)

    return jsonify({"message": "User initialized"})

# ---------------- CAREER DISCOVERY ----------------
@app.route("/discover-career", methods=["POST"])
def discover_career():
    data = request.json
    uid = data.get("user_id", "guest")

    prompt = f"""
User profile:
Interests: {data['interests']}
Strengths: {data['strengths']}
Work Style: {data['work_style']}

Suggest 3 suitable career paths and explain why each matches the user.
Keep it simple.
"""

    res = model.generate_content(prompt)
    discovery_text = res.text

    db.collection("discoveries").add({
        "user_id": uid,
        "interests": data["interests"],
        "strengths": data["strengths"],
        "work_style": data["work_style"],
        "result": discovery_text,
        "created_at": firestore.SERVER_TIMESTAMP
    })

    return jsonify({"discovery_text": discovery_text})

# ---------------- GENERATE ROADMAP ----------------
@app.route("/generate-roadmap", methods=["POST"])
def generate_roadmap():
    data = request.json
    career = data["career"]
    level = data["level"]
    uid = data.get("user_id", "guest")

    prompt = f"""
Create a clear step-by-step learning roadmap for becoming a {career}.

User level: {level}

Format:
1. Stage Title
Short description

2. Stage Title
Short description

Do not include symbols or markdown.
"""

    response = model.generate_content(prompt)
    roadmap_text = response.text

    # Save roadmap
    db.collection("roadmaps").add({
        "user_id": uid,
        "career_goal": career,
        "level": level,
        "generated_at": firestore.SERVER_TIMESTAMP,
        "roadmap_text": roadmap_text
    })

    return jsonify({
        "roadmap": roadmap_text,
        "raw_output": roadmap_text   # 👈 Gemini raw text included
    })

# ---------------- HISTORY ----------------
@app.route("/get-history", methods=["POST"])
def get_history():
    uid = request.json["user_id"]
    docs = db.collection("roadmaps").where("user_id", "==", uid).stream()

    history = [doc.to_dict() for doc in docs]

    return jsonify({"history": history})

# ---------------- RUN ----------------
if __name__ == "__main__":
    app.run(debug=True)
