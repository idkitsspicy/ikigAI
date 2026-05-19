"use client";

import { useState } from "react";

import RoadmapView from "./RoadmapView";
import {


  doc,

  setDoc

} from "firebase/firestore";

import {

  auth,

  db

} from "@/lib/firebase";


export default function RoleDetail({

  role,
  onboardingData

}: {

  role: any;
  onboardingData:any;
}) {

  const [loading, setLoading] =
    useState(false);

  const [roadmap, setRoadmap] =
    useState("");

  const saveUserPath =
  async (
    roadmapData: string
  ) => {

    const user =
      auth.currentUser;



    if (!user) return;



    try {

      await setDoc(

        doc(
          db,
          "users",
          user.uid
        ),

        {

          onboardingData,

          selectedRole: role,

          roadmap: roadmapData,

          updatedAt:
            new Date()
        }
      );

    } catch (error) {

      console.error(error);
    }
};

  const generateRoadmap =
    async () => {

      setLoading(true);



      try {

        const response =
          await fetch(

            "http://127.0.0.1:8000/generate-roadmap",

            {

              method: "POST",

              headers: {

                "Content-Type":
                  "application/json"
              },

              body: JSON.stringify({

                role: role.title,

                onboardingData: onboardingData
              })
            }
          );



        const data =
          await response.json();
        console.log(data)


        setRoadmap(

  data.roadmap ||

  data ||

  "No roadmap generated."
);
        await saveUserPath(
  data.roadmap
);

      } catch (error) {

        console.error(error);
      }



      setLoading(false);
    };



  if (roadmap) {

    return (

      <RoadmapView
        roadmap={roadmap}
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
        max-w-5xl
        mx-auto
      ">

        <div className="
          bg-white
          border-4
          border-black
          shadow-[10px_10px_0px_#000]
          p-10
        ">

          {/* TITLE */}

          <h1

            style={{
              fontFamily:
                "Times New Roman"
            }}

            className="
              text-6xl
              italic
              font-normal
              leading-tight
              mb-8
            "
          >

            {role.title}

          </h1>



          {/* DESCRIPTION */}

          <p className="
            text-xl
            leading-relaxed
            mb-10
          ">

            {role.why}

          </p>



          {/* IDEAL FOR */}

          <div className="
            space-y-4
            mb-12
          ">

            {role.idealFor.map(
              (
                item: string,
                index: number
              ) => (

                <div

                  key={index}

                  className="
                    bg-[#FFF7E8]
                    border-2
                    border-black
                    p-4
                    font-medium
                  "
                >

                  {item}

                </div>

              )
            )}

          </div>



          {/* BUTTONS */}

          <div className="
            flex
            gap-5
            flex-wrap
          ">

            <button

              onClick={
                generateRoadmap
              }

              disabled={loading}

              className="
                bg-pink-300
                border-4
                border-black
                shadow-[5px_5px_0px_#000]
                px-6
                py-4
                font-black
                text-lg
                disabled:opacity-50
              "
            >

              {loading
                ? "Building your ladder..."
                : "Generate RoadMap →"}

            </button>

          </div>

        </div>

      </div>

    </main>
  );
}