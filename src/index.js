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
import Experience from "./utils/experience";
import { Project } from "./utils/project";
import ScrollToTop from "./utils/ScrollToTop";

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
  "Node",
  "AI",
  "ML",
  "ComputerVision",
];
root.render(
  <>
    <div className=" mx-auto md:w-6/12 sm:w-11/12 sm:text-sm md:mx-auto lg:w-6/12 josh mt-5">
      <TheDate />
      <Hero />
      <section className="text-gray-400">
        <h3 className="text-white text-lg mt-10 mb-2 font-bold">About</h3>
        <p className="font-light text-sm">
          Hey there! I'm Joshua Mwendwa Muindi [
          <span className=" italic underline ">JOMUMWE</span>], a fullstack web
          wizard weaving magic with various frameworks. Beyond pixels and code,
          I dive into the worlds of game development and AI, turning curiosity
          into innovation. Let's code dreams into reality together! 🌐🎮🤖
        </p>
      </section>
      <section>
        <h3 className="text-white text-lg mt-10 mb-2 font-bold">
          Work Experience
        </h3>
        <Experience />
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
        <Project />
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
    <ScrollToTop />
  </>
);
