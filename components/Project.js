import { motion } from "framer-motion";
import Image from "next/image";
import { Arrow } from "./Arrow";

function Project(props) {
  const languages = {
    JavaScript: "/icons/JavaScript.svg",
    Python: "/icons/Python.svg",
    React: "/icons/React.svg",
    Vue: "/icons/Vue.svg",
    TypeScript: "/icons/TypeScript.svg",
  };
  return (
    <motion.a
      whileHover={{
        boxShadow: "-8px 8px 8px 5px #5eead4",
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 0.9 }}
      href={props.link}
      className="flex flex-col justify-between border-2 border-white rounded-lg p-2 btn-arrow "
    >
      <div>
        <h3 className="text-xl underline font-bold mb-2">{props.title}</h3>
        <p className="text-md font-bold text-gray-300">{props.description}</p>
      </div>
      <div className="flex justify-between mt-5">
        <div className="grid gap-2 grid-flow-col auto-cols-fr">
          {props.languages &&
            props.languages.map((language, index) => (
              <Image
                key={index}
                src={languages[language]}
                alt={language}
                width={20}
                height={20}
              />
            ))}
        </div>
        <Arrow />
      </div>
    </motion.a>
  );
}

export default Project;
