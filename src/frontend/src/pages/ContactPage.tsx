import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  Loader2,
  Mail,
  MessageSquare,
  Send,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContactMessage } from "../hooks/useQueries";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { mutateAsync: submit, isPending, isError } = useSubmitContactMessage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      await submit({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent! Shaku will be in touch soon 💜");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-section-mesh min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="blob-purple absolute -top-16 right-1/4 h-64 w-64 opacity-25" />
          <div className="blob-teal absolute bottom-0 left-1/4 h-48 w-48 opacity-20" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-4 rounded-full bg-[oklch(0.62_0.18_195_/_0.12)] text-[oklch(0.38_0.18_195)] border-[oklch(0.62_0.18_195_/_0.3)] px-4 py-1.5 text-sm font-semibold">
            <MessageSquare className="h-3.5 w-3.5 mr-1.5" />
            Get in touch
          </Badge>
          <h1 className="font-display text-5xl font-extrabold text-foreground mb-4">
            Say <span className="text-gradient-brand">Hello!</span>
          </h1>
          <p className="text-foreground/60 text-lg max-w-lg mx-auto">
            Got a question, a collab idea, or just want to vibe? Shaku reads
            every message — drop one below!
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 max-w-5xl mx-auto">
            {/* Info sidebar */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              <div className="rounded-3xl border bg-card shadow-card p-6 flex flex-col gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[oklch(0.52_0.24_290)] to-[oklch(0.62_0.18_195)] shadow-brand">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    Shaku Reads Everything
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    Whether you have a story idea, want to collaborate, or just
                    felt moved by an episode — Shaku wants to hear it all.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border bg-card shadow-card p-6 flex flex-col gap-4">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Good reasons to reach out
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {[
                    "Episode ideas 💡",
                    "Collabs & partnerships 🤝",
                    "Fan art & creativity ✨",
                    "Just saying hi 👋",
                    "Mindfulness chats 🧘",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-foreground/65"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {/* Success state */}
              {submitted ? (
                <div
                  data-ocid="contact.success_state"
                  className="flex flex-col items-center justify-center gap-5 rounded-3xl border bg-card shadow-card p-12 text-center h-full min-h-[400px]"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.52_0.24_290)] to-[oklch(0.62_0.18_195)] shadow-brand-lg">
                    <CheckCircle2 className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-extrabold text-foreground mb-2">
                      Message Sent! 🎉
                    </h3>
                    <p className="text-foreground/60 max-w-xs">
                      Shaku got your message and will get back to you soon.
                      Thanks for reaching out!
                    </p>
                  </div>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="rounded-full px-6 font-semibold border-2 border-primary/30 hover:border-primary/60 hover:text-primary transition-all mt-2"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="relative overflow-hidden rounded-3xl border bg-card shadow-card p-8"
                >
                  <div
                    className="absolute inset-0 pointer-events-none opacity-5"
                    style={{
                      background:
                        "radial-gradient(ellipse at bottom left, oklch(0.62 0.18 195) 0%, transparent 70%)",
                    }}
                  />

                  <div className="relative z-10 flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="contact-name"
                        className="text-sm font-semibold text-foreground"
                      >
                        Your Name
                      </Label>
                      <Input
                        id="contact-name"
                        data-ocid="contact.name.input"
                        type="text"
                        placeholder="What should Shaku call you?"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="rounded-2xl border-2 border-border focus:border-primary/60 bg-background/60 h-11 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="contact-email"
                        className="text-sm font-semibold text-foreground"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="contact-email"
                        data-ocid="contact.email.input"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="rounded-2xl border-2 border-border focus:border-primary/60 bg-background/60 h-11 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="contact-message"
                        className="text-sm font-semibold text-foreground"
                      >
                        Your Message
                      </Label>
                      <Textarea
                        id="contact-message"
                        data-ocid="contact.message.textarea"
                        placeholder="Tell Shaku what's on your mind..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={5}
                        className="rounded-2xl border-2 border-border focus:border-primary/60 bg-background/60 resize-none transition-colors"
                      />
                    </div>

                    {/* Error state */}
                    {isError && (
                      <div
                        data-ocid="contact.error_state"
                        className="rounded-2xl border border-destructive/25 bg-destructive/5 px-4 py-3 text-sm text-destructive font-medium"
                      >
                        Couldn't send your message. Please try again.
                      </div>
                    )}

                    <Button
                      type="submit"
                      data-ocid="contact.submit_button"
                      disabled={isPending}
                      size="lg"
                      className="btn-brand-primary rounded-full font-bold text-base gap-2 mt-1"
                    >
                      {isPending ? (
                        <>
                          <Loader2
                            data-ocid="contact.loading_state"
                            className="h-5 w-5 animate-spin"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send to Shaku
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
