import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import Industries from "@/components/Industries";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <WhySection />
      <Industries />
      <Services />
      <Testimonials />
      <ContactCTA />
      <Stats />
      <Footer />
    </main>
  );
}

