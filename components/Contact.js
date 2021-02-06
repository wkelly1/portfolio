import { useState } from "react";
import { Arrow, ArrowLg } from "./Arrow";

function Contact() {
  const [message, setMessage] = useState("");

  return (
    <div
      className="overflow-auto w-screen absolute  md:border-none md:h-auto md:relative md:w-1/2  bg-white p-10"
      style={{
        borderColor: "#071030",
        borderLeftWidth: "30px",
        height: "max(100%, 100vh)",
      }}
    >
      <a className="btn-arrow outline-none cursor-pointer">
        <ArrowLg />
      </a>

      <h2 className="text-5xl font-bold text-main mt-10">Contact</h2>

      <form className="flex flex-col mt-10">
        <section>
          <label for="name" className="text-xl font-semibold">
            Name
          </label>
          <input
            id="name"
            placeholder="Name"
            className="w-full px-4 py-2 rounded-xl mt-1 focus:ring-2 outline-none"
            style={{ borderColor: "#071030", borderWidth: "2px" }}
          />
        </section>

        <section className="mt-4">
          <label for="email" className="text-xl font-semibold ">
            Email
          </label>
          <input
            id="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-xl mt-1 focus:ring-2 outline-none"
            style={{ borderColor: "#071030", borderWidth: "2px" }}
          />
        </section>

        <section className="mt-4">
          <label for="email" className="text-xl font-semibold">
            Email
          </label>
          <div
            className="w-full h-40 px-4 py-2 rounded-xl mt-1 flex flex-col items-end focus-within:ring-2 outline-none"
            style={{ borderColor: "#071030", borderWidth: "2px" }}
          >
            <textarea
              id="message"
              className="ml-2 bg-transparent placeholder-gray-700 font-semibold w-full h-full resize-none outline-none flex-grow-1"
              placeholder="Message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <span
              className={`text-xs font-semibold text-gray-600 ${
                message.length > 512 ? "text-red-500" : ""
              }`}
            >
              {message.length}/512
            </span>
          </div>
        </section>

        <button className="text-white max-w-min text-sm btn-arrow flex bg-blue-600 hover:underline px-4 py-1 rounded mt-5 lg:text-md font-semibold items-center">
          Send
          <Arrow />
        </button>
      </form>
    </div>
  );
}

export default Contact;
