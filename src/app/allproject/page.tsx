/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";

function AllProject() {
  interface Project {
    _id: string;
    images: string | string[] | { url: string }[];
    title: string;
    //   description: string;
  }
  const [project, setProject] = useState<Project[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);

  const handleDelete = async (id: string) => {
    try {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`, {
      method: "DELETE",
    });
      setProject((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-white">All Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {project.map((proj) => {
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
          return (
            <div
              key={proj._id}
              className="bg-gray-900 rounded-lg shadow p-4 flex flex-col items-center"
            >
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={proj.title}
                  className="w-full h-40 object-cover rounded mb-4"
                />
              )}
              <h3 className="text-xl font-bold text-lime-400 mb-2">
                {proj.title}
              </h3>
              <div className="flex gap-2 mt-2">
                <button
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  onClick={() =>
                    (window.location.href = `/editproject/${proj._id}`)
                  }
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  onClick={() => handleDelete(proj._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllProject;
