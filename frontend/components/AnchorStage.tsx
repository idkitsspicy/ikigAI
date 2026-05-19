"use client";

import { useState } from "react";

import { motion } from "framer-motion";



const anchors = [

  "Freedom",

  "Stability",

  "Recognition",

  "Meaning",

  "Mastery",

  "Exploration"
];



export default function AnchorStage({
  onContinue
}: {
  onContinue: (selected: string[]) => void;
}) {

  const [selected, setSelected] =
    useState<string[]>([]);



  const toggleAnchor = (anchor: string) => {

    if (selected.includes(anchor)) {

      setSelected(
        selected.filter(item => item !== anchor)
      );

      return;
    }



    if (selected.length >= 2) return;



    setSelected([
      ...selected,
      anchor
    ]);
  };



  return (

    <main className="
      min-h-screen
      bg-[#FFF7E8]
      text-black
      p-6
      overflow-hidden
    ">

      <div className="
        max-w-6xl
        mx-auto
        pt-12
      ">

        {/* HEADER */}

        <div className="mb-16">

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

              Core Anchors
            </p>

          </div>



          <h1 className="
            text-6xl
            md:text-8xl
            font-black
            leading-none
            mb-8
          ">

            No life
            <br />

            holds everything
            <br />

            equally.

          </h1>



          <p className="
            text-xl
            max-w-3xl
            font-medium
          ">

            When life becomes complicated,
            which foundations quietly remain essential?

          </p>

        </div>



        {/* ANCHOR FIELD */}

        <div className="
          relative
          h-[500px]
        ">

          {anchors.map((anchor, index) => {

            const isSelected =
              selected.includes(anchor);



            return (

              <motion.button

                key={anchor}

                initial={{
                  opacity: 0,
                  scale: 0.8
                }}

                animate={{
                  opacity: isSelected ? 1 : 0.6,

                  scale: isSelected ? 1.15 : 1,

                  y: isSelected ? -20 : 0
                }}

                transition={{
                  duration: 0.4
                }}

                onClick={() =>
                  toggleAnchor(anchor)
                }

                className={`
                  absolute
                  border-4
                  border-black
                  px-8
                  py-6
                  text-3xl
                  font-black
                  shadow-[8px_8px_0px_#000]
                  transition-all

                  ${
                    isSelected
                      ? "bg-pink-300 z-20"
                      : "bg-white"
                  }
                `}
                style={{
                  left: `${10 + (index % 3) * 28}%`,
                  top: `${(index % 2) * 35}%`
                }}
              >

                {anchor}

              </motion.button>

            );
          })}

        </div>



        {/* CONTINUE */}

        <div className="
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

            disabled={selected.length !== 2}

            onClick={() =>
              onContinue(selected)
            }

            className="
              bg-blue-300
              border-4
              border-black
              shadow-[8px_8px_0px_#000]
              px-10
              py-5
              text-2xl
              font-black
              disabled:opacity-40
            "
          >

            Continue →

          </motion.button>

        </div>

      </div>

    </main>
  );
}
