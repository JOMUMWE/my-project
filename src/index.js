import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TheDate } from "./utils/date";
import { Hero } from "./utils/hero";
import { Edu } from "./utils/educationHistory";
import { getData, getContactData } from "./data/myeducationdata";
import { LinkButton } from "./utils/Socials";
import { Foot } from "./utils/footer";
import { motion } from "framer-motion";

const root = ReactDOM.createRoot(document.getElementById("root"));
const data = getData();
const data1 = getContactData();
const mySkillsArray = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TailwindCSS",
  "MYSQL",
  "MongoDB",
  "Python",
  "Java",
  "C#",
];
root.render(
  <div className=" mx-auto md:w-6/12 sm:w-11/12 sm:text-sm md:mx-auto lg:w-6/12 josh mt-5">
    <TheDate />
    <Hero />
    <section className="text-gray-400">
      <h3 className="text-white text-lg mt-10 mb-2 font-bold">About</h3>
      <p className="font-light text-sm">
        Hey there! I'm Joshua Mwendwa Muindi [
        <span className=" italic underline ">JOMUMWE</span>], a fullstack web
        wizard weaving magic with various frameworks. Beyond pixels and code, I
        dive into the worlds of game development and AI, turning curiosity into
        innovation. Let's code dreams into reality together! 🌐🎮🤖
      </p>
    </section>
    <section>
      <h3 className="text-white text-lg mt-10 mb-2 font-bold">
        Work Experience
      </h3>
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
    </section>
    <section>
      <h3 className="text-white text-lg mt-10 mb-2 font-bold">Education</h3>
      {data.map((item) => (
        <Edu
          key={item._id}
          year={item.year}
          institution={item.chuo}
          description={item.description}
        />
      ))}
    </section>
    <section>
      <h3 className="text-white text-lg mt-10 mb-2 font-bold">Skills</h3>
      <div className="font-semibold text-white text-xs flex flex-row flex-wrap">
        {mySkillsArray.map((element) => (
          <motion.p
            layout
            initial={{
              scale: 0,
              x: 100,
            }}
            whileInView={{
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: mySkillsArray.indexOf(element) * 0.15,
              type: " ease-in-out",
            }}
            className="border border-solid rounded-full border-gray-700 mr-2 p-2 text-nowrap topmrmr"
          >
            {element}
          </motion.p>
        ))}
      </div>
    </section>
    <section>
      <h3 className="text-white text-lg mt-10 mb-2 font-bold">Projects</h3>
    </section>
    <section>
      <h3 className="text-white text-lg mt-10 mb-2 font-bold">Contacts</h3>
      <div className="flex flex-row flex-wrap">
        {data1.map((item) => (
          <LinkButton
            _id={item._id}
            icon={item.icon}
            link={item.link}
            text={item.description}
          />
        ))}
      </div>
    </section>
    <Foot />
  </div>
);
