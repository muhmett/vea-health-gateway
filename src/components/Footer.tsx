const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-display text-2xl font-bold text-background">
              Vea<span className="text-secondary">Health</span>
            </span>
            <p className="text-background/60 mt-4 max-w-sm">
              Premium dental and hair treatments in Istanbul. Your trusted partner 
              in medical tourism since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-background/60 hover:text-secondary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-4">Our Services</h4>
            <ul className="space-y-2">
              {["Dental Implants", "Hair Transplant", "Hollywood Smile", "Veneers", "Teeth Whitening"].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-background/60 hover:text-secondary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} Vea Health . All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-secondary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-secondary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
