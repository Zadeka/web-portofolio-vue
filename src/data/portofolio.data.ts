import type { Experience, NavLink, Project } from "@/types/portofolio.type";

// Data Statis
export const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export const experiences: Experience[] = [
  {
    role: "Frontend Developer intern",
    company: "PT. Juru Supervisi Indonesia",
    period: "Oct 2025 - Now",
    description: [
      "Revamped and updated the web application to align with modern UI/UX standards by upgrading frameworks and libraries using Laravel and Bootstrap.",
      "Implemented UI/UX designs into the Laravel Bootstrap environment, ensuring a responsive and consistent user interface.",
      "Developed dynamic web features using Vue.js and integrated them with the backend for seamless connectivity.",
    ],
  },
  {
    role: "Fullstack Web Developer",
    company: "Kalikode Digital Indonesia",
    period: "Jul 2025 - Oct 2025",
    description: [
      "Developed a web-based Academic Information System.",
      "Implemented RESTful APIs using the Hono JS framework and documented them with Apidog.",
      "Developed the user interface with React JS, TanStack, and Tailwind CSS for a modern and responsive design.",
    ],
  },
  {
    role: "Frontend Web Developer",
    company: " Freelance  ",
    period: "Jan 2025 - Jun 2025",
    description: [
      "Developed a POS system with React and Tailwind CSS.",
      "Implemented API integration using Axios and validated endpoints with Postman.",
      "Applied the TanStack framework to handle the core functionality of the Positif website.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "PT. GIT Solution",
    period: "Oct 2024 - Dec 2024",
    description: [
      "Processed and analyzed public data using Kaggle datasets or web scraping with Selenium to obtain raw data.",
      "Applied basic data cleaning techniques and performed Exploratory Data Analysis (EDA) using Python (pandas, matplotlib) to improve data quality.",
      "Collaborated in team-based projects to develop insights, build data-driven solutions, and present findings effectively.",
    ],
  },
  {
    role: "Computer Lab Assistant for Microcontroller",
    company: "Forum Asisten AMIKOM Yogyakarta",
    period: "Sep 2023 - Jan 2024",
    description: [
      "Prepared all required tools, equipment, and materials for each lab session.",
      "Assisted students who struggled or fell behind during practical activities.",
      "Provided guidance and support throughout lab exercises.",
      "Delivered practical content by explaining key concepts and step-by-step procedures.",
      "Ensured students understood and could apply microcontroller theories in hands-on practice.",
    ],
  },
  {
    role: "Computer Lab Assistant for Data Structure",
    company: "Forum Asisten AMIKOM Yogyakarta",
    period: "May 2023 - Jul 2023",
    description: [
      "Assisted students who faced difficulties in understanding data structure concepts.",
      "Guided students who were falling behind to help them catch up.",
      "Provided support in understanding concepts, logic, and code implementation.",
      "Assisted lecturers during the practicum teaching process.",
      "Helped ensure the practicum sessions ran smoothly and effectively.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Velox Starter Kit",
    image: "/src/assets/velox.png",
    desc: "A production-ready React starter template powered by modern web technologies and best practices.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind",
      "Vite",
      "TanStack Query",
      "React Router",
      "eslint",
      "prettier",
      "axios",
    ],
    link_github: "https://github.com/Zadeka/vite-react-shadcn-starter",
  },
  {
    title: "Random User Profile Card",
    image: "/src/assets/random-user-generator.png",
    desc: "An interactive web application displaying random user profile cards. It fetches data from the Random User Generator API and presents it in a clean, modern interface.",
    tech: ["Vite", "React", "TypeScript", "Tailwind CSS", "Axios", "Lucide-react", "prettier"],
    link_github: "https://github.com/Zadeka/random-user-generator-project",
    link_demo: "https://random-user-generator-project.vercel.app/",
  },
  {
    title: "AniBox v1",
    image: "/src/assets/anibox-v1.png",
    desc: "AniBox is a modern web application for exploring, searching, and discovering your favorite anime. Built with cutting-edge technologies to ensure optimal performance and a delightful user experience.",
    tech: [
      "React",
      "Vite",
      "TypeScript ",
      "TanStack Router",
      "Tailwind CSS",
      "Axios",
      "Lucide-react",
      "prettier",
    ],
    link_github: "https://github.com/Zadeka/anibox-v1-project",
    link_demo: "https://anibox-v1-project.vercel.app",
  },
];
