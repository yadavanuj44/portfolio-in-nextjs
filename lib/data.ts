import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaNodeJs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Product Manager",
    location: "GreenPay Network, Remote (Freelance)",
    description:
      "Sustain and enhance projects developed from scratch by me, addressing bugs and introducing new features as needed.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2023 - Present",
  },
  {
    title: "Frontend Lead",
    location: "AESS Solutions, Bhopal",
    description:
      "Revitalized PeopleSOL HRMS with Payroll, ATS, and PMS using React frontend and .NET Core backend. Led a 5-member frontend team for web and mobile apps. Collaborated on Android and iOS features in React Native. Automated QA with Jest, reducing workload.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2021 - Aug 2023",
  },
  {
    title: "Software Developer",
    location: "GreenPay Network, Delhi",
    description:
      "Led end-to-end development of GreenPay Merchant (B2B Fintech) and GreenPay Neobank (B2C digital banking). Solo-developed 2 Xamarin and 1 React Native app. Developed web apps for Admin, Accounting, and Sales teams.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2022 - Oct 2022",
  },
  {
    title: "Neog Bootcamp",
    location: "MERN Fullstack Developer Course",
    description:
      "I graduated after 6 months of studying the MERN stack for fullstack development. I did this in weekend classes along with my job.",
    icon: React.createElement(FaNodeJs),
    date: "Jan 2022 - June 2022",
  },
  {
    title: "Software Developer",
    location: "Keyideas Infotech, Gurgaon",
    description:
      "I worked as a frontend developer. Enhanced MAGI App for 10k users with a .NET backend and cloud infrastructure. Developed UI features for Xamarin (Android, iOS) and a corresponding web app in ReactJS.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2021 - Jan 2022",
  },
  {
    title: "IIT Gandhinagar",
    location: "Gandhinagar, India",
    description: "I did my BTech graduation from IIT Gandhinagar in MSE.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "ReactJS",
  "NextJS",
  "MERN",
  "HTML",
  "CSS",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
  ".NET",
  "Xamarin",
  "React Native",
] as const;
