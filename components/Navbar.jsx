"use client";

import { useState } from "react";
import Link from "next/link";
import { getWhatsAppContactUrl } from "@/utils/whatsapp";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-mono text-sm font-bold text-black">
            GM
          </span>
          <span className="text-sm font-semibold tracking-tight sm:text-base">
            Ganga<span className="text-accent"> Marketing</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppContactUrl(
              "Hello Ganga Marketing Agency! I'd like to discuss a project."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-accent sm:inline-flex"
          >
            WhatsApp Us
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line md:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={`h-px w-4 bg-foreground transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`h-px w-4 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-px w-4 bg-foreground transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-background/95 md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={getWhatsAppContactUrl(
                "Hello Ganga Marketing Agency! I'd like to discuss a project."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-foreground px-4 py-2.5 text-center text-sm font-semibold text-black"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
