import React, { Component } from "react";
import { FaGithubSquare } from "react-icons/fa";
import {motion} from "framer-motion";

export class Foot extends Component {
  render() {
    const icon = <FaGithubSquare className="w-5 h-5" />;
    return (
      <footer className="mb-5">
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="flex flex-row border rounded-full text-gray-400 p-2 mt-8 mx-auto hover:bg-neutral-950 hover:text-white border-gray-600 w-fit text-sm"
        >
          {icon}
          <a className="ml-2" href="https://github.com/JOMUMWE">
            Github
          </a>
        </motion.div>
      </footer>
    );
  }
}
