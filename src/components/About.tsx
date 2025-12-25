import { Shield, Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "5,000+", label: "Happy Patients" },
  { icon: Award, value: "15+", label: "Expert Doctors" },
  { icon: Shield, value: "100%", label: "Success Rate" },
  { icon: Clock, value: "24/7", label: "Patient Support" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-primary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              About Vea Health
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
              Your Trusted Partner in{" "}
              <span className="text-gradient">Medical Tourism</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-6">
              Since 2020, Vea Health has been at the forefront of medical tourism in Istanbul, 
              combining Turkish hospitality with world-class healthcare. Our modern clinic 
              in the heart of Istanbul features cutting-edge technology and a team of 
              internationally trained specialists.
            </p>
            <p className="text-primary-foreground/80 text-lg mb-8">
              We provide comprehensive care packages including airport transfers, 
              luxury accommodation, personal interpreters, and 24/7 patient support 
              in English, Arabic, Turkish, and French.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "JCI Accredited Facilities",
                "All-Inclusive Packages",
                "VIP Airport Transfer",
                "Luxury Hotel Stay",
                "Personal Translator",
                "Post-Treatment Care",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="text-primary-foreground/90 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-8 text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-10 h-10 text-secondary mx-auto mb-4" />
                <div className="font-display text-4xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
