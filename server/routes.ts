import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

const insertAnalyticsEventSchema = z.object({
  type: z.enum(["page_view", "section_view", "button_click", "resume_download", "project_view", "blog_view", "link_click"]),
  label: z.string().min(1).max(200),
  metadata: z.record(z.string()).optional(),
  userAgent: z.string().optional(),
  referrer: z.string().optional(),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(validatedData.email)) {
        return res.status(400).json({ error: "Invalid email address" });
      }

      const message = await storage.createContactMessage(validatedData);
      
      return res.status(201).json({
        success: true,
        message: "Message sent successfully",
        id: message.id,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: "Validation error",
          details: error.errors,
        });
      }
      console.error("Contact form error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  // Analytics: track event
  app.post("/api/analytics/track", async (req, res) => {
    try {
      const validatedData = insertAnalyticsEventSchema.parse(req.body);
      const userAgent = req.headers["user-agent"] || undefined;
      const referrer = req.headers["referer"] || undefined;

      const event = await storage.trackEvent({
        ...validatedData,
        userAgent,
        referrer,
      });

      return res.status(201).json({ success: true, id: event.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Validation error", details: error.errors });
      }
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  // Analytics: get summary
  app.get("/api/analytics/summary", async (_req, res) => {
    try {
      const summary = await storage.getAnalyticsSummary();
      return res.json(summary);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  return httpServer;
}
