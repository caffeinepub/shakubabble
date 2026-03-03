import { Button } from "@/components/ui/button";
import { Link, useRouter } from "@tanstack/react-router";
import { Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", path: "/", ocid: "nav.home.link" },
  { label: "Videos", path: "/videos", ocid: "nav.videos.link" },
  { label: "About", path: "/about", ocid: "nav.about.link" },
  { label: "Blog", path: "/blog", ocid: "nav.blog.link" },
  { label: "Contact", path: "/contact", ocid: "nav.contact.link" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-card shadow-card border-b"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.52_0.24_290)] to-[oklch(0.62_0.18_195)] shadow-brand transition-transform group-hover:scale-110">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="font-display text-xl font-bold">
            <span className="text-gradient-purple-pink">Shaku</span>
            <span className="text-foreground">Babble</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  data-ocid={link.ocid}
                  className={`nav-link inline-block rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive
                      ? "active text-primary font-semibold"
                      : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link to="/contact">
            <Button
              size="sm"
              className="btn-brand-primary rounded-full px-5 font-semibold shadow-brand"
            >
              Say Hello 👋
            </Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground md:hidden hover:bg-muted transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t bg-background/95 backdrop-blur-md md:hidden">
          <ul className="container mx-auto flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    data-ocid={link.ocid}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "hover:bg-muted text-foreground/70"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2 pb-1">
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                <Button className="btn-brand-primary w-full rounded-full font-semibold">
                  Say Hello 👋
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
