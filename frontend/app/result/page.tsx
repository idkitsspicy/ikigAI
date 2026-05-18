"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

export default function ResultPage() {

  const [result, setResult] = useState<any>(null);



  useEffect(() => {

    const stored = localStorage.getItem("ikigai_result");

    if (stored) {

      setResult(JSON.parse(stored));
    }

  }, []);




  if (!result) {

    return (

      <main className="
        min-h-screen
        flex
        items-center
        justify-center
        text-4xl
        font-black
      ">

        Loading...

      </main>
    );
  }



  return (

    <main className="
      min-h-screen
      bg-[#FFF7E8]
      text-black
      p-6
    ">

      <div className="max-w-5xl mx-auto">

        {/* HERO */}

        <motion.div

          initial={{ opacity: 0, y: 40 }}

          animate={{ opacity: 1, y: 0 }}

          className="
            bg-yellow-300
            border-4
            border-black
            shadow-[10px_10px_0px_#000]
            p-10
            mb-10
          "
        >

          <p className="uppercase font-black mb-3">
            Your Career Archetype
          </p>

          <h1 className="text-6xl font-black mb-5">

            {result.archetype.name}

          </h1>

          <p className="text-2xl font-bold">

            {result.archetype.description}

          </p>

        </motion.div>



        {/* AI INSIGHT */}

        <motion.div

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{ delay: 0.2 }}

          className="
            bg-white
            border-4
            border-black
            shadow-[10px_10px_0px_#000]
            p-8
            whitespace-pre-line
            text-lg
            font-medium
            leading-relaxed
          "
        >

          {result.insight}

        </motion.div>

      </div>

    </main>
  );
}
