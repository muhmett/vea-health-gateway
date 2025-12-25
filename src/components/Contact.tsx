import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "WhatsApp (24/7)",
    value: "+90 531 432 9215",
    link: "https://wa.me/905314329215",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@veahealth.com",
    link: "mailto:info@veahealth.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Istanbul, Turkey",
    link: "#",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "24/7 Available",
    link: "#",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Start Your Journey Today
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to transform your smile or restore your hair? Contact us for a 
              free consultation. Our multilingual team is available 24/7 to answer 
              your questions in English, Arabic, Turkish, or French.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.title}</div>
                    <div className="font-semibold text-foreground">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">Follow us:</span>
              <a
                href="https://instagram.com/veahealth.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-center flex flex-col justify-center">
            <MessageCircle className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Free WhatsApp Consultation
            </h3>
            <p className="text-primary-foreground/80 mb-8 max-w-sm mx-auto">
              Send us your photos and get a personalized treatment plan with 
              transparent pricing within 24 hours.
            </p>
            <a 
              href="https://wa.me/905314329215" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="whatsapp" size="xl" className="w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </a>
            <p className="text-primary-foreground/60 text-sm mt-4">
              Response time: Usually within 1 hour
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
