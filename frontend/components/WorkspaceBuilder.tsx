"use client";

import { useState } from "react";

import { motion } from "framer-motion";



const objects = [

  {
    id: 1,
    name: "City View",
    emoji: "🌆",
    traits: ["variety"]
  },

  {
    id: 2,
    name: "Bean Bag",
    emoji: "🛋️",
    traits: ["autonomy"]
  },

  {
    id: 3,
    name: "Luxury Desk",
    emoji: "💻",
    traits: ["pay"]
  },

  {
    id: 4,
    name: "Planner",
    emoji: "📒",
    traits: ["stability"]
  },

  {
    id: 5,
    name: "Plants",
    emoji: "🪴",
    traits: ["alignment"]
  },

  {
    id: 6,
    name: "Whiteboard",
    emoji: "🧠",
    traits: ["autonomy", "variety"]
  },

  {
    id: 7,
    name: "Headphones",
    emoji: "🎧",
    traits: ["autonomy"]
  },

  {
    id: 8,
    name: "Team Wall",
    emoji: "👥",
    traits: ["alignment", "variety"]
  }
];



export default function WorkspaceBuilder() {

  const [selectedObjects, setSelectedObjects] =
    useState<any[]>([]);



  const handleSelect = (item: any) => {

    const alreadyExists = selectedObjects.find(
      (obj) => obj.id === item.id
    );

    if (alreadyExists) return;



    if (selectedObjects.length >= 5) return;



    setSelectedObjects([
      ...selectedObjects,
      item
    ]);
  };



  return (

    <main className="
      min-h-screen
      bg-[#FFF7E8]
      p-6
      text-black
    ">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}

        <div className="mb-10">

          <div className="
            inline-block
            bg-yellow-300
            border-4
            border-black
            px-4
            py-2
            shadow-[5px_5px_0px_#000]
            mb-5
          ">

            <p className="font-black uppercase">
              Build Your World
            </p>

          </div>



          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">

            Build a workspace
            <br />
            where you'd love
            <br />
            becoming yourself.

          </h1>



          <p className="text-xl font-medium">

            Choose up to 5 objects instinctively.

          </p>

        </div>



        {/* WORKSPACE */}

        <motion.div

          layout

          className="
            min-h-[350px]
            bg-white
            border-4
            border-black
            shadow-[10px_10px_0px_#000]
            p-6
            mb-10
            flex
            flex-wrap
            gap-5
            items-start
          "
        >

          {selectedObjects.length === 0 && (

            <div className="
              w-full
              h-full
              flex
              items-center
              justify-center
              text-2xl
              font-black
              opacity-40
            ">

              Your workspace is empty.

            </div>
          )}



          {selectedObjects.map((item) => (

            <motion.div

              key={item.id}

              layout

              initial={{
                scale: 0.7,
                rotate: -8,
                opacity: 0
              }}

              animate={{
                scale: 1,
                rotate: 0,
                opacity: 1
              }}

              className="
                bg-pink-300
                border-4
                border-black
                shadow-[5px_5px_0px_#000]
                p-5
                w-[140px]
                h-[140px]
                flex
                flex-col
                items-center
                justify-center
              "
            >

              <div className="text-5xl mb-3">
                {item.emoji}
              </div>

              <p className="font-black text-center">
                {item.name}
              </p>

            </motion.div>

          ))}

        </motion.div>



        {/* OBJECTS */}

        <div className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-5
        ">

          {objects.map((item) => (

            <motion.button

              key={item.id}

              whileHover={{
                x: 4,
                y: 4
              }}

              whileTap={{
                scale: 0.96
              }}

              onClick={() => handleSelect(item)}

              className="
                bg-blue-300
                border-4
                border-black
                shadow-[6px_6px_0px_#000]
                p-6
                flex
                flex-col
                items-center
                justify-center
                h-[170px]
              "
            >

              <div className="text-5xl mb-4">
                {item.emoji}
              </div>

              <p className="font-black text-lg">
                {item.name}
              </p>

            </motion.button>

          ))}

        </div>



        {/* CONTINUE BUTTON */}

        <div className="mt-12 flex justify-end">

          <motion.button

            whileHover={{
              x: 4,
              y: 4
            }}

            whileTap={{
              scale: 0.96
            }}

            className="
              bg-green-300
              border-4
              border-black
              shadow-[8px_8px_0px_#000]
              px-8
              py-5
              text-2xl
              font-black
            "
          >

            Continue →

          </motion.button>

        </div>

      </div>

    </main>
  );
}