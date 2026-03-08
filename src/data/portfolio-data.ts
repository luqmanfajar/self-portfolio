export const personalInfo = {
  name: "Muhammad Luqman Fajar Yulianto",
  title: "Software Developer | Android & Backend Enthusiast",
  tagline:
    "Building mobile and software solutions with Kotlin, Java, and modern technologies.",
  bio: "Informatics Technology graduate with a strong foundation in software development and mobile application development. Experienced in building Android and multi-platform applications using Kotlin, Java, and NodeJS. Passionate about learning new technologies and contributing to innovative software solutions.",
  email: "fmuhammadluqman@gmail.com",
  phone: "+62-8956-4950-262",
  linkedin: "https://linkedin.com/in/luqmanfajar",
  github: "https://github.com/luqmanfajar",
};

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Developer",
    company: "Meteora",
    location: "Remote, Singapore",
    period: "Nov 2025 – Present",
    highlights: [
      "Developed tools to identify latest liquidity pools on meteora.ag for the Meteora Indonesia Community",
      "Built signature-based profit and loss (P&L) cards for financial tracking",
      "Collaborated with cross-functional teams to improve performance and UX",
      "Implemented QA processes including testing and validation",
    ],
  },
  {
    title: "AI Engineering Intern",
    company: "Dicoding",
    location: "Online, Jakarta",
    period: "Oct 2025 – Present",
    highlights: [
      "Completed AI Engineering module covering AI fundamentals",
      "Learned prompt engineering for software development",
      "Studied Python fundamentals and basic machine learning",
      "Collaborated on problem-solving projects",
    ],
  },
  {
    title: "Mobile Developer Intern",
    company: "Kelompok Tani Hutan Wonosantri",
    location: "Malang",
    period: "Mar 2024 – Jun 2024",
    highlights: [
      "Developed Kotlin mobile app for coffee processing workflow monitoring",
      "Improved application features and UX",
      "Performed testing, debugging, and optimization",
      "Implemented database management",
    ],
  },
  {
    title: "Android Developer Intern",
    company: "Dicoding Kampus Merdeka",
    location: "Online",
    period: "Aug 2022 – Dec 2022",
    highlights: [
      "Completed Android Developer Learning Path",
      "Built Android projects using Kotlin",
      "Applied Android architecture components and data management",
      "Practiced debugging and optimization techniques",
    ],
  },
];

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend / Mobile",
    skills: ["Flutter", "Kotlin", "Android Development", "UI/UX Implementation"],
  },
  {
    category: "Backend / Programming",
    skills: ["Java", "NodeJS", "API Integration"],
  },
  {
    category: "Database",
    skills: ["Firebase", "SQLite", "Database Management"],
  },
  {
    category: "Software Engineering",
    skills: [
      "Application Testing & Debugging",
      "Clean Architecture (MVC, MVVM)",
      "Version Control (Git)",
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Analytical Thinking",
      "Problem Solving",
      "Teamwork",
      "Communication",
      "Adaptability",
      "Time Management",
      "Detail-Oriented",
    ],
  },
];

export interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
}

export const educations: Education[] = [
  {
    degree: "Bachelor of Informatics Technology",
    institution: "Universitas Brawijaya",
    period: "Aug 2023 – Jul 2025",
    gpa: "3.68 / 4.00",
  },
  {
    degree: "Diploma in Informatics Technology",
    institution: "Universitas Brawijaya",
    period: "Sep 2020 – Jun 2023",
    gpa: "3.83 / 4.00",
  },
];

export interface Community {
  organization: string;
  role: string;
  period: string;
  description: string;
}

export const communities: Community[] = [
  {
    organization: "Keluarga Besar Mahasiswa Departemen Sistem Informasi",
    role: "Member",
    period: "Jan 2023 – Jul 2023",
    description:
      "Participated in student organization activities including discussion forums, competency development programs, and internal event organization while contributing to a collaborative learning environment.",
  },
];

export interface Certificate {
  name: string;
  provider: string;
  date: string;
  topics?: string;
  link?: string;
}

export const certificates: Certificate[] = [
  {
    name: "AI Engineering Program",
    provider: "Dicoding",
    date: "2025",
    topics: "AI fundamentals, prompt engineering, Python, machine learning basics",
  },
  {
    name: "Android Developer Learning Path",
    provider: "Dicoding (Kampus Merdeka)",
    date: "Aug 2022 – Dec 2022",
    topics: "Kotlin, Android architecture, UI development, data management",
  },
];

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  screenshot?: string;
  status: "active" | "discontinued";
}

export const projects: Project[] = [
  {
    title: "Sample Project",
    description: "This is a placeholder project. Replace with your real projects.",
    techStack: ["Kotlin", "Android", "Firebase"],
    githubLink: "https://github.com/luqmanfajar",
    status: "active",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Community", href: "#community" },
  { label: "Certificates", href: "#certificates" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
