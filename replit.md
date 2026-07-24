# Personal Portfolio Website

## Overview
A clean, modern, and professional personal portfolio website for a software and design professional. Built with React + Express fullstack architecture.

## Features
- **Multiple Sections**: Home/Hero, About Me, Work Experience Timeline, Projects Grid, Certifications, Contact Form
- **Dark/Light Theme Toggle**: Persistent theme preference stored in localStorage
- **Responsive Design**: Mobile-first approach, works on all device sizes
- **Smooth Animations**: Subtle transitions and interactions
- **Contact Form**: Backend API with validation and in-memory storage

## Tech Stack
- **Frontend**: React, TypeScript, TailwindCSS, shadcn/ui components
- **Backend**: Express.js with TypeScript
- **Data Validation**: Zod schemas with drizzle-zod
- **State Management**: TanStack Query for server state
- **Routing**: wouter for client-side navigation (single-page with sections)
- **Fonts**: Inter (body), Poppins (headings)

## Project Structure
```
client/
  src/
    components/       # React components (Navigation, Hero, About, etc.)
    data/            # Portfolio content data
    lib/             # Theme provider, query client, utilities
    pages/           # Page components
server/
  index.ts           # Express server entry
  routes.ts          # API routes (contact form)
  storage.ts         # In-memory storage interface
shared/
  schema.ts          # Shared TypeScript types and Zod schemas
```

## Key Files
- `design_guidelines.md` - Design system documentation (colors, typography, spacing)
- `client/src/data/portfolio.ts` - Edit this file to customize portfolio content
- `client/src/index.css` - CSS variables for theming
- `tailwind.config.ts` - Tailwind configuration with custom theme

## Customization
1. Edit `client/src/data/portfolio.ts` to update personal info, experiences, projects, and certifications
2. Modify `client/src/index.css` for color palette changes
3. Follow `design_guidelines.md` for consistent UI updates

## Recent Changes
- December 8, 2025: Initial portfolio website created with all sections
- Added Testimonials section with reviewer cards (name, role, company, quote)
- Added Blog system: BlogSection on portfolio, /blog listing page, /blog/:slug post pages with markdown rendering and social sharing (3 sample posts)
- Added Project Case Study pages (/case-study/:id) with problem/solution/process/results/lessons breakdown
- Added downloadable PDF resume (jsPDF): "Download Resume" button in hero section generates and downloads a formatted PDF
- Added lightweight analytics system: backend API (/api/analytics/track, /api/analytics/summary) with in-memory storage; frontend hook (useAnalytics) tracks page views, section views, button clicks, resume downloads, project views, and blog views
- Section view tracking via Intersection Observer automatically records when users scroll into each portfolio section
- Contact form uses shadcn Form with useForm hook and Zod validation
- All interactive elements have data-testid attributes for testing
- ApiError class for structured backend error handling
