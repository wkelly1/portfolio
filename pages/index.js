import Head from "next/head";
import { useState } from "react";
import { Arrow } from "../components/Arrow";
import Contact from "../components/Contact";
import Project from "../components/Project";
export default function Home() {
  const [contact, setContact] = useState(true);

  return (
    <div className="flex justify-center w-screen h-screen bg-background relative overflow-y-hidden min-h-full">
      <Head>
        <title>Will Kelly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section
        className={`text-white overflow-y-hidden md:overflow-y-auto ${
          contact ? "w-full md:w-1/2 p-10" : " w-2/3"
        }`}
      >
        <h1 className="hidden">Home</h1>
        <h2 className="text-2xl max-w-min lg:text-4xl font-bold mb-1 lg:mb-3 mt-10 lg:mt-28 animation-typing-hide">
          Hello, My name is
        </h2>
        <h2 className="max-w-min text-2xl lg:text-4xl font-bold animation-typing">
          Will Kelly
          {/* <span className="border-r-2 border-white h-full animate-flash"></span> */}
        </h2>

        <button className="text-sm btn-arrow flex bg-blue-600 hover:underline px-4 py-1 rounded mt-5 lg:text-md font-semibold items-center">
          Hire me
          <Arrow />
        </button>

        <section className="my-10">
          <div className="text-blue-300 flex items-center">
            <svg
              width="10"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current"
            >
              <path
                d="M2 2l6 6-6 6"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h3 className="pl-2 text-lg font-semibold">Projects</h3>
          </div>

          <div
            className="grid gap-5 mt-5"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr)",
            }}
          >
            <Project
              title="Valigators"
              description="JavaScript validation library"
              languages={["JavaScript"]}
              link="https://github.com/wkelly1/Valigators"
            />

            <Project
              title="Carousel"
              description="JavaScript carousel library"
              languages={["JavaScript"]}
              link="https://www.npmjs.com/package/carousel-slideshow"
            />

            <Project
              title="Meal Planner"
              description="React meal planning app"
              languages={["JavaScript", "React"]}
              link="https://github.com/wkelly1/Meal-planner"
            />

            <Project
              title="Rowing Elite"
              description="Rowing management app"
              languages={["Python", "Vue"]}
              link="https://www.rowingelite.co.uk"
            />
          </div>
        </section>
      </section>

      <Contact />
    </div>
  );
}
