import React, { useState } from "react";
import {
  Star,
  Quote,
  ChevronDown,
  Mail,
  Clock,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "We closed 4 extra premium listings in Mumbai within 3 weeks of launching. Setting up automated WhatsApp broadcasts to leads synced from Justdial and property ads changed our entire sales cycle.",
    name: "Rajesh Mehta",
    role: "Founder, Apex Realty (Mumbai)",
  },
  {
    quote:
      "As a clinic owner, scheduling and follow-ups were a massive bottleneck. Advyu's auto-WhatsApp reminders decreased client no-shows by 75% instantly, saving our front-desk hours.",
    name: "Dr. Amit Verma",
    role: "Founder, Verma Dental Care (Delhi)",
  },
];

const FAQS = [
  {
    q: "Do we get setup support in Hindi and English?",
    a: "Yes. Our dedicated customer success team is based in India and provides complete setup onboarding via zoom calls in both English and Hindi.",
  },
  {
    q: "How do we sync leads from Justdial & IndiaMART?",
    a: "Inside your Advyu integrations dashboard, simply paste your Justdial or IndiaMART lead API key (which they provide for free). Once pasted, our platform pulls and parses leads every minute automatically.",
  },
  {
    q: "Do we need an official Meta Business Account for WhatsApp?",
    a: "Yes. To send broadcasts safely without risk of mobile numbers getting blocked, our growth platform integrates with the Official WhatsApp Cloud API. We assist you through the registration process for free.",
  },
];

const TestimonialsAndFAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="space-y-24 py-16 border-t border-border">
      {/* Testimonials */}
      <section id="testimonials" className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            What Our Partners Say
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Discover how progressive Indian businesses are saving lakhs and
            accelerating sales using Advyu.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border bg-card/40 p-8 relative"
            >
              <Quote className="h-10 w-10 text-primary/30 absolute top-6 right-6" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-foreground/90 sm:text-base">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-brand-gradient flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Quick answers to common questions about domains, setup support, and
            billing.
          </p>
        </div>

        <div className="mt-12 max-w-2xl mx-auto space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border bg-card/40 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <span className="text-sm font-semibold sm:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-primary shrink-0 transition-transform ${
                    openFaq === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed animate-fade-down">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TestimonialsAndFAQ;
