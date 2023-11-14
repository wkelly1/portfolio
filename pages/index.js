import { ValidationError, useForm } from "@formspree/react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useMouse from "@react-hook/mouse-position";

const useVariants = (ref) => {
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;
  if (mouse.clientX !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.clientY !== null) {
    mouseYPosition = mouse.clientY;
  }

  return {
    hide: {
      opacity: 0,
      x: mouseXPosition - 28,
      y: mouseYPosition - 28,
    },
    show: {
      opacity: 1,
      x: mouseXPosition - 28,
      y: mouseYPosition - 28,
    },
  };
};

function LinkMouse({ link, show, parentRef }) {
  const variants = useVariants(parentRef);

  return (
    <motion.div
      variants={variants}
      animate={show}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
      className="fixed top-0 left-0 z-50 flex items-center justify-center bg-white rounded-full opacity-0 pointer-events-none w-14 h-14 "
    >
      <svg
        height="24"
        width="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="-rotate-45"
      >
        <path
          d="M15.418 9.014c2.003.165 3.082 1.534 3.082 3.176 0 1.634-1.071 2.984-3.082 3.15a43.116 43.116 0 0 1-.27 0l-.814.002H13v2a1168.533 1168.533 0 0 0 2.156-.002h.021c.162 0 .337-.002.405-.007 3.043-.251 4.918-2.463 4.918-5.143 0-2.671-1.867-4.917-4.918-5.17a8.055 8.055 0 0 0-.405-.006h-.02l-.821-.002H13v2a982.124 982.124 0 0 1 2.147.001l.203.002c.07 0 .086 0 .068-.001ZM11 15.34l-2.308-.003h-.356c-1.147 0-1.962-.382-2.49-.92-.534-.543-.846-1.321-.846-2.24 0-.92.312-1.697.846-2.241.528-.538 1.343-.919 2.49-.919h.354L11 9.013v-2l-2.313.004h-.351c-1.615 0-2.968.55-3.918 1.518C3.475 9.497 3 10.8 3 12.177c0 1.378.475 2.68 1.418 3.641.95.968 2.303 1.518 3.918 1.518h.352c.466.002 1.34.003 2.312.004v-2Z"
          fill="currentColor"
          fillRule="evenodd"
        />
        <path
          d="M15.5 12.168H8"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
      <div className="absolute top-16 bg-white rounded-xl text-[0.6rem] px-2 py-1 bg-opacity-50 w-max">
        {link}
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [state, handleSubmit] = useForm("mayzlyvy");
  const [show, setShow] = useState("hide");
  const [mouseText, setMouseText] = useState("");

  const ref = useRef(null);

  const animatedText = (event) => {
    let item = document.getElementById("animatedText");
    console.log("ANIMATE");
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let interval = null;
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      item.innerText = item.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return item.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= item.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    // document
    //   .getElementById("animatedText")
    //   .addEventListener("mouseover", function (event) {
    //     console.log("MOUSEOVER");
    //     animatedText(event);
    //   });

    const blob = document.getElementById("blob");

    const mice = document.getElementsByClassName("mouse");

    window.onpointermove = (event) => {
      const { clientX, clientY } = event;

      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );

      // for (const c of mice) {
      //   c.animate(
      //     {
      //       left: `${clientX}px`,
      //       top: `${clientY}px`,
      //     },
      //     { duration: 500, fill: "forwards" }
      //   );
      // }
    };
    animatedText();

    const cards = document.getElementsByClassName("card");
    // console.log(cards);
    for (const card of cards) {
      card.onmousedown = (event) => {
        for (const mouse of mice) {
          mouse.style.scale = 0.9;
        }
      };
      card.onmouseup = (event) => {
        for (const mouse of mice) {
          mouse.style.scale = 1;
        }
      };
      card.onmouseleave = (event) => {
        for (const mouse of mice) {
          mouse.style.scale = 1;
        }
      };
    }
    // for (const card of cards) {
    //   card.onmouseleave = (event) => {
    //     for (const mouse of mice) {
    //       mouse.style.opacity = 0;
    //     }
    //   };
    // }
  }, []);

  return (
    <div
      className="relative w-full h-full min-h-screen pb-56 overflow-x-hidden font-sans bg-background"
      ref={ref}
    >
      <section className="h-[90vh] min-h-[700px] relative">
        <div className="absolute left-[calc(30%-50px)] top-[calc(200px+1.25rem)] bg-main blur-[2.5px] rounded w-4 h-4 -ml-2 -mt-2 z-30"></div>
        <div
          className="absolute top-[200px] left-[30%] "
          onMouseOver={(event) => animatedText(event)}
        >
          <div className="text-[2.5rem] sm:text-[5rem] text-white font-bold leading-tight z-20 relative">
            Hello,
          </div>
          <div className="text-[2.5rem] sm:text-[5rem] text-white font-bold leading-tight z-20 relative">
            My name is
          </div>

          <div
            data-value="WILL KELLY"
            id="animatedText"
            className="z-20 mt-3 italic leading-tight pt-[0.2rem] pr-[1.5rem] pb-[0.2rem] pl-[0.5rem] relative bg-main text-[2rem] sm:text-[4rem]  text-black w-max font-bold mix-blend-screen  after:content-[''] after:absolute after:bottom-0 after:right-0 after:rotate-45 after:w-[70px] after:h-[70px] after:m-[-50px] sm:after:m-[-40px] after:bg-black rounded"
          >
            WILL KELLY
          </div>
        </div>
      </section>
      <LinkMouse link={mouseText} show={show} parentRef={ref} />
      <section className="relative z-20 h-full">
        <div className="absolute left-[calc(30%-50px)]  bg-main blur-[2.5px] rounded w-4 h-4 -ml-2 z-30"></div>
        <div className="ml-[30%]">
          <p className="text-[#4CFFC9] font-bold text-xs">ABOUT</p>
          <h2 className="mb-5 text-2xl font-bold text-white">What do I do?</h2>
          <p className="w-full pr-5 text-xs text-white sm:w-1/2 opacity-60">
            Currently working as a Software Engineer at a Cyber Security
            company.
            <br></br>
            <br></br>I am very interested in solving problems and have gained
            experience in many areas of Computer Science. I do have particular
            interests in cyber security, however, I also really enjoy web
            development and design.
          </p>
        </div>
      </section>
      <section className="relative z-20 h-full pt-56">
        <div className="absolute left-[calc(30%-50px)]  bg-main blur-[2.5px] rounded w-4 h-4 -ml-2 z-30"></div>
        <div className="ml-[30%]">
          <p className="text-[#4CFFC9] font-bold text-xs">WORK</p>
          <h2 className="mb-10 text-2xl font-bold text-white">
            What have I worked on?
          </h2>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://ikono.will-kelly.co.uk"
              className="bg-[#272A41] h-[300px] w-56 rounded border-1 border-white border-opacity-20 group card relative hover:cursor-none"
              onMouseEnter={() => {
                setShow("show");
                setMouseText("https://ikono.will-kelly.co.uk");
              }}
              onMouseLeave={() => setShow("hide")}
            >
              {/* <span className="fixed top-0 left-0 z-50 flex items-center justify-center transition-all -translate-x-1/2 -translate-y-1/2 bg-white rounded-full mouse w-14 h-14 ">
                <svg
                  height="24"
                  width="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-rotate-45"
                >
                  <path
                    d="M15.418 9.014c2.003.165 3.082 1.534 3.082 3.176 0 1.634-1.071 2.984-3.082 3.15a43.116 43.116 0 0 1-.27 0l-.814.002H13v2a1168.533 1168.533 0 0 0 2.156-.002h.021c.162 0 .337-.002.405-.007 3.043-.251 4.918-2.463 4.918-5.143 0-2.671-1.867-4.917-4.918-5.17a8.055 8.055 0 0 0-.405-.006h-.02l-.821-.002H13v2a982.124 982.124 0 0 1 2.147.001l.203.002c.07 0 .086 0 .068-.001ZM11 15.34l-2.308-.003h-.356c-1.147 0-1.962-.382-2.49-.92-.534-.543-.846-1.321-.846-2.24 0-.92.312-1.697.846-2.241.528-.538 1.343-.919 2.49-.919h.354L11 9.013v-2l-2.313.004h-.351c-1.615 0-2.968.55-3.918 1.518C3.475 9.497 3 10.8 3 12.177c0 1.378.475 2.68 1.418 3.641.95.968 2.303 1.518 3.918 1.518h.352c.466.002 1.34.003 2.312.004v-2Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                  <path
                    d="M15.5 12.168H8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <div className="absolute top-16 bg-white rounded-xl text-[0.6rem] px-2 py-1 bg-opacity-50 w-max">
                  https://ikono.will-kelly.co.uk
                </div>
              </span> */}
              <div className="w-full h-1/2 dots group-hover:bg-[-50px_-50px] transition-all duration-500"></div>
              <div className="w-full p-5">
                <h2 className="mb-2 text-2xl font-bold text-white">IKONO</h2>
                <p className="text-xs text-white opacity-60">
                  A large collection of SVG icons available with an MIT license.
                </p>
              </div>
            </a>

            <a
              href="https://www.npmjs.com/package/valigators"
              className="bg-[#272A41] h-[300px] w-56 rounded border-1 border-white border-opacity-20 group card relative hover:cursor-none"
              onMouseEnter={() => {
                setShow("show");
                setMouseText("https://www.npmjs.com/package/valigators");
              }}
              onMouseLeave={() => setShow("hide")}
            >
              {/* <div className="fixed top-0 left-0 z-50 flex items-center justify-center transition-all -translate-x-1/2 -translate-y-1/2 bg-white rounded-full mouse w-14 h-14">
                <svg
                  height="24"
                  width="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-rotate-45"
                >
                  <path
                    d="M15.418 9.014c2.003.165 3.082 1.534 3.082 3.176 0 1.634-1.071 2.984-3.082 3.15a43.116 43.116 0 0 1-.27 0l-.814.002H13v2a1168.533 1168.533 0 0 0 2.156-.002h.021c.162 0 .337-.002.405-.007 3.043-.251 4.918-2.463 4.918-5.143 0-2.671-1.867-4.917-4.918-5.17a8.055 8.055 0 0 0-.405-.006h-.02l-.821-.002H13v2a982.124 982.124 0 0 1 2.147.001l.203.002c.07 0 .086 0 .068-.001ZM11 15.34l-2.308-.003h-.356c-1.147 0-1.962-.382-2.49-.92-.534-.543-.846-1.321-.846-2.24 0-.92.312-1.697.846-2.241.528-.538 1.343-.919 2.49-.919h.354L11 9.013v-2l-2.313.004h-.351c-1.615 0-2.968.55-3.918 1.518C3.475 9.497 3 10.8 3 12.177c0 1.378.475 2.68 1.418 3.641.95.968 2.303 1.518 3.918 1.518h.352c.466.002 1.34.003 2.312.004v-2Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                  <path
                    d="M15.5 12.168H8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <div className="absolute top-16 bg-white rounded-xl text-[0.6rem] px-2 py-1 bg-opacity-50 w-max">
                  https://www.npmjs.com/package/valigators
                </div>
              </div> */}
              <div className="w-full h-1/2 dots group-hover:bg-[-50px_-50px] transition-all duration-500"></div>
              <div className="w-full p-5">
                <h2 className="mb-2 text-2xl font-bold text-white">
                  Valigators
                </h2>
                <p className="text-xs text-white opacity-60">
                  A Typescript schema based validation library.
                </p>
              </div>
            </a>
            <div className="bg-[#272A41] h-[300px] w-56 rounded border-1 border-white border-opacity-20 group card relative ">
              <div className="w-full h-1/2 dots group-hover:bg-[-50px_-50px] transition-all duration-500"></div>
              <div className="w-full p-5">
                <h2 className="mb-2 text-2xl font-bold text-white">
                  Music Scanner
                </h2>
                <p className="text-xs text-white opacity-60">
                  Scan sheet music to MusicXML built using computer vision and
                  machine learning as part of my dissertation.
                </p>
              </div>
            </div>
            <a
              href="https://github.com/wkelly1/Carousel"
              className="bg-[#272A41] h-[300px] w-56 rounded border-1 border-white border-opacity-20 group card relative hover:cursor-none"
              onMouseEnter={() => {
                setShow("show");
                setMouseText("https://github.com/wkelly1/Carousel");
              }}
              onMouseLeave={() => setShow("hide")}
            >
              {/* <span className="fixed top-0 left-0 z-50 flex items-center justify-center transition-all -translate-x-1/2 -translate-y-1/2 bg-white rounded-full mouse w-14 h-14 ">
                <svg
                  height="24"
                  width="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-rotate-45"
                >
                  <path
                    d="M15.418 9.014c2.003.165 3.082 1.534 3.082 3.176 0 1.634-1.071 2.984-3.082 3.15a43.116 43.116 0 0 1-.27 0l-.814.002H13v2a1168.533 1168.533 0 0 0 2.156-.002h.021c.162 0 .337-.002.405-.007 3.043-.251 4.918-2.463 4.918-5.143 0-2.671-1.867-4.917-4.918-5.17a8.055 8.055 0 0 0-.405-.006h-.02l-.821-.002H13v2a982.124 982.124 0 0 1 2.147.001l.203.002c.07 0 .086 0 .068-.001ZM11 15.34l-2.308-.003h-.356c-1.147 0-1.962-.382-2.49-.92-.534-.543-.846-1.321-.846-2.24 0-.92.312-1.697.846-2.241.528-.538 1.343-.919 2.49-.919h.354L11 9.013v-2l-2.313.004h-.351c-1.615 0-2.968.55-3.918 1.518C3.475 9.497 3 10.8 3 12.177c0 1.378.475 2.68 1.418 3.641.95.968 2.303 1.518 3.918 1.518h.352c.466.002 1.34.003 2.312.004v-2Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                  <path
                    d="M15.5 12.168H8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <div className="absolute top-16 bg-white rounded-xl text-[0.6rem] px-2 py-1 bg-opacity-50 w-max">
                  https://github.com/wkelly1/Carousel
                </div>
              </span> */}
              <div className="w-full h-1/2 dots group-hover:bg-[-50px_-50px] transition-all duration-500"></div>
              <div className="w-full p-5">
                <h2 className="mb-2 text-2xl font-bold text-white">Carousel</h2>
                <p className="text-xs text-white opacity-60">
                  A javascript carousel library.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="h-[700px] mb-56 pt-56 z-20 relative w-full">
        <div className="absolute left-[calc(30%-50px)] top-0 w-[calc(70%+50px)]">
          <div className="w-[17.5vw] h-[362px]">
            <svg
              height="100%"
              width="100%"
              viewBox="0 0 336 362"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0.5 0C0.5 188 0.5 188 188.5 188M188.5 188C271 188 119 188 188.5 188ZM188.5 188C293.5 188 335.5 211 335.5 316C335.5 342.946 335.5 362 335.5 362"
                stroke="#1D2346"
              />
            </svg>
          </div>
          <div className="absolute bg-main blur-[2.5px] rounded w-4 h-4  z-20 left-[17.5vw] -translate-x-1/2 "></div>

          <div className="w-[100%]  box-border px-10">
            <form
              className="bg-[#1F2237]  sm:w-2/3 mt-20 flex card relative rounded"
              onSubmit={handleSubmit}
            >
              <div className="dots w-[10%] sm:w-1/5"></div>
              <div className="w-[80%] sm:w-3/5 grid grid-cols-2  grid-rows-[repeat(5,_minmax(0,max_content))]  gap-5 px-2 py-4 md:p-10">
                {state.succeeded && (
                  <div className="col-span-2 border border-[#D2D3D7] text-sm items-center text-[#D2D3D7] rounded p-2 font-light flex gap-2">
                    <svg
                      height="24"
                      width="24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m8.602 12.271 2.304 2.304 5.144-5.144"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    Your message has been sent
                  </div>
                )}
                <label className="flex flex-col gap-2 text-[#D2D3D7] text-xs col-span-2 md:col-span-1">
                  First Name
                  <input
                    id="firstName"
                    name="firstName"
                    className="bg-[#191B2C] rounded px-2 py-1 text-base focus:outline-none focus:ring-1 font-light"
                    required
                  />
                </label>
                <ValidationError
                  prefix="First Name"
                  field="firstName"
                  errors={state.errors}
                />
                <label className="flex flex-col gap-2 text-[#D2D3D7] text-xs col-span-2 md:col-span-1">
                  Last Name
                  <input
                    id="lastName"
                    name="lastName"
                    className="bg-[#191B2C] rounded px-2 py-1 text-base focus:outline-none focus:ring-1 font-light"
                    required
                  />
                </label>
                <ValidationError
                  prefix="Last Name"
                  field="lastName"
                  errors={state.errors}
                />

                <label className="flex flex-col gap-2 text-[#D2D3D7] text-xs col-span-2">
                  Email
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="bg-[#191B2C] rounded px-2 py-1 text-base focus:outline-none focus:ring-1 font-light"
                    required
                  />
                </label>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />

                <label className="flex flex-col gap-2 text-[#D2D3D7] text-xs col-span-2">
                  Message
                  <textarea
                    cols={1}
                    id="message"
                    name="message"
                    className="bg-[#191B2C] rounded px-2 py-1 text-base focus:outline-none focus:ring-1 font-light"
                    required
                  />
                </label>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <div>
                  <button
                    className="bg-main text-[0.7rem] rounded py-1 px-5 font-semibold"
                    disabled={state.submitting}
                    type="submit"
                  >
                    SEND
                  </button>
                </div>
              </div>
              <div className="w-[10%] sm:w-1/5 dots"></div>
            </form>
          </div>
        </div>
        <div className="ml-[calc(30%-20px+17.5vw)] mt-[137px]">
          <p className="text-[#4CFFC9] font-bold text-xs">CONTACT</p>
          <h2 className="mb-5 text-2xl font-bold text-white">Get in Touch</h2>
        </div>
      </section>

      <section className="h-[100px] z-20 relative">
        <div className="top-[250px]  absolute flex w-full justify-around pl-0 sm:pl-56 text-xs">
          <p className="text-[#71737D]">© Will Kelly {year}</p>
          <a href="/legal/privacy-policy" className="text-[#71737D]">
            Legal
          </a>
        </div>
        <div className="absolute left-[calc(30%-50px)] top-0">
          <svg
            width="1162"
            height="189"
            viewBox="0 0 1162 189"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 0C0.5 188 0.5 188 188.5 188M188.5 188C271 188 119 188 188.5 188ZM188.5 188H1169"
              stroke="#1D2346"
            />
          </svg>
        </div>
      </section>

      <div className="fixed inset-0 z-10 w-full h-full overflow-hidden">
        <div className="blob" id="blob"></div>
      </div>
      <div className="box-content absolute w-[0.1rem] bottom-[300px] top-[calc(200px+1.25rem)] left-[calc(30%-50px)] bg-[#1D2346] z-10">
        {/* <div className="bg-main blur-[2.5px] rounded w-4 h-4 -ml-2 -mt-2"></div> */}
        {/* <div className="bg-main blur-[2.5px] rounded w-4 h-4 -ml-2 mt-[600px]"></div> */}
        {/* <div className="bg-main blur-[2.5px] rounded w-4 h-4 -ml-2 mt-[340px]"></div> */}
      </div>
    </div>
  );
}
