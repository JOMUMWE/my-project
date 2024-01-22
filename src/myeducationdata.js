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
    link: "http://mailto:muindijoshua032@gmail.com",
    description: "muindijoshua032@gmail.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    _id: "5b21ca3eeb7f6fbccd471415",
    link: "http://www.linkedin.com/in/joshua-muindi-06ba2a28a",
    description: "Send DM",
    icon: (
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        className="w-5 h-5"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {},
];

export function getData() {
  return data;
}
export function getContactData() {
  return contactData;
}
