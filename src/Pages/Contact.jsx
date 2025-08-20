/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      {/* Hero Section */}
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Have questions or need help? Get in touch with us anytime.
        </p>
      </motion.div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.form
          className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="4"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            You can reach out to us anytime via email, phone, or by visiting our
            office.
          </p>

          <div className="flex items-center space-x-4">
            <Phone className="text-purple-600" />
            <span className="text-gray-700">+91 98323 95096</span>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="text-purple-600" />
            <span className="text-gray-700">sm2733@it.jgec.ac.in</span>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-purple-600" />
            <span className="text-gray-700">Kolkata, India</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
