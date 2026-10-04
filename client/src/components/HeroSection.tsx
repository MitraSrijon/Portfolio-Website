import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";
import { useAnalytics } from "@/lib/useAnalytics";
import { ArrowDown, Mail, FolderOpen, Download } from "lucide-react";

export function HeroSection() {
  const { trackPageView, trackButtonClick, trackResumeDownload } =
    useAnalytics();

  useEffect(() => {
    trackPageView("portfolio_home");
  }, [trackPageView]);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeClick = () => {
    trackResumeDownload();
  };

  return (
    <section
      id="home"
      className="px-6 md:px-12 lg:px-16 pt-20 pb-10"
      data-testid="section-hero"
    >
      <div className="max-w-6xl mx-auto">
        {/* LEFT + RIGHT */}
        <div className="flex flex-col-reverse md:flex-row items-center min-h-[65vh] gap-8">
          {/* LEFT SIDE */}
          <div className="w-full md:w-[60%] text-center md:text-left">
            <p
              className="text-muted-foreground text-base md:text-lg font-medium mb-2"
              data-testid="text-greeting"
            >
              Hello, I'm
            </p>

            <h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              data-testid="text-name"
            >
              {personalInfo.name}
            </h1>

            <h2
              className="font-heading text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mt-3"
              data-testid="text-tagline"
            >
              Software Engineer
            </h2>

            <div className="flex flex-col md:flex-row gap-3 mt-8 items-center md:items-start">
              <Button
                size="lg"
                onClick={() => {
                  trackButtonClick("view_projects");
                  scrollToSection("projects");
                }}
                className="w-full sm:w-auto"
                data-testid="button-view-projects"
              >
                <FolderOpen className="h-4 w-4" />
                View Projects
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  trackButtonClick("contact_me");
                  scrollToSection("contact");
                }}
                className="w-full sm:w-auto"
                data-testid="button-contact-me"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto"
                data-testid="button-download-resume"
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleResumeClick}
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE - PROFILE PHOTO */}
          <div className="w-full md:w-[40%] flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl scale-110" />

              <div
                className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-background shadow-xl overflow-hidden relative"
                data-testid="img-avatar"
              >
                <img
                  src="/profile.jpg"
                  alt="Srijon Mitra"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL DOWN */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
            aria-label="Scroll to about section"
            data-testid="button-scroll-down"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
