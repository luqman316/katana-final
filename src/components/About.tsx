// import Image from "next/image";
// import { FaPlay } from "react-icons/fa";

// export default function AboutUs() {
//   return (
//     <section className="w-full min-h-screen flex flex-col items-center justify-center  py-12 px-2">
//       {/* Heading */}
//       <h2 className="text-center text-5xl mb-12 font-extrabold tracking-wider text-white drop-shadow-lg">
//         ABOUT US
//       </h2>

//       {/* Border Wrapper */}
//       <div className="relative w-full max-w-7xl mx-auto rounded-3xl overflow-visible  shadow-2xl  backdrop-blur-md px-2 md:px-8 py-8">
//         {/* SVG Border */}
//         <svg
//           className="absolute inset-0 w-full h-full pointer-events-none z-10"
//           viewBox="0 0 1000 500"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="
//             M0,0 
//             H400 
//             Q420,0 430,20 
//             Q440,40 500,40 
//             Q560,40 570,20 
//             Q580,0 600,0 
//             H1000 
//             V500 
//             H600 
//             Q580,500 570,480 
//             Q560,460 500,460 
//             Q440,460 430,480 
//             Q420,500 400,500 
//             H0 Z
//           "
//             fill="transparent"
//             stroke="#ccff00"
//             strokeWidth="3"
//             filter="drop-shadow(0 0 8px #ccff00)"
//           />
//         </svg>

//         {/* Content */}
//         <div className="relative flex flex-col md:flex-row  items-center justify-center gap-6 px-2 py-8 z-20">
//           {/* Left Character - overlap and pop out */}
//           <div className="md:block absolute -left-32   flex items-stretch z-30">
//             <Image
//               src="/about/AxeCharacter.png"
//               alt="Left Character"
//               width= {420} 
//               height={420}
//               className="object-contain   drop-shadow-[0_8px_32px_red]"
//               priority
//             />
//           </div>

//           {/* Center Text */}
//           <div className="flex-1 max-w-2xl flex flex-col items-center text-center  mx-auto z-40">
//             <p className="mb-8 text-gray-200 text-lg leading-8 font-medium">
//               We’re a game development company dedicated to crafting immersive,
//               unforgettable experiences that resonate with players worldwide.
//               Our skilled developers, artists, and designers work hand in hand
//               to transform your vision into reality. Every project we create is
//               built with passion, precision, and a commitment to exceeding
//               expectations delivering games that stand out and keep players
//               coming back.
//             </p>

//             {/* Show Reel Button */}
//             <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500/30 to-yellow-400/50 px-8 py-4 rounded-full font-bold text-white text-lg shadow-lg hover:scale-105 hover:from-yellow-400 hover:to-orange-500 transition-all duration-200">
//               <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-md animate-pulse">
//                 <FaPlay className="text-white text-2xl ml-1" />
//               </span>
//               SHOW REEL
//             </button>
//           </div>

//           {/* Right Character - overlap and pop out */}
//           <div className=" md:block absolute -right-32  flex items-stretch z-30">
//             <Image
//               src="/about/Samurai.png"
//               alt="Right Character"
//               width= {420}
//               height={420}
//               className="object-contain h-full min-h-0 drop-shadow-[0_8px_32px_red]"
//               priority
//             />
//           </div>
//         </div>
//       </div>

//       {/* Bottom Features */}
//       <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 text-lg font-bold">
//         <div className="flex items-center gap-3 bg-black/80 p-3 rounded-xl shadow-md border border-lime-400/30">
//           <span className="text-orange-500 text-2xl animate-pulse">✦</span> EPIC
//           WORLDS
//         </div>
//         <div className="flex items-center gap-3 bg-black/80 p-3 rounded-xl shadow-md border border-lime-400/30">
//           <span className="text-orange-500 text-2xl animate-pulse">✦</span>{" "}
//           THRILLING ACTION
//         </div>
//         <div className="flex items-center gap-3 bg-black/80 p-3 rounded-xl shadow-md border border-lime-400/30">
//           <span className="text-orange-500 text-2xl animate-pulse">✦</span>{" "}
//           CHALLENGING PUZZLES
//         </div>
//       </div>
//     </section>
//   );
// }




