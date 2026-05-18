"use client";

import { useEffect, useState } from "react";

import QuestionCard from "@/components/QuestionCard";

type Option = {
  text: string;
  traits: string[];
};

type Question = {
  id: number;
  title: string;
  scenario: string;
  options: Option[];
};

export default function Home() {

  const [sessionId, setSessionId] = useState("");

  const [question, setQuestion] =
    useState<Question | null>(null);

  const [loading, setLoading] = useState(false);



  useEffect(() => {

    startSession();

  }, []);



  const startSession = async () => {

    const response = await fetch(
      "http://127.0.0.1:8000/start",
      {
        method: "POST"
      }
    );

    const data = await response.json();

    setSessionId(data.session_id);

    setQuestion(data.question);
  };



  const handleAnswer = async (option: Option) => {

    setLoading(true);

    const response = await fetch(
      "http://127.0.0.1:8000/answer",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({

          session_id: sessionId,

          traits: option.traits,

          selected_option: option.text
        })
      }
    );

    const data = await response.json();

    if (data.question) {

  setQuestion(data.question);

} else {

  const resultResponse = await fetch(

    `http://127.0.0.1:8000/result/${sessionId}`

  );

  const resultData = await resultResponse.json();

  localStorage.setItem(
    "ikigai_result",
    JSON.stringify(resultData)
  );

  window.location.href = "/result";
}

    setLoading(false);
  };



  if (!question) {

    return (
      <main className="min-h-screen flex items-center justify-center text-3xl font-black">
        Loading...
      </main>
    );
  }



  return (

    <main className="
      min-h-screen
      bg-[#FFF7E8]
      flex
      items-center
      justify-center
      p-6
    ">

      {loading ? (

        <div className="
          bg-blue-300
          border-4
          border-black
          p-10
          text-3xl
          font-black
          shadow-[8px_8px_0px_#000]
        ">

          Understanding your personality...

        </div>

      ) : (

        <QuestionCard
          question={question}
          onSelect={handleAnswer}
        />

      )}

    </main>
  );
}
