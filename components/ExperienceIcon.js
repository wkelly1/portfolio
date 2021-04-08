import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function ExperienceIcon({ type }) {
  const languages = {
    JavaScript: "/icons/JavaScript.svg",
    Python: "/icons/Python.svg",
    React: "/icons/React.svg",
    Vue: "/icons/Vue.svg",
    TypeScript: "/icons/TypeScript.svg",
    HTML: "/icons/HTML.svg",
    CSS: "/icons/CSS.svg",
    MySQL: "/icons/MySQL.svg",
    Java: "/icons/Java.svg",
  };

  const [tooltip, setTooltip] = useState(false);

  return (
    <motion.div
      className="m-1 relative"
      onHoverStart={() => setTooltip(true)}
      onHoverEnd={() => setTooltip(false)}
    >
      <Image src={languages[type]} alt={type} width={35} height={35} />
      <AnimatePresence>
        {tooltip && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className="absolute left-1/2 transform -translate-x-1/2 rounded-full px-1 bg-blue-500 text-xs font-bold mt-1"
          >
            <p className="">{type}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
