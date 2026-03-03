import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

const VIDEO_DATA = [
  {
    id: "pEJxlyEKf_Q",
    title: "Intro",
    ocid: "videos.item.1",
  },
  {
    id: "pEJxlyEKf_Q",
    title: "Intro",
    ocid: "videos.item.2",
  },
  {
    id: "pEJxlyEKf_Q",
    title: "Intro",
    ocid: "videos.item.3",
  },
  {
    id: "pEJxlyEKf_Q",
    title: "Intro",
    ocid: "videos.item.4",
  },
  {
    id: "pEJxlyEKf_Q",
    title: "Intro",
    ocid: "videos.item.5",
  },
  {
    id: "pEJxlyEKf_Q",
    title: "Intro",
    ocid: "videos.item.6",
  },
];

export default function VideosPage() {
  return (
    <div className="bg-section-mesh min-h-screen">
      {/* Page header */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="blob-purple absolute -top-16 -left-16 h-64 w-64 opacity-30" />
          <div className="blob-teal absolute -bottom-16 -right-16 h-48 w-48 opacity-20" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-4 rounded-full bg-primary/10 text-primary border-primary/20 px-4 py-1.5 text-sm font-semibold">
            <Play className="h-3.5 w-3.5 mr-1.5 fill-current" />
            All Episodes
          </Badge>
          <h1 className="font-display text-5xl font-extrabold text-foreground mb-4">
            Latest <span className="text-gradient-brand">Episodes</span>
          </h1>
          <p className="text-foreground/60 text-lg max-w-lg mx-auto">
            Dive into Shaku's world — animated stories, vlog moments, and
            reflections on life. New episodes every week.
          </p>
        </div>
      </section>

      {/* Video grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEO_DATA.map((video, index) => (
              <article
                key={video.id}
                data-ocid={video.ocid}
                className="video-card group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-card"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {/* Video embed */}
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-foreground/5">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Title */}
                <div className="flex items-start gap-3 p-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Play className="h-3.5 w-3.5 fill-current text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary/70 uppercase tracking-widest">
                      Episode {index + 1}
                    </span>
                    <h3 className="font-display text-base font-bold text-foreground mt-0.5 leading-snug group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
