"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_ITEMS = [
  {
    question: "What services does Ganga Marketing Agency offer?",
    answer:
      "We specialize in Meta Ads, SEO, Social Media Handling, Website Creation, and Video Ads — full-funnel digital marketing designed around one metric: revenue.",
  },
  {
    question: "How do you charge for your services?",
    answer:
      "We offer flexible monthly retainers and project-based pricing. No hidden fees, no long-term lock-ins. You pay for results, not promises.",
  },
  {
    question: "Do you work with businesses outside Nepal?",
    answer:
      "Yes! While we're based in Kathmandu, we work with ambitious brands across South Asia and beyond. Our digital-first approach means geography is never a constraint.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Most campaigns launch within 1-2 weeks of onboarding. SEO and website projects have tailored timelines based on scope. We move fast because your competitors won't wait.",
  },
  {
    question: "What results can I expect?",
    answer:
      "We focus on revenue-driven metrics: ROAS, conversion rate, and cost per acquisition — not vanity metrics. Our clients see measurable improvements within the first 30-60 days.",
  },
];

export function FaqAccordion({
  items = DEFAULT_ITEMS,
  title = "Frequently Asked Questions",
  className,
  ...props
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full border-t border-[#171717]/5 bg-[#F4F4F5]/40">
      <div
        className={cn(
          "w-full max-w-3xl mx-auto py-16 sm:py-24 relative font-sans",
          className
        )}
        {...props}
      >
        <div className="mb-10 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#2563EB]">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
            {title}
          </h2>
        </div>

        <ul className="w-full mx-auto list-none p-0 flex flex-col">
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <li
                key={index}
                className={cn(
                  "w-full relative transition-all duration-300 ease-in",
                  "border-b-2 border-neutral-100",
                  "last:border-b-0",
                  isActive ? "border-b border-neutral-200" : ""
                )}
              >
                <button
                  className={cn(
                    "flex flex-row items-center justify-start w-full min-h-[60px] py-4 relative m-0 px-4 pl-14 cursor-pointer",
                    "border-l-[6px] md:border-l-[10px] transition-colors duration-200 text-left outline-none text-base md:text-lg",
                    isActive
                      ? "border-l-[#171717] bg-neutral-100/50 text-[#171717] font-semibold"
                      : "border-l-neutral-300 bg-transparent text-[#737373] hover:border-l-neutral-500 hover:text-[#171717] hover:bg-neutral-50"
                  )}
                  onClick={() => toggleItem(index)}
                  aria-expanded={isActive}
                >
                  <span
                    className={cn(
                      "absolute left-4 md:left-5 top-1/2 -translate-y-1/2 transition-all duration-200 leading-none",
                      isActive
                        ? "text-[32px] md:text-[40px] font-normal text-[#171717]"
                        : "text-[24px] md:text-[30px] font-normal text-[#737373]"
                    )}
                  >
                    {isActive ? "-" : "+"}
                  </span>
                  <span className="pr-8">{item.question}</span>
                  <span
                    className={cn(
                      "absolute right-6 block w-2 h-2 border-t-[3px] border-r-[3px] transition-transform duration-200 ease-in-out",
                      isActive
                        ? "rotate-[-44deg] border-[#171717]"
                        : "rotate-[133deg] border-[#737373]"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out w-full",
                    "border-l-[6px] md:border-l-[10px]",
                    isActive
                      ? "grid-rows-[1fr] border-l-[#171717] bg-neutral-100/50"
                      : "grid-rows-[0fr] border-l-neutral-300 bg-transparent"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-row items-start justify-start w-full px-4 pl-14 pb-6 pt-2 text-base md:text-lg font-normal text-[#737373]">
                      <span className="opacity-90">{item.answer}</span>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default FaqAccordion;