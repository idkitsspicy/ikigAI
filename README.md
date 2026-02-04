```markdown
# 🌸 ikigAI — AI Career Quest

**ikigAI** is an AI-powered career discovery and learning roadmap platform that helps users discover their ideal career path and receive a personalized step-by-step growth journey.

It blends **Ikigai-inspired career discovery**, **AI-generated learning roadmaps**, and **Firebase memory** to create an intelligent, adaptive career guidance system.

---

## 🚀 Features

### 🌸 Career Discovery (Ikigai-Based)
Users share:
- Interests  
- Strengths  
- Work style  

AI suggests **3 suitable career paths** with explanations tailored to the user.

---

### 🗺️ AI Roadmap Generator
Generates a structured learning path based on:
- Career goal  
- Current skill level  

Each roadmap includes:
- Learning stages  
- Skill progression  
- Clear growth milestones  

---

### ☁️ Firebase Integration
Stores:
- User profiles  
- Career discovery results  
- Roadmap history  

This enables:
- Personalization  
- History tracking  
- Future progress features  

---

### 🎮 Gamified Experience
- Ikigai-inspired visuals  
- Curved roadmap journey  
- Interactive learning stages  
- Modern dark UI  

---

## 🧠 Tech Stack

| Layer | Technology |
|------|------------|
| Backend | Flask |
| AI Engine | Google Gemini 2.5 Flash |
| Database | Firebase Firestore |
| Frontend | HTML, CSS, JavaScript |

---

## 📂 Project Structure

```

backend/
├── app.py
├── firebase_key.json

frontend/
├── index.html
├── discover.html
├── roadmap.html

````

---

## 🔑 Setup Guide

### 1️⃣ Install dependencies
```bash
pip install flask flask-cors google-generativeai firebase-admin
````

### 2️⃣ Set Gemini API key

```bash
export GEMINI_API_KEY=your_api_key_here
```

### 3️⃣ Firebase Setup

* Create a Firebase project
* Enable Firestore
* Generate a **Service Account Key**
* Save it as:

```
firebase_key.json
```

inside the backend folder.

### 4️⃣ Run Backend

```bash
python app.py
```

Server runs at:

```
http://localhost:5000
```

---

## 🔌 API Endpoints

| Endpoint            | Purpose                    |
| ------------------- | -------------------------- |
| `/init-user`        | Creates user document      |
| `/discover-career`  | AI career discovery        |
| `/generate-roadmap` | AI learning roadmap        |
| `/get-history`      | Fetch user roadmap history |

---

## 🎯 How It Works

1. User discovers career matches using AI
2. User selects career & level
3. AI generates a roadmap
4. Roadmap is stored in Firebase
5. UI displays an interactive learning journey

---

## 🔮 Future Enhancements

* Skill confidence tracking
* XP and leveling system
* AI progress check-ins
* Course and YouTube integration
* Calendar scheduling

---

## 🏆 Why ikigAI Stands Out

ikigAI is not just a chatbot.
It is an **AI Career Learning System** that:

✔ Personalizes career guidance
✔ Remembers user learning context
✔ Provides structured growth paths
✔ Uses gamified interaction

---

**ikigAI = AI that helps you find what you love, what you're good at, and where you can grow.**

```
```
