/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type ProjectLayoutProps = {
  image: string;
  title: string;
  description: string;
  direction: string;
};

function ProjectLayout1({
  image,
  title,
  description,
  direction,
}: ProjectLayoutProps) {
  const isLeft = direction === "left";

  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-t bg-gray-600 from-black cursor-pointer group transition-all duration-200 h-[400px] sm:h-[450px] md:h-[500px] w-full max-w-full mx-auto">
      <div className="flex flex-col h-full relative p-0">
        {/* Image Container */}
        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden rounded-md z-10">
          <motion.div
            initial={{ y: 0, opacity: 1 }}
            whileHover={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-md w-full h-full"
              sizes="100vw"
            />
          </motion.div>
        </div>

        {/* Title & Description */}
        <div className="absolute bottom-2 left-0 right-0 px-8 py-12 text-center group-hover:bottom-[210px] sm:group-hover:bottom-[260px] md:group-hover:bottom-[310px] transition-all duration-200 ease-linear z-0">
          <h3 className="font-semibold text-lg sm:text-xl text-lime-500 group-hover:text-white">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-white group-hover:text-white line-clamp-2 mt-1">
            {description} for more onClick
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectLayout1;
