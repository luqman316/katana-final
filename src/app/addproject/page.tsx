// function AddFormProject() {
//   return (
//     <>
//       <div className="mt-30 container mx-auto px-4 py-4 text-white flex flex-col justify-center items-center">
//         <h1 className="text-white">AddFormProject</h1>
//         <form>
//           <input
//             type="text"
//             placeholder="Title"
//             className="bg-gray-800 text-white p-2 rounded-lg m-2"
//           />
//           <br />
//           <textarea
//             placeholder="Description"
//             className="bg-gray-800 text-white p-2 rounded-lg m-2"
//           ></textarea>
//           <br />
//           <input
//             type="file"
//             multiple
//             name="images"
//             className="bg-gray-800 text-white p-2 rounded-lg m-2"
//           />
//           <br />
//           <button
//             type="submit"
//             className="bg-red-800 text-white p-2 rounded-lg hover:bg-red-500 m-2"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default AddFormProject;

"use client";
import { useState } from "react";

export default function ProjectUpload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!files || files.length < 1) {
      setMessage("Please select at least 1 image");
      return;
    }
    if (files.length > 10) {
      setMessage("Maximum 10 images allowed");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    Array.from(files).forEach((f) => formData.append("images", f));

    try {
      setLoading(true);
      setMessage(null);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Upload failed");
      }
      const data = await res.json();
      setMessage("Project created!");
      setTitle("");
      setDescription("");
      setFiles(null);
      console.log("Created:", data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setMessage(err.message);
      } else {
        setMessage("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 border mt-36 p-4 rounded"
    >
      <input
        className="block w-full border px-2 py-1 text-white"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="block w-full border px-2 py-1 text-white"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => setFiles(e.target.files)}
        className="block  text-sm text-gray-300  bg-blue-500 p-2 w-auto"
      />
      {files && (
        <p className="text-xs text-gray-400">{files.length} file(s) selected</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-white disabled:opacity-50\"
      >
        {loading ? "Uploading..." : "Create Project"}
      </button>
      {message && <p className="text-sm mt-2\">{message}</p>}
    </form>
  );
}
