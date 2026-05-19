"use client";

import { motion } from "framer-motion";



export default function RoleCard({

  role,

  onSelect

}: {

  role: any;

  onSelect: (role: any) => void;
}) {

  return (

    <motion.div

      whileHover={{
        x: 4,
        y: 4
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
        text-4xl
        font-black
        mb-5
      ">

        {role.title}

      </h2>



      <p className="
        text-lg
        leading-relaxed
        font-medium
        mb-7
      ">

        {role.why}

      </p>



      <div className="
        space-y-3
        mb-8
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
                p-3
                font-medium
              "
            >

              {item}

            </div>

          )
        )}

      </div>



      <button

        onClick={() =>
          onSelect(role)
        }

        className="
          bg-pink-300
          border-4
          border-black
          shadow-[5px_5px_0px_#000]
          px-5
          py-3
          font-black
        "
      >

        Explore Path →

      </button>

    </motion.div>
  );
}
