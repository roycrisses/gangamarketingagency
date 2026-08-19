import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientTicker from "@/components/ClientTicker";
import StatsGrid from "@/components/StatsGrid";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ClientTicker />
        <StatsGrid />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
