import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, caseStudies } from "@/data/portfolio";
import { ExternalLink, Github, FileText, Layers } from "lucide-react";
import { Link } from "wouter";
import type { Project } from "@shared/schema";

type FilterCategory = "all" | "software" | "design" | "both";

const filterOptions: { value: FilterCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "software", label: "Software" },
  { value: "design", label: "Design" },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "software") return project.category === "software" || project.category === "both";
    if (activeFilter === "design") return project.category === "design" || project.category === "both";
    return true;
  });

  return (
    <section
      id="projects"
      className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-card/30"
      data-testid="section-projects"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4" data-testid="text-projects-title">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects I've worked on
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-12" data-testid="filter-buttons">
          {filterOptions.map((option) => (
            <Button
              key={option.value}
              variant={activeFilter === option.value ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(option.value)}
              className="min-w-[80px]"
              data-testid={`button-filter-${option.value}`}
            >
              {option.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      className="group hover-elevate transition-all duration-300 overflow-visible flex flex-col"
      data-testid={`card-project-${project.id}`}
    >
      <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/50 flex items-center justify-center rounded-t-lg overflow-hidden">
        <div className="text-center p-6">
          <Layers className="h-12 w-12 text-muted-foreground/50 mx-auto mb-2" />
          <span className="text-xs text-muted-foreground">Project Preview</span>
        </div>
      </div>

      <CardContent className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="font-heading text-lg font-semibold text-foreground leading-tight" data-testid={`text-project-title-${project.id}`}>
              {project.title}
            </h3>
            <Badge
              variant="secondary"
              className="text-xs capitalize shrink-0"
              data-testid={`badge-category-${project.id}`}
            >
              {project.category}
            </Badge>
          </div>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-3" data-testid={`text-project-description-${project.id}`}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs" data-testid={`badge-tech-${project.id}-${tech}`}>
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          <div className="mb-4">
            <h4 className="text-xs font-medium text-foreground mb-2">
              Highlights
            </h4>
            <ul className="space-y-1">
              {project.highlights.slice(0, 3).map((highlight, i) => (
                <li
                  key={i}
                  className="text-xs text-muted-foreground flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
          {project.demoUrl && (
            <Button
              size="sm"
              variant="outline"
              asChild
              className="gap-1.5"
            >
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-demo-${project.id}`}
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button
              size="sm"
              variant="outline"
              asChild
              className="gap-1.5"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-github-${project.id}`}
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
            </Button>
          )}
          {caseStudies[project.id] ? (
            <Link href={`/case-study/${project.id}`}>
              <Button
                size="sm"
                variant="outline"
                className="gap-1.5"
                data-testid={`link-case-study-${project.id}`}
              >
                <FileText className="h-3.5 w-3.5" />
                Case Study
              </Button>
            </Link>
          ) : project.caseStudyUrl ? (
            <Button
              size="sm"
              variant="outline"
              asChild
              className="gap-1.5"
            >
              <a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-case-study-${project.id}`}
              >
                <FileText className="h-3.5 w-3.5" />
                Case Study
              </a>
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
