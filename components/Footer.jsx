import Link from "next/link";
import { getWhatsAppContactUrl } from "@/utils/whatsapp";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  "Meta Ads",
  "SEO",
  "Social Media Handling",
  "Website Creation",
  "Video Ads",
];

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-mono text-sm font-bold text-black">
                GM
              </span>
              <span className="text-sm font-semibold tracking-tight">
                Ganga<span className="text-accent"> Marketing</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Performance marketing for brands that refuse to blend in. Based
              in Kathmandu, working worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Navigate
              </p>
              <ul className="space-y-2.5">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Services
              </p>
              <ul className="space-y-2.5">
                {SERVICES.map((s) => (
                  <li key={s}>
                    <Link
                      href="#services"
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={getWhatsAppContactUrl(
                "Hello Ganga Marketing Agency! I'd like to discuss a project."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-accent"
            >
              WhatsApp Us
            </a>
            <p className="font-mono text-xs text-muted">
              +977 970-080-4395
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 sm:flex-row">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Ganga Marketing Agency. All rights
            reserved.
          </p>
          <p className="font-mono text-xs text-muted">
            gangamarketingagency.com.np
          </p>
        </div>
      </div>
    </footer>
  );
}
