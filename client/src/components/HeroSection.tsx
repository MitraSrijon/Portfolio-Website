import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { personalInfo } from "@/data/portfolio";
import { generateResumePDF } from "@/lib/generateResume";
import { useAnalytics } from "@/lib/useAnalytics";
import { ArrowDown, Mail, FolderOpen, Download } from "lucide-react";

export function HeroSection() {
  const { trackPageView, trackButtonClick, trackResumeDownload } = useAnalytics();

  useEffect(() => {
    trackPageView("portfolio_home");
  }, [trackPageView]);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    trackResumeDownload();
    generateResumePDF();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6 md:px-12 lg:px-16"
      data-testid="section-hero"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-muted-foreground text-base md:text-lg font-medium animate-fade-in" data-testid="text-greeting">
                  Hello, I'm
                </p>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight" data-testid="text-name">
                  {personalInfo.name}
                </h1>
                <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground" data-testid="text-tagline">
                  {personalInfo.tagline}
                </h2>
              </div>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0" data-testid="text-subtitle">
                {personalInfo.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button
                  size="lg"
                  onClick={() => { trackButtonClick("view_projects"); scrollToSection("projects"); }}
                  className="gap-2"
                  data-testid="button-view-projects"
                >
                  <FolderOpen className="h-4 w-4" />
                  View Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => { trackButtonClick("contact_me"); scrollToSection("contact"); }}
                  className="gap-2"
                  data-testid="button-contact-me"
                >
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleResumeDownload}
                  className="gap-2"
                  data-testid="button-download-resume"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl scale-110" />
              <Avatar className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-background shadow-xl relative" data-testid="img-avatar">
                <AvatarFallback className="bg-gradient-to-br from-primary/10 to-accent text-6xl md:text-7xl lg:text-8xl font-heading font-semibold text-foreground">
                  {personalInfo.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 lg:mt-24">
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
