import Image from "next/image";

function Technology() {
  return (
    <section
      className="relative w-full h-[530px] flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/tech/bg1.png')" }}
    >
      <div className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-black/70 via-black/40 to-transparent h-[530px] py-12">
        <p className="text-orange-500 text-center">#BehindTheGameplay</p>
        <div className="mt-3 w-full flex flex-col items-center justify-center">
          <div className="w-full max-w-6xl flex flex-col items-center justify-center">
            <span className="text-white text-5xl px-4 py-1 rounded-full font-medium backdrop-blur-sm text-center">
              TECHNOLOGIES
            </span>
            <div className="mt-10  grid grid-cols-4 justify-items-center items-center gap-x-16 gap-y-8 w-full">
              <div className="border border-lime-600 p-3 w-auto flex justify-center items-center">
                <Image
                  src="/tech/unreal.png"
                  alt="Unreal Engine"
                  width={100}
                  height={100}
                />
              </div>
              <div className="border border-lime-600 p-3 w-auto flex justify-center items-center ">
                <Image
                  src="/tech/unity 1.png"
                  alt="Unity"
                  width={100}
                  height={100}
                />
              </div>
              <div className="border border-lime-600 p-3 w-auto flex justify-center items-center ">
                <Image
                  src="/tech/photon 1.png"
                  alt="Photon"
                  width={100}
                  height={100}
                />
              </div>
              <div className="border border-lime-600 p-3 w-auto flex justify-center items-center ">
                <Image
                  src="/tech/maya 1.png"
                  alt="Maya"
                  width={100}
                  height={100}
                />
              </div>
              <div className="border border-lime-600 p-3 w-auto flex justify-center items-center ">
                <Image
                  src="/tech/vive 1.png"
                  alt="Vive"
                  width={100}
                  height={100}
                />
              </div>
              <div className="border border-lime-600 p-3 w-auto flex justify-center items-center ">
                <Image
                  src="/tech/oculus 1.png"
                  alt="Oculus"
                  width={100}
                  height={100}
                />
              </div>
              <div className="border border-lime-600 p-3 w-auto flex justify-center items-center ">
                <Image
                  src="/tech/z-brush 1.png"
                  alt="Z-Brush"
                  width={100}
                  height={100}
                />
              </div>
              <div className="border border-lime-600 p-3 w-auto flex justify-center items-center ">
                <Image
                  src="/tech/react 1.png"
                  alt="React"
                  width={100}
                  height={100}
                />
              </div>
              <div className="border border-lime-600 p-3 w-auto flex justify-center items-center ">
                <Image
                  src="/tech/amazon 1.png"
                  alt="Amazon"
                  width={100}
                  height={100}
                />
              </div>
              <div className="border border-lime-600 p-3 w-auto flex justify-center items-center ">
                <Image
                  src="/tech/scala 1.png"
                  alt="Scala"
                  width={100}
                  height={100}
                />
              </div>
              <div className="border border-lime-600 p-3 w-auto flex justify-center items-center ">
                <Image
                  src="/tech/nodejs 1.png"
                  alt="NodeJS"
                  width={100}
                  height={100}
                />
              </div>
              <div className="border border-lime-600 p-3 w-auto flex justify-center items-center ">
                <Image
                  src="/tech/gcloud 1.png"
                  alt="GCloud"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;
