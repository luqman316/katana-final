// "use client";
// import { useState } from "react";
// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <section className="text-white relative">
//       {/* Red Top Shape */}
//       <div className=" w-full flex justify-center relative">
//         <div className="max-w-6xl w-full px-4 py-4">
//           <div className="w-full relative">
//             <div className="absolute -top-5 left-0 right-0 flex justify-center">
//               <div className="bg-red-600 text-white font-bold text-xl px-8 py-5  rounded-b-[60px]">
//                 GET IN TOUCH
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Form Section */}
//       <div className="max-w-5xl mx-auto text-center pt-24 pb-12 px-4 sm:px-6 md:pt-28 md:pb-16">
//         <p className="mb-6 text-gray-300 text-sm sm:text-base md:text-lg">
//           Got a game idea? A project you’re ready to bring to life? Or just want
//           to chat about the future of gaming? We’d love to hear from you.
//         </p>

//         {/* Form */}
//         <form
//           className="space-y-4"
//           onSubmit={(e) => {
//             e.preventDefault();
//             // TODO: hook up submit handler
//           }}
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Name"
//               className="w-full border border-white/40 bg-black px-3 py-2 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               className="w-full border border-white/40 bg-black px-3 py-2 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
//             />
//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Phone"
//               className="w-full border border-white/40 bg-black px-3 py-2 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
//             />
//             <input
//               type="text"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               placeholder="Subject"
//               className="w-full border border-white/40 bg-black px-3 py-2 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
//             />
//           </div>

//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Message"
//             rows={6}
//             className="w-full border border-white/40 bg-black px-3 py-2 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
//           ></textarea>

//           <p className="text-sm text-gray-500">
//             * Your contact Information is secure with us. We do not sell or
//             share your Information with anyone else.
//           </p>

//           {/* Submit Button */}
//           <div className="flex justify-center md:justify-start">
//             <button
//               type="submit"
//               className="bg-gradient-to-r from-red-600 to-yellow-400 px-8 py-2 text-black font-semibold rounded-full mt-2 w-full sm:w-auto md:w-auto max-w-xs"
//             >
//               SEND MESSAGE
//             </button>
//           </div>
//         </form>

//         {/* Tagline */}
//         <p className="mt-6 text-gray-400">
//           WE WILL GET BACK TO YOU FASTER THAN A GAME RESPAWN.
//         </p>
//       </div>

//       {/* Bottom Section */}
//       <div className="w-full relative mt-10">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
//           {/* Contact Info */}
//           <div className="text-center md:text-left">
//             <h4 className="font-bold mb-1">Reach Us Anytime:</h4>
//             <p className="text-sm md:text-base">
//               📧 Email: contact@katanagames.org
//             </p>
//             <p className="text-sm md:text-base">📞 Phone: +92 300 0000 000</p>
//           </div>

