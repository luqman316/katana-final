import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="container mx-auto min-h-screen px-14  flex flex-col items-center justify-center bg-yellow- bg-transparent text-white">
      {/* Heading */}
      <h2 className="text-center text-5xl  mb-12 font-medium ">ABOUT US</h2>

      {/* Border Wrapper */}
      <div className="relative w-full max-w-7xl mx-auto rounded-xl overflow-hidden">
        {/* SVG Border */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
        >
          <path
            d="
            M0,0 
            H400 
            Q420,0 430,20 
            Q440,40 500,40 
            Q560,40 570,20 
            Q580,0 600,0 
            H1000 
            V500 
            H600 
            Q580,500 570,480 
            Q560,460 500,460 
            Q440,460 430,480 
            Q420,500 400,500 
            H0 Z
          "
            fill="transparent"
            stroke="#ccff00"
            strokeWidth="3"
          />
        </svg>

        {/* Content */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 px-2 py-8">
          {/* Left Character */}
          <div className="flex-shrink-0">
            <Image
              src="/about/ch.png"
              alt="Left Character"
              width={350}
              height={350}
              className="object-contain"
            />
          </div>

          {/* Center Text */}
          <div className="flex-1 max-w-xl flex flex-col items-center text-center">
            <p className="mb-8 text-gray-300 leading-2xl">
              We’re a game development company dedicated to crafting immersive,
              unforgettable experiences that resonate with players worldwide.
              Our skilled developers, artists, and designers work hand in hand
              to transform your vision into reality. Every project we create is
              built with passion, precision, and a commitment to exceeding
              expectations — delivering games that stand out and keep players
              coming back.
            </p>

            {/* Show Reel Button */}
            <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500/10 to-yellow-400/10 px-6 py-3 rounded-full font-semibold">
              <FaPlay className="text-yellow-500 text-xl" />
              SHOW REEL
            </button>
          </div>

          {/* Right Character */}
          <div className="flex-shrink-0">
            <Image
              src="/about/ch.png"
              alt="Right Character"
              width={350}
              height={350}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-lg font-bold">
        <div className="flex items-center gap-3 bg-black p-2 rounded-xl">
          <span className="text-orange-500">✦</span> EPIC WORLDS
        </div>
        <div className="flex items-center gap-3 bg-black p-2 rounded-xl">
          <span className="text-orange-500">✦</span> THRILLING ACTION
        </div>
        <div className="flex items-center gap-3 bg-black p-2 rounded-xl">
          <span className="text-orange-500">✦</span> CHALLENGING PUZZLES
        </div>
      </div>
    </section>
  );
}
