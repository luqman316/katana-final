"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function EditProject() {
  const params = useParams();
  const router = useRouter();
  interface Project {
    title: string;
    description: string;
  }

  const [project, setProject] = useState<Project | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/api/projects/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
        setTitle(data.title);
        setDescription(data.description);
      });
  }, [params.id]);

  const handleUpdate = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });
    router.push("/allproject");
  };

  if (!project) return <div className="text-white">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8 text-white mt-30 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-400">Edit Project</h2>
      <div className="mb-6">
        <label className="block mb-2 text-lg font-medium">Title</label>
        <input
          className="w-full p-3 rounded-lg text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter project title"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-lg font-medium">Description</label>
        <textarea
          className="w-full p-3 rounded-lg text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter project description"
          rows={5}
        />
      </div>
      <button
        className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-800 transition duration-300"
        onClick={handleUpdate}
      >
        Update Project
      </button>
    </div>
  );
}

export default EditProject;