//           {/* Social Links */}
//           <div className="mt-4 md:mt-0 text-center md:text-right">
//             <h4 className="font-bold">
//               Follow <span className="text-white">Us</span> On:
//             </h4>
//             <div className="flex gap-3 justify-center md:justify-end mt-2">
//               <a href="#" className="p-2 rounded" aria-label="Facebook">
//                 <FaFacebook className="text-blue-600 text-2xl" />
//               </a>
//               <a href="#" className="p-2 rounded" aria-label="X Twitter">
//                 <FaXTwitter className="text-2xl" />
//               </a>
//               <a href="#" className="p-2 rounded" aria-label="Instagram">
//                 <FaInstagram className="text-2xl text-fuchsia-500" />
//               </a>
//               <a href="#" className="p-2 rounded" aria-label="LinkedIn">
//                 <FaLinkedin className="text-2xl text-blue-700" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="bg-red-600 m-0 p-0">
//           <div
//             className="flex justify-center overflow-visible"
//             style={{ height: "30px", marginTop: "-1px" }}
//           >
//             <div
//               className="bg-red-600 text-white font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
//               style={{
//           position: "absolute",
//           left: "50%",
//           transform: "translateX(-50%)",
//           marginTop: "-30px",
//           height: "auto",
//           zIndex: 10,
//           bottom: 0,
//               }}
//             >
//               Copyright 2023 KATANA GAMES. All Rights Reserved.
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import emailjs from "emailjs-com";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0rj788j", // replace with your EmailJS service ID
        "template_b5drnwa", // replace with your EmailJS template ID
        formData,
        "6I9-dBNIRVoCX0HbB"  // replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("✅ Message Sent Successfully!");
          setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        },
        (error) => {
          setStatus("❌ Failed to send. Try again!");
          console.error(error);
        }
      );
  };

  return (
    <section className="text-white relative">
      {/* Red Top Shape */}
      <div className=" w-full flex justify-center relative">
        <div className="max-w-6xl w-full px-4 py-4">
          <div className="w-full relative">
            <div className="absolute -top-5 left-0 right-0 flex justify-center">
              <div className="bg-red-600 text-white font-bold text-xl px-8 py-5  rounded-b-[60px]">
                GET IN TOUCH
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Form Section */}
      <div className="max-w-5xl mx-auto text-center pt-24 pb-12 px-4 sm:px-6 md:pt-28 md:pb-16">
        <p className="mb-6 text-gray-300 text-sm sm:text-base md:text-lg">
          Got a game idea? A project you’re ready to bring to life? Or just want
          to chat about the future of gaming? We’d love to hear from you.
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={sendEmail}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full border border-white/40 bg-black px-3 py-2 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full border border-white/40 bg-black px-3 py-2 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full border border-white/40 bg-black px-3 py-2 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full border border-white/40 bg-black px-3 py-2 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={6}
            required
            className="w-full border border-white/40 bg-black px-3 py-2 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          ></textarea>

          <p className="text-sm text-gray-500">
            * Your contact Information is secure with us. We do not sell or
            share your Information with anyone else.
          </p>

          {/* Submit Button */}
          <div className="flex justify-center md:justify-start">
            <button
              type="submit"
              className="bg-gradient-to-r from-red-600 to-yellow-400 px-8 py-2 text-black font-semibold rounded-full mt-2 w-full sm:w-auto md:w-auto max-w-xs"
            >
              SEND MESSAGE
            </button>
          </div>

          {status && <p className="text-green-400 mt-2">{status}</p>}
        </form>

        {/* Tagline */}
        <p className="mt-6 text-gray-400">
          WE WILL GET BACK TO YOU FASTER THAN A GAME RESPAWN.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="w-full relative mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-1">Reach Us Anytime:</h4>
            <p className="text-sm md:text-base">
              📧 Email: contact@katanagames.org
            </p>
            <p className="text-sm md:text-base">📞 Phone: +92 300 0000 000</p>
          </div>

          {/* Social Links */}
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <h4 className="font-bold">
              Follow <span className="text-white">Us</span> On:
            </h4>
            <div className="flex gap-3 justify-center md:justify-end mt-2">
              <a href="#" className="p-2 rounded" aria-label="Facebook">
                <FaFacebook className="text-blue-600 text-2xl" />
              </a>
              <a href="#" className="p-2 rounded" aria-label="X Twitter">
                <FaXTwitter className="text-2xl" />
              </a>
              <a href="#" className="p-2 rounded" aria-label="Instagram">
                <FaInstagram className="text-2xl text-fuchsia-500" />
              </a>
              <a href="#" className="p-2 rounded" aria-label="LinkedIn">
                <FaLinkedin className="text-2xl text-blue-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-red-600 m-0 p-0">
          <div
            className="flex justify-center overflow-visible"
            style={{ height: "30px", marginTop: "-1px" }}
          >
            <div
              className="bg-red-600 text-white font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                marginTop: "-30px",
                height: "auto",
                zIndex: 10,
                bottom: 0,
              }}
            >
              Copyright 2023 KATANA GAMES. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
