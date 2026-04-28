// src/components/site/contact-page-client.tsx
"use client";

import { SectionHeader } from "@/components/site/section-header";
import { useState } from "react";

type Status = "idle" | "submitting" | "submitted" | "error";

export default function ContactPageClient() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/meevpoqo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("submitted");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-background">
      <main className="mx-auto max-w-3xl space-y-10 px-4 py-12 md:space-y-12 md:px-6 md:py-16">
        {/* Intro */}
        <section className="text-center">
          <SectionHeader
            align="center"
            eyebrow="Contact"
            title="Start with a conversation."
            body="Share a few details about your project and how to reach you. We’ll follow up to review scope, materials, and timing."
          />
        </section>

        {/* Main form card */}
        <section>
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md md:p-6"
          >
            <SectionHeader
              eyebrow="Project details"
              body="A brief description is enough. You can always share drawings or photos later."
              className="space-y-1"
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-[12px] font-medium text-foreground">
                  Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  className="h-9 w-full min-w-0 rounded-2xl border border-border/70 bg-input/70 px-3 py-1.5 text-sm text-foreground outline-none transition-colors duration-150 ease-out placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-medium text-foreground">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="h-9 w-full min-w-0 rounded-2xl border border-border/70 bg-input/70 px-3 py-1.5 text-sm text-foreground outline-none transition-colors duration-150 ease-out placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-[12px] font-medium text-foreground">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="h-9 w-full min-w-0 rounded-2xl border border-border/70 bg-input/70 px-3 py-1.5 text-sm text-foreground outline-none transition-colors duration-150 ease-out placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-medium text-foreground">
                  Project city / area
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="e.g., Los Angeles, San Fernando Valley"
                  className="h-9 w-full min-w-0 rounded-2xl border border-border/70 bg-input/70 px-3 py-1.5 text-sm text-foreground outline-none transition-colors duration-150 ease-out placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[12px] font-medium text-foreground">
                Project details
              </label>
              <textarea
                required
                name="details"
                rows={5}
                placeholder="Kitchen, bathrooms, fireplace, or other spaces. Include any timelines or materials you’re considering."
                className="w-full rounded-2xl border border-border/70 bg-input/70 px-3 py-2 text-sm text-foreground outline-none transition-colors duration-150 ease-out placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
              />
            </div>

            <div className="flex flex-col gap-3 border-t border-border/80 pt-4 text-[12px] text-muted-foreground md:flex-row md:items-center md:justify-between">
              <p>We typically respond within one business day.</p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center rounded-full border border-primary bg-primary px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.16em] text-primary-foreground transition-all duration-200 ease-out hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:border-muted disabled:bg-muted disabled:text-muted-foreground"
              >
                {status === "submitted"
                  ? "Submitted"
                  : status === "submitting"
                    ? "Sending..."
                    : "Send message"}
              </button>
            </div>

            {status === "submitted" && (
              <p className="text-[11px] text-emerald-600">
                Thank you—your message has been sent. We’ll follow up within one
                business day.
              </p>
            )}
            {status === "error" && (
              <p className="text-[11px] text-red-600">
                Something went wrong sending your message. Please try again or
                contact us directly.
              </p>
            )}
          </form>
        </section>

        {/* Direct contact card */}
        <section className="rounded-2xl border border-border bg-card px-5 py-5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-sm md:px-6">
          <div className="space-y-3 text-[13px] text-muted-foreground">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Prefer to reach out directly?
            </p>
            <p>
              Call or email if that’s easier for you. We serve clients across
              the greater Los Angeles area and surrounding communities.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 sm:items-center">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Phone
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  (000) 000-0000 {/* replace with real number */}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Email
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  <a
                    href="mailto:hello@quirozmarbleandgranite.com"
                    className="underline underline-offset-2 hover:text-muted-foreground"
                  >
                    hello@quirozmarbleandgranite.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
