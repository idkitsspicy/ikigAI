"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { sparkFragments } from "@/data/sparkFragments";



export default function SparkField({
  onContinue
}: {
  onContinue: (selected: string[]) => void;
}) {

  const [selected, setSelected] =
    useState<number[]>([]);



  const toggleFragment = (id: number) => {

  if (selected.includes(id)) {

    setSelected(
      selected.filter((item) => item !== id)
    );

    return;
  }



  // LIMIT TO 4

  if (selected.length >= 4) return;



  setSelected([
    ...selected,
    id
  ]);
};



  return (

    <main className="
      min-h-screen
      bg-[#FFF7E8]
      overflow-hidden
      relative
      text-black
      p-6
    ">

      <div className="
        absolute
        inset-0
        opacity-5
        pointer-events-none
      ">

        <div className="
          grid
          grid-cols-8
          h-full
        ">

          {[...Array(64)].map((_, i) => (

            <div
              key={i}
              className="border border-black"
            />

          ))}

        </div>

      </div>



      {/* HEADER */}

      <div className="
        relative
        z-10
        max-w-5xl
        mx-auto
        pt-12
        mb-16
      ">

        <div className="
          inline-block
          bg-yellow-300
          border-4
          border-black
          shadow-[5px_5px_0px_#000]
          px-4
          py-2
          mb-6
        ">

          <p className="
            font-black
            uppercase
          ">

            Inner Signals
          </p>

        </div>



        <h1 className="
          text-6xl
          md:text-8xl
          font-black
          leading-none
          mb-8
        ">

          Pull closer
          <br />

          what feels
          <br />

          strangely alive.

        </h1>



        <p className="
          text-xl
          font-medium
          max-w-2xl
        ">

          Don’t overthink it.
          Some signals stay closer than others.(Select upto 4)

        </p>

      </div>



      {/* FLOATING FIELD */}

      <div className="
        relative
        w-full
        h-[600px]
      ">

        {sparkFragments.map((fragment, index) => {

          const isSelected =
            selected.includes(fragment.id);



          return (

            <motion.button

              key={fragment.id}

              initial={{
                opacity: 0,
                scale: 0.7
              }}

              animate={{
  opacity:
    selected.length >= 4 && !isSelected
      ? 0.25
      : 1,

  scale: isSelected ? 1.2 : 1,

  x: isSelected ? 0 : Math.sin(index) * 40,

  y: isSelected ? -40 : Math.cos(index) * 40
}}

              onClick={() =>
                toggleFragment(fragment.id)
              }

              className={`
                absolute
                px-6
                py-4
                border-4
                border-black
                font-black
                text-xl
                shadow-[6px_6px_0px_#000]
                transition-all

                ${
                  isSelected
                    ? "bg-pink-300 z-20"
                    : "bg-white"
                }
              `}
              style={{
                left: `${10 + (index % 4) * 22}%`,
                top: `${(index % 3) * 28}%`
              }}
            >

              {fragment.text}

            </motion.button>

          );
        })}

      </div>



      {/* CONTINUE */}

      <div className="
        relative
        z-10
        flex
        justify-end
        mt-10
      ">

        <motion.button

          whileHover={{
            x: 4,
            y: 4
          }}

          whileTap={{
            scale: 0.97
          }}

          onClick={() => {

  const selectedTexts =
    sparkFragments
      .filter(fragment =>
        selected.includes(fragment.id)
      )
      .map(fragment => fragment.text);

  onContinue(selectedTexts);
}}

          className="
            bg-blue-300
            border-4
            border-black
            shadow-[8px_8px_0px_#000]
            px-10
            py-5
            text-2xl
            font-black
          "
        >

          Continue →

        </motion.button>

      </div>

    </main>
  );
}