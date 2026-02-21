import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import Services from "@/components/Services";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <WhySection />
      <Services />
      <ContactCTA />
      <Footer />
    </main>
  );
}
