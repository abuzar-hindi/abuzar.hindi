import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageTraill from "./ImageTraill";

import card_1 from "../assets/card_1.png";
import card_2 from "../assets/card_2.png";
import card_3 from "../assets/card_4.png";
import card_4 from "../assets/card_1.png";
import profile from "../assets/profile.jpg";
import Navbar from "./Navbar";

const Hero = ({ trailOn, setTrailOn }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Reset immediately after hover out
  };

  // Calculate the number of rows and columns based on screen height and width
  const columns = Math.floor(window.innerWidth / 46); // 38px width + 8px gap
  const rows = Math.floor(window.innerHeight / 46);
  const totalItems = columns * rows;

  return (

    <div className="relative h-screen w-full overflow-hidden">

      <Navbar trailOn={trailOn} setTrailOn={setTrailOn} />
      <ImageTraill
        enabled={trailOn}
        images={Array.from({ length: 12 }, (_, i) => `/active/${(i % 16) + 1}.png`)}
      >

        <div className="relative h-screen flex items-center justify-center">

          <motion.div className="relative w-full h-screen overflow-hidden flex justify-center items-center">
            {/* Grids behind the hero content */}
            <div
              className="absolute top-0 left-0 w-full h-full grid"
              style={{ gridTemplateColumns: `repeat(${columns}, 2fr)` }}
            >
              {[...Array(totalItems)].map((_, index) => (
                <div
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className={`w-16 h-16 transition-all duration-200 border border-gray-500/10 ${hoveredIndex === index ? "bg-black bg-gray-900" : "bg-black"
                    }`}
                />
              ))}
            </div>

            {/* Main hero content */}
            <div className="flex flex-col justify-center items-center h-full z-30 relative pointer-events-none">
              <div className="w-44 h-44 mb-4 border-2 border-white rounded-full pointer-events-none bg-white object-cover overflow-hidden">
                <img src={profile} alt="" />
              </div>
              <p className="text-white text-xl">Hi, I'm Abuzar Hindi</p>
              <h1 className="lg:text-7xl md:text-6xl px-5 sm:text-6xl text-5xl text-white font-bold text-center">FULL STACK <span className="text-yellow-400">DEVELOPER</span> </h1>

              <div className="text-center px-3">
                <span
                  className="layer text-xl md:text-3xl font-medium text-white group"
                  data-speed="-5"
                >
                  {"I build   |   ".split("").map((char, index) =>
                    char === " " ? (
                      <span key={index}>&nbsp;</span>
                    ) : (
                      <span
                        key={index}
                        className="hover:scale-125 pointer-events-auto hover:text-yellow-300 inline-block transition-transform duration-300"
                      >
                        {char}
                      </span>
                    )
                  )}
                </span>
                <span
                  className="layer text-xl md:text-3xl font-medium text-white"
                  data-speed="3"
                >
                  You {" "}
                  <span className="relative text-red-600 font-bold">
                    GROW
                    <svg
                      className="absolute left-0 -bottom-1"
                      width="100%"
                      height="8"
                      viewBox="0 0 300 8"
                    >
                      <motion.line
                        x1="-60"
                        y1="1"
                        x2="800"
                        y2="4"
                        stroke="#EF4444"
                        strokeWidth="4"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    </svg>

                  </span>
                </span>
              </div>

              <h6 className="text-gray-300 text-center px-4 absolute bottom-8 text-sm md:hidden">I design and build fast, conversion-focused websites for real businesses.</h6>
              {/* Cards */}
              <motion.div
                initial={{ y: 90 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="hidden md:flex absolute bottom-0 overflow-hidden items-center justify-center space-x-4 ml-36"
              >
                <motion.div
                  className="w-56 h-36 relative hidden sm:block left-28 top-16 shadow-lg -rotate-12 overflow-hidden"
                  animate={{
                    x: [0, -10, 0],
                    // rotate: [-15, -15, -15],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img src={card_4} alt="" />
                </motion.div>

                <motion.div
                  className="w-56 h-36 shadow-lg"
                  animate={{
                    x: [0, -10, 0],
                    rotate: [0, 0, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img src={card_3} alt="" />
                </motion.div>

                <motion.div
                  className="w-56 h-36 relative top-16 right-28 shadow-lg rotate-12"
                  animate={{
                    x: [0, -10, 0],
                    rotate: [12, 12, 12],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img src={card_2} alt="" />

                </motion.div>

                <motion.div
                  className="w-56 h-36 relative top-32 right-56 shadow-lg rotate-[110deg] hidden sm:block"
                  animate={{
                    x: [0, -10, 0],
                    rotate: [12, 12, 12],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img src={card_1} alt="" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </ImageTraill>
    </div>
  );
};

export default Hero;
