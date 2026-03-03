import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Sparkles, Sun, Users } from "lucide-react";

const traits = [
  {
    icon: Brain,
    label: "Curious",
    desc: "Always asking questions and exploring ideas",
    color: "from-[oklch(0.52_0.24_290)] to-[oklch(0.48_0.22_305)]",
    bg: "bg-primary/10",
    text: "text-primary",
  },
  {
    icon: Sparkles,
    label: "Expressive",
    desc: "Communicates through stories and visuals",
    color: "from-[oklch(0.65_0.22_340)] to-[oklch(0.60_0.24_350)]",
    bg: "bg-[oklch(0.65_0.22_340_/_0.12)]",
    text: "text-[oklch(0.5_0.22_340)]",
  },
  {
    icon: Sun,
    label: "Mindful",
    desc: "Rooted in presence and self-awareness",
    color: "from-[oklch(0.72_0.19_55)] to-[oklch(0.68_0.21_45)]",
    bg: "bg-[oklch(0.72_0.19_55_/_0.12)]",
    text: "text-[oklch(0.5_0.19_55)]",
  },
  {
    icon: Heart,
    label: "Relatable",
    desc: "Experiences the same messy, beautiful life as you",
    color: "from-[oklch(0.62_0.18_195)] to-[oklch(0.58_0.2_200)]",
    bg: "bg-[oklch(0.62_0.18_195_/_0.12)]",
    text: "text-[oklch(0.42_0.18_195)]",
  },
];

const stats = [
  { value: "10K+", label: "Subscribers", icon: Users },
  { value: "50+", label: "Episodes", icon: Sparkles },
  { value: "Weekly", label: "Uploads", icon: Heart },
];

export default function AboutPage() {
  return (
    <div className="bg-section-mesh min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="blob-purple absolute -top-20 left-0 h-80 w-80 opacity-25" />
          <div className="blob-teal absolute -bottom-10 right-0 h-64 w-64 opacity-20" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Character image — premium framed stage */}
            <div className="flex justify-center order-first lg:order-last">
              <div className="relative h-80 w-80 sm:h-[400px] sm:w-[400px]">
                {/* Outer halo */}
                <div
                  className="absolute inset-0 rounded-full blur-3xl opacity-50"
                  style={{
                    background:
                      "radial-gradient(ellipse, oklch(0.52 0.24 290 / 0.5) 0%, oklch(0.62 0.18 195 / 0.2) 50%, transparent 75%)",
                    transform: "scale(1.2)",
                  }}
                />

                {/* Gradient-border circle frame */}
                <div
                  className="absolute inset-0 rounded-full p-px"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.52 0.24 290), oklch(0.62 0.18 195), oklch(0.72 0.19 55), oklch(0.65 0.22 340))",
                  }}
                >
                  <div
                    className="h-full w-full rounded-full"
                    style={{
                      background:
                        "radial-gradient(ellipse at 35% 25%, oklch(0.93 0.04 290) 0%, oklch(0.96 0.02 200) 60%, oklch(0.97 0.01 280) 100%)",
                    }}
                  />
                </div>

                {/* Slow-spinning outer ring */}
                <div
                  className="absolute -inset-3 rounded-full border border-dashed border-primary/20"
                  style={{ animation: "spin-slow 20s linear infinite" }}
                />
                {/* Dot on spinning ring */}
                <div
                  className="absolute -inset-3 rounded-full"
                  style={{ animation: "spin-slow 20s linear infinite" }}
                >
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[oklch(0.52_0.24_290)] to-[oklch(0.62_0.18_195)] shadow-brand" />
                </div>

                {/* Character */}
                <img
                  src="/assets/generated/shaku-character-transparent.dim_400x400.png"
                  alt="Shaku, the animated character of ShakuBabble"
                  className="absolute inset-0 z-10 h-full w-full object-contain animate-float drop-shadow-xl"
                />

                {/* Floating "hi" tag */}
                <span
                  className="absolute -top-2 right-4 z-20 rounded-2xl bg-white/95 px-3 py-1 text-sm font-bold shadow-card border border-white/80"
                  style={{ animation: "float 3.8s ease-in-out infinite" }}
                >
                  👋 Hi there!
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-6">
              <Badge className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary border-primary/20">
                <Sparkles className="h-3.5 w-3.5" />
                Meet the character
              </Badge>

              <h1 className="font-display text-5xl font-extrabold leading-tight">
                Hi, I'm <span className="text-gradient-brand">Shaku.</span>
              </h1>

              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p className="text-lg">
                  ShakuBabble is a space where animation meets real life. Shaku
                  brings stories, reflections, and everyday moments to life
                  through expressive character-driven content.
                </p>
                <p>
                  Born from the belief that even the most complex feelings can
                  be told through a simple, animated story — ShakuBabble is
                  equal parts vlog, animated series, and personal journal.
                </p>
                <p>
                  Whether it's navigating creativity blocks, discovering
                  mindfulness habits, or just laughing at life's absurdity —
                  Shaku's got a story for it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission statement — editorial typographic moment */}
      <section className="py-20 relative overflow-hidden">
        {/* Rich layered background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.52 0.24 290 / 0.08) 0%, oklch(0.62 0.18 195 / 0.06) 50%, oklch(0.65 0.22 340 / 0.05) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle, oklch(0.52 0.24 290 / 0.4) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 max-w-4xl">
          {/* Large decorative quotation mark */}
          <div
            className="font-display text-[12rem] leading-none font-extrabold select-none pointer-events-none mb-[-3rem] ml-[-0.5rem]"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.52 0.24 290 / 0.18), oklch(0.62 0.18 195 / 0.1))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            aria-hidden="true"
          >
            "
          </div>

          <blockquote className="relative">
            <p className="font-display text-3xl sm:text-4xl font-extrabold leading-tight text-foreground max-w-3xl">
              ShakuBabble is a space where{" "}
              <span className="text-gradient-brand">
                animation meets real life.
              </span>
            </p>
            <p className="mt-5 text-lg text-foreground/65 leading-relaxed max-w-2xl font-medium">
              Shaku brings stories, reflections, and everyday moments to life
              through expressive character-driven content — equal parts vlog,
              animated series, and personal journal.
            </p>
            <footer className="mt-8 flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-primary/60 to-transparent" />
              <cite className="not-italic text-sm font-bold text-primary/80 tracking-widest uppercase">
                The ShakuBabble Mission
              </cite>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Personality traits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-extrabold text-foreground">
              Shaku's <span className="text-gradient-brand">Personality</span>
            </h2>
            <p className="mt-2 text-foreground/60">
              The four pillars that make Shaku, Shaku.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {traits.map((trait) => {
              const Icon = trait.icon;
              return (
                <div
                  key={trait.label}
                  className="blog-card group relative overflow-hidden rounded-3xl border bg-card p-6 shadow-card text-center"
                >
                  <div
                    className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${trait.color} shadow-lg transition-transform group-hover:scale-110 group-hover:-rotate-3`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-extrabold text-foreground mb-2">
                    {trait.label}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {trait.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[oklch(0.52_0.24_290)] via-[oklch(0.48_0.22_305)] to-[oklch(0.62_0.18_195)] p-px shadow-brand-lg">
            <div className="rounded-3xl bg-card/95 px-8 py-10">
              <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center gap-3"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="font-display text-4xl font-extrabold text-gradient-brand">
                        {stat.value}
                      </span>
                      <span className="text-sm font-medium text-foreground/60">
                        {stat.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
