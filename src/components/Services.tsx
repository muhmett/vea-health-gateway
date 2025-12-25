import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import dentalImg from "@/assets/service-dental.jpg";
import hairImg from "@/assets/service-hair.jpg";
import smileImg from "@/assets/service-smile.jpg";

const services = [
  {
    title: "Dental Implants",
    description: "Premium titanium implants with lifetime warranty. Natural-looking results using advanced technology.",
    image: dentalImg,
    features: ["Lifetime Warranty", "Same-Day Results", "Pain-Free Procedure"],
    price: "From €400",
  },
  {
    title: "Hair Transplant",
    description: "FUE & DHI techniques for natural, permanent hair restoration. Expert surgeons with 10+ years experience.",
    image: hairImg,
    features: ["Natural Results", "Minimal Scarring", "Quick Recovery"],
    price: "From €1,500",
  },
  {
    title: "Hollywood Smile",
    description: "Complete smile makeover with premium veneers. Achieve the perfect celebrity smile in just 7 days.",
    image: smileImg,
    features: ["Premium Veneers", "7-Day Transformation", "Custom Design"],
    price: "From €2,500",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Specialties
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Premium Treatments
          </h2>
          <p className="text-muted-foreground text-lg">
            World-class medical procedures at competitive prices, performed by expert specialists in our state-of-the-art Istanbul clinic.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    {service.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href="https://wa.me/905314329215" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
