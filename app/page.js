import NotchNavbar from "@/components/NotchNavbar";
import ScrollExpand from "@/components/ScrollExpand";
import ClientTicker from "@/components/ClientTicker";
import StatsGrid from "@/components/StatsGrid";
import WhyUsBento from "@/components/WhyUsBento";
import Work from "@/components/Work";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import AnimatedFooter from "@/components/AnimatedFooter";

export default function Page() {
  return (
    <>
      <NotchNavbar />
      <main className="flex-1">
        <section className="h-[140vh]">
          <ScrollExpand
            src="/hero.svg"
            alt="Ganga Marketing Agency campaign showcase"
            title="Built to scale"
            scrollHint="Scroll"
            useWindowScroll
            startWidth={42}
            startHeight={58}
            startRadius={24}
            endRadius={0}
          >
            <h2 className="font-serif text-4xl font-bold text-white sm:text-6xl">
              Every pixel, everywhere.
            </h2>
            <p className="mt-4 max-w-xl text-sm text-white/80 sm:text-base">
              The frame opens up as you scroll and hands the whole stage to
              your media.
            </p>
          </ScrollExpand>
        </section>
        <ClientTicker />
        <StatsGrid />
        <WhyUsBento />
        <Work />
        <ContactForm />
        <FaqAccordion />
      </main>
      <AnimatedFooter />
    </>
  );
}