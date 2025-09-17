"use client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";
const autoplayPlugin = Autoplay({ delay: 6000 });
type Project = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  images?: { key: string; url: string }[];
  videos?: string[];
  tags?: string[];
};

export default function ProjectPage() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      setLoading(true);
      try {
        // Fetch all projects from API
        const res = await fetch("http://localhost:3001/api/projects");
        const data = await res.json();
        // Find project by slug or id
        const found = data.find(
          (p: Project) => p._id === params.slug || p.slug === params.slug
        );
        if (found) {
          setProject(found);
        }
      } catch (err) {
        setProject(null);
      }
      setLoading(false);
    }
    fetchProject();
  }, [params.slug]);

  if (loading)
    return (
      <div className="text-white flex justify-center items-center">
        <AiOutlineLoading3Quarters className="animate-spin" />
      </div>
    );
  if (!project)
    return (
      <div className="text-white flex justify-center items-center">
        Project not found
      </div>
    );

  return (
    <div className="container mx-auto px-14 sm:px-4 py-6 sm:py-10 md:py-14 lg:py-20">
      <div className="text-white w-full  ">
        <h1 className="text-xl xs:text-2xl mt-36 text-lime-500 sm:text-4xl md:text-5xl font-extrabold underline underline-offset-8 mb-3 sm:mb-4 text-balance break-words">
          {project.title}
        </h1>

        {/* Multiple Images Carousel */}
        {project.images && project.images.length > 0 && (
          <Carousel
            plugins={[autoplayPlugin]}
            className="w-full overflow-hidden shadow-2xl px-14 mt-4"
          >
            <CarouselContent>
              {project.images.map((imgObj, i) => (
                <CarouselItem key={i}>
                  <div className="relative w-full h-[220px] xs:h-[300px] mt-4  sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
                    <Image
                      src={imgObj.url}
                      alt={`${project.title} image ${i + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                      quality={100}
                      className="rounded-md"
                      priority={i === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="!left-2 sm:!left-4 !bg-white !text-black !shadow-md hover:!bg-gray-100" />
            <CarouselNext className="!right-2 sm:!right-4 !bg-white !text-black !shadow-md hover:!bg-gray-100" />
          </Carousel>
        )}

        <p className="text-gray-300 text-balance mt-6 mb-4 text-base sm:text-lg md:text-xl">
          {project.description}
        </p>

        {/* Multiple Videos */}
        {project.videos && project.videos.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 w-full mt-8 mb-4">
            {project.videos.map((vid, i) => (
              <div
                key={i}
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[350px] rounded-md overflow-hidden"
              >
                <video
                  src={vid}
                  loop
                  autoPlay={
                    typeof window !== "undefined" && window.innerWidth >= 768
                  }
                  muted
                  // controls
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag: string) => (
            <span
              key={tag}
              className="bg-gray-700 text-white text-xs sm:text-sm px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
