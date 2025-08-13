import Image from "next/image";

function Service() {
  return (
    <div>
      <div className="text-white container mx-auto px-14 py-6 min-h-screen flex justify-center items-center">
        <div className="flex flex-col items-center  justify-center">
          {/* heading */}
          <div>
            <h1 className="text-5xl uppercase font-medium text-white text-center">OUr service</h1>
          </div>
          {/* service */}
          <section className="mt-14">
            <div className="grid grid-cols-3 justify-center gap-x-48 gap-y-20 items-center">
              {/* 1st row */}
              <div className="p-4 flex flex-col items-center justify-center space-y-3">
                <Image
                  src="/service/2D/icon1.png"
                  alt="1"
                  width={50}
                  height={100}
                  className=""
                />
                <h2 className=" font-semibold mt-4 text-2xl">2D / 3D Art</h2>
                <p className="text-white text-center">
                  Create profiles for professional esports players, including
                  their bios, achievements, and current teams.
                </p>
              </div>
              <div className="p-4 flex flex-col items-center justify-center space-y-3">
                <Image
                  src="/service/2D/icon2.png"
                  alt="2"
                  width={50}
                  height={100}
                  className=""
                />
                <h2 className="font-semibold mt-4 text-2xl">Games</h2>
                <p className="text-gray-300 text-center">
                  3D/2D games with full graphics including characters from
                  scratch idea for Mobile, PC, XBox, Steam.
                </p>
              </div>
              <div className="p-4 flex flex-col items-center justify-center space-y-3">
                <Image
                  src="/service/2D/icon4.png"
                  alt="4"
                  width={50}
                  height={100}
                  className=""
                />
                <h2 className="font-semibold mt-4 text-2xl">Art Work</h2>
                <p className="text-gray-300 text-center">
                  2D, 3D designs for games and apps including character,
                  environment modeling & animations.
                </p>
              </div>
              {/* 2nd row */}

              <div className="p-4 flex flex-col items-center justify-center space-y-3">
                <Image
                  src="/service/2D/icon3.png"
                  alt="3"
                  width={50}
                  height={100}
                  className=""
                />
                <h2 className="font-semibold mt-4 text-2xl">Gamification</h2>
                <p className="text-gray-300 text-center">
                  Professional learning through game concept, for kids as well
                  as adults.
                </p>
              </div>
              <div className="p-4 flex flex-col items-center justify-center space-y-3">
                <Image
                  src="/service/2D/icon5.png"
                  alt="5"
                  width={50}
                  height={100}
                  className=""
                />
                <h2 className="font-semibold mt-4 text-2xl">Marketing</h2>
                <p className="text-gray-300 text-center">
                  Mobile App and game marketing for effective business.
                </p>
              </div>
              <div className="p-4 flex flex-col items-center justify-center space-y-3">
                <Image
                  src="/service/2D/icon6.png"
                  alt="6"
                  width={50}
                  height={100}
                  className=""
                />
                <h2 className="font-semibold mt-4 text-2xl">
                  2D / 3D Animation
                </h2>
                <p className="text-gray-300 text-center">
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
