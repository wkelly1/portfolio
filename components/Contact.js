import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Arrow, ArrowLg } from "./Arrow";
import Input from "./Input";
import Loading from "./Loading";

import Valigator, { minMaxLength, containsRegex } from "valigators";
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  useAnimation,
} from "framer-motion";

function Message(props) {
  return (
    <section
      className={`flex  p-2 mb-5 justify-between  rounded-md font-semibold items-center ${
        props.error ? "bg-red-300 text-red-900" : ""
      } ${props.success ? "bg-green-300 text-green-900" : ""}`}
    >
      <div className="w-6">
        {props.error && (
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
        )}
        {props.success && (
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
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
      </div>
      <p className="text-lg">{props.text}</p>
      <span className="w-6 cursor-pointer" onClick={props.hide}>
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    </section>
  );
}

function Contact(props) {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCV] = useState(false);

  const [messageError, setMessageError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [messageErrorMsg, setMessageErrorMsg] = useState("");
  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");

  const [showMessageS, setShowMessageS] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [messageType, setMessageType] = useState("success");
  const [loading, setLoading] = useState(false);

  // const controls = useAnimation();
  // useEffect(() => {
  //   controls.start({
  //     y: -10,
  //     transition: { duration: 2 },
  //   });
  // }, [showMessage]);

  function hideMessage() {
    setShowMessageS(false);
  }

  function showMessage(type, message) {
    hideMessage();
    setMessageText(message);
    setMessageType(type);
    setShowMessageS(true);
  }

  function submit(e) {
    e.preventDefault();
    setLoading(true);
    setNameError(false);
    setEmailError(false);
    setMessageError(false);

    console.log(name);

    let valigator = new Valigator();
    let shape = {
      email: {
        type: "email",

        onError: (e) => {
          setEmailError(true);
          setEmailErrorMsg(e.message);
        },
      },
      name: {
        type: "text",
        validators: [minMaxLength(1, 100)],
        onError: (e) => {
          setNameError(true);
          setNameErrorMsg(e.message);
        },
      },
      message: {
        type: "text",
        validators: [minMaxLength(1, 512)],
        onError: (e) => {
          setMessageError(true);
          setMessageErrorMsg(e.message);
        },
      },
      cv: { type: "boolean" },
    };

    let data = {
      name,
      email,
      message,
      cv,
    };

    let valid = valigator.validate(data, shape);
    if (valid) {
      fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          data,
        }),
      })
        .then(async (response) => {
          return { res: await response.json(), code: response.status };
        })
        .then(({ code }) => {
          if (code === 200) {
            showMessage("success", "Message has been sent");
          } else {
            showMessage("error", "Something went wrong");
          }
        })
        .catch((error) => {
          showMessage("error", "Something went wrong");
        });
    }

    setLoading(false);
  }

  return (
    <div
      className="overflow-auto w-full absolute  md:border-none md:h-auto md:relative  bg-white p-10"
      style={{
        borderColor: "#071030",
        borderLeftWidth: "30px",
        height: "100vh",
      }}
    >
      <a
        onClick={props.close}
        className="btn-arrow outline-none cursor-pointer"
      >
        <ArrowLg />
      </a>

      <h2 className="text-5xl font-bold text-main mt-10">Contact</h2>

      <form className="flex flex-col mt-10" onSubmit={submit}>
        <AnimateSharedLayout>
          {showMessageS && (
            <motion.span
              layout
              positionalTransition
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <Message
                success={messageType === "success"}
                error={messageType === "error"}
                text={messageText}
                show={showMessageS}
                hide={() => setShowMessageS(false)}
              />
            </motion.span>
          )}
          <motion.div
            layout
            // animate={
            //   showMessage
            //     ? { y: 10, transition: { duration: 0.8 } }
            //     : { y: 0, transition: { duration: 0.8 } }
            // }
          >
            <Input
              id="name"
              placeholder="Name"
              label="Name"
              value={name}
              onChange={setName}
              error={nameError}
              errorMsg={nameErrorMsg}
              disabled={loading}
            />

            <Input
              id="email"
              placeholder="Email"
              label="Email"
              value={email}
              onChange={setEmail}
              error={emailError}
              errorMsg={emailErrorMsg}
              className="mt-3"
              disabled={loading}
            />

            <Input
              id="message"
              placeholder="Message"
              label="Message"
              value={message}
              onChange={setMessage}
              error={messageError}
              errorMsg={messageErrorMsg}
              type="textarea"
              maxLength={512}
              className="mt-3"
              disabled={loading}
            />

            <Input
              type="checkbox"
              label="Request CV"
              className="mt-3"
              disabled={loading}
              value=""
              checked={cv}
              onChange={setCV}
            />

            <button className="text-white max-w-min text-sm btn-arrow flex bg-blue-600 hover:underline px-4 py-1 rounded mt-5 lg:text-md font-semibold items-center">
              Send
              {loading ? (
                <div className="ml-2">
                  <Loading />
                </div>
              ) : (
                <Arrow />
              )}
            </button>
          </motion.div>
        </AnimateSharedLayout>
      </form>
    </div>
  );
}

export default Contact;
