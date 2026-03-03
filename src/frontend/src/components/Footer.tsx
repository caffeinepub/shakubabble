import { Link } from "@tanstack/react-router";
import { Heart, Sparkles } from "lucide-react";
import { SiInstagram, SiX, SiYoutube } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t bg-gradient-to-br from-[oklch(0.16_0.04_280)] to-[oklch(0.12_0.06_295)] text-white">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="blob-purple absolute -left-20 -bottom-20 h-64 w-64 opacity-30" />
        <div className="blob-teal absolute -right-20 top-0 h-48 w-48 opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.52_0.24_290)] to-[oklch(0.62_0.18_195)]">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold text-white">
                ShakuBabble
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Stories that move you. Vibes that stay. Animation meets real life
              through the eyes of Shaku.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-white/40">
              Explore
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "Videos", path: "/videos" },
                { label: "About Shaku", path: "/about" },
                { label: "Blog", path: "/blog" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-white/40">
              Follow Along
            </h4>
            <div className="flex gap-3">
              <a
                href="https://youtube.com/@shakubabble"
                aria-label="YouTube"
                rel="noopener noreferrer"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/70 transition-all hover:bg-[oklch(0.52_0.24_290)] hover:text-white hover:-translate-y-0.5"
              >
                <SiYoutube className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/shakubabble"
                aria-label="Instagram"
                rel="noopener noreferrer"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/70 transition-all hover:bg-[oklch(0.65_0.22_340)] hover:text-white hover:-translate-y-0.5"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/shakubabble"
                aria-label="X / Twitter"
                rel="noopener noreferrer"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/70 transition-all hover:bg-[oklch(0.62_0.18_195)] hover:text-white hover:-translate-y-0.5"
              >
                <SiX className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-sm text-white/50">
              New episodes every week ✨
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {year} ShakuBabble. All rights reserved.
          </p>
          <p className="text-xs text-white/40 flex items-center gap-1">
            Built with{" "}
            <Heart
              className="h-3 w-3 text-[oklch(0.65_0.22_340)]"
              fill="currentColor"
            />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              className="text-white/60 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
