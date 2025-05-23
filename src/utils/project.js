import React, { Component } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

export class Project extends Component {
  render() {
    const technologies = [
      "React",
      "Node.js",
      "Socket.IO",
      "MongoDB",
      "Express",
      "JWT",
      "TailwindCSS",
    ];

    return (
      <motion.div
        className="bg-neutral-950 rounded-lg p-5 mb-4 border border-gray-600 relative group overflow-hidden"
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.25 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="flex flex-col relative">
          <div className="flex flex-row justify-between items-center mb-3">
            <h4 className="text-white font-semibold text-lg">CollabCode</h4>
            <div className="flex space-x-3">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/JOMUMWE/CollabCode.git"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://jomumwe-collabcode.onrender.com"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbWorldWww className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          

          <p className="text-gray-400 text-sm font-light mb-4">
            A real-time collaborative code editor that enables multiple users to
            write, edit, and debug code together seamlessly. Built as a
            fourth-year final project, it features live collaboration, syntax
            highlighting, and secure user authentication.
          </p>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-xs font-medium text-white bg-neutral-800 px-3 py-1 rounded-full border border-gray-700 hover:border-gray-500 hover:bg-neutral-700 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }
}
