"use client";

import { useState } from "react";
import {
  anonymousLogin
} from "@/lib/firebase";
import { AnimatePresence, motion } from "framer-motion";
import EnvironmentStage from "@/components/EnvironmentStage";
import SparkField from "@/components/SparkField";
import AISummary from "@/components/AISummary";
import SystemCanvas from "@/components/SystemCanvas";
import CareerIntake from "@/components/CareerIntake";
import { OnboardingState } from "@/types/onboarding";
import AnchorStage from "@/components/AnchorStage";
import { useEffect } from "react";


export default function Home() {

  const [stage, setStage] =
    useState("landing");

  useEffect(() => {

    anonymousLogin();

  }, []);
  const [onboardingData, setOnboardingData] =
  useState<OnboardingState>(
    {

  sparkSelections: [],

  systems: [],

  sacrifices: [],

  environments: [],

  skills: [],

  domains: [],

  education: "",

  growthStyle: ""
});



  return (

    <main className="
      min-h-screen
      bg-[#FFF7E8]
      text-black
    ">

      <AnimatePresence mode="wait">

        {/* LANDING */}

        {stage === "landing" && (

          <motion.div

            key="landing"

            initial={{
              opacity: 0,
              y: 40
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            exit={{
              opacity: 0,
              y: -40
            }}

            className="
              min-h-screen
              flex
              flex-col
              items-center
              justify-center
              p-8
            "
          >

            <div className="max-w-5xl">

              <div className="
                inline-block
                bg-yellow-300
                border-4
                border-black
                shadow-[6px_6px_0px_#000]
                px-5
                py-2
                mb-8
              ">

                <p className="
                  font-black
                  uppercase
                  px-7
                  py-4
                ">

                  IkigAI
                </p>

              </div>



              <h1

  style={{
    fontFamily: "Times New Roman, serif"
  }}

  className="
    text-6xl
    md:text-8xl
    leading-tight
    mb-10
    font-normal
    italic
  "
>

  Find your Career{" "}

  <span className="
    text-pink-500
  ">

    DNA

  </span>

  <br />

  and unlock your
  <br />

  true potential.

</h1>



              <motion.button

                whileHover={{
                  x: 5,
                  y: 5
                }}

                whileTap={{
                  scale: 0.97
                }}

                onClick={() =>
                  setStage("spark")
                }

                className="
                  bg-pink-300
                  border-4
                  border-black
                  shadow-[8px_8px_0px_#000]
                  px-10
                  py-6
                  text-2xl
                  font-black
                "
              >

                Enter The Field →

              </motion.button>

            </div>

          </motion.div>

        )}



        {/* SPARK FIELD */}

        {stage === "spark" && (

          <motion.div

            key="spark"

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            exit={{ opacity: 0 }}

          >

            <SparkField

              onContinue={(selected) => {

                setOnboardingData({

                  ...onboardingData,

                  sparkSelections: selected
                });

                setStage("system-builder");
              }}

            />

          </motion.div>

        )}



        {/* SYSTEM BUILDER */}

        {stage === "system-builder" && (

          <motion.div

            key="system-builder"

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            exit={{ opacity: 0 }}

          >

            <SystemCanvas

              onContinue={(systems) => {

                setOnboardingData({

                  ...onboardingData,

                  systems
                });

                setStage("anchor");;
              }}

            />

          </motion.div>

        )}



        {/* ANCHOR STAGE */}

{stage === "anchor" && (

  <motion.div

    key="anchor"

    initial={{ opacity: 0 }}

    animate={{ opacity: 1 }}

    exit={{ opacity: 0 }}

  >

    <AnchorStage

      onContinue={(selected) => {

        setOnboardingData({

          ...onboardingData,

          sacrifices: selected
        });

        setStage("environment");
      }}

    />

  </motion.div>

)}
      {/* ENVIRONMENT STAGE */}

{stage === "environment" && (

  <motion.div

    key="environment"

    initial={{ opacity: 0 }}

    animate={{ opacity: 1 }}

    exit={{ opacity: 0 }}

  >

    <EnvironmentStage

      onContinue={(selected) => {

        setOnboardingData({

          ...onboardingData,

          environments: selected
        });

        setStage("career-intake");
      }}

    />

  </motion.div>

)}
{/* CAREER INTAKE */}

{stage === "career-intake" && (

  <motion.div

    key="career-intake"

    initial={{ opacity: 0 }}

    animate={{ opacity: 1 }}

    exit={{ opacity: 0 }}

  >

    <CareerIntake

      onContinue={(careerData) => {

        setOnboardingData({

          ...onboardingData,

          skills: careerData.skills,

          domains: careerData.domains,

          education: careerData.education,

          growthStyle: careerData.growthStyle
        });

        setStage("summary");
      }}

    />

  </motion.div>

)}
{/* AI SUMMARY */}

{stage === "summary" && (

  <AISummary
    onboardingData={onboardingData}
  />

)}


      </AnimatePresence>
      

    </main>
  );
}
