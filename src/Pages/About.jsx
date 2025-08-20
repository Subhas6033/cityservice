/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react"

const About = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
      {/* Hero Section */}
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Connecting People with Trusted Local Services — Anytime, Anywhere
        </p>
      </motion.div>

      {/* About Content */}
      <motion.div
        className="max-w-4xl mx-auto mt-10 space-y-6 text-gray-700 leading-relaxed text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p className="text-lg">
          Welcome to our service-based e-commerce platform designed to make life
          easier when you’re in an unfamiliar area. Whether you need a{" "}
          <span className="font-semibold text-gray-900">
            driver, plumber, sweeper, or water supplier
          </span>
          —we’ve got you covered.
        </p>
        <p className="text-lg">
          Our platform seamlessly connects{" "}
          <span className="font-semibold text-gray-900">service seekers</span>{" "}
          with{" "}
          <span className="font-semibold text-gray-900">
            local service providers
          </span>{" "}
          in real-time. Users can log in, search, and instantly book services,
          while providers can showcase their offerings and get hired directly.
        </p>
        <p className="text-lg">
          By bridging the gap between people who need services and those who
          provide them, we’re creating a{" "}
          <span className="font-semibold text-gray-900">
            convenient, fast, and trustworthy digital marketplace
          </span>{" "}
          for essential daily needs.
        </p>
      </motion.div>

      {/* Mission & Vision Section */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To simplify access to essential services by connecting people with
            trusted local providers quickly and effortlessly, no matter where
            they are.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To become the most reliable and widely-used platform for hiring
            everyday services, empowering both users and providers with
            opportunities and convenience.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
