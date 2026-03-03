import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { BookOpen, Heart, Play, Sparkles, Star, Zap } from "lucide-react";

const FEATURED_VIDEO_ID = "pEJxlyEKf_Q";

const features = [
  {
    icon: Sparkles,
    title: "Animated Storytelling",
    desc: "Character-driven tales that feel real and relatable",
    color: "from-[oklch(0.52_0.24_290)] to-[oklch(0.48_0.22_305)]",
  },
  {
    icon: Heart,
    title: "Mindful Vibes",
    desc: "Content rooted in self-reflection and mindfulness",
    color: "from-[oklch(0.62_0.18_195)] to-[oklch(0.58_0.2_200)]",
  },
  {
    icon: Zap,
    title: "Weekly Episodes",
    desc: "Fresh stories and vlogs every single week",
    color: "from-[oklch(0.72_0.19_55)] to-[oklch(0.68_0.21_45)]",
  },
  {
    icon: Star,
    title: "Creative Community",
    desc: "Join thousands who vibe with Shaku's world",
    color: "from-[oklch(0.65_0.22_340)] to-[oklch(0.60_0.24_350)]",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] bg-hero-mesh noise-overlay flex items-center">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-32 -left-32 h-96 w-96 blob-purple"
            style={{ animation: "float 7s ease-in-out infinite" }}
          />
          <div
            className="absolute top-20 -right-20 h-72 w-72 blob-teal"
            style={{ animation: "float 5s ease-in-out infinite reverse" }}
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, oklch(0.72 0.19 55) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Text content */}
            <div className="flex flex-col gap-6">
              <div
                className="animate-slide-up"
                style={{ animationDelay: "0ms" }}
              >
                <Badge className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary border-primary/20 mb-4">
                  <Sparkles className="h-3.5 w-3.5" />
                  Animation meets real life
                </Badge>
              </div>

              <h1
                className="font-display text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl animate-slide-up"
                style={{ animationDelay: "80ms" }}
              >
                Stories that{" "}
                <span className="text-gradient-brand">move you.</span>
                <br />
                Vibes that{" "}
                <span className="text-gradient-purple-pink">stay.</span>
              </h1>

              <p
                className="text-lg text-foreground/65 max-w-lg leading-relaxed animate-slide-up"
                style={{ animationDelay: "160ms" }}
              >
                Meet Shaku — your animated guide through life's most relatable
                moments, mindful reflections, and creative adventures. New
                episodes every week.
              </p>

              <div
                className="flex flex-wrap gap-3 animate-slide-up"
                style={{ animationDelay: "240ms" }}
              >
                <Link to="/videos">
                  <Button
                    data-ocid="home.watch_button"
                    size="lg"
                    className="btn-brand-primary rounded-full px-8 font-bold text-base gap-2"
                  >
                    <Play className="h-5 w-5 fill-current" />
                    Watch Now
                  </Button>
                </Link>
                <Link to="/blog">
                  <Button
                    data-ocid="home.blog_button"
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 font-bold text-base gap-2 border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all"
                  >
                    <BookOpen className="h-5 w-5" />
                    Read the Blog
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div
                className="flex gap-6 pt-2 animate-slide-up"
                style={{ animationDelay: "320ms" }}
              >
                {[
                  { value: "10K+", label: "Subscribers" },
                  { value: "50+", label: "Episodes" },
                  { value: "Weekly", label: "Uploads" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="font-display text-2xl font-extrabold text-gradient-brand">
                      {stat.value}
                    </span>
                    <span className="text-xs text-foreground/50 font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Character image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-80 w-80 sm:h-[420px] sm:w-[420px]">
                {/* Deep glow pool */}
                <div
                  className="absolute inset-0 rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 70%, oklch(0.52 0.24 290 / 0.45) 0%, oklch(0.62 0.18 195 / 0.2) 50%, transparent 80%)",
                    transform: "scale(1.1)",
                  }}
                />

                {/* Outer slow orbit ring */}
                <div
                  className="absolute inset-0 rounded-full border border-dashed border-primary/15"
                  style={{ animation: "spin-slow 18s linear infinite" }}
                />

                {/* Mid orbit ring with dots */}
                <div
                  className="absolute inset-6 rounded-full border border-primary/20"
                  style={{ animation: "spin-slow 12s linear infinite reverse" }}
                >
                  {/* Orbit dot */}
                  <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-to-br from-[oklch(0.72_0.19_55)] to-[oklch(0.65_0.22_340)] shadow-orange" />
                </div>

                {/* Shaped backdrop circle */}
                <div
                  className="absolute inset-8 rounded-full"
                  style={{
                    background:
                      "radial-gradient(ellipse at 40% 30%, oklch(0.88 0.06 290 / 0.7) 0%, oklch(0.92 0.04 195 / 0.4) 60%, transparent 100%)",
                    backdropFilter: "blur(2px)",
                  }}
                />

                {/* Character */}
                <img
                  src="/assets/generated/shaku-character-transparent.dim_400x400.png"
                  alt="Shaku — the ShakuBabble character"
                  className="relative z-10 h-full w-full object-contain animate-float animate-pulse-glow drop-shadow-2xl"
                />

                {/* Floating emoji badges */}
                <span
                  className="absolute top-4 right-6 z-20 rounded-2xl bg-white/90 px-2.5 py-1 text-sm font-bold shadow-card border border-white"
                  style={{ animation: "float 3.5s ease-in-out infinite" }}
                >
                  ✨ Stories
                </span>
                <span
                  className="absolute bottom-10 left-2 z-20 rounded-2xl bg-white/90 px-2.5 py-1 text-sm font-bold shadow-card border border-white"
                  style={{
                    animation: "float 4.5s ease-in-out infinite reverse",
                  }}
                >
                  🎨 Vibes
                </span>
                <span
                  className="absolute top-1/2 -right-2 z-20 rounded-2xl bg-white/90 px-2.5 py-1 text-sm font-bold shadow-card border border-white"
                  style={{ animation: "float 5s ease-in-out 0.8s infinite" }}
                >
                  🧘 Mindful
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Video ────────────────────────────────────────────────── */}
      <section className="py-20 bg-section-mesh">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="mb-3 rounded-full bg-[oklch(0.62_0.18_195_/_0.12)] text-[oklch(0.42_0.18_195)] border-[oklch(0.62_0.18_195_/_0.3)] px-4 py-1">
              Latest Drop
            </Badge>
            <h2 className="font-display text-4xl font-extrabold text-foreground">
              Featured Episode
            </h2>
            <p className="mt-2 text-foreground/60 text-base">
              Catch the latest story from Shaku's world
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="relative overflow-hidden rounded-3xl shadow-brand-lg ring-1 ring-primary/20">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}`}
                  title="Featured ShakuBabble Episode"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/videos">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 font-semibold border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all gap-2"
              >
                <Play className="h-4 w-4 fill-current text-primary" />
                See All Episodes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-extrabold text-foreground">
              What's ShakuBabble?
            </h2>
            <p className="mt-3 text-foreground/60 max-w-lg mx-auto">
              A channel where animation meets authenticity. Stories, vibes, and
              a whole lot of Shaku energy.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="blog-card group relative overflow-hidden rounded-3xl border bg-card p-6 shadow-card"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {feature.desc}
                  </p>
                  {/* Decorative corner gradient */}
                  <div
                    className={`pointer-events-none absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-gradient-to-br ${feature.color} opacity-10 blur-xl transition-all group-hover:opacity-20`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 animate-gradient-shift"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.52 0.24 290), oklch(0.48 0.22 305), oklch(0.62 0.18 195), oklch(0.52 0.24 290))",
            backgroundSize: "300% 300%",
          }}
        />
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-white/30 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Ready to enter Shaku's world?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-md mx-auto">
            Subscribe to the channel and join the ShakuBabble community. New
            stories, new vibes, every week.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://youtube.com/@shakubabble"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-bold text-[oklch(0.52_0.24_290)] shadow-brand-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <Play className="h-5 w-5 fill-current" />
              Subscribe on YouTube
            </a>
            <Link to="/about">
              <Button
                size="lg"
                className="rounded-full px-8 font-bold bg-white/15 text-white border-2 border-white/30 hover:bg-white/25 transition-all"
                variant="outline"
              >
                Meet Shaku
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
