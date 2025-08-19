"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function Technology() {
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
    <div className="mt-10 flex flex-col items-center justify-center text-white">
      <section
        className="relative w-full min-h-[580px] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/tech/bg1.png')" }}
      >
        <div className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-black/70 via-black/40 to-transparent min-h-[580px] py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl flex flex-col items-center justify-center">
            {/* Hashtag */}
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-sm sm:text-base bg-[#050505] px-6 sm:px-10 py-2 rounded-full font-medium backdrop-blur-sm text-center absolute left-1/2 -translate-x-1/2 top-0"
            >
              <span className="bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent">
                #BehindTheGameplay
              </span>
            </motion.p>

            {/* Title */}
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-white text-3xl sm:text-4xl lg:text-5xl px-6 sm:px-8 py-3 rounded-full font-medium backdrop-blur-sm text-center mt-24"
            >
              TECHNOLOGIES
            </motion.span>

            {/* Grid */}
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="
                mt-10 
                grid 
                grid-cols-2 
                sm:grid-cols-3 
                md:grid-cols-4 
                justify-items-center 
                items-center 
                gap-x-6 sm:gap-x-8 md:gap-x-16 
                gap-y-6 sm:gap-y-8 
                w-full
              "
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
                  className="border border-lime-600 p-3 w-auto flex justify-center items-center hover:bg-lime-500/10 transition-colors rounded-lg"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={80}
                    height={80}
                    className="sm:w-[90px] sm:h-[90px] lg:w-[100px] lg:h-[100px]"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Technology;
