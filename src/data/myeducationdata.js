import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";

const data = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    year: "2021-2025",
    chuo: "Maseno University, Maseno, Kisumu",
    description: "Currently undertaking my Computer Science Degree",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    year: "2016-2020",
    chuo: "RockFields Senior School, Isinya, Kajiado",
    description:
      "Completed high school with a strong academic record, achieving a grade of B+. Actively participated in various science congresses and math contests, showcasing a commitment to academic excellence and a passion for STEM fields.",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471336",
    year: "2007-2015",
    chuo: "Kenvic School, Kenvic Road, Ngong",
    description:
      "Completed primary education with a notable academic performance, graduating with 359 marks.",
  },
];

const contactData = [
  {
    _id: "5b21ca3eeb7f6fbccd471415",
    link: "mailto:muindijoshua032@gmail.com",
    description: "muindijoshua032@gmail.com",
    icon: <FaEnvelope className="w-4 h-4" />,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471415",
    link: "http://www.linkedin.com/in/joshua-muindi-06ba2a28a",
    description: "LinkedIn",
    icon: <BsLinkedin className="w-4 h-4" />,
  },
  // {
  //   _id: "5b21ca3eeb7f6fbced471415",
  //   link: "http://",
  //   description: "Meet",
  //   icon: <FaCalendar className="w-4 h-4" />,
  // },
];

const projectData = [];

export function getProjects() {
  return projectData;
}

export function getData() {
  return data;
}
export function getContactData() {
  return contactData;
}
