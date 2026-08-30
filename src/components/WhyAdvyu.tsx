import React from "react";
import { XCircle, CheckCircle2 } from "lucide-react";

const PROBLEMS = [
  {
    title: "Lost Leads",
    desc: "Incoming calls and messages slip through the cracks without a system to capture them instantly.",
  },
  {
    title: "Manual Follow-Up",
    desc: "Your team spends hours calling and messaging leads instead of serving patients or closing sales.",
  },
  {
    title: "No System",
    desc: "Leads disappear into spreadsheets, notes apps, and forgotten conversations across multiple channels.",
  },
  {
    title: "Low Conversions",
    desc: "Without automated nurturing, most leads never become paying customers or booked appointments.",
  },
];

const SOLUTIONS = [
  {
    title: "Unified CRM",
    desc: "Every lead captured and tracked in one powerful dashboard with complete pipeline visibility.",
  },
  {
    title: "WhatsApp Automation",
    desc: "Instant, personalized messaging via WhatsApp to engage leads at the perfect moment.",
  },
  {
    title: "AI-Powered",
    desc: "Smart automation that learns and adapts to deliver the right message to the right person at the right time.",
  },
  {
    title: "Real Impact",
    desc: "Avoid missed revenue opportunities and team inefficiency. Scale your business predictably.",
  },
];

const WhyAdvyu: React.FC = () => {
  return (
    <section
      id="why-advyu"
      className="relative py-24 bg-card/10 border-t border-border"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Why Progressive Businesses Choose Advyu
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Traditional marketing involves manual follow-ups, messy Excel
            sheets, and disconnected systems. Here is how Advyu changes the
            game.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 items-stretch">
          {/* Problem Card */}
          <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-red-400">
                The Lead Problem
              </div>

              <ul className="mt-8 space-y-6">
                {PROBLEMS.map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution Card */}
          <div className="rounded-2xl border border-primary/40 bg-primary/5 p-8 flex flex-col justify-between relative shadow-xl shadow-primary/5">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                The Solution: Marketing AI
              </div>

              <ul className="mt-8 space-y-6">
                {SOLUTIONS.map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAdvyu;
