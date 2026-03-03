import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Calendar, Tag } from "lucide-react";
import { useState } from "react";
import type { BlogPost } from "../backend.d";
import { useGetAllPosts } from "../hooks/useQueries";

const CATEGORIES = [
  "All",
  "Mindfulness",
  "Lifestyle",
  "Creativity",
  "Reflections",
  "Animation",
];

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

// Ambient glow color injected into the card background per category
const CATEGORY_GLOW: Record<string, string> = {
  Mindfulness: "oklch(0.62 0.18 195 / 0.08)",
  Lifestyle: "oklch(0.72 0.19 55 / 0.08)",
  Creativity: "oklch(0.65 0.22 340 / 0.08)",
  Reflections: "oklch(0.52 0.24 290 / 0.08)",
  Animation: "oklch(0.72 0.19 55 / 0.07)",
  default: "oklch(0.52 0.24 290 / 0.06)",
};

// Gradient color for the card's bottom-right corner accent
const CATEGORY_ACCENT: Record<string, string> = {
  Mindfulness: "oklch(0.62 0.18 195)",
  Lifestyle: "oklch(0.72 0.19 55)",
  Creativity: "oklch(0.65 0.22 340)",
  Reflections: "oklch(0.52 0.24 290)",
  Animation: "oklch(0.68 0.19 55)",
  default: "oklch(0.52 0.24 290)",
};

function getCategoryGlow(category: string): string {
  return CATEGORY_GLOW[category] ?? CATEGORY_GLOW.default;
}

function getCategoryAccent(category: string): string {
  return CATEGORY_ACCENT[category] ?? CATEGORY_ACCENT.default;
}

function getCategoryStyle(category: string): string {
  return CATEGORY_COLORS[category] ?? CATEGORY_COLORS.default;
}

function BlogSkeleton() {
  return (
    <div
      data-ocid="blog.loading_state"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {(["s1", "s2", "s3", "s4", "s5", "s6"] as const).map((key) => (
        <div
          key={key}
          className="rounded-3xl border bg-card p-6 shadow-card space-y-3"
        >
          <Skeleton className="h-5 w-24 rounded-full" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      ))}
    </div>
  );
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const glow = getCategoryGlow(post.category);
  const accent = getCategoryAccent(post.category);

  return (
    <article
      data-ocid={`blog.item.${index + 1}`}
      className="blog-card group relative flex flex-col overflow-hidden rounded-3xl border bg-card shadow-card"
      style={{
        background: `radial-gradient(ellipse at 100% 0%, ${glow} 0%, transparent 60%), oklch(var(--card))`,
      }}
    >
      {/* Left accent bar — thicker, per-category colored */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl transition-all group-hover:w-1.5"
        style={{
          background: `linear-gradient(to bottom, ${accent}, ${accent}88)`,
        }}
      />

      {/* Bottom-right large ambient blob */}
      <div
        className="pointer-events-none absolute -bottom-8 -right-8 h-36 w-36 rounded-full blur-2xl opacity-60 transition-opacity group-hover:opacity-90"
        style={{
          background: `radial-gradient(circle, ${accent}30 0%, transparent 70%)`,
        }}
      />

      <div className="flex flex-1 flex-col gap-3 pl-7 pr-6 pb-6 pt-6">
        {/* Category & date row */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <Badge
            className={`rounded-full px-3 py-0.5 text-xs font-semibold border ${getCategoryStyle(post.category)}`}
          >
            <Tag className="h-3 w-3 mr-1" />
            {post.category}
          </Badge>
          <span className="flex items-center gap-1 text-xs text-foreground/40 font-medium tabular-nums">
            <Calendar className="h-3 w-3" />
            {post.date}
          </span>
        </div>

        {/* Title — larger, more dominant */}
        <h3 className="font-display text-xl font-extrabold text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-foreground/55 leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Read more — pill with filled accent, not ghost */}
        <Link
          to="/blog/$id"
          params={{ id: post.id.toString() }}
          className="mt-2"
        >
          <Button
            data-ocid={`blog.read_more.button.${index + 1}`}
            size="sm"
            className="rounded-full font-bold px-5 gap-1.5 transition-all text-primary-foreground group/btn"
            style={{
              background: `linear-gradient(135deg, ${accent}, ${accent}cc)`,
              border: "none",
            }}
          >
            Read More
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { data: posts, isLoading, isError } = useGetAllPosts();

  const filteredPosts =
    activeCategory === "All"
      ? (posts ?? [])
      : (posts ?? []).filter((p) => p.category === activeCategory);

  return (
    <div className="bg-section-mesh min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="blob-purple absolute -top-16 left-1/4 h-64 w-64 opacity-25" />
          <div className="blob-teal absolute -bottom-8 right-1/4 h-48 w-48 opacity-20" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-4 rounded-full bg-[oklch(0.65_0.22_340_/_0.12)] text-[oklch(0.45_0.22_340)] border-[oklch(0.65_0.22_340_/_0.3)] px-4 py-1.5 text-sm font-semibold">
            <BookOpen className="h-3.5 w-3.5 mr-1.5" />
            Shaku's Journal
          </Badge>
          <h1 className="font-display text-5xl font-extrabold text-foreground mb-4">
            The <span className="text-gradient-purple-pink">Blog</span>
          </h1>
          <p className="text-foreground/60 text-lg max-w-lg mx-auto">
            Personal reflections, mindfulness notes, creative musings — all
            through Shaku's lens.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[65px] z-40 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                type="button"
                key={cat}
                data-ocid="blog.filter.tab"
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold transition-all border ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-brand"
                    : "bg-card text-foreground/60 border-border hover:border-primary/40 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog posts */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          {isLoading && <BlogSkeleton />}

          {isError && (
            <div
              data-ocid="blog.error_state"
              className="rounded-3xl border border-destructive/25 bg-destructive/5 p-12 text-center"
            >
              <p className="font-display text-xl font-bold text-destructive mb-2">
                Couldn't load posts
              </p>
              <p className="text-sm text-foreground/60">
                Something went wrong. Try refreshing the page.
              </p>
            </div>
          )}

          {!isLoading && !isError && filteredPosts.length === 0 && (
            <div
              data-ocid="blog.empty_state"
              className="rounded-3xl border bg-card p-16 text-center shadow-card"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
                <BookOpen className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="font-display text-xl font-bold text-foreground mb-2">
                No posts yet
              </p>
              <p className="text-sm text-foreground/60">
                {activeCategory === "All"
                  ? "Shaku is writing... check back soon!"
                  : `No posts in "${activeCategory}" yet.`}
              </p>
            </div>
          )}

          {!isLoading && !isError && filteredPosts.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, i) => (
                <BlogCard key={post.id.toString()} post={post} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
