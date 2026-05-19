"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { environments } from "@/data/environments";



export default function EnvironmentStage({
  onContinue
}: {
  onContinue: (selected: string[]) => void;
}) {

  const [selected, setSelected] =
    useState<string[]>([]);



  const toggleEnvironment = (
    title: string
  ) => {

    if (selected.includes(title)) {

      setSelected(
        selected.filter(item => item !== title)
      );

      return;
    }



    if (selected.length >= 2) return;



    setSelected([
      ...selected,
      title
    ]);
  };



  return (

    <main className="
      min-h-screen
      bg-[#FFF7E8]
      text-black
      p-6
    ">

      <div className="
        max-w-7xl
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

              Work Environments
            </p>

          </div>



          <h1 className="
            text-6xl
            md:text-8xl
            font-black
            leading-none
            mb-8
          ">

            Some spaces
            <br />

            quietly change
            <br />

            who we become.

          </h1>



          <p className="
            text-xl
            max-w-3xl
            font-medium
          ">

            Drift toward the environments
            that feel emotionally sustainable.

          </p>

        </div>



        {/* ENVIRONMENT GRID */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
        ">

          {environments.map((env) => {

            const isSelected =
              selected.includes(env.title);



            return (

              <motion.button

                key={env.id}

                whileHover={{
                  scale: 1.02,
                  x: 4,
                  y: 4
                }}

                whileTap={{
                  scale: 0.98
                }}

                onClick={() =>
                  toggleEnvironment(env.title)
                }

                className={`
                  ${env.color}

                  border-4
                  border-black

                  shadow-[8px_8px_0px_#000]

                  p-8
                  min-h-[260px]

                  text-left

                  transition-all

                  ${
                    isSelected
                      ? "scale-[1.03]"
                      : ""
                  }

                  ${
                    selected.length >= 2 &&
                    !isSelected
                      ? "opacity-30"
                      : ""
                  }
                `}
              >

                <div className="
                  h-full
                  flex
                  flex-col
                  justify-between
                ">

                  <div>

                    <h2 className="
                      text-4xl
                      font-black
                      mb-5
                    ">

                      {env.title}

                    </h2>



                    <p className="
                      text-lg
                      font-medium
                      leading-relaxed
                    ">

                      {env.description}

                    </p>

                  </div>



                  {isSelected && (

                    <div className="
                      mt-8
                      text-sm
                      font-black
                    ">

                      ENTERED

                    </div>

                  )}

                </div>

              </motion.button>

            );
          })}

        </div>



        {/* CONTINUE */}

        <div className="
          flex
          justify-end
          mt-12
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
