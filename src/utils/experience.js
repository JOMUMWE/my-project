import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-600 ml-2.5" />

      <div className="relative">
        <motion.div
          className="bg-neutral-950 rounded-lg p-5 mb-4 border border-gray-600 ml-8 group hover:border-gray-500 transition-colors duration-300 relative overflow-hidden"
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.25 }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Timeline dot */}
          <div className="absolute left-0 w-5 h-5 bg-neutral-950 border-2 border-gray-600 rounded-full -translate-x-[1.375rem] group-hover:border-gray-500 transition-colors duration-300" />

          <div className="flex flex-row justify-start mb-1 relative">
            <div className="flex flex-row w-full ">
              <a
                href="https://www.nestle-esar.com/aboutus/esar/kenya"
                className="hover:underline text-white font-semibold underlinesmall group-hover:text-white transition-colors duration-300"
              >
                Nestlé Kenya ltd.
              </a>
              <p className="border border-gray-600 rounded-full px-2 ml-1 text-white font-semibold text-sm group-hover:border-gray-500 transition-colors duration-300">
                Onsite
              </p>
            </div>
            <p className="font-light text-gray-400 text-sm justify-self-end text-nowrap">
              2022-2023
            </p>
          </div>
          <p className="text-white font-normal mb-2 relative">
            Distribution Commission Support Stuff
          </p>
          <p className="font-light text-gray-400 text-sm relative group-hover:text-gray-300 transition-colors duration-300">
            At Nestlé, my six-month stint as a Customer Support Specialist was a
            dynamic immersion into a global food and beverage powerhouse.
            Navigating onsite challenges, I became adept at troubleshooting and
            enhancing customer satisfaction. Collaborating with a seasoned team,
            I honed communication skills and gained insights into the industry.
            This hands-on experience at Nestlé was not just a job; it was a
            stepping stone toward personal and professional growth in the
            competitive job market.
          </p>
        </motion.div>

        <motion.div
          className="bg-neutral-950 rounded-lg p-5 mb-4 border border-gray-600 ml-8 group hover:border-gray-500 transition-colors duration-300 relative overflow-hidden"
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.25 }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Timeline dot */}
          <div className="absolute left-0 w-5 h-5 bg-neutral-950 border-2 border-gray-600 rounded-full -translate-x-[1.375rem] group-hover:border-gray-500 transition-colors duration-300" />

          <div className="flex flex-row justify-start mb-1 relative">
            <div className="flex flex-row w-full ">
              <a
                href="https://www.kengen.co.ke"
                className="hover:underline text-white font-semibold underlinesmall group-hover:text-white transition-colors duration-300"
              >
                Kenya Electricity Generating Company PLC (KenGen)
              </a>
              <p className="border border-gray-600 rounded-full px-2 ml-1 text-white font-semibold text-sm h-fit group-hover:border-gray-500 transition-colors duration-300">
                Onsite
              </p>
            </div>
            <p className="font-light text-gray-400 text-sm justify-self-end text-nowrap ml-2">
              2024
            </p>
          </div>
          <p className="text-white font-normal mb-2 relative">ICT department Attachee</p>
          <p className="font-light text-gray-400 text-sm relative group-hover:text-gray-300 transition-colors duration-300">
            During my industrial attachment at KenGen, I honed my technical
            skills in Network administration System maintenance ,and Software
            management . I delved into the intricacies of SCADA systems,
            mastered the Microsoft Office Suite, and gained hands-on experience
            with video conferencing and helpdesk support. These experiences
            equipped me with a solid foundation in ICT and a practical
            understanding of real-world applications.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
