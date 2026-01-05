import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OngoingWorkshops from "@/components/OngoingWorkshops";
import Benefits from "@/components/Benefits";
import WhoCanJoin from "@/components/WhoCanJoin";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials"; // New Import
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <OngoingWorkshops />
      <Benefits />
      <WhoCanJoin />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Testimonials /> {/* New Component */}
      <Contact />
      <Footer />
    </main>
  );
}
