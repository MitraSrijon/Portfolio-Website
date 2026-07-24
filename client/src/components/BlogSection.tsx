import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/portfolio";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "wouter";

export function BlogSection() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section
      id="blog"
      className="py-20 md:py-28 px-6 md:px-12 lg:px-16"
      data-testid="section-blog"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4" data-testid="text-blog-title">
              Blog
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Thoughts, insights, and lessons learned
            </p>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="gap-2" data-testid="button-view-all-posts">
              View All Posts
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="blog-posts-grid">
          {latestPosts.map((post) => (
            <Card
              key={post.id}
              className="hover-elevate transition-all duration-300 overflow-visible flex flex-col"
              data-testid={`card-blog-post-${post.id}`}
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-accent/50 flex items-center justify-center rounded-t-lg overflow-hidden">
                <div className="text-center p-6">
                  <BookOpen className="h-10 w-10 text-muted-foreground/50 mx-auto mb-2" />
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 flex flex-col flex-1">
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-foreground leading-tight mb-2" data-testid={`text-blog-title-${post.id}`}>
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2" data-testid={`text-blog-excerpt-${post.id}`}>
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <Button variant="ghost" size="sm" className="w-full gap-1.5" data-testid={`link-read-post-${post.id}`}>
                    Read Article
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
