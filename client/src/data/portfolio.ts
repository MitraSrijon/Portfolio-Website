import type { Experience, Project, Certification, SocialLinks, Testimonial, BlogPost, CaseStudy } from "@shared/schema";

export const personalInfo = {
  name: "Your Name",
  tagline: "Software Developer & Designer",
  subtitle: "Crafting elegant digital experiences through code and creativity",
  introduction: "I'm a passionate software developer and designer who believes in the power of clean code and beautiful design. With a keen eye for detail and a love for problem-solving, I create digital products that are both functional and delightful to use.",
  about: {
    background: "With over 5 years of experience in the tech industry, I've had the privilege of working with startups and established companies alike. My journey began with a curiosity about how things work, which naturally led me to programming and design. I hold a degree in Computer Science and have continuously expanded my skills through hands-on projects and continuous learning.",
    values: [
      { title: "Quality", description: "I believe in doing things right, not just doing them fast." },
      { title: "Simplicity", description: "The best solutions are often the simplest ones." },
      { title: "Collaboration", description: "Great work comes from great teamwork." },
      { title: "Growth", description: "Every project is an opportunity to learn something new." }
    ],
    goals: "My goal is to create technology that makes a positive impact on people's lives. Whether it's streamlining a business process or crafting an intuitive user experience, I aim to build products that truly matter.",
    interests: ["Open Source", "UI/UX Design", "Machine Learning", "Photography", "Music"]
  }
};

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Senior Software Developer",
    company: "Tech Company A",
    duration: "2 years",
    startDate: "Jan 2022",
    endDate: "Present",
    responsibilities: [
      "Lead development of customer-facing web applications",
      "Mentor junior developers and conduct code reviews",
      "Architect scalable solutions for high-traffic systems",
      "Collaborate with design team to implement pixel-perfect UIs"
    ],
    achievements: [
      "Reduced page load time by 40% through optimization",
      "Led migration to modern React architecture",
      "Implemented CI/CD pipeline reducing deployment time by 60%"
    ]
  },
  {
    id: "2",
    role: "Full Stack Developer",
    company: "Startup B",
    duration: "2 years",
    startDate: "Jan 2020",
    endDate: "Dec 2021",
    responsibilities: [
      "Developed and maintained multiple web applications",
      "Built RESTful APIs and microservices",
      "Implemented responsive designs across platforms",
      "Managed database architecture and optimization"
    ],
    achievements: [
      "Built MVP that secured $2M in seed funding",
      "Grew user base from 0 to 50K in first year",
      "Designed and implemented real-time notification system"
    ]
  },
  {
    id: "3",
    role: "Junior Developer",
    company: "Agency C",
    duration: "1.5 years",
    startDate: "Jun 2018",
    endDate: "Dec 2019",
    responsibilities: [
      "Developed client websites and web applications",
      "Created custom WordPress themes and plugins",
      "Collaborated with designers to implement UI/UX",
      "Participated in client meetings and requirement gathering"
    ],
    achievements: [
      "Delivered 15+ successful client projects",
      "Received client satisfaction rating of 4.9/5",
      "Introduced automated testing practices to the team"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and analytics dashboard. Built for scalability and performance.",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe"],
    highlights: [
      "Handles 10K+ concurrent users",
      "99.9% uptime SLA",
      "Real-time inventory sync"
    ],
    category: "software",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "2",
    title: "Design System",
    description: "A comprehensive design system with reusable components, accessibility guidelines, and documentation. Used across multiple products in the organization.",
    technologies: ["Figma", "React", "Storybook", "TypeScript"],
    highlights: [
      "50+ reusable components",
      "WCAG 2.1 AA compliant",
      "Adopted by 5 product teams"
    ],
    category: "design",
    demoUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: "3",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team workspaces, and integrations with popular tools like Slack and GitHub.",
    technologies: ["React", "GraphQL", "MongoDB", "WebSockets"],
    highlights: [
      "Real-time collaboration",
      "5K+ active daily users",
      "Mobile-responsive design"
    ],
    category: "both",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "4",
    title: "Mobile Banking UI",
    description: "A modern, intuitive mobile banking interface design focused on accessibility and user experience. Includes transaction flows, account management, and financial insights.",
    technologies: ["Figma", "Prototyping", "User Research", "Design Systems"],
    highlights: [
      "40% improvement in task completion",
      "A/B tested with 500+ users",
      "Featured in design publications"
    ],
    category: "design",
    caseStudyUrl: "#"
  },
  {
    id: "5",
    title: "API Gateway Service",
    description: "A high-performance API gateway handling authentication, rate limiting, and request routing for microservices architecture.",
    technologies: ["Go", "Redis", "Docker", "Kubernetes"],
    highlights: [
      "Sub-millisecond latency",
      "Handles 100K+ requests/sec",
      "Zero-downtime deployments"
    ],
    category: "software",
    githubUrl: "#"
  },
  {
    id: "6",
    title: "Portfolio Website Template",
    description: "A clean, minimalist portfolio template for developers and designers. Features dark mode, smooth animations, and responsive design.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    highlights: [
      "Perfect Lighthouse score",
      "Fully accessible",
      "Easy customization"
    ],
    category: "both",
    demoUrl: "#",
    githubUrl: "#"
  }
];

