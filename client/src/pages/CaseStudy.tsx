import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, caseStudies } from "@/data/portfolio";
import { ArrowLeft, ExternalLink, Github, CheckCircle, Lightbulb, Target, AlertCircle, TrendingUp } from "lucide-react";
import { Link, useParams } from "wouter";
import { useAnalytics } from "@/lib/useAnalytics";

export default function CaseStudy() {
  const params = useParams<{ id: string }>();
  const { trackProjectView } = useAnalytics();
  
  const project = projects.find((p) => p.id === params.id);
  const caseStudy = caseStudies[params.id || ""];

  useEffect(() => {
    if (project) {
      trackProjectView(project.title);
    }
  }, [project, trackProjectView]);

  if (!project || !caseStudy) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-semibold text-foreground mb-4">
            Case Study Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            The case study you're looking for doesn't exist.
          </p>
          <Link href="/#projects">
            <Button>View All Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center justify-between gap-4">
            <Link href="/#projects">
              <Button variant="ghost" size="sm" className="gap-2" data-testid="button-back-projects">
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              {project.demoUrl && (
                <Button variant="outline" size="sm" asChild className="gap-1.5">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" data-testid="button-live-demo">
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" size="sm" asChild className="gap-1.5">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" data-testid="button-view-code">
                    <Github className="h-3.5 w-3.5" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 md:px-12 py-12">
        <article data-testid={`case-study-${project.id}`}>
          <header className="mb-12">
            <Badge variant="secondary" className="mb-4 capitalize">
              {project.category}
            </Badge>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6" data-testid="text-case-study-title">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </header>

          <section className="mb-12" data-testid="section-overview">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Target className="h-6 w-6 text-primary" />
              Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {caseStudy.overview}
            </p>
          </section>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card data-testid="card-problem">
              <CardContent className="p-6 md:p-8">
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-destructive" />
                  The Problem
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {caseStudy.problem}
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-solution">
              <CardContent className="p-6 md:p-8">
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  The Solution
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {caseStudy.solution}
                </p>
              </CardContent>
            </Card>
          </div>

          <section className="mb-12" data-testid="section-process">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
              The Process
            </h2>
            <div className="space-y-4">
              {caseStudy.process.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12" data-testid="section-results">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              Results
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {caseStudy.results.map((result, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{result}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12" data-testid="section-lessons">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Key Takeaways
                </h2>
                <div className="space-y-4">
                  {caseStudy.lessons.map((lesson, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <p className="text-muted-foreground">{lesson}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <footer className="pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground">
                Interested in working together on a similar project?
              </p>
              <Link href="/#contact">
                <Button data-testid="button-get-in-touch">Get in Touch</Button>
              </Link>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}
