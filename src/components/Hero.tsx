import Link from "next/link";

function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg">
      <div className="container mx-auto px-4 sm:px-8 md:px-14 py-4 w-full">
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
            <p className="text-center mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              We’ve built a strong reputation in mobile game development,
              helping creators turn ideas into success stories. Our expertise
              and platform give your project the boost it needs to win.
            </p>
          </div>
          {/* 3rd div */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-8 w-full justify-center items-center">
            <Link
              href={"/"}
              className="mt-4 sm:mt-6 uppercase text-black font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base bg-lime-500 rounded-l-2xl rounded-r-2xl rounded-lg hover:bg-lime-700 transition-colors w-full sm:w-auto text-center"
            >
              Explore More
            </Link>
            <Link
              href={"/"}
              className="mt-0 sm:mt-6 uppercase text-black font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base bg-lime-500 rounded-l-2xl rounded-r-2xl rounded-lg hover:bg-lime-700 transition-colors w-full sm:w-auto text-center"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