export const certifications: Certification[] = [
  {
    id: "1",
    name: "AWS Certified Solutions Architect",
    provider: "Amazon Web Services",
    year: "2023",
    credentialUrl: "#"
  },
  {
    id: "2",
    name: "Google UX Design Professional",
    provider: "Google / Coursera",
    year: "2022",
    credentialUrl: "#"
  },
  {
    id: "3",
    name: "Meta Frontend Developer",
    provider: "Meta / Coursera",
    year: "2022",
    credentialUrl: "#"
  },
  {
    id: "4",
    name: "TypeScript Advanced Patterns",
    provider: "Frontend Masters",
    year: "2023",
    credentialUrl: "#"
  },
  {
    id: "5",
    name: "System Design Fundamentals",
    provider: "Educative",
    year: "2021",
    credentialUrl: "#"
  },
  {
    id: "6",
    name: "Agile & Scrum Certification",
    provider: "Scrum Alliance",
    year: "2020",
    credentialUrl: "#"
  }
];

export const socialLinks: SocialLinks = {
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourprofile",
  instagram: "https://instagram.com/yourprofile",
  email: "hello@yourdomain.com",
  phone: "+1 (555) 123-4567"
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Tech Company A",
    quote: "Working with this developer was an absolute pleasure. Their attention to detail and ability to translate complex requirements into elegant solutions made our product launch a success. They consistently delivered high-quality work on time."
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO",
    company: "Startup B",
    quote: "An exceptional full-stack developer who brings both technical expertise and creative problem-solving to every project. Their contributions were instrumental in scaling our platform to handle 10x growth."
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Design Director",
    company: "Agency C",
    quote: "Rare to find someone who understands both code and design so well. They bridged the gap between our design team and engineering, resulting in products that were both beautiful and performant."
  },
  {
    id: "4",
    name: "David Park",
    role: "Engineering Manager",
    company: "Enterprise D",
    quote: "A team player who elevates everyone around them. Their mentorship helped our junior developers grow significantly, and their architectural decisions have stood the test of time."
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "building-scalable-react-applications",
    title: "Building Scalable React Applications: Lessons from Production",
    excerpt: "Key architectural patterns and practices I've learned from building React applications that serve millions of users.",
    content: `# Building Scalable React Applications

Over the years, I've had the opportunity to build and maintain React applications at various scales. Here are the key lessons I've learned about creating applications that can grow with your user base.

## 1. Component Architecture Matters

The way you structure your components has a direct impact on maintainability. I've found that following a clear hierarchy helps:

- **Atoms**: Basic building blocks (buttons, inputs, labels)
- **Molecules**: Simple combinations (search bars, form fields)
- **Organisms**: Complex components (headers, product cards)
- **Templates**: Page layouts
- **Pages**: Actual pages with data

## 2. State Management Strategy

Not every piece of state needs to be global. Consider these categories:

- **Server State**: Use React Query or SWR
- **UI State**: Local component state or context
- **Form State**: React Hook Form or Formik
- **Global State**: Redux or Zustand (only when truly needed)

## 3. Performance Optimization

Performance issues often come from:

- Unnecessary re-renders (use React.memo wisely)
- Large bundle sizes (code splitting is your friend)
- Unoptimized images (use next/image or similar)
- Blocking operations (move to web workers if needed)

## Conclusion

Building scalable React applications is as much about organization and discipline as it is about technical knowledge. Start with good patterns early, and they'll pay dividends as your application grows.`,
    category: "Development",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "Architecture", "Performance"]
  },
  {
    id: "2",
    slug: "design-system-journey",
    title: "Our Design System Journey: From Chaos to Consistency",
    excerpt: "How we built a design system from scratch that unified our product experience across five different teams.",
    content: `# Our Design System Journey

When I joined the team, each product had its own set of components, colors, and patterns. Here's how we brought order to the chaos.

## The Problem

- 5 products, 5 different button styles
- No shared language between design and engineering
- New features took 3x longer than necessary
- User experience was inconsistent

## The Approach

### Phase 1: Audit

We started by cataloging every component across all products. The spreadsheet was... humbling. We had 23 different button variations alone.

### Phase 2: Define Tokens

Before building components, we established design tokens:

- Colors (with accessibility baked in)
- Typography scale
- Spacing system
- Shadows and borders

### Phase 3: Core Components

We built the essential components first:

- Button, Input, Select, Checkbox
- Card, Modal, Tooltip
- Navigation elements

### Phase 4: Documentation

A design system without documentation is just a component library. We invested heavily in:

- Storybook for component exploration
- Usage guidelines
- Do's and Don'ts with examples

## Results

After 6 months:

- 40% faster feature development
- Consistent experience across products
- Happier designers and developers

## Lessons Learned

1. Get buy-in from leadership early
2. Start small, iterate fast
3. Documentation is not optional
4. Treat it as a product, not a project`,
    category: "Design",
    publishedAt: "2024-02-20",
    readTime: "6 min read",
    tags: ["Design Systems", "UI/UX", "Collaboration"]
  },
  {
    id: "3",
    slug: "remote-work-productivity",
    title: "5 Years of Remote Work: What Actually Works",
    excerpt: "Practical advice from half a decade of working remotely, including the tools and habits that made the difference.",
    content: `# 5 Years of Remote Work

Remote work has been transformative for my career and life. Here's what I've learned about making it work.

## The Setup

### Physical Space

Your environment matters more than you think:

- Dedicated workspace (even if it's a corner)
- Good chair (your back will thank you)
- External monitor (game changer)
- Proper lighting for video calls

### Digital Tools

The tools that have served me well:

- **Communication**: Slack + Zoom
- **Project Management**: Linear or Notion
- **Focus**: Forest app, website blockers
- **Time Tracking**: Toggl (for personal awareness)

## Habits That Work

### 1. Start and End Rituals

Just like a commute signals work mode, create rituals:

- Morning: Coffee, review tasks, set intentions
- Evening: Write tomorrow's priorities, close laptop

### 2. Time Blocking

I block my calendar for:

- Deep work (morning, no meetings)
- Meetings (afternoon cluster)
- Learning (Friday afternoons)

### 3. Over-communicate

Remote work requires more intentional communication:

- Share progress proactively
- Document decisions
- Don't assume people know what you're working on

### 4. Take Real Breaks

It's easy to work non-stop when home and office merge:

- Lunch away from desk
- Short walks between tasks
- Actual vacation (offline!)

## The Challenges

Let's be honest about what's hard:

- Loneliness can creep in
- Work-life boundaries blur
- Video fatigue is real
- Missing spontaneous collaboration

## Final Thoughts

Remote work isn't for everyone, and that's okay. But if it works for you, investing in the right setup and habits pays enormous dividends.`,
    category: "Career",
    publishedAt: "2024-03-10",
    readTime: "5 min read",
    tags: ["Remote Work", "Productivity", "Career"]
  }
];

