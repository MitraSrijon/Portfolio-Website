import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { socialLinks } from "@/data/portfolio";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, ApiError } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import {
  Mail,
  Phone,
  Send,
  Linkedin,
  Github,
  Loader2,
  Code2,
} from "lucide-react";

const contactFormSchema = insertContactMessageSchema.extend({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters"),
  subject: z
    .string()
    .min(1, "Subject is required")
    .min(3, "Subject must be at least 3 characters"),
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      let errorMessage =
        "Please try again later or contact me directly via email.";

      if (error instanceof ApiError) {
        if (error.details && error.details.length > 0) {
          errorMessage = error.details.map((d) => d.message).join(". ");
        } else if (error.message) {
          errorMessage = error.message;
        }
      } else if (error.message) {
        errorMessage = error.message;
      }

      toast({
        title: "Failed to send message",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-card/30"
      data-testid="section-contact"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4"
            data-testid="text-contact-title"
          >
            Get In Touch
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interested in connecting or discussing an opportunity? Feel free to
            reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-6 md:p-8">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            data-testid="input-contact-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            {...field}
                            data-testid="input-contact-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Subject"
                            {...field}
                            data-testid="input-contact-subject"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message..."
                            rows={5}
                            className="resize-none"
                            {...field}
                            data-testid="input-contact-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2"
                    disabled={mutation.isPending}
                    data-testid="button-submit-contact"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Details */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  {socialLinks.email && (
                    <a
                      href={`mailto:${socialLinks.email}`}
                      className="flex items-center gap-4 p-3 rounded-lg bg-accent/50 hover-elevate transition-all overflow-visible"
                      data-testid="link-contact-email"
                    >
                      <div className="p-2 rounded-md bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Email
                        </p>

                        <p className="text-sm text-muted-foreground">
                          {socialLinks.email}
                        </p>
                      </div>
                    </a>
                  )}

                  {socialLinks.phone && (
                    <a
                      href={`tel:${socialLinks.phone}`}
                      className="flex items-center gap-4 p-3 rounded-lg bg-accent/50 hover-elevate transition-all overflow-visible"
                      data-testid="link-contact-phone"
                    >
                      <div className="p-2 rounded-md bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Phone
                        </p>

                        <p className="text-sm text-muted-foreground">
                          {socialLinks.phone}
                        </p>
                      </div>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Developer Profiles */}
            <Card>
              <CardContent className="p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Developer Profiles
                </h3>

                <div className="grid grid-cols-3 gap-3">
                  {socialLinks.github && (
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-2 p-4 rounded-lg border border-border bg-accent/30 hover:bg-primary/10 hover:border-primary/30 transition-all"
                      data-testid="link-social-github"
                    >
                      <Github className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />

                      <span className="text-xs text-muted-foreground group-hover:text-foreground">
                        GitHub
                      </span>
                    </a>
                  )}

                  {socialLinks.linkedin && (
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-2 p-4 rounded-lg border border-border bg-accent/30 hover:bg-primary/10 hover:border-primary/30 transition-all"
                      data-testid="link-social-linkedin"
                    >
                      <Linkedin className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />

                      <span className="text-xs text-muted-foreground group-hover:text-foreground">
                        LinkedIn
                      </span>
                    </a>
                  )}

                  {socialLinks.leetcode && (
                    <a
                      href={socialLinks.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-2 p-4 rounded-lg border border-border bg-accent/30 hover:bg-primary/10 hover:border-primary/30 transition-all"
                      data-testid="link-social-leetcode"
                    >
                      <Code2 className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />

                      <span className="text-xs text-muted-foreground group-hover:text-foreground">
                        LeetCode
                      </span>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
