/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// function WorkPage() {
//   interface Project {
//     _id: string;
//     images: string | string[] | { url: string }[];
//     title: string;
//     description: string;
//   }

//   const [project, setProject] = useState<Project[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:3001/api/projects")
//       .then((res) => res.json())
//       .then((data) => setProject(data));
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="container mx-auto px-14 sm:px-4 py-6 sm:py-8 mt-36 text-white "
//     >
//       <div className="flex  justify-between items-center ">
//         <h1></h1>
//         <h2 className="text-center uppercase text-4xl sm:text-5xl mb-12 font-extrabold tracking-wider text-white drop-shadow-lg">
//           Projects
//         </h2>
//         <Link
//           className=" bg-red-800 text-white p-2 rounded-lg hover:bg-red-500 text-lg"
//           href={"/addproject"}
//         >
//           Add Project
//         </Link>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4 sm:mt-8">
//         {project.length > 0 &&
//           project.map((proj) => {
//             let imageUrl = undefined;
//             if (Array.isArray(proj.images)) {
//               if (
//                 proj.images[0] &&
//                 typeof proj.images[0] === "object" &&
//                 proj.images[0].url
//               ) {
//                 imageUrl = proj.images[0].url;
//               } else if (typeof proj.images[0] === "string") {
//                 imageUrl = proj.images[0];
//               }
//             } else if (
//               typeof proj.images === "object" &&
//               proj.images !== null &&
//               "url" in proj.images
//             ) {
//               imageUrl = (proj.images as { url: string }).url;
//             } else if (typeof proj.images === "string") {
//               imageUrl = proj.images;
//             }
//             return (
//               <div
//                 key={proj._id}
//                 className="flex flex-col items-center gap-4 bg-black rounded-lg p-4 shadow"
//               >
//                 {imageUrl && (
//                   <Image
//                     src={imageUrl}
//                     alt={proj.title}
//                     width={400}
//                     height={160}
//                     className="w-full h-40 object-cover"
//                     unoptimized
//                   />
//                 )}
//                 <h3 className="text-2xl font-bold mt-2">{proj.title}</h3>
//                 <p className="text-base text-gray-300 text-center max-w-xl">
//                   {proj.description}
//                 </p>
//               </div>
//             );
//           })}
//       </div>
//     </motion.div>
//   );
// }

// export default WorkPage;

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function WorkPage() {
  interface Project {
    _id: string;
    images: string | string[] | { url: string }[];
    title: string;
    description: string;
  }

  const [project, setProject] = useState<Project[]>([]);

  useEffect(() => {
    // fetch("https://katana-backend.vercel.app/api/projects")
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-14 sm:px-4 py-6 sm:py-8 mt-36 text-white "
    >
      <div className="flex justify-center items-center">
        <h1></h1>
        <h2 className="text-center uppercase text-4xl sm:text-5xl mb-12 font-extrabold tracking-wider text-white drop-shadow-lg">
          Projects
        </h2>
       
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4 sm:mt-8">
        {project.length > 0 &&
          project.map((proj, index) => {
            let imageUrl: string | undefined = undefined;

            if (Array.isArray(proj.images)) {
              if (
                proj.images[0] &&
                typeof proj.images[0] === "object" &&
                proj.images[0].url
              ) {
                imageUrl = proj.images[0].url;
              } else if (typeof proj.images[0] === "string") {
                imageUrl = proj.images[0];
              }
            } else if (
              typeof proj.images === "object" &&
              proj.images !== null &&
              "url" in proj.images
            ) {
              imageUrl = (proj.images as { url: string }).url;
            } else if (typeof proj.images === "string") {
              imageUrl = proj.images;
            }

            const isLeft = index % 2 === 0;

            return (
              <Link
                key={proj._id}
                href={`/projects/${proj._id}`}
                className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-t bg-gray-600 from-black cursor-pointer group transition-all duration-200 h-[400px] sm:h-[450px] md:h-[500px] w-full max-w-full mx-auto"
              >
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
                        src={imageUrl || "/fallback.jpg"}
                        alt={proj.title}
                        fill
                        className="object-cover rounded-md w-full h-full"
                        sizes="100vw"
                        unoptimized
                      />
                    </motion.div>
                  </div>

                  {/* Title & Description */}
                  <div className="absolute bottom-2 left-0 right-0 px-8 py-12 text-center group-hover:bottom-[210px] sm:group-hover:bottom-[260px] md:group-hover:bottom-[310px] transition-all duration-200 ease-linear z-0">
                    <h3 className="font-semibold text-lg sm:text-xl text-lime-500 group-hover:text-white">
                      {proj.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white group-hover:text-white line-clamp-2 mt-1">
                      {proj.description} for more onClick
                    </p>
                  </div>

                  <span className="absolute bottom-2 left-2 z-20 px-2 py-1 bg-lime-500 text-black rounded-full shadow-lg text-sm font-semibold transition-transform duration-200 group-hover:scale-110">
                    Click
                  </span>
                </div>
              </Link>
            );
          })}
      </div>
    </motion.div>
  );
}

export default WorkPage;
