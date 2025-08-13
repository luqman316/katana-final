"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const client = [
  { image: "/client/1.png" },
  { image: "/client/2.png" },
  { image: "/client/3.png" },
  { image: "/client/4.png" },
  { image: "/client/5.png" },
  { image: "/client/6.png" },
  { image: "/client/7.png" },
  { image: "/client/8.png" },
];

function Client() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 lg:px-14 py-4 lg:py-6 flex items-center">
        <div className="w-full">
          {/* 1st div */}
          <div>
            <h1 className="text-5xl text-white font-medium uppercase text-center mb-14">
              Clients
            </h1>
          </div>
          {/* 2nd div */}
          <div className="mt-6 lg:mt-10 flex flex-col  justify-center">
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center mt-8 lg:mt-14 gap-4 sm:gap-6 lg:gap-x-8 lg:gap-y-10 max-w-4xl">
                {client.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-center items-center p-3 sm:p-4 lg:p-2  hover:rounded-lg hover:shadow-2xl transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileHover={{
                      scale: 1.08,
                      boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={`Client ${index + 1}`}
                      width={120}
                      height={60}
                      className="object-contain h-12 sm:h-16 lg:h-14 xl:h-20 w-auto max-w-[100px] sm:max-w-[120px] lg:max-w-[120px] xl:max-w-[140px] max-h-[48px] sm:max-h-[64px] lg:max-h-[60px] xl:max-h-[80px] transition-all duration-300"
                      priority
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
