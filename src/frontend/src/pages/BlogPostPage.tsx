import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { useGetPostById } from "../hooks/useQueries";

const CATEGORY_COLORS: Record<string, string> = {
  Mindfulness:
    "bg-[oklch(0.62_0.18_195_/_0.15)] text-[oklch(0.38_0.18_195)] border-[oklch(0.62_0.18_195_/_0.3)]",
  Lifestyle:
    "bg-[oklch(0.72_0.19_55_/_0.15)] text-[oklch(0.45_0.19_55)] border-[oklch(0.72_0.19_55_/_0.3)]",
  Creativity:
    "bg-[oklch(0.65_0.22_340_/_0.15)] text-[oklch(0.42_0.22_340)] border-[oklch(0.65_0.22_340_/_0.3)]",
  Reflections: "bg-primary/10 text-primary border-primary/25",
  Animation:
    "bg-[oklch(0.72_0.19_55_/_0.12)] text-[oklch(0.42_0.19_55)] border-[oklch(0.72_0.19_55_/_0.25)]",
  default: "bg-primary/10 text-primary border-primary/25",
};

function getCategoryStyle(category: string): string {
  return CATEGORY_COLORS[category] ?? CATEGORY_COLORS.default;
}

function PostSkeleton() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Skeleton className="h-6 w-24 rounded-full" />
      <Skeleton className="h-10 w-3/4" />
      <Skeleton className="h-5 w-48" />
      <div className="space-y-3 pt-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}

export default function BlogPostPage() {
  const { id } = useParams({ from: "/blog/$id" });
  const postId = BigInt(id);
  const { data: post, isLoading, isError } = useGetPostById(postId);

  return (
    <div className="bg-section-mesh min-h-screen py-12 pb-24">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <div className="mb-8">
          <Link to="/blog">
            <Button
              data-ocid="blog_post.back.button"
              variant="ghost"
              size="sm"
              className="rounded-full gap-2 text-foreground/60 hover:text-primary hover:bg-primary/8 transition-all font-semibold"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Loading state */}
        {isLoading && (
          <div data-ocid="blog_post.loading_state">
            <PostSkeleton />
          </div>
        )}

        {/* Error state */}
        {isError && (
          <div
            data-ocid="blog_post.error_state"
            className="max-w-3xl mx-auto rounded-3xl border border-destructive/25 bg-destructive/5 p-12 text-center"
          >
            <p className="font-display text-xl font-bold text-destructive mb-2">
              Post not found
            </p>
            <p className="text-sm text-foreground/60 mb-6">
              We couldn't load this post. It may have been removed.
            </p>
            <Link to="/blog">
              <Button className="btn-brand-primary rounded-full px-6 font-semibold">
                Browse All Posts
              </Button>
            </Link>
          </div>
        )}

        {/* Post content */}
        {post && !isLoading && !isError && (
          <article className="max-w-3xl mx-auto">
            {/* Article header card */}
            <div className="relative overflow-hidden rounded-3xl border bg-card shadow-brand p-8 mb-8">
              <div
                className="absolute inset-0 pointer-events-none opacity-5"
                style={{
                  background:
                    "radial-gradient(ellipse at top right, oklch(0.52 0.24 290) 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10 flex flex-col gap-4">
                {/* Category & date */}
                <div className="flex items-center gap-3 flex-wrap">
                  <Badge
                    className={`rounded-full px-3 py-0.5 text-xs font-semibold border ${getCategoryStyle(post.category)}`}
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {post.category}
                  </Badge>
                  <span className="flex items-center gap-1 text-xs text-foreground/45 font-medium">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h1 className="font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
                  {post.title}
                </h1>

                {/* Excerpt */}
                <p className="text-lg text-foreground/65 leading-relaxed italic">
                  {post.excerpt}
                </p>
              </div>
            </div>

            {/* Article body */}
            <div className="rounded-3xl border bg-card shadow-card p-8">
              <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed">
                {post.content.split("\n\n").map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="mb-5 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Divider */}
              <div className="mt-10 pt-8 border-t flex items-center justify-between gap-4 flex-wrap">
                <Link to="/blog">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full gap-2 border-2 border-border hover:border-primary/40 hover:text-primary font-semibold transition-all"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    More from Shaku's Journal
                  </Button>
                </Link>
                <div className="flex items-center gap-2 text-xs text-foreground/40">
                  <span>Written by</span>
                  <span className="font-bold text-primary">Shaku</span>
                </div>
              </div>
            </div>
          </article>
        )}
      </div>
    </div>
  );
}
