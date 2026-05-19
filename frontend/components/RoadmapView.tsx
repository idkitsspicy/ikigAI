"use client";

import { motion } from "framer-motion";


import { useState } from "react";

import ProgressDashboard
from "./ProgressDashboard";

export default function RoadmapView({
  roadmap
}: {
  roadmap: string;
}) {
   const [chosenPath, setChosenPath] =
        useState(false);
  const parseRoadmap = (
    text: string
  ) => {

    const result: any = {

      title: "",

      overview: "",

      phases: []
    };



    const titleMatch =
      text.match(
        /TITLE:\s*([\s\S]*?)OVERVIEW:/
      );



    const overviewMatch =
      text.match(
        /OVERVIEW:\s*([\s\S]*?)PHASE:/
      );



    if (titleMatch) {

      result.title =
        titleMatch[1].trim();
    }



    if (overviewMatch) {

      result.overview =
        overviewMatch[1].trim();
    }



    const phaseRegex =
      /PHASE:\s*([\s\S]*?)FOCUS:\s*([\s\S]*?)SKILLS:\s*([\s\S]*?)PROJECTS:\s*([\s\S]*?)ENVIRONMENTS:\s*([\s\S]*?)MINDSET SHIFTS:\s*([\s\S]*?)(?=PHASE:|$)/g;



    let match;



    while (
      (match = phaseRegex.exec(text))
      !== null
    ) {

      result.phases.push({

        title:
          match[1].trim(),

        focus:
          match[2].trim(),

        skills:
          match[3]
            .split("\n")
            .map(item =>
              item.replace("-", "").trim()
            )
            .filter(Boolean),

        projects:
          match[4]
            .split("\n")
            .map(item =>
              item.replace("-", "").trim()
            )
            .filter(Boolean),

        environments:
          match[5]
            .split("\n")
            .map(item =>
              item.replace("-", "").trim()
            )
            .filter(Boolean),

        mindset:
          match[6]
            .split("\n")
            .map(item =>
              item.replace("-", "").trim()
            )
            .filter(Boolean)
      });
    }

    

    return result;
  };



  const parsed =
    parseRoadmap(roadmap);
    if (chosenPath) {

  return (

    <ProgressDashboard
      roadmap={parsed}
    />

  );
}
  if (!parsed.phases.length) {

  return (

    <main className="
      min-h-screen
      bg-[#FFF7E8]
      p-10
    ">

      <div className="
        max-w-4xl
        mx-auto
        bg-white
        border-4
        border-black
        p-8
      ">

        <pre className="
          whitespace-pre-wrap
        ">

          {roadmap}

        </pre>

      </div>

    </main>
  );
}



  return (

    <main className="
      min-h-screen
      bg-[#FFF7E8]
      text-black
      p-8
    ">

      <div className="
        max-w-7xl
        mx-auto
      ">

        {/* HERO */}

        <div className="mb-16">

          <div className="
            inline-block
            bg-pink-300
            border-4
            border-black
            shadow-[5px_5px_0px_#000]
            px-4
            py-2
            mb-8
          ">

            <p className="
              font-black
              uppercase
            ">

              Execution Blueprint
            </p>

          </div>



          <h1

            style={{
              fontFamily:
                "Times New Roman"
            }}

            className="
              text-6xl
              md:text-8xl
              italic
              font-normal
              leading-tight
              mb-8
            "
          >

            {parsed.title}

          </h1>



          <p className="
            text-2xl
            leading-relaxed
            max-w-4xl
          ">

            {parsed.overview}

          </p>

        </div>



        {/* PHASES */}

        <div className="
          space-y-12
        ">

          {parsed.phases.map(
            (
              phase: any,
              index: number
            ) => (

              <motion.div

                key={index}

                initial={{
                  opacity: 0,
                  y: 20
                }}

                animate={{
                  opacity: 1,
                  y: 0
                }}

                className="
                  bg-white
                  border-4
                  border-black
                  shadow-[10px_10px_0px_#000]
                  p-8
                "
              >

                {/* PHASE TITLE */}

                <div className="
                  flex
                  items-center
                  justify-between
                  mb-8
                ">

                  <div>

                    <p className="
                      text-sm
                      uppercase
                      font-black
                      mb-2
                    ">

                      Phase {index + 1}

                    </p>



                    <h2 className="
                      text-5xl
                      font-black
                    ">

                      {phase.title}

                    </h2>

                  </div>

                </div>



                {/* FOCUS */}

                <div className="
                  mb-10
                ">

                  <h3 className="
                    text-xl
                    font-black
                    mb-3
                  ">

                    Focus

                  </h3>



                  <p className="
                    text-lg
                    leading-relaxed
                  ">

                    {phase.focus}

                  </p>

                </div>



                {/* GRID */}

                <div className="
                  grid
                  md:grid-cols-2
                  gap-8
                ">

                  {/* SKILLS */}

                  <SectionCard
                    title="Skills"
                    items={phase.skills}
                  />



                  {/* PROJECTS */}

                  <SectionCard
                    title="Projects"
                    items={phase.projects}
                  />



                  {/* ENVIRONMENTS */}

                  <SectionCard
                    title="Environments"
                    items={phase.environments}
                  />



                  {/* MINDSET */}

                  <SectionCard
                    title="Mindset Shifts"
                    items={phase.mindset}
                  />

                </div>

              </motion.div>

            )
          )}

        </div>
        <div className="
  mt-20
  flex
  justify-center
">

  <button

  onClick={() =>
    setChosenPath(true)
  }
    className="
      bg-pink-300
      border-4
      border-black
      shadow-[8px_8px_0px_#000]
      px-8
      py-5
      text-2xl
      font-black
    "
  >

    Choose This Path →

  </button>


</div>
      </div>

    </main>
  );
}



function SectionCard({

  title,

  items

}: {

  title: string;

  items: string[];
}) {

  return (

    <div className="
      border-4
      border-black
      p-5
      bg-[#FFF7E8]
    ">

      <h3 className="
        text-2xl
        font-black
        mb-5
      ">

        {title}

      </h3>



      <div className="
        space-y-3
      ">

        {items.map(
          (
            item,
            index
          ) => (

            <div

              key={index}

              className="
                bg-white
                border-2
                border-black
                p-3
              "
            >

              {item}

            </div>

          )
        )}

      </div>

    </div>

  );
}
