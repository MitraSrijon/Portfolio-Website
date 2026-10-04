import type {
  Experience,
  Project,
  Certification,
  SocialLinks,
  Testimonial,
} from "@shared/schema";

/* =========================================================
   PERSONAL INFORMATION
   ========================================================= */

export const personalInfo = {
  name: "Srijon Mitra",

  tagline: "Software Engineer | Java & Spring Boot",

  subtitle:
    "Building backend and full-stack applications with Java, Spring Boot and Angular.",

  introduction:
    "Associate Software Engineer at Accenture, working in Windows Server administration and Identity & Access Management, while continuously building my software engineering skills through Java, Spring Boot and full-stack projects.",

  about: {
    background:
      "I'm an Associate Software Engineer at Accenture, currently working in Windows Server administration and Identity & Access Management. Alongside my professional work, I build backend and full-stack applications using Java, Spring Boot, Angular and MySQL, with a strong focus on hands-on learning and problem solving.",

    values: [
      {
        title: "Continuous Learning",
        description:
          "I believe consistent hands-on learning is the foundation of strong engineering.",
      },
      {
        title: "Problem Solving",
        description:
          "I enjoy breaking complex problems into smaller, practical solutions.",
      },
      {
        title: "Clean Code",
        description:
          "I focus on writing code that is readable, maintainable and easy to extend.",
      },
      {
        title: "Growth",
        description:
          "Every project is an opportunity to learn something new and improve as an engineer.",
      },
    ],

    goals:
      "My goal is to grow into a strong software engineer by building reliable backend systems, improving my problem-solving skills and gaining deeper experience with scalable applications.",

    interests: [
      "Java",
      "Spring Boot",
      "Backend Development",
      "Angular",
      "System Design",
      "Problem Solving",
      "AI & Generative AI",
    ],
  },
};

/* =========================================================
   PROFESSIONAL EXPERIENCE
   ========================================================= */

export const experiences: Experience[] = [
  {
    id: "accenture",
    role: "Associate Software Engineer",
    company: "Accenture",
    duration: "Nov 2024 - Present",
    startDate: "Nov 2024",
    endDate: "Present",
    responsibilities: [
      "Administer Active Directory and Azure AD environments, supporting user lifecycle management, access provisioning, security groups, and identity requests.",
      "Manage user accounts, permissions, security groups, and license provisioning while resolving ServiceNow incidents within defined SLAs.",
      "Configure and troubleshoot SSL/TLS and SAML certificates supporting enterprise Single Sign-On (SSO) authentication.",
      "Develop AI-assisted PowerShell scripts to automate bulk Active Directory operations and repetitive administrative tasks.",
      "Troubleshoot identity and access issues across Active Directory and Azure environments in an enterprise IAM environment.",
    ],
    achievements: [
      "Enterprise Identity & Access Management",
      "PowerShell Automation",
      "AI-Assisted Automation",
    ],
  },
  {
    id: "curious-about-sales",
    role: "Campaign Management Associate",
    company: "Curious About Sales",
    duration: "Feb 2024 - Apr 2024",
    startDate: "Feb 2024",
    endDate: "Apr 2024",
    responsibilities: [
      "Automated web scraping workflows across 1,000+ lead profiles to streamline lead research.",
      "Applied AI-based analysis to identify and prioritize high-value prospects.",
      "Designed targeted outreach campaigns based on lead research and segmentation.",
    ],
    achievements: [
      "1,000+ Lead Profiles Automated",
      "AI-Based Lead Analysis",
      "Campaign Automation",
    ],
  },
  {
    id: "sayge",
    role: "Flutter Development Intern",
    company: "Sayge",
    duration: "Nov 2022 - Jan 2023",
    startDate: "Nov 2022",
    endDate: "Jan 2023",
    responsibilities: [
      "Developed responsive cross-platform mobile UI components using Flutter and Dart.",
      "Applied object-oriented programming principles while building application features.",
      "Integrated APIs and debugged cross-platform builds throughout the development lifecycle.",
    ],
    achievements: [
      "Flutter & Dart Development",
      "API Integration",
      "Cross-Platform Development",
    ],
  },
];

