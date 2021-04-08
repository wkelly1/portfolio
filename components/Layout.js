import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  useCycle,
} from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Arrow } from "./Arrow";
import Contact from "./Contact";
import NeedWebsite from "./NeedWebsite";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#fff"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <button
    onClick={toggle}
    className="bg-transparent focus:outline-none cursor-pointer border-none flex items-center justify-center"
    style={{ width: "30px", height: "30px" }}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

export function Layout({ children }) {
  const [contact, setContact] = useState(false);
  const [needWeb, setNeedWeb] = useState(false);
  const [open, setOpen] = useState(false);
  const [viewLegal, setViewLegal] = useState(false);
  const [legalHover, setLegalHover] = useState(0);
  const [isOpen, toggleOpen] = useCycle(false, true);

  const router = useRouter();

  const container = {
    hidden: { opacity: 0 },
    show: {
      y: -70,
      opacity: 1,
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.div
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // exit={{ opacity: 0 }}
    // transition={{ duration: 1 }}
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    >
      <AnimateSharedLayout type="crossfade">
        <motion.div
          className={`flex justify-center w-screen  min-h-full bg-background relative overflow-y-hidden overflow-x-hidden ${
            contact || needWeb ? "h-screen" : "min-h-screen h-full"
          }`}
        >
          <Head>
            <title>Will Kelly</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <motion.div
            animate
            layout
            className={`w-full px-10 text-white overflow-x-hidden overflow-y-hidden md:overflow-y-auto ${
              contact || needWeb ? "md:w-1/2 p-10" : " md:w-2/3"
            }`}
          >
            <h1 className="hidden">Home</h1>
            <header className="mt-14 flex justify-between font-bold md:mt-32 relative">
              <motion.div animate={isOpen ? { opacity: 0.2 } : { opacity: 1 }}>
                <h2 className="text-2xl max-w-min lg:text-4xl font-bold mb-1 lg:mb-3 animation-typing-hide">
                  Hello, My name is
                </h2>
                <h2 className="max-w-min text-2xl lg:text-4xl font-bold animation-typing">
                  Will Kelly
                  {/* <span className="border-r-2 border-white h-full animate-flash"></span> */}
                </h2>
                <button
                  onClick={() => setContact(true)}
                  className="text-sm btn-arrow flex bg-blue-600 hover:underline px-4 py-1 rounded mt-5 lg:text-md font-semibold items-center"
                >
                  Hire me
                  <Arrow />
                </button>
              </motion.div>
              <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className="text-white xl:hidden"
              >
                <MenuToggle
                  toggle={() => {
                    toggleOpen();
                    setOpen(!open);
                  }}
                />
              </motion.div>
              {open && (
                <motion.nav className="absolute right-10 -top-1">
                  <motion.button
                    onClick={() => router.push("/")}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-blue-500 m-1 font-bold cursor-pointer focus:outline-none px-4 py-1 rounded"
                  >
                    Home
                  </motion.button>
                  <motion.button
                    onClick={() => router.push("/about")}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-blue-500 m-1 font-bold cursor-pointer focus:outline-none px-4 py-1 rounded"
                  >
                    About
                  </motion.button>
                  <motion.button
                    onClick={() => setNeedWeb(true)}
                    whileTap={{ scale: 0.9 }}
                    className="text-white bg-blue-500 m-1 font-bold cursor-pointer focus:outline-none px-4 py-1 rounded"
                  >
                    Need a website?
                  </motion.button>
                </motion.nav>
              )}
              <nav className="hidden xl:block">
                <motion.button
                  onClick={() => router.push("/")}
                  whileHover={{ scale: 1.1, y: -5, backgroundColor: "#2563EB" }}
                  whileTap={{ scale: 0.9 }}
                  className="mr-2 font-bold cursor-pointer focus:outline-none px-4 py-1 rounded"
                >
                  Home
                </motion.button>
                <motion.button
                  onClick={() => router.push("/about")}
                  whileHover={{ scale: 1.1, y: -5, backgroundColor: "#2563EB" }}
                  whileTap={{ scale: 0.9 }}
                  className="mr-2 font-bold cursor-pointer focus:outline-none px-4 py-1 rounded"
                >
                  About
                </motion.button>
                <motion.button
                  onClick={() => setNeedWeb(true)}
                  whileHover={{ scale: 1.1, y: -5, backgroundColor: "#2563EB" }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-blue-600 mr-2 font-bold cursor-pointer focus:outline-none px-4 py-1 rounded"
                >
                  Need a website?
                </motion.button>
              </nav>
            </header>
            {children}
            <footer className="mt-72 flex justify-between">
              <div className="flex">
                <div
                  className="w-8 mr-2 cursor-pointer"
                  style={{ color: "#808080" }}
                  onClick={() => setContact(true)}
                >
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <a href="https://github.com/wkelly1" className="cursor-pointer">
                  <Image
                    src={"/icons/Github.svg"}
                    alt={"Github"}
                    width={30}
                    height={30}
                  />
                </a>
              </div>
              <div className="relative">
                <AnimatePresence>
                  {viewLegal && (
                    <motion.div
                      variants={container}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="absolute  w-64 leading- right-0 text-right"
                    >
                      <motion.div
                        variants={item}
                        key={1}
                        onHoverStart={() => setLegalHover(1)}
                        onHoverEnd={() => setLegalHover(0)}
                        whileTap={{ scale: 0.9 }}
                        animate={legalHover === 2 ? { color: "#808080" } : {}}
                      >
                        <Link href="/legal/privacy-policy">
                          <p className="cursor-pointer mb-2">Privacy Policy</p>
                        </Link>
                      </motion.div>
                      <motion.div
                        variants={item}
                        key={2}
                        onHoverStart={() => setLegalHover(2)}
                        onHoverEnd={() => setLegalHover(0)}
                        whileTap={{ scale: 0.9 }}
                        animate={legalHover === 1 ? { color: "#808080" } : {}}
                      >
                        <Link href="/legal/privacy-policy">
                          <p className="cursor-pointer">Terms & Conditions</p>
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <button
                  className="cursor-pointer"
                  style={{ color: "#808080" }}
                  onClick={() => setViewLegal(!viewLegal)}
                >
                  Legal
                </button>
              </div>
            </footer>
          </motion.div>

          {contact && (
            <motion.div
              layout
              initial={{ opacity: 0, x: "100%", left: "100%" }}
              animate={{ opacity: 1, x: 0, left: 0 }}
              exit={{ opacity: 0, x: "100%", left: "100%" }}
              transition={{ type: "spring", duration: 0.6, bounce: 0 }}
              className="overflow-auto w-screen right-0 h-full fixed md:border-none md:h-auto md:relative md:w-1/2"
            >
              <Contact close={() => setContact(false)} />
            </motion.div>
          )}

          {needWeb && (
            <motion.div
              layout
              initial={{ opacity: 0, x: "100%", left: "100%" }}
              animate={{ opacity: 1, x: 0, left: 0 }}
              exit={{ opacity: 0, x: "100%", left: "100%" }}
              transition={{ type: "spring", duration: 0.6, bounce: 0 }}
              className="overflow-auto w-screen right-0 h-full fixed md:border-none md:h-auto md:relative md:w-1/2"
            >
              <NeedWebsite close={() => setNeedWeb(false)} />
            </motion.div>
          )}
        </motion.div>
      </AnimateSharedLayout>
    </motion.div>
  );
}
