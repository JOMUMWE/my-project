import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TheDate } from "./date";
import { Hero } from "./hero";
import { Edu } from "./educationHistory";
import { getData, getContactData } from "./myeducationdata";
import { LinkButton } from "./Socials";

const root = ReactDOM.createRoot(document.getElementById("root"));
const data = getData();
const data1 = getContactData();
root.render(
  <div>
    <TheDate />
    <Hero />
    <section className="text-gray-400">
      <h3 className="text-white text-lg mt-10 mb-2 font-bold">About</h3>
      <p className="font-light text-sm">
        Hey there! I'm Joshua Mwendwa Muindi <span>'JOMUMWE'</span>, a fullstack
        web wizard weaving magic with various frameworks. Beyond pixels and
        code, I dive into the worlds of game development and AI, turning
        curiosity into innovation. Let's code dreams into reality together!
        🌐🎮🤖
      </p>
    </section>
    <section>
      <h3 className="text-white text-lg mt-10 mb-2 font-bold">
        Work Experience
      </h3>
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
      <div className="font-semibold text-white text-xs flex flex-row">
        <p className="border border-solid rounded-full border-gray-700 mr-2 p-2">
          React
        </p>
        <p className="border border-solid rounded-full border-gray-700 mr-2 p-2">
          Nodejs
        </p>
        <p className="border border-solid rounded-full border-gray-700 mr-2 p-2">
          Tailwind CSS
        </p>
        <p className="border border-solid rounded-full border-gray-700 mr-2 p-2">
          JavaScript
        </p>
        <p className="border border-solid rounded-full border-gray-700 mr-2 p-2">
          Python
        </p>
        <p className="border border-solid rounded-full border-gray-700 mr-2 p-2">
          MongoDB
        </p>
      </div>
    </section>
    <section>
      <h3 className="text-white text-lg mt-10 mb-2 font-bold">Projects</h3>
    </section>
    <section>
      <h3 className="text-white text-lg mt-10 mb-2 font-bold">Contacts</h3>
      <div className="flex flex-row">
        {data1.map((item) => (
          <LinkButton
            _id = {item._id}
            icon={item.icon}
            link={item.link}
            text={item.description}
          />
        ))}
      </div>
    </section>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
