"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { systemBlocks } from "../data/systemBlocks";



export default function SystemCanvas() {

  const [placedSystems, setPlacedSystems] =
    useState<any[]>([]);



  const handleAddSystem = (system: any) => {

    const exists = placedSystems.find(
      (item) => item.id === system.id
    );

    if (exists) return;



    if (placedSystems.length >= 4) return;



    setPlacedSystems([
      ...placedSystems,
      system
    ]);
  };



  return (

    <main className="
      min-h-screen
      bg-[#FFF7E8]
      text-black
      p-6
    ">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="mb-10">

          <div className="
            inline-block
            border-4
            border-black
            bg-yellow-300
            px-4
            py-2
            shadow-[5px_5px_0px_#000]
            mb-5
          ">

            <p className="font-black uppercase">
              Build Your Work System
            </p>

          </div>



          <h1 className="
            text-5xl
            md:text-7xl
            font-black
            leading-none
            mb-5
          ">

            Design the system
            <br />
            you can survive inside.

          </h1>



          <p className="
            text-xl
            max-w-3xl
            font-medium
          ">

            Every work structure gives something.
            Every work structure takes something away.

          </p>

        </div>



        {/* MAIN LAYOUT */}

        <div className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-8
        ">

          {/* LEFT PANEL */}

          <div className="
            lg:col-span-1
            space-y-5
          ">

            {systemBlocks.map((system) => (

              <motion.button

                key={system.id}

                whileHover={{
                  x: 4,
                  y: 4
                }}

                whileTap={{
                  scale: 0.98
                }}

                onClick={() => handleAddSystem(system)}

                className={`
                  ${system.color}
                  border-4
                  border-black
                  shadow-[6px_6px_0px_#000]
                  p-5
                  text-left
                  w-full
                  transition-all
                `}
              >

                <h2 className="
                  text-2xl
                  font-black
                  mb-2
                ">

                  {system.title}

                </h2>



                <p className="
                  font-medium
                  mb-5
                ">

                  {system.description}

                </p>



                <div className="
                  flex
                  flex-col
                  gap-1
                  text-sm
                  font-black
                ">

                  <span>{system.gives}</span>

                  <span>{system.costs}</span>

                </div>

              </motion.button>

            ))}

          </div>



          {/* WORKSPACE */}

          <motion.div

            layout

            className="
              lg:col-span-2
              min-h-[700px]
              bg-white
              border-4
              border-black
              shadow-[10px_10px_0px_#000]
              p-6
              relative
              overflow-hidden
            "
          >

            {/* GRID */}

            <div className="
              absolute
              inset-0
              opacity-10
              pointer-events-none
            ">

              <div className="
                grid
                grid-cols-6
                h-full
              ">

                {[...Array(36)].map((_, i) => (

                  <div
                    key={i}
                    className="border border-black"
                  />

                ))}

              </div>

            </div>



            {/* EMPTY STATE */}

            {placedSystems.length === 0 && (

              <div className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                text-center
                p-10
              ">

                <div>

                  <p className="
                    text-4xl
                    font-black
                    mb-4
                  ">

                    Your system is empty.

                  </p>

                  <p className="
                    text-lg
                    font-medium
                    opacity-70
                  ">

                    Start placing structures
                    that shape your future.

                  </p>

                </div>

              </div>

            )}



            {/* PLACED SYSTEMS */}

            <div className="
              grid
              grid-cols-2
              gap-5
              relative
              z-10
            ">

              {placedSystems.map((system) => (

                <motion.div

                  key={system.id}

                  layout

                  initial={{
                    scale: 0.7,
                    opacity: 0,
                    rotate: -4
                  }}

                  animate={{
                    scale: 1,
                    opacity: 1,
                    rotate: 0
                  }}

                  className={`
                    ${system.color}
                    border-4
                    border-black
                    shadow-[8px_8px_0px_#000]
                    p-5
                    min-h-[220px]
                    flex
                    flex-col
                    justify-between
                  `}
                >

                  <div>

                    <h2 className="
                      text-3xl
                      font-black
                      mb-3
                    ">

                      {system.title}

                    </h2>



                    <p className="
                      font-medium
                      mb-6
                    ">

                      {system.description}

                    </p>

                  </div>



                  <div className="
                    flex
                    flex-col
                    gap-2
                    text-sm
                    font-black
                  ">

                    <span>{system.gives}</span>

                    <span>{system.costs}</span>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </main>
  );
}
