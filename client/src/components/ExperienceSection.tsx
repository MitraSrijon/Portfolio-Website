import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/portfolio";
import { Briefcase, Calendar, Award } from "lucide-react";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 px-6 md:px-12 lg:px-16"
      data-testid="section-experience"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4"
            data-testid="text-experience-title"
          >
            Work Experience
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey across enterprise IT and software
            development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Timeline */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block md:-translate-x-px" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                data-testid={`experience-item-${exp.id}`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md z-10" />

                {/* Date */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0
                      ? "md:text-right md:pr-12"
                      : "md:text-left md:pl-12"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 mb-2 ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    <Calendar className="h-4 w-4 text-muted-foreground" />

                    <span
                      className="text-sm text-muted-foreground"
                      data-testid={`text-duration-${exp.id}`}
                    >
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                </div>

                {/* Experience Card */}
                <div className="flex-1">
                  <Card className="hover-elevate transition-all duration-300 overflow-visible">
                    <CardContent className="p-6 md:p-7">
                      {/* Role Header */}
                      <div className="flex items-start gap-4 mb-5">
                        <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>

                        <div className="min-w-0">
                          <h3
                            className="font-heading text-lg font-semibold text-foreground"
                            data-testid={`text-role-${exp.id}`}
                          >
                            {exp.role}
                          </h3>

                          <p
                            className="text-primary font-medium"
                            data-testid={`text-company-${exp.id}`}
                          >
                            {exp.company}
                          </p>

                          <p className="text-sm text-muted-foreground mt-0.5">
                            {exp.duration}
                          </p>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="space-y-5">
                        <div>
                          <h4 className="text-sm font-medium text-foreground mb-3">
                            Responsibilities
                          </h4>

                          <ul className="space-y-2">
                            {exp.responsibilities.map((responsibility, i) => (
                              <li
                                key={i}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />

                                <span>{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Key Highlights */}
                        <div>
                          <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-1.5">
                            <Award className="h-3.5 w-3.5" />
                            Key Highlights
                          </h4>

                          <div className="flex flex-wrap gap-2">
                            {exp.achievements.map((achievement, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="text-xs"
                                data-testid={`badge-achievement-${exp.id}-${i}`}
                              >
                                {achievement}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