import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-12 px-2">
      {/* Heading */}
      <h2 className="text-center text-4xl sm:text-5xl mb-12 font-extrabold tracking-wider text-white drop-shadow-lg">
        ABOUT US
      </h2>

      {/* Border Wrapper */}
      <div className="relative w-full max-w-7xl   mx-auto rounded-3xl overflow-visible shadow-2xl backdrop-blur-md px-2  sm:px-4 md:px-8 py-8">
        {/* SVG Border */}
        <svg
          className="absolute inset-0 w-full  h-full pointer-events-none z-10"
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
            filter="drop-shadow(0 0 8px #ccff00)"
          />
        </svg>

        {/* Content */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 px-2 py-8 z-20">
          {/* Left Character */}
          <div className="hidden lg:block absolute -left-20 z-30">
            <Image
              src="/about/AxeCharacter.png"
              alt="Left Character"
              width={420}
              height={420}
              className="object-contain drop-shadow-[0_8px_32px_red]"
              priority
            />
          </div>

          {/* Left Character for small/medium */}
          <div className="lg:hidden flex justify-center mb-6">
            <Image
              src="/about/AxeCharacter.png"
              alt="Left Character"
              width={260}
              height={260}
              className="object-contain drop-shadow-[0_8px_32px_red]"
              priority
            />
          </div>

          {/* Center Text */}
          <div className="flex-1 max-w-2xl flex flex-col items-center text-center mx-auto z-40">
            <p className="mb-8 text-gray-200 text-base sm:text-lg leading-7 sm:leading-8 font-medium px-2 sm:px-0">
              We’re a game development company dedicated to crafting immersive,
              unforgettable experiences that resonate with players worldwide.
              Our skilled developers, artists, and designers work hand in hand
              to transform your vision into reality. Every project we create is
              built with passion, precision, and a commitment to exceeding
              expectations delivering games that stand out and keep players
              coming back.
            </p>

            {/* Show Reel Button */}
            <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500/30 to-yellow-400/50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-white text-base sm:text-lg shadow-lg hover:scale-105 hover:from-yellow-400 hover:to-orange-500 transition-all duration-200">
              <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-md animate-pulse">
                <FaPlay className="text-white text-lg sm:text-2xl ml-1" />
              </span>
              SHOW REEL
            </button>
          </div>

          {/* Right Character */}
          <div className="hidden lg:block absolute -right-16 z-30">
            <Image
              src="/about/Samurai.png"
              alt="Right Character"
              width={420}
              height={420}
              className="object-contain drop-shadow-[0_8px_32px_red]"
              priority
            />
          </div>

          {/* Right Character for small/medium */}
          <div className="lg:hidden flex justify-center mt-6">
            <Image
              src="/about/Samurai.png"
              alt="Right Character"
              width={260}
              height={260}
              className="object-contain drop-shadow-[0_8px_32px_red]"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm sm:text-lg font-bold px-2">
        <div className="flex items-center gap-3 bg-black/80 p-3 rounded-xl shadow-md border border-lime-400/30">
          <span className="text-orange-500 text-xl sm:text-2xl animate-pulse">✦</span> EPIC WORLDS
        </div>
        <div className="flex items-center gap-3 bg-black/80 p-3 rounded-xl shadow-md border border-lime-400/30">
          <span className="text-orange-500 text-xl sm:text-2xl animate-pulse">✦</span> THRILLING ACTION
        </div>
        <div className="flex items-center gap-3 bg-black/80 p-3 rounded-xl shadow-md border border-lime-400/30">
          <span className="text-orange-500 text-xl sm:text-2xl animate-pulse">✦</span> CHALLENGING PUZZLES
        </div>
      </div>
    </section>
  );
}
