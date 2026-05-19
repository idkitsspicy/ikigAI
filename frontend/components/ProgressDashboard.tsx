"use client";



export default function ProgressDashboard({

  roadmap

}: {

  roadmap: any;
}) {

  const phases =
    roadmap.phases || [];



  return (

    <main className="
      min-h-screen
      bg-[#FFF7E8]
      text-black
      p-8
    ">

      <div className="
        max-w-6xl
        mx-auto
      ">

        {/* HERO */}

        <div className="mb-16">

          <div className="
            inline-block
            bg-green-300
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

              Active Career Path
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
              mb-6
            "
          >

            {roadmap.title}

          </h1>



          <p className="
            text-2xl
            max-w-4xl
            leading-relaxed
          ">

            You are no longer exploring.
            You are building.

          </p>

        </div>



        {/* PHASES */}

        <div className="
          space-y-10
        ">

          {phases.map(
            (
              phase: any,
              index: number
            ) => (

              <div

                key={index}

                className="
                  bg-white
                  border-4
                  border-black
                  shadow-[8px_8px_0px_#000]
                  p-8
                "
              >

                <div className="
                  flex
                  items-center
                  justify-between
                  mb-8
                ">

                  <div>

                    <p className="
                      uppercase
                      text-sm
                      font-black
                      mb-2
                    ">

                      Current Phase
                    </p>



                    <h2 className="
                      text-4xl
                      font-black
                    ">

                      {phase.title}

                    </h2>

                  </div>

                </div>



                {/* TASKS */}

                <div className="
                  space-y-5
                ">

                  {phase.projects.map(
                    (
                      project: string,
                      idx: number
                    ) => (

                      <label

                        key={idx}

                        className="
                          flex
                          items-start
                          gap-4
                          border-2
                          border-black
                          p-5
                          bg-[#FFF7E8]
                          cursor-pointer
                        "
                      >

                        <input
                          type="checkbox"
                          className="
                            mt-1
                            w-6
                            h-6
                          "
                        />



                        <div>

                          <p className="
                            font-black
                            mb-1
                          ">

                            Milestone

                          </p>



                          <p className="
                            text-lg
                            leading-relaxed
                          ">

                            {project}

                          </p>

                        </div>

                      </label>

                    )
                  )}

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </main>
  );
}
