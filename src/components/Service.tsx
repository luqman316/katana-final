import Image from "next/image";

function Service() {
  return (
    <div className="min-h-screen flex items-center justify-center bg- py-8 px-2 w-full">
      <div className="text-white container mx-auto px-2 xs:px-4 sm:px-8 md:px-14 py-4 w-full">
        <div className="flex flex-col items-center justify-center w-full">
          {/* heading */}
          <div>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl uppercase font-extrabold text-white text-center mb-8 sm:mb-14 tracking-wider">
              Our Service
            </h1>
          </div>
          {/* service */}
          <section className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-x-16 lg:gap-y-14 items-center w-full">
              {/* 1st row */}
              <div className="p-4 flex flex-col items-center justify-center space-y-5  rounded-2xl shadow-md ">
                <Image
                  src="/service/2D/icon1.png"
                  alt="1"
                  width={60}
                  height={100}
                  className="object-contain h-16 w-16 sm:h-20 sm:w-20"
                />
                <h2 className="font-semibold mt-4 text-lg sm:text-xl md:text-2xl text-white">
                  2D / 3D Art
                </h2>
                <p className="text-white text-center text-sm sm:text-base">
                  Create profiles for professional esports players, including
                  their bios, achievements, and current teams.
                </p>
              </div>
              <div className="p-4 flex flex-col items-center justify-center space-y-5  rounded-2xl shadow-md ">
                <Image
                  src="/service/2D/icon2.png"
                  alt="2"
                  width={60}
                  height={100}
                  className="object-contain h-16 w-16 sm:h-20 sm:w-20"
                />
                <h2 className="font-semibold mt-4 text-lg sm:text-xl md:text-2xl text-white">
                  Games
                </h2>
                <p className="text-gray-300 text-center text-sm sm:text-base">
                  3D/2D games with full graphics including characters from
                  scratch idea for Mobile, PC, XBox, Steam.
                </p>
              </div>
              <div className="p-4 flex flex-col items-center justify-center space-y-5  rounded-2xl shadow-md ">
                <Image
                  src="/service/2D/icon4.png"
                  alt="4"
                  width={60}
                  height={100}
                  className="object-contain h-16 w-16 sm:h-20 sm:w-20"
                />
                <h2 className="font-semibold mt-4 text-lg sm:text-xl md:text-2xl text-white">
                  Art Work
                </h2>
                <p className="text-gray-300 text-center text-sm sm:text-base">
                  2D, 3D designs for games and apps including character,
                  environment modeling & animations.
                </p>
              </div>
              {/* 2nd row */}
              <div className="p-4 flex flex-col items-center justify-center space-y-5  rounded-2xl shadow-md ">
                <Image
                  src="/service/2D/icon3.png"
                  alt="3"
                  width={60}
                  height={100}
                  className="object-contain h-16 w-16 sm:h-20 sm:w-20"
                />
                <h2 className="font-semibold mt-4 text-lg sm:text-xl md:text-2xl text-white">
                  Gamification
                </h2>
                <p className="text-gray-300 text-center text-sm sm:text-base">
                  Professional learning through game concept, for kids as well
                  as adults.
                </p>
              </div>
              <div className="p-4 flex flex-col items-center justify-center space-y-5  rounded-2xl shadow-md ">
                <Image
                  src="/service/2D/icon5.png"
                  alt="5"
                  width={60}
                  height={100}
                  className="object-contain h-16 w-16 sm:h-20 sm:w-20"
                />
                <h2 className="font-semibold mt-4 text-lg sm:text-xl md:text-2xl text-white">
                  Marketing
                </h2>
                <p className="text-gray-300 text-center text-sm sm:text-base">
                  Mobile App and game marketing for effective business.
                </p>
              </div>
              <div className="p-4 flex flex-col items-center justify-center space-y-5  rounded-2xl shadow-md ">
                <Image
                  src="/service/2D/icon6.png"
                  alt="6"
                  width={60}
                  height={100}
                  className="object-contain h-16 w-16 sm:h-20 sm:w-20"
                />
                <h2 className="font-semibold mt-4 text-lg sm:text-xl md:text-2xl text-white">
                  2D / 3D Animation
                </h2>
                <p className="text-gray-300 text-center text-sm sm:text-base">
                  Get help to maximize output from idea you want to pursue.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Service;
