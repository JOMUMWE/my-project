import React, { Component } from "react";
import { motion } from "framer-motion";
export class Hero extends Component {
  render() {
    const img = require("../assets/images/IMG_20221120_131530.jpg");
    return (
      <div className="flex flex-row">
        <div
          className="rounded-md object-center object-scale-down overflow-hidden"
        >
          <img src={img} alt="a profile pic" className=" w-32"></img>
        </div>
        <div className="flex flex-col text-gray-300 ml-6 ">
          <p className="text-2xl font-bold mb-2 text-white">Joshua Muindi</p>
          <p className="font-semibold text-base">Developer</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 inline-block mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            <a
              className="font-semibold text-sm "
              href="https://maps.app.goo.gl/LX8AkezSaq5abSF76"
            >
              Nairobi,KE
            </a>
          </p>
        </div>
      </div>
    );
  }
}
