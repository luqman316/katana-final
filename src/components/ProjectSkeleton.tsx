"use client";

export default function ProjectSkeleton() {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-t from-gray-800 to-gray-700 animate-pulse h-[400px]">
      <div className="p-4 flex flex-col h-full">
        {/* Image Skeleton */}
        <div className="relative h-[300px] bg-gray-600 rounded-md mb-4"></div>

        {/* Title Skeleton */}
        <div className="space-y-2">
          <div className="h-6 bg-gray-600 rounded w-3/4"></div>
          <div className="h-4 bg-gray-600 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
}

export function ProjectGridSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-4 mt-4">
      {Array.from({ length: count }).map((_, index) => (
        <ProjectSkeleton key={index} />
      ))}
    </div>
  );
}
