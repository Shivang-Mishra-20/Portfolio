export const personalInfo = {
  name: "Shivang Mishra",
  title: "Frontend Developer • AI/ML Enthusiast",
  tagline: "Building modern web interfaces and intelligent systems that solve real-world problems.",
  email: "shivang.m04@gmail.com",
  linkedin: "https://www.linkedin.com/in/shivang-mishra20/",
  github: "https://github.com/Shivang-Mishra-20",
  university: "VIT Bhopal University",
  degree: "B.Tech CSE (AI & ML)",
  year: "Third Year",
};

export const skills = {
  Languages: [
    { name: "Python", icon: "🐍", level: 80 },
    { name: "JavaScript", icon: "⚡", level: 80 },
    { name: "Java", icon: "☕", level: 70 },
    { name: "C++", icon: "🔧", level: 80 },
    { name: "HTML", icon: "🌐", level: 90 },
    { name: "CSS", icon: "🎨", level: 90 },
  ],
  Frameworks: [
    { name: "React", icon: "⚛️", level: 80 },
    { name: "Django", icon: "🦄", level: 80 },
    { name: "Flask", icon: "🌶️", level: 70 },
    { name: "Next.js", icon: "▲", level: 70 },
  ],
  "AI / ML": [
    { name: "TensorFlow", icon: "🧠", level: 70 },
    { name: "PyTorch", icon: "🔥", level: 70 },
    { name: "Scikit-learn", icon: "📊", level: 70 },
    { name: "Pandas", icon: "🐼", level: 70 },
  ],
  Tools: [
    { name: "Git", icon: "🌿", level: 80 },
    { name: "GitHub", icon: "🐙", level: 80 },
    { name: "VS Code", icon: "💙", level: 80 },
    { name: "Jupyter", icon: "📓", level: 80 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "MindPath",
    subtitle: "AI HR Management System",
    description:
      "An intelligent HR management platform powered by machine learning, designed to streamline workforce operations and predict employee attrition with ~85% accuracy.",
    stack: ["Django", "Python", "HTML", "CSS", "JavaScript", "Machine Learning"],
    features: [
      "Employee login & authentication",
      "Attendance tracking system",
      "Leave management workflow",
      "Task management board",
      "ML attrition prediction (~85% accuracy)",
    ],
    color: "#6366F1",
    gradient: "from-indigo-500 to-purple-600",
    accent: "#a855f7",
    emoji: "🧠",
    github: "https://github.com/Shivang-Mishra-20/MindPath",
    
  },
  {
    id: 2,
    title: "CampusConnect",
    subtitle: "Mini ERP System",
    description:
      "A comprehensive campus management ERP built to digitize and automate administrative operations for educational institutions.",
    stack: ["HTML", "CSS", "JavaScript", "Google Apps Script", "Google Sheets API", "Chart.js"],
    features: [
      "Admission management module",
      "Automated fee processing",
      "Hostel allocation system",
      "Library tracking & records",
      "Analytics dashboard with Chart.js",
    ],
    color: "#06B6D4",
    gradient: "from-cyan-500 to-blue-600",
    accent: "#3b82f6",
    emoji: "🏫",
    github: "https://github.com/Shivang-Mishra-20/Campus-Connect-Lite",
    
  },
];

export const experiences = [
  {
    id: 1,
    role: "Frontend Development Intern",
    company: "Tech Startup",
    period: "Jun 2024 – Aug 2024",
    description:
      "Developed responsive React components, optimized performance metrics, and collaborated with cross-functional teams to ship product features.",
    skills: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    type: "internship",
  },
  {
    id: 2,
    role: "Machine Learning Research Assistant",
    company: "VIT Bhopal University",
    period: "Jan 2024 – May 2024",
    description:
      "Conducted research on predictive modeling techniques, built and evaluated ML models for classification tasks, and contributed to academic publications.",
    skills: ["Python", "TensorFlow", "Data Analysis", "Research"],
    type: "research",
  },
];
