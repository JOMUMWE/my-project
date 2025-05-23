import React, { Component } from "react";
import { motion } from "framer-motion";

export class Edu extends Component {
  render() {
    const { year, institution, description } = this.props;
    return (
      <motion.div
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.25 }}
        className="w-full bg-neutral-950 min-h-32 rounded-lg p-5 mb-4 border border-gray-600 relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="flex flex-row justify-between relative">
          <div className="text-white font-semibold group-hover:text-white transition-colors duration-300">
            {institution}
          </div>
          <div className="font-light text-gray-400 text-sm">{year}</div>
        </div>
        <div className="text-gray-400 text-sm font-medium mt-3 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </div>
      </motion.div>
    );
  }
}
