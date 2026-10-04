import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { certifications } from "@/data/portfolio";
import { Award, ExternalLink, Calendar } from "lucide-react";

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-card/30"
      data-testid="section-certifications"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4"
            data-testid="text-certifications-title"
          >
            Certifications
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Certifications and credentials I've earned
          </p>
        </div>

        {/* Certifications */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-testid="certifications-grid"
        >
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="group hover-elevate transition-all duration-300 overflow-visible"
              data-testid={`card-certification-${cert.id}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="p-3 rounded-lg bg-primary/10 shrink-0 transition-colors group-hover:bg-primary/15">
                    <Award className="h-6 w-6 text-primary" />
                  </div>

                  {/* Details */}
                  <div className="min-w-0 flex-1">
                    <h3
                      className="font-heading text-base font-semibold text-foreground leading-tight mb-2"
                      data-testid={`text-cert-name-${cert.id}`}
                    >
                      {cert.name}
                    </h3>

                    <p
                      className="text-sm text-primary font-medium mb-2"
                      data-testid={`text-cert-provider-${cert.id}`}
                    >
                      {cert.provider}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />

                      <span data-testid={`text-cert-year-${cert.id}`}>
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Credential */}
                {cert.credentialUrl && (
                  <div className="mt-5 pt-4 border-t border-border">
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="w-full gap-1.5"
                    >
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`link-credential-${cert.id}`}
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        View Credential
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
