import { type User, type InsertUser, type ContactMessage, type InsertContactMessage, type AnalyticsEvent, type InsertAnalyticsEvent, type AnalyticsSummary } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  trackEvent(event: InsertAnalyticsEvent): Promise<AnalyticsEvent>;
  getAnalyticsSummary(): Promise<AnalyticsSummary>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactMessages: Map<string, ContactMessage>;
  private analyticsEvents: AnalyticsEvent[];
  private readonly MAX_EVENTS = 10000;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.analyticsEvents = [];
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async trackEvent(insertEvent: InsertAnalyticsEvent): Promise<AnalyticsEvent> {
    const event: AnalyticsEvent = {
      ...insertEvent,
      id: randomUUID(),
      timestamp: new Date(),
    };
    this.analyticsEvents.push(event);
    if (this.analyticsEvents.length > this.MAX_EVENTS) {
      this.analyticsEvents.shift();
    }
    return event;
  }

  async getAnalyticsSummary(): Promise<AnalyticsSummary> {
    const events = this.analyticsEvents;
    const eventsByType: Record<string, number> = {};
    const labelCounts: Record<string, number> = {};

    for (const event of events) {
      eventsByType[event.type] = (eventsByType[event.type] || 0) + 1;
      labelCounts[event.label] = (labelCounts[event.label] || 0) + 1;
    }

    const topLabels = Object.entries(labelCounts)
      .map(([label, count]) => ({ label, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    const recentEvents = [...events]
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
      .slice(0, 20);

    return {
      totalEvents: events.length,
      eventsByType,
      topLabels,
      recentEvents,
    };
  }
}

export const storage = new MemStorage();