/* =========================================================
   SOFTWARE PROJECTS
   ========================================================= */

export const projects: Project[] = [
  {
    id: "library-management-system",
    title: "Library Management System",
    description:
      "A full-stack library management application built with Spring Boot, Spring Data JPA, MySQL and Angular.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "MySQL",
      "Angular",
      "REST API",
      "JUnit",
      "Mockito",
    ],
    highlights: [
      "Book and member management",
      "CRUD operations with validation",
      "Search and pagination",
      "Borrow and return functionality",
      "Exception handling and structured API error responses",
      "Angular UI with automatic data refresh after operations",
    ],
    category: "software",
    githubUrl: "https://github.com/MitraSrijon/Library-Management-System",
    demoUrl: "",
    imageUrl: "",
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description:
      "A full-stack expense tracking application built with Spring Boot, Angular and MySQL for managing personal expenses.",
    technologies: [
      "Java",
      "Spring Boot",
      "Angular",
      "MySQL",
      "REST API",
      "Maven",
    ],
    highlights: [
      "Expense management",
      "Category and payment method handling",
      "BigDecimal-based amount handling",
      "Date-based expense tracking",
      "RESTful backend with Angular frontend",
    ],
    category: "software",
    githubUrl: "https://github.com/MitraSrijon/Expense-Tracker",
    demoUrl: "",
    imageUrl: "",
  },
  // OrderFlow will be added here once the project reaches a presentable stage.
];

/* =========================================================
   CERTIFICATIONS
   ========================================================= */

export const certifications: Certification[] = [
  {
    id: "java-tutedude",
    name: "Java",
    provider: "Tutedude",
    year: "2026",
    credentialUrl: "",
  },
  {
    id: "databricks-generative-ai-engineer",
    name: "Databricks Certified Generative AI Engineer Associate",
    provider: "Databricks",
    year: "2026",
    credentialUrl: "",
  },
  {
    id: "azure-fundamentals",
    name: "Microsoft Certified: Azure Fundamentals",
    provider: "Microsoft",
    year: "2025",
    credentialUrl: "",
  },
  {
    id: "generative-ai-leader",
    name: "Generative AI Leader Certification",
    provider: "Google",
    year: "2025",
    credentialUrl: "",
  },
  {
    id: "generative-ai-professional",
    name: "Generative AI Professional",
    provider: "Oracle",
    year: "2025",
    credentialUrl: "",
  },
  {
    id: "associate-data-practitioner",
    name: "Associate Data Practitioner Certification",
    provider: "Google",
    year: "2025",
    credentialUrl: "",
  },
];

/* =========================================================
   SOCIAL / PROFESSIONAL LINKS
   ========================================================= */

export const socialLinks: SocialLinks = {
  github: "https://github.com/MitraSrijon",
  linkedin: "https://www.linkedin.com/in/srijon-mitra-4029b9223",
  leetcode: "https://leetcode.com/u/SrijonM/",
  email: "srijonmitra49@gmail.com",
  phone: "9665082308",
};

/* =========================================================
   TESTIMONIALS
   ========================================================= */

export const testimonials: Testimonial[] = [
  {
    id: "client-feedback",
    name: "Erik",
    role: "Client",
    company: "Hawaiian Airlines",
    quote:
      "I wanted to thank you for being personally available and offering assistance when asked to expedite two RITMs for recently transferred employees into Hawaiian's System Operations Control Center regarding access to a network file storage location required for their job. Having people like you who are responsive, understanding, polite, and efficient is key for us to be able to execute our flight schedule. Thank you for your assistance on these items. It is appreciated.",
    imageUrl: "",
  },
  {
    id: "team-lead-feedback",
    name: "Tanisha Mukherjee",
    role: "IAM - Active Directory Team",
    company: "Accenture",
    quote:
      "Good job, Srijon. Your dedication, commitment, and positive attitude have not gone unnoticed. The quality of your work and the consistent effort you put into your responsibilities make a valuable contribution to the team's success. Thank you for your hard work and for maintaining such a positive approach. Keep up the excellent work and continue striving for excellence.",
    imageUrl: "",
  },
];
