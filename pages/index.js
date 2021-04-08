import Project from "../components/Project";
import projects from "../projects.config";
import { motion } from "framer-motion";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={"content"}
        className="my-14"
      >
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
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="pl-2 text-lg font-semibold">Projects</h3>
        </div>
        <div
          className="grid gap-5 mt-5 overflow-visible"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr)",
          }}
        >
          {projects.map((value, index) => (
            <Project
              key={index}
              title={value.title}
              description={value.description}
              languages={value.languages}
              link={value.link}
            />
          ))}
        </div>
      </motion.section>
    </Layout>
  );
}
