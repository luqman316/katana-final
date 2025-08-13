"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Autoplay from "embla-carousel-autoplay";

const autoplayPlugin = Autoplay({ delay: 3000 });

function Reviews() {
  const reviews = [
    {
      name: "Cross Box Games",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima libero ad odit delectus eligendi eius incidunt id quam a.",
    },
    {
      name: "Max Games Production",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima libero ad odit delectus eligendi eius incidunt id quam a.",
    },
    {
      name: "Frank Vidal",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima libero ad odit delectus eligendi eius incidunt id quam a.",
    },
    {
      name: "Tech Tycoon Studio",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima libero ad odit delectus eligendi eius incidunt id quam a.",
    },
    {
      name: "UNICEF",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima libero ad odit delectus eligendi eius incidunt id quam a.",
    },
    {
      name: "GenI-Team",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima libero ad odit delectus eligendi eius incidunt id quam a.",
    },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-14 sm:px-4 lg:px-14 py-3 sm:py-4 lg:py-6 flex flex-col items-center justify-center">
        <div className="w-full">
          {/* Heading */}
          <div>
            <h1 className="text-5xl uppercase font-medium text-white text-center mb-14">TESTIMONIALS</h1>
          </div>

          {/* Carousel */}
          <Carousel
            plugins={[autoplayPlugin]}
            className="relative w-full flex justify-center max-w-7xl mx-auto"
          >
            <CarouselContent className="flex gap-1 sm:gap-2 lg:gap-4 p-2 sm:p-4 lg:p-10">
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 lg:basis-1/3 justify-center flex"
                >
                  <div className="bg-transparent   border shadow-lg border-s-fuchsia-600 shadow-fuchsia-900 border-e-fuchsia-600 border-t-fuchsia-600 border-b-fuchsia-600  p-4 sm:p-6 md:p-8 lg:p-14 rounded-xl text-center h-full flex flex-col justify-center min-h-[250px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[360px] w-full">
                    <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-red-600 mb-2 sm:mb-3 lg:mb-4">
                      {review.name}
                    </h1>
                    <p className="text-gray-300 mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm md:text-base leading-relaxed px-1">
                      {review.content}
                    </p>
                    <div className="flex justify-center gap-0.5 sm:gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon
                          key={i}
                          icon={faStar}
                          className="text-xs sm:text-sm md:text-base"
                        />
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <CarouselPrevious className="absolute left-1 sm:left-2 lg:left-0 top-1/2 -translate-y-1/2 z-10 h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
            <CarouselNext className="absolute right-1 sm:right-2 lg:right-0 top-1/2 -translate-y-1/2 z-10 h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