export const caseStudies: Record<string, CaseStudy> = {
  "1": {
    projectId: "1",
    overview: "A complete e-commerce platform redesign and rebuild focused on performance, scalability, and user experience.",
    problem: "The existing platform was built on legacy technology, resulting in slow page loads (8+ seconds), frequent downtime during sales events, and a checkout abandonment rate of 75%. The codebase was difficult to maintain, making new feature development painfully slow.",
    solution: "We rebuilt the platform from the ground up using React, Node.js, and PostgreSQL. Key improvements included implementing a microservices architecture, adding Redis caching, and creating a modern, responsive UI with accessibility in mind.",
    process: [
      "Conducted user research and analyzed pain points in the existing system",
      "Created a phased migration plan to minimize business disruption",
      "Built a component library for consistent UI across the platform",
      "Implemented CI/CD pipelines for reliable deployments",
      "Gradually migrated features while maintaining the legacy system",
      "Ran A/B tests to validate improvements before full rollout"
    ],
    results: [
      "Page load time reduced from 8s to 1.2s",
      "Checkout abandonment dropped to 35%",
      "Successfully handled 10x normal traffic during Black Friday",
      "New feature development time reduced by 60%",
      "Customer satisfaction score increased from 3.2 to 4.6 out of 5"
    ],
    lessons: [
      "Phased migration is crucial for large systems - big bang rewrites rarely succeed",
      "Performance optimization should be built in from the start, not bolted on",
      "User research before development saves countless hours of rework"
    ]
  },
  "2": {
    projectId: "2",
    overview: "Creating a unified design system to bring consistency across multiple products and streamline the design-to-development workflow.",
    problem: "Five product teams were working with different component libraries, leading to inconsistent user experiences, duplicated effort, and friction between designers and developers. Updates to common patterns required changes in five different codebases.",
    solution: "We built a comprehensive design system with a shared component library, design tokens, and extensive documentation. The system included Figma libraries synced with React components via design tokens.",
    process: [
      "Audited all existing components across products (found 200+ unique components)",
      "Identified common patterns and consolidated to 50 core components",
      "Established design token architecture for colors, spacing, typography",
      "Built React component library with Storybook documentation",
      "Created Figma libraries that sync with code via tokens",
      "Developed migration guides for each product team"
    ],
    results: [
      "Component library adopted by all 5 product teams within 6 months",
      "Design-to-development handoff time reduced by 50%",
      "Achieved WCAG 2.1 AA accessibility compliance across products",
      "New designer onboarding time reduced from 3 weeks to 1 week",
      "Estimated 40% reduction in UI development time for new features"
    ],
    lessons: [
      "Getting stakeholder buy-in early is crucial for adoption",
      "Documentation is as important as the components themselves",
      "Treat the design system as a product with its own roadmap and users"
    ]
  }
};
