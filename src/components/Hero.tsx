import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Vea Health Clinic Istanbul"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span className="text-white/90 text-sm font-medium">
              Premium Healthcare in Istanbul Since 2020
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Transform Your{" "}
            <span className="text-gradient">Smile & Confidence</span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            World-class dental implants, hair transplants, and Hollywood smile treatments 
            at Istanbul's most trusted medical tourism destination.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="https://wa.me/905314329215" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="#services">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                <Play className="w-5 h-5" />
                Explore Services
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-amber-400 border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                  >
                    {i}K+
                  </div>
                ))}
              </div>
              <span className="text-white/80 text-sm">Happy Patients</span>
            </div>
            <div className="h-8 w-px bg-white/30" />
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                ))}
              </div>
              <span className="text-white/80 text-sm">5.0 Rating</span>
            </div>
            <div className="h-8 w-px bg-white/30 hidden sm:block" />
            <div className="text-white/80 text-sm hidden sm:block">
              <span className="text-secondary font-semibold">24/7</span> Support Available
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-white/60 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
