import { motion } from "framer-motion";
import { ExperienceIcon } from "../../components/ExperienceIcon";
import { Layout } from "../../components/Layout";

function about() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={"content"}
        className="mt-10"
      >
        <p>
          🎓 I'm currently studying Computer Science at the{" "}
          <a
            href="https://www.southampton.ac.uk/"
            className="font-bold text-blue-200"
          >
            University of Southampton
          </a>
        </p>
        <br />
        <p>Interested in web development</p>
        <br />
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
          <h3 className="pl-2 text-lg font-semibold">Experience in</h3>
        </div>
      </motion.div>
      <div className="flex mt-4">
        <ExperienceIcon type="JavaScript" />
        <ExperienceIcon type="TypeScript" />
        <ExperienceIcon type="Python" />
        <ExperienceIcon type="React" />
        <ExperienceIcon type="Vue" />
        <ExperienceIcon type="HTML" />
        <ExperienceIcon type="CSS" />
        <ExperienceIcon type="MySQL" />
        <ExperienceIcon type="Java" />
      </div>
    </Layout>
  );
}
export default about;