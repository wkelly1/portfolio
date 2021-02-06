import Image from "next/image";
import { Arrow } from "./Arrow";

function Project(props) {
  const languages = {
    JavaScript: "/icons/JavaScript.svg",
    Python: "/icons/Python.svg",
    React: "/icons/React.svg",
    Vue: "/icons/Vue.svg",
  };
  return (
    <a
      href={props.link}
      className="project border-2 border-white rounded-lg p-2 btn-arrow"
    >
      <h3 className="text-xl underline font-bold mb-2">{props.title}</h3>
      <p className="text-md font-bold text-gray-300">{props.description}</p>

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
    </a>
  );
}

export default Project;
