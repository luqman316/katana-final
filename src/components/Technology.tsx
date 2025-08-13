// "use client";
// import Image from "next/image";

// function Technology() {
//   return (
//     <section
//       className="relative w-full h-[530px] flex flex-col items-center justify-center bg-cover bg-center"
//       style={{ backgroundImage: "url('/tech/bg1.png')" }}
//     >
//       <div className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-black/70 via-black/40 to-transparent h-[530px] py-12">
//         <p className="text-orange-500 text-center">#BehindTheGameplay</p>
//         <div className="mt-3 w-full flex flex-col items-center justify-center">
//           <div className="w-full max-w-6xl flex flex-col items-center justify-center">
//             <span className="text-white text-5xl px-4 py-1 rounded-full font-medium backdrop-blur-sm text-center">
//               TECHNOLOGIES
//             </span>
//             <div className="mt-10  grid grid-cols-4 justify-items-center items-center gap-x-16 gap-y-8 w-full">
//               <div className="border border-lime-600 p-3 w-auto flex justify-center items-center">
//                 <Image
//                   src="/tech/unreal.png"
//                   alt="Unreal Engine"
//                   width={100}
//                   height={100}
//                 />
//               </div>
//               <div className="border border-lime-600 p-3 w-auto flex justify-center items-center ">
//                 <Image
//                   src="/tech/unity 1.png"
//                   alt="Unity"
//                   width={100}
//                   height={100}
//                 />
//               </div>
//               <div className="border border-lime-600 p-3 w-auto flex justify-center items-center ">
//                 <Image
//                   src="/tech/photon 1.png"
//                   alt="Photon"
//                   width={100}
//                   height={100}
//                 />
//               </div>
//               <div className="border border-lime-600 p-3 w-auto flex justify-center items-center ">
//                 <Image
//                   src="/tech/maya 1.png"
//                   alt="Maya"
//                   width={100}
//                   height={100}
//                 />
//               </div>
//               <div className="border border-lime-600 p-3 w-auto flex justify-center items-center ">
//                 <Image
//                   src="/tech/vive 1.png"
//                   alt="Vive"
//                   width={100}
//                   height={100}
//                 />
//               </div>
//               <div className="border border-lime-600 p-3 w-auto flex justify-center items-center ">
//                 <Image
//                   src="/tech/oculus 1.png"
//                   alt="Oculus"
//                   width={100}
//                   height={100}
//                 />
//               </div>
//               <div className="border border-lime-600 p-3 w-auto flex justify-center items-center ">
//                 <Image
//                   src="/tech/z-brush 1.png"
//                   alt="Z-Brush"
//                   width={100}
//                   height={100}
//                 />
//               </div>
//               <div className="border border-lime-600 p-3 w-auto flex justify-center items-center ">
//                 <Image
//                   src="/tech/react 1.png"
//                   alt="React"
//                   width={100}
//                   height={100}
//                 />
//               </div>
//               <div className="border border-lime-600 p-3 w-auto flex justify-center items-center ">
//                 <Image
//                   src="/tech/amazon 1.png"
//                   alt="Amazon"
//                   width={100}
//                   height={100}
//                 />
//               </div>
//               <div className="border border-lime-600 p-3 w-auto flex justify-center items-center ">
//                 <Image
//                   src="/tech/scala 1.png"
//                   alt="Scala"
//                   width={100}
//                   height={100}
//                 />
//               </div>
//               <div className="border border-lime-600 p-3 w-auto flex justify-center items-center ">
//                 <Image
//                   src="/tech/nodejs 1.png"
//                   alt="NodeJS"
//                   width={100}
//                   height={100}
//                 />
//               </div>
//               <div className="border border-lime-600 p-3 w-auto flex justify-center items-center ">
//                 <Image
//                   src="/tech/gcloud 1.png"
//                   alt="GCloud"
//                   width={100}
//                   height={100}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Technology;

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function Technology() {
  // Logo list for mapping
  const logos = [
    { src: "/tech/unreal.png", alt: "Unreal Engine" },
    { src: "/tech/unity 1.png", alt: "Unity" },
    { src: "/tech/photon 1.png", alt: "Photon" },
    { src: "/tech/maya 1.png", alt: "Maya" },
    { src: "/tech/vive 1.png", alt: "Vive" },
    { src: "/tech/oculus 1.png", alt: "Oculus" },
    { src: "/tech/z-brush 1.png", alt: "Z-Brush" },
    { src: "/tech/react 1.png", alt: "React" },
    { src: "/tech/amazon 1.png", alt: "Amazon" },
    { src: "/tech/scala 1.png", alt: "Scala" },
    { src: "/tech/nodejs 1.png", alt: "NodeJS" },
    { src: "/tech/gcloud 1.png", alt: "GCloud" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center   text-white">
      {/* <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-orange-500 text-center bottom-0"
      >
        #BehindTheGameplay
      </motion.p> */}
      <section
        className="relative w-full h-[580px]  flex flex-col items-center justify-center bg-cover bg-center  "
        style={{ backgroundImage: "url('/tech/bg1.png')" }}
      >
        <div className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-black/70 via-black/40 to-transparent h-[580px] py-12">
          {/* Small hashtag animation */}

          <div className="mt-3 w-full flex flex-col items-center justify-center">
            <div className="w-full max-w-6xl flex flex-col items-center justify-center">
              {/* Title animation */}
              <motion.p
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-md rounded-t-[60px] bg-[#050505] px-16 py-3 rounded-full font-medium backdrop-blur-sm text-center absolute left-1/2 -translate-x-1/2 top-0 mt-0"
                style={{ marginTop: 0 }}
                aria-hidden="true"
              >
                <span className="bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent">#BehindTheGameplay</span>
              </motion.p>
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-white text-5xl  px-8 py-3 rounded-full font-medium backdrop-blur-sm text-center mt-24"
              >
                TECHNOLOGIES
              </motion.span>

              {/* Grid animation */}
              <motion.div
                initial={{ x: -80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="mt-10 grid grid-cols-4 justify-items-center items-center gap-x-16 gap-y-8 w-full"
              >
                {logos.map((logo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    className="border border-lime-600 p-3 w-auto flex justify-center items-center hover:bg-lime-500/10 transition-colors"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={100}
                      height={100}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Technology;
