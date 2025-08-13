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

import { projects } from "@/data/projects";
import Autoplay from "embla-carousel-autoplay";
import ProjectLayout1 from "./ProjectLayout";
import { ProjectGridSkeleton } from "./ProjectSkeleton";

type ProjectsProps = {
  limit?: number;
};

function ProjectsGame({ limit }: ProjectsProps) {
  const [isLoading, setIsLoading] = useState(true);
  const projectList = limit ? projects.slice(0, limit) : projects;

  const autoplayPlugin = Autoplay({ delay: 4000 });

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
          {projectList.map((project, index) => (
            <CarouselItem
              key={project.slug}
              className="basis-full min-[480px]:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <Link href={`/projects/${project.slug}`}>
                <ProjectLayout1
                  image={
                    Array.isArray(project.image)
                      ? project.image[0]
                      : project.image
                  }
                  title={project.title}
                  description={project.description}
                  direction={index % 2 === 0 ? "left" : "right"}
                />
              </Link>
            </CarouselItem>
          ))}
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
          <button className="bg-gradient-to-r from-red-800 to-yellow-400/40 px-8 py-2 text-black font-semibold rounded-full mt-2">
            view all
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectsGame;
// className="text-xs animate-bounce bg-gradient-to-r bg-orange-500/10 from-yellow-500 text-gray-400"