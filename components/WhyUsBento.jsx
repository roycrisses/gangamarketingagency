"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Headphones,
  Map,
  Hammer,
  Globe,
  Rocket,
  ChevronRight,
} from "lucide-react";
import IsometricBox01 from "@/assets/svgs/isometric-box-01";
import IsometricBoxes02 from "@/assets/svgs/isometric-boxes-02";
import { cn } from "@/lib/utils";

const PIPELINE_STEPS = [
  { id: "01", label: "CALL", Icon: Headphones },
  { id: "02", label: "PLAN", Icon: Map },
  { id: "03", label: "BUILD", Icon: Hammer },
  { id: "04", label: "DEPLOY", Icon: Globe },
  { id: "05", label: "LAUNCH", Icon: Rocket },
];

const TEAM_COLORS = [
  "bg-[#2563EB]",
  "bg-[#3B82F6]",
  "bg-[#60A5FA]",
  "bg-[#93C5FD]",
  "bg-[#BFDBFE]",
  "bg-[#DBEAFE]",
];

export function WhyUsBento({ className }) {
  return (
    <section className={cn("py-16 sm:py-24 relative z-10 w-full", className)}>
      <div className="mx-auto flex flex-col gap-3 sm:gap-4 max-w-7xl px-5 sm:px-8">
        <div className="mb-8">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#2563EB]">
            Why Us
          </p>
          <h2 className="max-w-xl text-4xl font-bold tracking-tight text-[#171717] sm:text-5xl">
            Built for brands that refuse to blend in.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-3.5 auto-rows-auto">
          {/* 01: Full-Funnel Strategy (Wide) */}
          <motion.div
            initial="initial"
            whileHover="hover"
            className="col-span-1 md:col-span-2 row-span-1 rounded-xl bg-white p-5 sm:p-6 md:p-7 relative overflow-hidden group transition-colors duration-500 flex flex-col justify-center shadow-[0_0_0_2px_rgba(255,255,255,1),inset_0_0_0_1px_rgba(221,221,221,1)] min-h-[150px] sm:min-h-[170px]"
          >
            <div className="absolute right-2 sm:right-4 md:-right-2 lg:right-4 top-1/2 -translate-y-1/2 w-36 sm:w-48 md:w-60 lg:w-72 z-20 hidden sm:block pointer-events-none">
              <IsometricBox01 className="w-full h-auto" />
            </div>

            <div className="relative z-30 w-full sm:w-3/5 md:w-3/5">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#171717] mb-1.5 sm:mb-2 relative overflow-hidden flex flex-wrap">
                <span className="flex">
                  {"Full-Funnel Strategy".split("").map((l, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      variants={{
                        initial: { y: 0 },
                        hover: { y: "-100%" },
                      }}
                      transition={{ duration: 0.3, delay: i * 0.02, ease: [0.33, 1, 0.68, 1] }}
                    >
                      {l === " " ? "\u00A0" : l}
                    </motion.span>
                  ))}
                </span>
                <span className="absolute inset-0 flex text-[#2563EB] pointer-events-none" aria-hidden>
                  {"Full-Funnel Strategy".split("").map((l, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      variants={{
                        initial: { y: "100%" },
                        hover: { y: 0 },
                      }}
                      transition={{ duration: 0.3, delay: i * 0.02, ease: [0.33, 1, 0.68, 1] }}
                    >
                      {l === " " ? "\u00A0" : l}
                    </motion.span>
                  ))}
                </span>
              </h3>
              <p className="text-[#737373] text-xs sm:text-sm md:text-base leading-relaxed">
                We build complete marketing funnels from paid acquisition to
                conversion optimization — every touchpoint engineered for revenue.
              </p>
            </div>
          </motion.div>

          {/* 02: Data-Driven Decisions (Tall & Dark) */}
          <div className="col-span-1 md:col-span-1 row-span-1 md:row-span-2 rounded-xl border-[1.5px] border-transparent bg-[#171717] p-5 sm:p-6 md:p-7 relative overflow-hidden group transition-all duration-500 flex flex-col justify-between text-white min-h-[310px] sm:min-h-[350px]">
            <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-[140px] sm:min-h-[160px] mb-3 sm:mb-4 translate-x-2">
              <div className="relative w-full max-w-[170px] sm:max-w-[200px] aspect-4/3 group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-300 ease-out">
                <div className="absolute inset-0 bg-neutral-500 rounded-xl border border-neutral-600/50 transform -rotate-12 -translate-x-3 translate-y-3 shadow-xl transition-all duration-300 ease-out group-hover:rotate-[-20deg] group-hover:-translate-x-6 group-hover:translate-y-6" />
                <div className="absolute inset-0 bg-neutral-400 rounded-xl border border-neutral-500/50 transform -rotate-9 -translate-x-2.5 translate-y-2.5 shadow-xl transition-all duration-300 ease-out group-hover:rotate-[-15deg] group-hover:-translate-x-5 group-hover:translate-y-5" />
                <div className="absolute inset-0 bg-neutral-300 rounded-xl border border-neutral-400/50 transform -rotate-6 -translate-x-1.5 translate-y-1.5 shadow-xl transition-all duration-300 ease-out group-hover:rotate-[-10deg] group-hover:-translate-x-3 group-hover:translate-y-3" />
                <div className="absolute inset-0 bg-neutral-200 rounded-xl border border-neutral-300/50 transform -rotate-3 -translate-x-1 translate-y-1 shadow-xl transition-all duration-300 ease-out group-hover:-rotate-5 group-hover:-translate-x-1.5 group-hover:translate-y-1.5" />
                <div
                  className="absolute inset-0 bg-neutral-50 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between text-black shadow-2xl border border-white/50"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(0,0,0,0.005) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.01) 1px, transparent 1px)",
                    backgroundSize: "10px 10px",
                  }}
                >
                  <div className="flex gap-0.5">
                    <div className="w-2 h-3 bg-black rounded-sm" />
                    <div className="w-1 h-3 bg-black rounded-sm" />
                    <div className="w-2 h-3 bg-black/30 rounded-sm" />
                  </div>
                  <div className="font-mono text-[15px] sm:text-[18px] md:text-[20px] font-bold leading-[1.1] tracking-tight mt-auto mb-2">
                    Data.<br />Insights.<br />Growth.
                  </div>
                  <div className="font-mono text-[7px] sm:text-[8px] text-neutral-600 font-bold uppercase tracking-wider flex items-center gap-1">
                    <span>&gt; READY TO EXECUTE</span>
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                Data-Driven Decisions
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Every campaign is backed by real data, not gut feel. We track what
                matters and optimize toward revenue.
              </p>
            </div>
            <div className="absolute -right-6 -bottom-12 text-[9rem] sm:text-[12rem] font-bold text-neutral-900/40 pointer-events-none group-hover:scale-105 transition-transform duration-700 leading-none select-none">
              02
            </div>
          </div>

          {/* 03: Dedicated Account Team */}
          <motion.div
            initial="initial"
            whileHover="hover"
            className="col-span-1 md:col-span-1 row-span-1 rounded-xl shadow-[0_0_0_2px_rgba(255,255,255,1),inset_0_0_0_1px_rgba(221,221,221,1)] bg-white p-5 sm:p-6 md:p-7 relative overflow-hidden group transition-colors duration-500 flex flex-col justify-between min-h-[150px] sm:min-h-[170px]"
          >
            <div className="flex items-center relative z-10 mb-3 h-8 sm:h-10">
              {TEAM_COLORS.map((color, i) => (
                <motion.div
                  key={i}
                  className={cn(
                    "relative w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-2 ring-white shadow-sm",
                    color
                  )}
                  style={{
                    marginLeft: i === 0 ? 0 : "-9px",
                    zIndex: TEAM_COLORS.length - i,
                  }}
                  variants={{
                    initial: { x: 0, y: 0, rotate: 0, scale: 1 },
                    hover: {
                      x: i * 12,
                      y: i % 2 === 0 ? -4 : 4,
                      rotate: (i - 2) * 5,
                      scale: 1.1,
                    },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    bounce: 0,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-bold text-[#171717] mb-1.5">
                Dedicated Account Team
              </h3>
              <p className="text-[#737373] text-xs sm:text-sm leading-relaxed">
                Work directly with strategists, designers, and ad specialists
                from kickoff to launch. No rotating benches.
              </p>
            </div>
            <div className="absolute -right-3 -bottom-8 text-[6rem] sm:text-[8rem] font-bold text-neutral-100 pointer-events-none group-hover:scale-105 transition-transform duration-700 leading-none select-none">
              03
            </div>
          </motion.div>

          {/* 04: No Handoffs */}
          <motion.div
            initial="initial"
            whileHover="hover"
            className="col-span-1 md:col-span-1 row-span-1 rounded-xl shadow-[0_0_0_2px_rgba(255,255,255,1),inset_0_0_0_1px_rgba(221,221,221,1)] bg-white p-5 sm:p-6 md:p-7 relative overflow-hidden group transition-colors duration-500 flex flex-col justify-between min-h-[150px] sm:min-h-[170px]"
          >
            <div className="relative z-10 w-full mb-3">
              <div className="flex items-start justify-between">
                {PIPELINE_STEPS.map(({ id, label, Icon }, i) => (
                  <React.Fragment key={id}>
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="relative">
                        <Icon size={18} className="text-[#171717] sm:w-5 sm:h-5" />
                        {i === PIPELINE_STEPS.length - 1 && (
                          <span className="absolute -inset-1 rounded-full bg-[#2563EB]/10 animate-ping" />
                        )}
                      </div>
                      <span className="text-[6.5px] sm:text-[7.5px] text-neutral-800 font-mono font-bold tracking-widest">
                        {label}
                      </span>
                    </div>
                    {i < PIPELINE_STEPS.length - 1 && (
                      <div className="mt-0.5 text-neutral-300 group-hover:text-[#171717] transition-colors duration-300">
                        <ChevronRight size={9} />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-bold text-[#171717] mb-1.5">
                No Handoffs
              </h3>
              <p className="text-[#737373] text-xs sm:text-sm leading-relaxed">
                One team, start to finish. The people on your first call are the
                exact ones running your campaigns.
              </p>
            </div>
            <div className="absolute -right-3 -bottom-8 text-[6rem] sm:text-[8rem] font-bold text-neutral-100 pointer-events-none group-hover:scale-105 transition-transform duration-700 leading-none select-none">
              04
            </div>
          </motion.div>

          {/* 05: Multi-Channel Expertise (Wide Bottom) */}
          <motion.div
            initial="initial"
            whileHover="hover"
            className="col-span-1 md:col-span-3 row-span-1 md:row-span-1 min-h-[150px] sm:min-h-[170px] rounded-xl bg-white p-5 sm:p-6 md:p-7 relative overflow-hidden group transition-colors duration-500 flex flex-col justify-center shadow-[0_0_0_2px_rgba(255,255,255,1),inset_0_0_0_1px_rgba(221,221,221,1)]"
          >
            <div className="absolute right-2 sm:right-4 md:right-8 lg:right-16 bottom-0 w-36 sm:w-56 md:w-72 lg:w-80 z-20 hidden sm:block pointer-events-none">
              <IsometricBoxes02 className="w-full h-auto drop-shadow-xs" />
            </div>

            <div className="relative z-30 w-full sm:w-3/5 md:w-3/5">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#171717] mb-1.5 sm:mb-2">
                Multi-Channel Expertise
              </h3>
              <p className="text-[#737373] text-xs sm:text-sm md:text-base leading-relaxed md:max-w-xl">
                Meta Ads, SEO, social media, web, and video — one cohesive team
                that goes deep across every growth channel.
              </p>
            </div>
            <div className="absolute -right-6 -bottom-12 text-[8rem] sm:text-[11rem] font-bold text-neutral-100 pointer-events-none group-hover:scale-105 transition-transform duration-700 leading-none select-none z-10">
              05
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhyUsBento;