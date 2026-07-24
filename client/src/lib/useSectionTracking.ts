import { useEffect } from "react";
import { useAnalytics } from "./useAnalytics";

const TRACKED_SECTIONS = ["about", "experience", "projects", "certifications", "testimonials", "blog", "contact"];

export function useSectionTracking() {
  const { trackSectionView } = useAnalytics();

  useEffect(() => {
    const tracked = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting && !tracked.has(id)) {
            tracked.add(id);
            trackSectionView(id);
          }
        });
      },
      { threshold: 0.3 }
    );

    TRACKED_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [trackSectionView]);
}
