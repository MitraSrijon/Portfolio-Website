import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";
import { ExternalLink, Github, BookOpen, Receipt, Layers } from "lucide-react";
import type { Project } from "@shared/schema";

const projectIcons: Record<string, typeof Layers> = {
  "library-management-system": BookOpen,
  "expense-tracker": Receipt,
};

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-card/30"
      data-testid="section-projects"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4"
            data-testid="text-projects-title"
          >
            Projects
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of software projects I've built
          </p>
        </div>

        {/* Projects */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-testid="projects-grid"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const Icon = projectIcons[project.id] || Layers;

  return (
    <Card
      className="group hover-elevate transition-all duration-300 overflow-visible flex flex-col"
      data-testid={`card-project-${project.id}`}
    >
      {/* Project Header */}
      <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent/40 to-background flex items-center justify-center rounded-t-lg overflow-hidden">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-background/80 border border-border flex items-center justify-center mx-auto mb-3 shadow-sm">
            <Icon className="h-8 w-8 text-primary" />
          </div>

          <p className="text-sm font-medium text-foreground">{project.title}</p>

          <p className="text-xs text-muted-foreground mt-1">Software Project</p>
        </div>
      </div>

      <CardContent className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          {/* Title */}
          <h3
            className="font-heading text-lg font-semibold text-foreground leading-tight mb-3"
            data-testid={`text-project-title-${project.id}`}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className="text-muted-foreground text-sm mb-4 line-clamp-3"
            data-testid={`text-project-description-${project.id}`}
          >
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs"
                data-testid={`badge-tech-${project.id}-${tech}`}
              >
                {tech}
              </Badge>
            ))}

            {project.technologies.length > 5 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 5}
              </Badge>
            )}
          </div>

          {/* Highlights */}
          <div className="mb-4">
            <h4 className="text-xs font-medium text-foreground mb-2">
              Highlights
            </h4>

            <ul className="space-y-1.5">
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

        {/* Links */}
        {/* Links */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
          <Button size="sm" variant="outline" asChild className="gap-1.5">
            <a
              href={project.githubUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`link-github-${project.id}`}
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
          </Button>

          <Button
            size="sm"
            variant="outline"
            disabled={!project.demoUrl}
            asChild={!!project.demoUrl}
            className="gap-1.5"
          >
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-demo-${project.id}`}
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            ) : (
              <span data-testid={`link-demo-${project.id}`}>
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </span>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
