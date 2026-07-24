import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personalInfo } from "@/data/portfolio";
import { Lightbulb, Heart, Target, Sparkles, Code, Palette, Camera, Music } from "lucide-react";

const valueIcons: Record<string, typeof Lightbulb> = {
  Quality: Sparkles,
  Simplicity: Lightbulb,
  Collaboration: Heart,
  Growth: Target,
};

const interestIcons: Record<string, typeof Code> = {
  "Open Source": Code,
  "UI/UX Design": Palette,
  "Machine Learning": Target,
  Photography: Camera,
  Music: Music,
};

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-card/30"
      data-testid="section-about"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4" data-testid="text-about-title">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know me a little better
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <Card data-testid="card-background">
              <CardContent className="p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Background
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-background">
                  {personalInfo.about.background}
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-goals">
              <CardContent className="p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Goals
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-goals">
                  {personalInfo.about.goals}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card data-testid="card-values">
              <CardContent className="p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Core Values
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {personalInfo.about.values.map((value) => {
                    const Icon = valueIcons[value.title] || Lightbulb;
                    return (
                      <div
                        key={value.title}
                        className="flex items-start gap-3 p-3 rounded-lg bg-accent/50 transition-colors"
                        data-testid={`value-${value.title.toLowerCase()}`}
                      >
                        <div className="p-2 rounded-md bg-primary/10">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground text-sm">
                            {value.title}
                          </h4>
                          <p className="text-muted-foreground text-xs mt-1">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-interests">
              <CardContent className="p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.about.interests.map((interest) => {
                    const Icon = interestIcons[interest] || Sparkles;
                    return (
                      <Badge
                        key={interest}
                        variant="secondary"
                        className="gap-1.5 px-3 py-1.5"
                        data-testid={`badge-interest-${interest.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <Icon className="h-3 w-3" />
                        {interest}
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <blockquote className="text-xl md:text-2xl text-muted-foreground italic font-light max-w-3xl mx-auto" data-testid="text-quote">
            "The best way to predict the future is to create it."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
