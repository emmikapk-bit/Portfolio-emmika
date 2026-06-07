// asset หลักของเว็บไซต์สำหรับ logo, signature และดอกไม้
import logoMark from "../assets/Logo-portfolio.PNG";
import signatureMark from "../assets/signature-portfolio.png";
import flowerMark from "../assets/folwer.round.PNG";

// รายการเมนูหลัก ใช้ร่วมกันทั้ง header และ footer
export const navItems = [
  { label: "Work", to: "/" },
  { label: "About", to: "/about" },
  { label: "Playground", to: "/playground" },
];

// ลิงก์โซเชียลที่ใช้ซ้ำในหลายตำแหน่งของเว็บ
export const socialLinks = [
  { label: "GitHub", href: "https://github.com/emmikapk-bit", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emmika-pannak/",
    icon: "linkedin",
  },
];

export const profileDetails = {
  imageSrc: "/images/profile-emmika.jpg",
  fullName: "Emmika Pannak",
  location: "Nonthaburi, Thailand",
  languages: ["Thai (Native)", "English (Intermediate)"],
  email: "emmika.pk@gmail.com",
  phone: "062-792-6223",
};

// ดอกไม้ใน Hero กำหนดตำแหน่ง ขนาด และจังหวะหมุนแยกกัน
export const heroFlowers = [
  {
    size: "lg",
    top: "4%",
    left: "3%",
    duration: "16s",
    delay: "-1s",
    direction: "normal",
  },
  {
    size: "sm",
    top: "6%",
    left: "22%",
    duration: "11s",
    delay: "-5s",
    direction: "reverse",
  },
  {
    size: "sm",
    top: "7%",
    right: "18%",
    duration: "13s",
    delay: "-2s",
    direction: "normal",
  },
  {
    size: "md",
    top: "10%",
    right: "4%",
    duration: "15s",
    delay: "-7s",
    direction: "reverse",
  },
  {
    size: "sm",
    top: "31%",
    left: "11%",
    duration: "12s",
    delay: "-3s",
    direction: "normal",
  },
  {
    size: "md",
    top: "39%",
    right: "11%",
    duration: "17s",
    delay: "-6s",
    direction: "reverse",
  },
  {
    size: "sm",
    top: "32%",
    right: "1%",
    duration: "10s",
    delay: "-4s",
    direction: "normal",
  },
  {
    size: "sm",
    bottom: "28%",
    left: "1%",
    duration: "14s",
    delay: "-9s",
    direction: "reverse",
  },
  {
    size: "md",
    bottom: "20%",
    left: "16%",
    duration: "18s",
    delay: "-8s",
    direction: "normal",
  },
  {
    size: "lg",
    bottom: "15%",
    right: "3%",
    duration: "20s",
    delay: "-10s",
    direction: "reverse",
  },
];

export const featuredProject = {
  name: "Readly",
  title: "Group Project in Generation Thailand",
  href: "https://group-project-03-sprint-02-chi.vercel.app/",
  repoHref: "https://github.com/emmikapk-bit/group_project_03_sprint_02",
  backendRepoHref:
    "https://github.com/emmikapk-bit/group_project_03_sprint_03_backend",
  videoSrc: "/videos/group-project-preview.mov",
  description:
    "Contributed to frontend integration, authentication flow, and responsive UI refinement.",
  tags: ["React", "Node.js", "Express", "PostgreSQL"],
};

export const playgroundProjects = [
  {
    title: "Cherry Blossoms",
    href: "https://cherry-blossoms-phi.vercel.app/",
    repoHref: "https://github.com/emmikapk-bit/JSD12_week_07",
    description:
      "A visual playground piece with a soft, atmospheric front-end presentation.",
    tags: ["React", "UI study", "Live demo"],
    imageSrc: "/images/playground/cherry-blossoms.png",
    accent: "from-[#f7d7df] via-[#fff3f5] to-[#fde6ea]",
  },
  {
    title: "React Castle Rooms",
    href: "https://react-castle-rooms.vercel.app/",
    repoHref: "https://github.com/emmikapk-bit/week-08-react-castle-rooms",
    description:
      "An interactive React project focused on playful layout and room-based exploration.",
    tags: ["React", "Interactive", "Live demo"],
    imageSrc: "/images/playground/react-castle-rooms.png",
    accent: "from-[#d9e3f6] via-[#f6f8ff] to-[#e8ecfa]",
  },
];

// ข้อมูลประสบการณ์ในหน้า Work
export const experiences = [
  {
    title: "JSD-12 Full-Stack Development",
    org: "Generation Thailand",
    description:
      "Full-stack web development with JavaScript, React, Node.js, PostgreSQL, and Docker.",
    year: "2026",
  },
  {
    title: "Staff calculate production time",
    org: "NICE APPAREL CO., LTD.",
    description:
      "Analyzed production timelines and monitored garment stitching quality under strict deadlines. Collaborated across departments to ensure accurate cost estimation and proactive workflow management.",
    year: "2022 - 2023",
  },
];

// การ์ดสรุปข้อมูลในหน้า About พร้อมค่าการเคลื่อนไหวของดอกไม้
export const infoCards = [
  {
    title: "Background",
    value: "2+ Years in Operations",
    motion: ["12s", "-1s", "normal"],
  },
  {
    title: "Program",
    value: "JSD-12 Generation Thailand",
    motion: ["15s", "-4s", "reverse"],
  },
  {
    title: "Degree",
    value: "Home economics fashion merchandise",
    motion: ["13s", "-2s", "normal"],
  },
  { title: "Status", value: "Open to Work", motion: ["16s", "-7s", "reverse"] },
];

// รายการสกิลพร้อมชื่อไอคอนที่ใช้ใน Skill cards
export const skills = [
  { label: "JavaScript", icon: "javascript" },
  { label: "HTML5 & CSS3", icon: "htmlcss" },
  { label: "React & Next.js", icon: "react" },
  { label: "Tailwind CSS", icon: "tailwind" },
  { label: "Node.js & Express.js", icon: "node" },
  { label: "PostgreSQL & MongoDB", icon: "database" },
  { label: "Git & GitHub", icon: "git" },
  { label: "REST APIs & JWT Auth", icon: "api" },
  { label: "Docker", icon: "docker" },
];

export const softSkills = [
  "Effective Communication",
  "Analytical Thinking",
  "Attention to Detail",
  "Empathy for Users",
  "Growth Mindset",
  "Persistence",
  "Personal Responsibility",
  "Teamwork",
  "Time Management",
  "Problem-Solving",
];

// รายการ tools และ workflow พร้อมไอคอนในหน้า About
export const workflows = [
  { label: "Claude Code & AI Tools", icon: "claude" },
  { label: "Obsidian (PKM)", icon: "obsidian" },
  { label: "Agile / Scrum", icon: "agile" },
  { label: "Vite", icon: "vite" },
];

// รวม asset ไว้ส่งต่อให้ component ที่ต้องใช้งาน
export const brandAssets = {
  logoMark,
  signatureMark,
  flowerMark,
};
