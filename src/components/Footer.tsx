import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-card/20">
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand & Legal Entity Info */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-extrabold tracking-tight">
                ADV<span className="text-primary">YU</span>
              </span>
            </a>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary">
              ADVYU Solutions
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              All-in-one business growth, marketing automation, and WhatsApp
              Cloud API CRM suite built for growing Indian enterprises.
            </p>

            <div className="mt-5 space-y-2 text-xs text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  Hyderabad, Telangana, India.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:support@advyu.com"
                  className="hover:text-primary transition-colors"
                >
                  support@advyu.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+919949510223"
                  className="hover:text-primary transition-colors"
                >
                  +91 99495 10223
                </a>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Product
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/#features"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/#tour"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Interactive Tour
                </a>
              </li>
              <li>
                <a
                  href="/#calculator"
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
                  href="/#solutions"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Real Estate
                </a>
              </li>
              <li>
                <a
                  href="/#solutions"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Local Business
                </a>
              </li>
              <li>
                <a
                  href="/#solutions"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Salons & Clinics
                </a>
              </li>
              <li>
                <a
                  href="/#solutions"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Coaches & Tutors
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Mandatory Policies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Compliance & Legal
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/contact-us"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/refund-policy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Refund & Cancellation
                </a>
              </li>
              <li>
                <a
                  href="/shipping-policy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Shipping & Delivery
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © 2026 ADVYU Solutions. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a
              href="/contact-us"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/privacy-policy"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="/refund-policy"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Refund Policy
            </a>
            <a
              href="/shipping-policy"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Shipping Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
