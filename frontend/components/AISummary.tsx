"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import RoleCard from "./RoleCard";

import RoleDetail from "./RoleDetail";

export default function AISummary({
  onboardingData
}: {
  onboardingData: any;
}) {

  const [loading, setLoading] =
    useState(true);

  const [sections, setSections] =
    useState<any>({});
  const [selectedRole, setSelectedRole] =
  useState<any>(null);
  const [careerRoles, setCareerRoles] =
  useState<any[]>([]);


  useEffect(() => {

    const generateReport = async () => {

      try {

        const response = await fetch(

          "http://127.0.0.1:8000/synthesize",

          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body: JSON.stringify(
              onboardingData
            )
          }
        );



        const data =
          await response.json();
        console.log(data.report);



        const parsed =
          parseSections(data.report);
        const parsedRoles =
  parseCareerRoles(data.report);

setCareerRoles(parsedRoles);


        setSections(parsed);

      } catch (error) {

        console.error(error);
      }



      setLoading(false);
    };



    generateReport();

  }, []);




  const parseSections = (text: string) => {

  const result: any = {};



  const regex =
    /(IDENTITY CORE|ENERGY DRIVERS|HIDDEN TENSIONS|BURNOUT RISKS|IDEAL ENVIRONMENTS|CAREER PATHS|AVOID|GROWTH ROADMAP):([\s\S]*?)(?=(IDENTITY CORE|ENERGY DRIVERS|HIDDEN TENSIONS|BURNOUT RISKS|IDEAL ENVIRONMENTS|CAREER PATHS|AVOID|GROWTH ROADMAP):|$)/g;



  let match;



  while ((match = regex.exec(text)) !== null) {

    const title = match[1];



    const content = match[2]
      .trim()
      .split("\n")
      .map(line =>
        line.replace(/^[-•]\s*/, "").trim()
      )
      .filter(Boolean);



    result[title] = content;
  }



  return result;
};



  const getRoadmapLink = (
    career: string
  ) => {

    return `https://roadmap.sh/${career
      .toLowerCase()
      .replaceAll("/", "")
      .replaceAll(" ", "-")}`;
  };
  const parseCareerRoles = (
  text: string
) => {

  const roles = [];



  const roleRegex =
    /ROLE:\s*(.*?)\s*WHY IT FITS:\s*([\s\S]*?)\s*IDEAL FOR:\s*([\s\S]*?)(?=ROLE:|$)/g;



  let match;



  while (
    (match = roleRegex.exec(text)) !== null
  ) {

    const title =
      match[1].trim();



    const why =
      match[2]
        .trim()
        .replaceAll("\n", " ");



    const idealFor =
      match[3]

        .split("\n")

        .map(line =>
          line.replace("-", "").trim()
        )

        .filter(Boolean);



    roles.push({

      title,

      why,

      idealFor
    });
  }



  return roles;
};


  if (loading) {

    return (

      <main className="
        min-h-screen
        bg-[#FFF7E8]
        flex
        items-center
        justify-center
      ">

        <h1 className="
          text-5xl
          font-black
        ">

          Synthesizing your identity...

        </h1>

      </main>
    );
  }
  if (selectedRole) {

  return (

    <RoleDetail

  role={selectedRole}

  onboardingData={
    onboardingData
  }
/>

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
            bg-yellow-300
            border-4
            border-black
            shadow-[6px_6px_0px_#000]
            px-4
            py-2
            mb-8
          ">

            <p className="
              font-black
              uppercase
            ">

              Identity Synthesis
            </p>

          </div>



          <h1 className="
            text-6xl
            md:text-8xl
            font-black
            leading-none
            mb-6
          ">

            Your career
            <br />

            operating system.

          </h1>

        </div>



        {/* CARDS */}

        <div className="
          grid
          md:grid-cols-2
          gap-8
        ">

          {Object.entries(sections).map(

            ([title, content]: any) => (

              <motion.div

                key={title}

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
                  shadow-[8px_8px_0px_#000]
                  p-7
                "
              >

                <h2 className="
                  text-3xl
                  font-black
                  mb-6
                ">

                  {title}

                </h2>



                <div className="
  space-y-4
">

  {title === "CAREER PATHS" ? (

    <div className="
      space-y-6
    ">

      {careerRoles.map(
        (
          role,
          index
        ) => (

          <RoleCard

            key={index}

            role={role}

            onSelect={
              setSelectedRole
            }
          />

        )
      )}

    </div>

  ) : (

    <div className="
      space-y-4
    ">

      {content.map(
        (
          item: string,
          index: number
        ) => (

          <div

            key={index}

            className="
              border-2
              border-black
              p-4
              bg-[#FFF7E8]
            "
          >

            <p className="
              leading-relaxed
              font-medium
            ">

              {item}

            </p>

          </div>

        )
      )}

    </div>

  )}

</div>

              </motion.div>

            )
          )}

        </div>

      </div>

    </main>
  );
}
