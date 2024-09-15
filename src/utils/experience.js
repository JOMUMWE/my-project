import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <>
      <motion.div
        className=" bg-neutral-950 min-h-32 rounded p-5 mb-4 border border-gray-600"
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.25 }}
      >
        <div className="flex flex-row justify-start mb-1">
          <div className="flex flex-row w-full ">
            <a
              href="https://www.nestle-esar.com/aboutus/esar/kenya"
              className="hover:underline text-white font-semibold underlinesmall"
            >
              Nestlé Kenya ltd.
            </a>
            <p className="border border-gray-600 rounded-full px-2 ml-1 text-white font-semibold text-sm">
              Onsite
            </p>
          </div>
          <p className="font-light text-gray-400 text-sm justify-self-end text-nowrap">
            2022-2023
          </p>
        </div>
        <p className="text-white font-normal mb-2">
          Distribution Commission Support Stuff
        </p>
        <p className="font-light text-gray-400 text-sm">
          At Nestlé, my six-month stint as a Customer Support Specialist was a
          dynamic immersion into a global food and beverage powerhouse.
          Navigating onsite challenges, I became adept at troubleshooting and
          enhancing customer satisfaction. Collaborating with a seasoned team, I
          honed communication skills and gained insights into the industry. This
          hands-on experience at Nestlé was not just a job; it was a stepping
          stone toward personal and professional growth in the competitive job
          market.
        </p>
      </motion.div>
      <motion.div
        className=" bg-neutral-950 min-h-32 rounded p-5 mb-4 border border-gray-600"
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.25 }}
      >
        <div className="flex flex-row justify-start mb-1">
          <div className="flex flex-row w-full ">
            <a
              href="https://www.kengen.co.ke"
              className="hover:underline text-white font-semibold underlinesmall"
            >
              Kenya Electricity Generating Company PLC (KenGen)
            </a>
            <p className="border border-gray-600 rounded-full px-2 ml-1 text-white font-semibold text-sm h-fit">
              Onsite
            </p>
          </div>
          <p className="font-light text-gray-400 text-sm justify-self-end text-nowrap ml-2">
            2024
          </p>
        </div>
        <p className="text-white font-normal mb-2">ICT department Attachee</p>
        <p className="font-light text-gray-400 text-sm">
          During my industrial attachment at KenGen, I honed my technical skills
          in{" "}
          <p className="border w-fit border-gray-600 rounded-full px-2 ml-1 text-white font-semibold text-sm h-fit">
            Network administration
          </p>
          <p className="border w-fit border-gray-600 rounded-full px-2 ml-1 text-white font-semibold text-sm h-fit">
            System maintenance
          </p>
          ,and
          <p className="border w-fit border-gray-600 rounded-full px-2 ml-1 text-white font-semibold text-sm h-fit">
          Software management
          </p>
          . I delved into the intricacies of SCADA systems,
          mastered the Microsoft Office Suite, and gained hands-on experience
          with video conferencing and helpdesk support. These experiences
          equipped me with a solid foundation in ICT and a practical
          understanding of real-world applications.
        </p>
      </motion.div>
    </>
  );
}
