import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vea Health Clinic | Premium Dental & Hair Treatments in Istanbul</title>
        <meta
          name="description"
          content="Transform your smile and confidence with Vea Health Clinic in Istanbul. World-class dental implants, hair transplants, and Hollywood smile treatments at competitive prices. Free consultation available 24/7."
        />
        <meta
          name="keywords"
          content="dental implants Istanbul, hair transplant Turkey, Hollywood smile, medical tourism, Vea Health, cosmetic dentistry"
        />
        <link rel="canonical" href="https://veahealth.com" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
