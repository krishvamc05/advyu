import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-card/20">
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-extrabold tracking-tight">
                ADV<span className="text-primary">YU</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              We provide premium sales, marketing, and customer management
              software tools and agency support to scale local businesses and
              entrepreneurs.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Product
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#tour"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Interactive Tour
                </a>
              </li>
              <li>
                <a
                  href="#calculator"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  ROI Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Solutions
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#solutions"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Real Estate
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Local Business
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Salons & Clinics
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Coaches & Tutors
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 Advyu Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
