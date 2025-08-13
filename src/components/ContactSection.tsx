"use client";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className=" text-white relative">
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
      <div className="max-w-5xl mx-auto text-center pt-20 pb-10 px-4">
        <p className="mb-6 text-gray-300">
          Got a game idea? A project you’re ready to bring to life? Or just want
          to chat about the future of gaming? We’d love to hear from you.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border border-white/40 bg-black px-3 py-2 text-white"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border border-white/40 bg-black px-3 py-2 text-white"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full border border-white/40 bg-black px-3 py-2 text-white"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full border border-white/40 bg-black px-3 py-2 text-white"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={5}
            className="w-full border border-white/40 bg-black px-3 py-2 text-white"
          ></textarea>

          <p className="text-sm text-gray-500">
            * Your contact Information is secure with us. We do not sell or
            share your Information with anyone else.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-red-600 to-yellow-400 px-8 py-2 text-black font-semibold rounded-full mt-2"
          >
            SEND MESSAGE
          </button>
        </form>

        {/* Tagline */}
        <p className="mt-6 text-gray-400">
          WE WILL GET BACK TO YOU FASTER THAN A GAME RESPAWN.
        </p>
      </div>

      {/* Bottom Section */}
    <div className="w-full relative mt-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        {/* Contact Info */}
        <div className="text-center md:text-left">
        <h4 className="font-bold mb-1">Reach Us Anytime:</h4>
        <p>📧 Email: contact@katanagames.org</p>
        <p>📞 Phone: +92 300 0000 000</p>
        </div>

        {/* Social Links */}
        <div className="mt-4 md:mt-0 text-center md:text-right">
        <h4 className="font-bold">
          Follow <span className="text-white">Us</span> On:
        </h4>
        <div className="flex gap-3 justify-center md:justify-end mt-2">
          <a href="#" className=" p-2 rounded">
            <FaFacebook className="text-blue-600 text-2xl" />
          </a>
          <a href="#" className=" p-2 rounded">
            <FaXTwitter className="text-2xl" />
          </a>
          <a href="#" className=" p-2 rounded">
            <FaInstagram className="text-2xl text-fuchsia-500" />
          </a>
          <a href="#" className=" p-2 rounded">
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
          className="bg-red-700 text-white font-bold text-xl px-8 py-5 rounded-t-[60px]"
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
