"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import {

  skills,

  domains,

  educationLevels,

  growthStyles

} from "@/data/careerData";



export default function CareerIntake({
  onContinue
}: {
  onContinue: (data: any) => void;
}) {

  const [selectedSkills, setSelectedSkills] =
    useState<string[]>([]);

  const [selectedDomains, setSelectedDomains] =
    useState<string[]>([]);

  const [education, setEducation] =
    useState("");

  const [growthStyle, setGrowthStyle] =
    useState("");



  const toggleItem = (
    item: string,
    state: string[],
    setter: any,
    limit = 4
  ) => {

    if (state.includes(item)) {

      setter(
        state.filter(i => i !== item)
      );

      return;
    }



    if (state.length >= limit) return;



    setter([...state, item]);
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
        pt-10
      ">

        {/* HEADER */}

        <div className="mb-14">

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

              Current Reality
            </p>

          </div>



          <h1 className="
            text-6xl
            md:text-8xl
            font-black
            leading-none
            mb-8
          ">

            Build the tools
            <br />

            you already carry.

          </h1>



          <p className="
            text-xl
            font-medium
            max-w-3xl
          ">

            This is not your full potential.
            Just your current terrain.

          </p>

        </div>



        {/* SKILLS */}

        <section className="mb-16">

          <h2 className="
            text-3xl
            font-black
            mb-6
          ">

            Current Toolbox

          </h2>



          <div className="
            flex
            flex-wrap
            gap-4
          ">

            {skills.map((skill) => {

              const active =
                selectedSkills.includes(skill);



              return (

                <motion.button

                  key={skill}

                  whileHover={{
                    x: 3,
                    y: 3
                  }}

                  whileTap={{
                    scale: 0.97
                  }}

                  onClick={() =>
                    toggleItem(
                      skill,
                      selectedSkills,
                      setSelectedSkills
                    )
                  }

                  className={`
                    border-4
                    border-black
                    px-5
                    py-3
                    font-black
                    shadow-[5px_5px_0px_#000]

                    ${
                      active
                        ? "bg-pink-300"
                        : "bg-white"
                    }

                    ${
                      selectedSkills.length >= 4 &&
                      !active
                        ? "opacity-30"
                        : ""
                    }
                  `}
                >

                  {skill}

                </motion.button>

              );
            })}

          </div>

        </section>



        {/* DOMAINS */}

        <section className="mb-16">

          <h2 className="
            text-3xl
            font-black
            mb-6
          ">

            Fields Pulling Your Attention

          </h2>



          <div className="
            flex
            flex-wrap
            gap-4
          ">

            {domains.map((domain) => {

              const active =
                selectedDomains.includes(domain);



              return (

                <motion.button

                  key={domain}

                  whileHover={{
                    x: 3,
                    y: 3
                  }}

                  whileTap={{
                    scale: 0.97
                  }}

                  onClick={() =>
                    toggleItem(
                      domain,
                      selectedDomains,
                      setSelectedDomains
                    )
                  }

                  className={`
                    border-4
                    border-black
                    px-5
                    py-3
                    font-black
                    shadow-[5px_5px_0px_#000]

                    ${
                      active
                        ? "bg-green-300"
                        : "bg-white"
                    }

                    ${
                      selectedDomains.length >= 4 &&
                      !active
                        ? "opacity-30"
                        : ""
                    }
                  `}
                >

                  {domain}

                </motion.button>

              );
            })}

          </div>

        </section>



        {/* EDUCATION */}

        <section className="mb-16">

          <h2 className="
            text-3xl
            font-black
            mb-6
          ">

            Current Phase

          </h2>



          <div className="
            flex
            flex-wrap
            gap-4
          ">

            {educationLevels.map((level) => (

              <button

                key={level}

                onClick={() =>
                  setEducation(level)
                }

                className={`
                  border-4
                  border-black
                  px-5
                  py-3
                  font-black
                  shadow-[5px_5px_0px_#000]

                  ${
                    education === level
                      ? "bg-blue-300"
                      : "bg-white"
                  }
                `}
              >

                {level}

              </button>

            ))}

          </div>

        </section>



        {/* GROWTH STYLE */}

        <section className="mb-20">

          <h2 className="
            text-3xl
            font-black
            mb-6
          ">

            Preferred Growth Style

          </h2>



          <div className="
            grid
            md:grid-cols-2
            gap-5
          ">

            {growthStyles.map((style) => (

              <button

                key={style}

                onClick={() =>
                  setGrowthStyle(style)
                }

                className={`
                  border-4
                  border-black
                  p-6
                  text-left
                  text-xl
                  font-black
                  shadow-[6px_6px_0px_#000]

                  ${
                    growthStyle === style
                      ? "bg-orange-300"
                      : "bg-white"
                  }
                `}
              >

                {style}

              </button>

            ))}

          </div>

        </section>



        {/* CONTINUE */}

        <div className="
          flex
          justify-end
        ">

          <motion.button

            whileHover={{
              x: 4,
              y: 4
            }}

            whileTap={{
              scale: 0.97
            }}

            onClick={() =>
              onContinue({

                skills: selectedSkills,

                domains: selectedDomains,

                education,

                growthStyle
              })
            }

            className="
              bg-pink-300
              border-4
              border-black
              shadow-[8px_8px_0px_#000]
              px-10
              py-5
              text-2xl
              font-black
            "
          >

            Generate Path →

          </motion.button>

        </div>

      </div>

    </main>
  );
}
