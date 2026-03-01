import dynamic from "next/dynamic";
import NavBar from "@/components/NavBar";
import WhySection from "@/components/WhySection";
import Services from "@/components/Services";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: true,
});

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
