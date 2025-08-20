"use client";
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
function Hero() {
  return (
    <div className="relative min-h-screen flex items-start justify-center sm:mt-28 md:mt-28 lg:mt-28 xl:mt-28 2xl:mt-28">
      <div className="container relative z-10 mx-auto px-4 sm:px-8 md:px-14 py-4 w-full">
        <div className="flex flex-col justify-center items-center w-full">
          {/* 1st div */}
          <div className="flex justify-center items-center w-full">
            <p className="text-lime-400 animate-bounce text-base sm:text-lg md:text-xl lg:text-2xl text-center">
              # World Class Gaming Starts Here
            </p>
          </div>
          {/* 2nd div */}
          <div className="mt-2 flex flex-col text-white justify-center items-center gap-2 w-full">
            <h1 className="font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center leading-tight">
              <span className="border-l-4 border-double border-t-4 border-b-4 pl-2 sm:pl-3 rounded-l-3xl border-s-4 border-amber-900">
                TURN
              </span>
              ING YOUR IMAGI
              <span className="border-r-4 border-double border-t-4 border-b-4 pr-2 sm:pr-3 rounded-r-3xl border-e-4 border-amber-900">
                NATION
              </span>
            </h1>
            <span className="font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
              INTO PLAYABLE WORLDS
            </span>
            <div>
              <p className="text-center mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                We've built a strong reputation in Game Development and
                Interactive Media Market helping creators turn Ideas into
                Success Stories.
              </p>
              <div className="flex flex-col gap-3 items-start mt-24 w-full">
                <p className="flex justify-center items-center font-bold gap-x-2">
                  <span className="text-4xl">-</span>
                  <span className="text-3xl"> NFT/Blockchain Games</span>
                </p>
                <p className="flex justify-center items-center font-bold gap-x-2">
                  <span className="text-4xl">-</span>
                  <span className="text-3xl"> Mobile/Web Games</span>
                </p>
                <p className="flex justify-center items-center font-bold gap-x-2">
                  <span className="text-4xl">-</span>
                  <span className="text-3xl"> PC/Console Games</span>
                </p>
                <p className="flex justify-center items-center font-bold gap-x-2">
                  <span className="text-4xl">-</span>
                  <span className="text-3xl">
                    {" "}
                    Metaverse/Augmented Reality/Virtual Reality
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* 3rd div */}

          {/* 4th div */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-16 w-full justify-center items-center">
            <Link
              href={"/games"}
              className="mt-4 sm:mt-6 uppercase text-black font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base bg-lime-500 rounded-l-2xl rounded-r-2xl rounded-lg hover:bg-lime-700 transition-colors w-full sm:w-auto text-center"
            >
              Explore Games
            </Link>
            <Link
              href={"#contact"}
              className="mt-0 sm:mt-6 uppercase text-black font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base bg-lime-500 rounded-l-2xl rounded-r-2xl rounded-lg hover:bg-lime-700 transition-colors w-full sm:w-auto text-center"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative left character */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="hidden lg:block absolute animate-pulse left-0 bottom-28 h-full w-xl pointer-events-none z-0"
      >
        <Image
          src="/hero/render1.png"
          alt="left art"
          fill
          className="object-contain object-bottom"
          priority={false}
        />
      </motion.div>

      {/* Decorative right character */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="hidden lg:block absolute right-0 bottom-28 h-full animate-pulse w-lg pointer-events-none z-0"
      >
        <Image
          src="/hero/render23.png"
          alt="right art"
          fill
          className="object-contain object-bottom"
          priority={false}
        />
      </motion.div>
    </div>
  );
}

export default Hero;
