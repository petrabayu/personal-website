import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  nutrikid,
  nutrikidFigma,
  tripguide,
  threejs,
  bootstrap,
  play,
  skilvul,
  ugm,
  sanber,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Educ.",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI / UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Computer Science Student",
    company_name: "University of Gadjah Mada",
    icon: ugm,
    iconBg: "#383E56",
    date: "August 2019 - Now",
    points: ["Cumulative GPA 3.48/4.00"],
  },
  {
    title: "Web Development Bootcamp",
    company_name: "Skilvul",
    icon: skilvul,
    iconBg: "#383E56",
    date: "August 2023 - December 2023",
    points: [
      "Intensive learning program to gain all skills, knowledge, and everything needed to work in web development industry for 18 weeks.",
      "Make a real website project with 3 persons in the team using MERN (MongoDB, Express.js, React, Node.js)",
      "Designing the website using Figma, then develop the website according to our web design.",
    ],
  },
  {
    title: "Game Development MSIB Cycle 3",
    company_name: "Skilvul",
    icon: skilvul,
    iconBg: "#383E56",
    date: "August 2023 - December 2023",
    points: [
      "Learning all about game development.",
      "Make video games using Unity game engine in 4 months with 5 persons in the team.",
      "Designing the game product using Figma, and then develop the game using Unity according to our game design.",
    ],
  },
  {
    title: "UI/UX Design Workshop",
    company_name: "Sanbercode",
    icon: sanber,
    iconBg: "#1A3665",
    date: "July 2020 - August 2020",
    points: [
      "UI/UX course has been designed to learning all process in UI/UX development using Adobe XD and Figma for 4 weeks.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Nutrikid",
    description:
      "A website to provides comprehensive information about proper nutrition to help parents meet their children's nutritional needs and prevent malnutrition like stunting, which is a hot issue that Indonesia government is actively addressing.",
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "orange-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: nutrikid,
    live_demo_link: "https://nutrikid-v1.netlify.app/",
    source_code_link: "https://github.com/petrabayu/nutrikid-react-fullstack",
  },
  {
    name: "Nutrikid (UI/UX Design)",
    description:
      "Designing the user interface (UI) and user experience (UX) for Nutrikid using Figma. The goal is to create an intuitive and engaging design, allowing users to easily interact with the application and experience the added value of this product in supporting optimal child nutrition.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
    ],
    image: nutrikidFigma,
    live_demo_link: "#",
    source_code_link:
      "https://www.figma.com/file/F25dqy7bDSizyWv8N5nZHt/BRD-(Business-Requirements-Document)?type=design&node-id=3%3A6&mode=design&t=DGx9RcqSlEWLTkhI-1",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Car Rent",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
