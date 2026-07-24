import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form submissions
export const contactMessages = pgTable("contact_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

// Analytics event types (in-memory on server)
export interface AnalyticsEvent {
  id: string;
  type: "page_view" | "section_view" | "button_click" | "resume_download" | "project_view" | "blog_view" | "link_click";
  label: string;
  metadata?: Record<string, string>;
  timestamp: Date;
  userAgent?: string;
  referrer?: string;
}

export interface InsertAnalyticsEvent {
  type: AnalyticsEvent["type"];
  label: string;
  metadata?: Record<string, string>;
  userAgent?: string;
  referrer?: string;
}

export interface AnalyticsSummary {
  totalEvents: number;
  eventsByType: Record<string, number>;
  topLabels: { label: string; count: number }[];
  recentEvents: AnalyticsEvent[];
}

// Portfolio data types (frontend only - stored in JSON)
export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  category: "software" | "design" | "both";
  demoUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  imageUrl?: string;
}

export interface Certification {
  id: string;
  name: string;
  provider: string;
  year: string;
  credentialUrl?: string;
}

export interface SocialLinks {
  linkedin?: string;
  github?: string;
  instagram?: string;
  email?: string;
  phone?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  imageUrl?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
}

export interface CaseStudy {
  projectId: string;
  overview: string;
  problem: string;
  solution: string;
  process: string[];
  results: string[];
  lessons: string[];
}
