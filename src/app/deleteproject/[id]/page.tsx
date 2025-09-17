"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function DeleteProject() {
  const params = useParams();
  const router = useRouter();
  interface Project {
    id: string;
    title: string;
    // Add other fields as needed
  }

  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, [params.id]);

  const handleDelete = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${params.id}`, {
      method: "DELETE",
    });
    router.push("/allproject");
  };

  const [showModal, setShowModal] = useState(true);

  if (!project) return <div className="text-white">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4">Delete Project</h2>
            <p className="mb-6">
              Are you sure you want to delete{" "}
              <span className="font-bold">{project.title}</span>?
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={async () => {
                  await handleDelete();
                  setShowModal(false);
                }}
              >
                Yes, Delete
              </button>
              <button
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                onClick={() => {
                  setShowModal(false);
                  router.push("/allproject");
                }}
              >
                No, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeleteProject;
