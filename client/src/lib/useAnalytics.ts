import { useCallback } from "react";

type EventType =
  | "page_view"
  | "section_view"
  | "button_click"
  | "resume_download"
  | "project_view"
  | "link_click";

interface TrackOptions {
  label: string;
  metadata?: Record<string, string>;
}

async function sendEvent(type: EventType, options: TrackOptions) {
  try {
    await fetch("/api/analytics/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type,
        label: options.label,
        metadata: options.metadata,
        referrer: document.referrer || undefined,
      }),
    });
  } catch {
    // Silently fail — analytics should never break the UI
  }
}

export function useAnalytics() {
  const trackPageView = useCallback(
    (label: string, metadata?: Record<string, string>) => {
      sendEvent("page_view", { label, metadata });
    },
    [],
  );

  const trackSectionView = useCallback((section: string) => {
    sendEvent("section_view", { label: section });
  }, []);

  const trackButtonClick = useCallback(
    (button: string, metadata?: Record<string, string>) => {
      sendEvent("button_click", { label: button, metadata });
    },
    [],
  );

  const trackResumeDownload = useCallback(() => {
    sendEvent("resume_download", { label: "resume_pdf" });
  }, []);

  const trackProjectView = useCallback((projectTitle: string) => {
    sendEvent("project_view", { label: projectTitle });
  }, []);

  const trackLinkClick = useCallback((label: string, url?: string) => {
    sendEvent("link_click", { label, metadata: url ? { url } : undefined });
  }, []);

  return {
    trackPageView,
    trackSectionView,
    trackButtonClick,
    trackResumeDownload,
    trackProjectView,
    trackLinkClick,
  };
}
