"use client";

import { useState } from "react";
import { handleWhatsAppSubmit, getWhatsAppContactUrl } from "@/utils/whatsapp";

const SERVICE_OPTIONS = [
  "Meta Ads",
  "SEO",
  "Social Media Handling",
  "Website Creation",
  "Video Ads",
  "Other",
];

const BUDGET_OPTIONS = [
  "Under NPR 25,000 / month",
  "NPR 25,000 - 50,000 / month",
  "NPR 50,000 - 100,000 / month",
  "NPR 100,000+ / month",
  "Not sure yet",
];

const inputClasses =
  "w-full rounded-lg border border-line bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-accent/60 focus:ring-1 focus:ring-accent/40";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.service || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("opening");
    handleWhatsAppSubmit(form);

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          service: form.service,
          budget: form.budget,
          message: form.message,
        }),
      });
    } catch {
      // Lead logging is best-effort; WhatsApp redirect is the primary path.
    }

    setForm({ name: "", phone: "", service: "", budget: "", message: "" });
    setStatus("done");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="border-b border-line">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s grow your business.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-base">
            Tell us where you&apos;re stuck. We&apos;ll reply on WhatsApp
            within a few business hours with honest next steps — whether that&apos;s
            a paid campaign, a new site, or a full growth plan.
          </p>

          <dl className="mt-10 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white/[0.03]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-4 w-4 text-accent"
                >
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.5 2.8.7a2 2 0 0 1 1.7 2Z" />
                </svg>
              </span>
              <div>
                <dt className="text-xs text-muted">WhatsApp</dt>
                <dd>
                  <a
                    href={getWhatsAppContactUrl("Hello Ganga Marketing Agency!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold hover:text-accent"
                  >
                    +977 970-080-4395
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white/[0.03]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-4 w-4 text-accent"
                >
                  <path d="M12 20s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </span>
              <div>
                <dt className="text-xs text-muted">Based in</dt>
                <dd className="text-sm font-semibold">Kathmandu, Nepal</dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white/[0.03]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-4 w-4 text-accent"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <div>
                <dt className="text-xs text-muted">Email</dt>
                <dd className="text-sm font-semibold">
                  hello@gangamarketingagency.com.np
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6 sm:p-8"
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-muted">Full name *</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Aarav Sharma"
                required
                minLength={2}
                className={inputClasses}
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-muted">
                Phone number *
              </span>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                placeholder="+977 98XXXXXXXX"
                required
                pattern="^\+?[0-9]{7,15}$"
                className={inputClasses}
              />
            </label>
          </div>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-muted">
              Service needed *
            </span>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className={`${inputClasses} appearance-none`}
            >
              <option value="" disabled>
                Select a service
              </option>
              {SERVICE_OPTIONS.map((s) => (
                <option key={s} value={s} className="bg-surface">
                  {s}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-muted">
              Monthly budget
            </span>
            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className={`${inputClasses} appearance-none`}
            >
              <option value="" disabled className="bg-surface">
                Select a range (optional)
              </option>
              {BUDGET_OPTIONS.map((b) => (
                <option key={b} value={b} className="bg-surface">
                  {b}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-muted">
              Message *
            </span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              maxLength={1000}
              required
              placeholder="Tell us about your business and goals..."
              className={`${inputClasses} resize-none`}
            />
          </label>

          {status === "error" && (
            <p className="text-sm text-red-400">
              Please fill in all required fields.
            </p>
          )}
          {status === "done" && (
            <p className="text-sm text-accent">
              Opening WhatsApp — talk soon!
            </p>
          )}

          <button
            type="submit"
            disabled={status === "opening"}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-black transition-all hover:shadow-[0_0_40px_rgba(216,255,63,0.35)] disabled:opacity-60"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4"
            >
              <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {status === "opening" ? "Opening WhatsApp..." : "Send Inquiry"}
          </button>

          <p className="text-center font-mono text-[11px] leading-relaxed text-muted">
            Submitting opens a pre-filled WhatsApp chat. Your inquiry is sent
            instantly — no waiting.
          </p>
        </form>
      </div>
    </section>
  );
}
