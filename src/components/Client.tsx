// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const client = [
//   { image: "/client/1.png" },
//   { image: "/client/2.png" },
//   { image: "/client/3.png" },
//   { image: "/client/4.png" },
//   { image: "/client/5.png" },
//   { image: "/client/6.png" },
//   { image: "/client/7.png" },
//   { image: "/client/8.png" },
// ];

// function Client() {
//   return (
//     <section className="min-h-screen flex items-center justify-center bg- py-16 px-2">
//       <div className="w-full max-w-6xl mx-auto rounded-3xl  backdrop-blur-md p-8 md:p-16 flex flex-col items-center">
//         {/* Animated Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="text-4xl md:text-5xl font-extrabold uppercase text-center mb-14 tracking-wider text-white drop-shadow-lg"
//         >
//           <span className="bg-gradient-to-r from-lime-400 via-white to-lime-400 bg-clip-text text-transparent animate-pulse">
//             Clients
//           </span>
//         </motion.h1>
//         {/* Animated Grid */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={{
//             hidden: {},
//             visible: {
//               transition: {
//                 staggerChildren: 0.09,
//               },
//             },
//           }}
//           className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 md:gap-10 w-full"
//         >
//           {client.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               whileHover={{ scale: 1.13, rotate: -2 }}
//               transition={{
//                 duration: 0.4,
//                 delay: index * 0.09,
//                 ease: "easeOut",
//               }}
//               className="flex flex-col items-center justify-center bg-white/5 hover:bg-red-400/10 rounded-2xl shadow-lg hover:shadow-lime-400/30 p-5 md:p-7 transition-all duration-300 cursor-pointer group border border-white/10"
//             >
//               <Image
//                 src={item.image}
//                 alt={`Client ${index + 1}`}
//                 width={120}
//                 height={60}
//                 className="object-contain h-12 sm:h-16 lg:h-14 xl:h-20 w-auto max-w-[100px] sm:max-w-[120px] lg:max-w-[120px] xl:max-w-[140px] max-h-[48px] sm:max-h-[64px] lg:max-h-[60px] xl:max-h-[80px] group-hover:scale-110 group-hover:drop-shadow-[0_2px_16px_lime] transition-all duration-300"
//                 priority
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Client;

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
    <section className="min-h-screen flex items-center justify-center py-10 px-4 sm:px-6 md:px-8 lg:px-2">
      <div className="w-full max-w-6xl mx-auto rounded-3xl backdrop-blur-md p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-center">
        
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-center mb-10 sm:mb-12 md:mb-14 tracking-wider text-white drop-shadow-lg"
        >
          <span className="bg-gradient-to-r from-lime-400 via-white to-lime-400 bg-clip-text text-transparent animate-pulse">
            Clients
          </span>
        </motion.h1>

        {/* Animated Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.09 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full"
        >
          {client.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.13, rotate: -2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.09,
                ease: "easeOut",
              }}
              className="flex flex-col items-center justify-center bg-white/5 hover:bg-red-400/10 rounded-2xl shadow-lg hover:shadow-lime-400/30 p-4 sm:p-5 md:p-6 lg:p-7 transition-all duration-300 cursor-pointer group border border-white/10"
            >
              <Image
                src={item.image}
                alt={`Client ${index + 1}`}
                width={120}
                height={60}
                className="object-contain h-10 sm:h-14 md:h-16 lg:h-14 xl:h-20 w-auto 
                  max-w-[80px] sm:max-w-[110px] md:max-w-[120px] lg:max-w-[120px] xl:max-w-[140px]
                  group-hover:scale-110 group-hover:drop-shadow-[0_2px_16px_lime] transition-all duration-300"
                priority
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Client;
