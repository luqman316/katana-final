import Link from "next/link";

function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 sm:px-8 md:px-14 py-4 ">
        <div className="flex flex-col justify-center items-center">
          {/* 1st div */}
          <div className="flex justify-center items-center">
            <p className="text-lime-400"># World Class Gaming Starts Here</p>
          </div>
          {/* 2nd div */}
          <div className="mt-2 flex flex-col justify-center items-center gap-2">
            <h1 className="text-6xl font-bold ">
              <span className="border-l-4 border-double border-t-4 border-b-4 pl-3  rounded-l-3xl border-s-4 border-amber-900">TURN</span>ING YOUR IMAGI
              <span className="border-r-4 border-double border-t-4 border-b-4 pr-3  rounded-r-3xl border-e-4 border-amber-900">NATION</span> <br />
            </h1>
            <span className="text-6xl font-bold">INTO PLAYABLE WORLDS</span>
            <p className="text-center  mt-4">
              We’ve built a strong reputation in mobile game development,
              helping creators turn ideas into <br /> success stories. Our
              expertise and platform give your project the boost it needs to
              win.
            </p>
          </div>
          {/* 3rd div */}
          <div className="flex gap-10 mt-8">
            <Link href={"/"} className="mt-6 uppercase text-black font-semibold px-8 py-3 bg-lime-500  rounded-l-2xl rounded-r-2xl rounded-lg hover:bg-lime-700 transition-colors">
              Explore More
            </Link>
            <Link href={"/"} className="mt-6 uppercase text-black font-semibold px-8 py-3 bg-lime-500  rounded-l-2xl rounded-r-2xl rounded-lg hover:bg-lime-700 transition-colors">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
