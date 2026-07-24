import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "@/data/portfolio";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-card/30"
      data-testid="section-testimonials"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4" data-testid="text-testimonials-title">
            Testimonials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What colleagues and clients have to say
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6" data-testid="testimonials-grid">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="hover-elevate transition-all duration-300 overflow-visible"
              data-testid={`card-testimonial-${testimonial.id}`}
            >
              <CardContent className="p-6 md:p-8">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed mb-6" data-testid={`text-testimonial-quote-${testimonial.id}`}>
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12" data-testid={`avatar-testimonial-${testimonial.id}`}>
                    <AvatarFallback className="bg-primary/10 text-foreground text-sm font-medium">
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground" data-testid={`text-testimonial-name-${testimonial.id}`}>
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-role-${testimonial.id}`}>
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
