import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/portfolio";
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, LinkIcon } from "lucide-react";
import { SiX } from "react-icons/si";
import { Link, useParams } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { useAnalytics } from "@/lib/useAnalytics";

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const { toast } = useToast();
  const { trackBlogView } = useAnalytics();
  
  const post = blogPosts.find((p) => p.slug === params.slug);

  useEffect(() => {
    if (post) {
      trackBlogView(post.title);
    }
  }, [post, trackBlogView]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-semibold text-foreground mb-4">
            Article Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            The article you're looking for doesn't exist.
          </p>
          <Link href="/blog">
            <Button>View All Articles</Button>
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast({
      title: "Link copied!",
      description: "Article link has been copied to clipboard.",
    });
  };

  const renderMarkdown = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let listItems: string[] = [];
    let isInList = false;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={elements.length} className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
            {listItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
            ))}
          </ul>
        );
        listItems = [];
      }
      isInList = false;
    };

    const parseInline = (text: string) => {
      return text
        .replace(/\*\*(.+?)\*\*/g, "<strong class='text-foreground'>$1</strong>")
        .replace(/`(.+?)`/g, "<code class='bg-accent px-1.5 py-0.5 rounded text-sm'>$1</code>");
    };

    lines.forEach((line, index) => {
      if (line.startsWith("# ")) {
        flushList();
        elements.push(
          <h1 key={index} className="font-heading text-3xl font-semibold text-foreground mt-8 mb-4">
            {line.slice(2)}
          </h1>
        );
      } else if (line.startsWith("## ")) {
        flushList();
        elements.push(
          <h2 key={index} className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        flushList();
        elements.push(
          <h3 key={index} className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">
            {line.slice(4)}
          </h3>
        );
      } else if (line.startsWith("- ")) {
        isInList = true;
        listItems.push(line.slice(2));
      } else if (line.trim() === "") {
        flushList();
      } else {
        flushList();
        elements.push(
          <p
            key={index}
            className="text-muted-foreground leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: parseInline(line) }}
          />
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center justify-between gap-4">
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="gap-2" data-testid="button-back-blog">
                <ArrowLeft className="h-4 w-4" />
                All Articles
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCopyLink}
                aria-label="Copy link"
                data-testid="button-copy-link"
              >
                <LinkIcon className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                aria-label="Share on LinkedIn"
                data-testid="button-share-linkedin"
              >
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                aria-label="Share on X"
                data-testid="button-share-x"
              >
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiX className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        <article data-testid={`article-${post.slug}`}>
          <header className="mb-12">
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6" data-testid="text-post-title">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <div className="prose prose-lg max-w-none" data-testid="blog-content">
            {renderMarkdown(post.content)}
          </div>

          <footer className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground">
                Thanks for reading! Have thoughts to share?
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Share2 className="h-4 w-4" />
                    Share Article
                  </a>
                </Button>
                <Link href="/#contact">
                  <Button size="sm">Get in Touch</Button>
                </Link>
              </div>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}
