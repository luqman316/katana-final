"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import ProjectLayout1 from "./ProjectLayout";
import { ProjectGridSkeleton } from "./ProjectSkeleton";

type ProjectsProps = {
  limit?: number;
};

function ProjectsGame({ limit }: ProjectsProps) {
  const [isLoading, setIsLoading] = useState(true);
  interface Project {
    _id: string;
    title: string;
    description: string;
    images: string | { url: string }[] | { url: string } | null;
  }

  const [projectList, setProjectList] = useState<Project[]>([]);
  const autoplayPlugin = Autoplay({ delay: 4000 });

  useEffect(() => {
    // fetch("http://localhost:3001/api/projects")
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
      .then((res) => res.json())
      .then((data) => {
        setProjectList(limit ? data.slice(0, limit) : data);
        setIsLoading(false);
      });
  }, [limit]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-4 text-white">
        <ProjectGridSkeleton count={limit || 4} />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-4 text-white"
    >
      <Carousel plugins={[autoplayPlugin]} className="relative w-full">
        <CarouselContent className="flex gap-2">
          {projectList.map((project, index) => {
            let imageUrl = undefined;
            if (Array.isArray(project.images)) {
              if (
                project.images[0] &&
                typeof project.images[0] === "object" &&
                project.images[0].url
              ) {
                imageUrl = project.images[0].url;
              } else if (typeof project.images[0] === "string") {
                imageUrl = project.images[0];
              }
            } else if (
              typeof project.images === "object" &&
              project.images !== null &&
              "url" in project.images
            ) {
              imageUrl = project.images.url;
            } else if (typeof project.images === "string") {
              imageUrl = project.images;
            }
            return (
              <CarouselItem
                key={project._id}
                className="basis-full min-[480px]:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <Link href={`/projects/${project._id}`}>
                  <div className="flex flex-col items-center gap-2">
                    {imageUrl && (
                      <Image
                        src={imageUrl}
                        alt={project.title}
                        width={400}
                        height={160}
                        className="rounded-md object-cover hidden"
                        unoptimized
                      />
                    )}
                    <ProjectLayout1
                      image={imageUrl || ""}
                      title={project.title}
                      description={project.description}
                      direction={index % 2 === 0 ? "left" : "right"}
                    />
                  </div>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden min-[480px]:flex" />
        <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden min-[480px]:flex" />
      </Carousel>

      {/* Mobile Navigation Dots (Optional) */}
      <div className="flex justify-center mt-4 min-[480px]:hidden">
        <div className="flex gap-2">
          {Array.from({ length: Math.min(projectList.length, 3) }).map(
            (_, i) => (
              <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
            )
          )}
        </div>
      </div>

      {/* More projects link */}
      <div className="mt-6 text-center ">
        <Link href="/games">
          <button className="bg-gradient-to-r from-red-800 to-yellow-400/40 px-8 py-2 cursor-pointer text-white font-semibold rounded-full mt-2">
            view all
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectsGame;
// className="text-xs animate-bounce bg-gradient-to-r bg-orange-500/10 from-yellow-500 text-gray-400"
