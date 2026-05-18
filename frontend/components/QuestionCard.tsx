"use client";

import { motion } from "framer-motion";



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



type Props = {
  question: Question;
  onSelect: (option: Option) => void;
};



export default function QuestionCard({
  question,
  onSelect,
}: Props) {

  return (

    <motion.div

      initial={{ opacity: 0, y: 40 }}

      animate={{ opacity: 1, y: 0 }}

      exit={{ opacity: 0, y: -40 }}

      transition={{ duration: 0.4 }}

      className="
        w-full
        max-w-4xl
        bg-white
        border-4
        border-black
        shadow-[10px_10px_0px_#000]
        p-8
      "
    >

      {/* TITLE */}

      <div className="mb-8">

        <div
          className="
            inline-block
            bg-yellow-300
            border-4
            border-black
            px-4
            py-2
            mb-5
          "
        >

          <p className="font-black uppercase tracking-wide">

            {question.title}

          </p>

        </div>



        <h2 className="text-4xl md:text-5xl font-black leading-tight">

          {question.scenario}

        </h2>

      </div>



      {/* OPTIONS */}

      <div className="grid gap-5">

        {question.options.map((option, index) => (

          <motion.button

            key={index}

            whileHover={{
              x: 5,
              y: 5
            }}

            whileTap={{
              scale: 0.98
            }}

            onClick={() => onSelect(option)}

            className="
              text-left
              bg-pink-300
              hover:bg-pink-400
              border-4
              border-black
              p-6
              text-lg
              font-bold
              shadow-[6px_6px_0px_#000]
              transition-all
            "
          >

            {option.text}

          </motion.button>

        ))}

      </div>

    </motion.div>
  );
}
