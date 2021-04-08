import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Arrow, ArrowLg } from "./Arrow";
import Input from "./Input";
import Loading from "./Loading";

import Valigator, { minMaxLength } from "valigators";
import { AnimateSharedLayout, motion } from "framer-motion";
import Image from "next/image";

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

function NeedWebsite(props) {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCV] = useState(false);

  const [messageError, setMessageError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [messageType, setMessageType] = useState("success");
  const [loading, setLoading] = useState(false);

  function submit(e) {
    e.preventDefault();
    setLoading(true);
    setNameError(false);
    setEmailError(false);
    setMessageError(false);
    console.log(name);
    const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let valigator = new Valigator();
    let value7 = 1;
    let value8 = 1;
    let value9 = 1;
    let shape = {
      email: {
        type: "email",

        onError: () => {
          setEmailError(true);
          console.log(1);
        },
      },
      name: {
        type: "text",
        validators: [minMaxLength(1, 100)],
        onError: () => {
          setNameError(true);
          console.log(2);
        },
      },
      message: {
        type: "text",
        validators: [minMaxLength(1, 512)],
        onError: () => {
          setMessageError(true);
          console.log(3);
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
    console.log(data);
    console.log(valigator.validate(data, shape));
    console.log(value7, value8, value9);
    // if (valigator.validate(data, shape)) {
    //   setMessageText("Message has been sent");
    //   setMessageType("success");
    //   setShowMessage(true);
    // } else {
    //   setMessageText("Something went wrong");
    //   setMessageType("error");
    //   setShowMessage(true);
    // }
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

      <h2 className="text-5xl font-bold text-main mt-10">Need a website?</h2>

      <form className="flex flex-col mt-10" onSubmit={submit}>
        <AnimateSharedLayout>
          {showMessage && (
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
                show={showMessage}
                hide={() => setShowMessage(false)}
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
            <div className="flex flex-col items-center">
              <div
                className="flex focus-within:ring-2 focus:outline-none  rounded-xl w-2/3 "
                style={{ borderColor: "#071030", borderWidth: "2px" }}
              >
                <div className="flex-grow flex flex-col px-2 py-3">
                  <div>
                    <Input
                      type="checkbox"
                      value={"hi"}
                      label="Single Page"
                    ></Input>
                  </div>
                  <p className="mt-1 font-semibold">
                    A single page website with no additional functionality.{" "}
                  </p>
                </div>
                <div className="w-28 flex-shrink-0 bg-gray-200 rounded-r-xl flex items-end justify-center">
                  <Image
                    src={"/icons/MultiPage.svg"}
                    alt="Functionality"
                    width={73}
                    height={71}
                    className="-mb-1"
                  />
                </div>
              </div>

              <div
                className="flex focus-within:ring-2 focus:outline-none  rounded-xl mt-3  w-2/3 "
                style={{ borderColor: "#071030", borderWidth: "2px" }}
              >
                <div className="flex-grow flex flex-col px-2 py-3">
                  <div>
                    <Input
                      type="checkbox"
                      value={"hi"}
                      label="Multi Page"
                    ></Input>
                  </div>
                  <p className="mt-1 font-semibold">
                    A website with multiple different pages.
                  </p>
                </div>
                <div className="w-28 flex-shrink-0 bg-gray-200 rounded-r-xl flex items-end justify-center">
                  <Image
                    src={"/icons/MultiPage.svg"}
                    alt="Functionality"
                    width={73}
                    height={71}
                    className="-mb-1"
                  />
                </div>
              </div>

              <div
                className="flex focus-within:ring-2 focus:outline-none  rounded-xl mt-3  mb-10 w-2/3 "
                style={{ borderColor: "#071030", borderWidth: "2px" }}
              >
                <div className="flex-grow flex flex-col px-2 py-3">
                  <div>
                    <Input
                      type="checkbox"
                      value={"hi"}
                      label="Functionality"
                    ></Input>
                  </div>
                  <p className="mt-1 font-semibold">
                    A website that has some additional functionality. Login,
                    data upload etc.
                  </p>
                </div>
                <div className="w-28 flex-shrink-0 bg-gray-200 rounded-r-xl flex items-end justify-center">
                  <Image
                    src={"/icons/MultiPage.svg"}
                    alt="Functionality"
                    width={73}
                    height={71}
                    className="-mb-1"
                  />
                </div>
              </div>
            </div>
            <Input
              type="checkbox"
              label="Do you already have a design?"
              disabled={loading}
              value={cv}
              onChange={setCV}
            />

            <Input
              id="name"
              placeholder="Name"
              label="Name"
              className="mt-3"
              value={name}
              onChange={setName}
              error={nameError}
              errorMsg={"Test"}
              disabled={loading}
            />

            <Input
              id="email"
              placeholder="Email"
              label="Email"
              value={email}
              onChange={setEmail}
              error={emailError}
              errorMsg={"Test"}
              className="mt-3"
              disabled={loading}
            />

            <Input
              id="details"
              placeholder="Details"
              label="Details"
              value={message}
              onChange={setMessage}
              error={messageError}
              errorMsg={"Test"}
              type="textarea"
              maxLength={512}
              className="mt-3"
              disabled={loading}
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

export default NeedWebsite;
