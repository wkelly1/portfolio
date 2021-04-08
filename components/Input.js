import { motion, transform, useAnimation } from "framer-motion";
import { useEffect } from "react";

const maxLength = 512;
const mapRemainingToColor = transform([2, 6], ["#ff008c", "#ccc"]);
const mapRemainingToSpringVelocity = transform([0, 5], [50, 0]);

function Input(props) {
  const charactersRemaining = maxLength - props.value.length;
  const controls = useAnimation();

  useEffect(() => {
    if (charactersRemaining > 6) return;

    controls.start({
      scale: 1,
      transition: {
        type: "spring",
        velocity: mapRemainingToSpringVelocity(charactersRemaining),
        stiffness: 700,
        damping: 80,
      },
    });
  }, [props.value.length]);

  return (
    <section className={props.className}>
      {(() => {
        if (props.type === "textarea") {
          return (
            <div
              className={`w-full h-40 px-4 py-2 rounded-xl mt-1 flex flex-col items-end focus-within:ring-2 focus:outline-none ${
                props.disabled ? "bg-gray-200" : ""
              } ${props.error ? "border-2 border-red-500" : ""}`}
              style={
                props.error
                  ? {}
                  : { borderColor: "#071030", borderWidth: "2px" }
              }
            >
              <textarea
                id="message"
                className="ml-2 bg-transparent  font-semibold w-full h-full resize-none outline-none flex-grow-1 "
                placeholder="Message"
                value={props.value}
                onChange={(e) => {
                  props.onChange(e.target.value);
                }}
                disabled={props.disabled}
              />
              <motion.span
                animate={controls}
                style={{ color: mapRemainingToColor(charactersRemaining) }}
                className={`text-xs font-semibold text-gray-600 ${
                  props.value.length > props.maxLength ? "text-red-500" : ""
                }`}
              >
                {props.value.length}/{props.maxLength}
              </motion.span>
            </div>
          );
        } else if (props.type === "checkbox") {
          return (
            <label className="checkbox flex items-center">
              <p
                className={`text-xl font-semibold ${
                  props.error ? "text-red-500" : ""
                }`}
              >
                {props.label}
              </p>
              <input type="checkbox" disabled={props.disabled} />
              <span className="checkmark"></span>
            </label>
          );
        } else {
          return (
            <input
              id={props.id}
              placeholder={props.placeholder}
              value={props.value}
              className={`w-full px-4 py-2 rounded-xl mt-1 focus:ring-2 outline-none ${
                props.error ? "border-2 border-red-500" : ""
              }`}
              style={
                props.error
                  ? {}
                  : { borderColor: "#071030", borderWidth: "2px" }
              }
              onChange={(e) => {
                props.onChange(e.target.value);
              }}
              disabled={props.disabled}
            />
          );
        }
      })()}

      {props.error && (
        <div className="flex items-center mt-1 text-red-500">
          <div className="w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="ml-2">{props.errorMsg}</p>
        </div>
      )}
    </section>
  );
}

export default Input;
