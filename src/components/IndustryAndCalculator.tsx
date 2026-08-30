import React, { useState } from "react";
import {
  Building2,
  Store,
  Stethoscope,
  GraduationCap,
  Calculator,
  ArrowRight,
} from "lucide-react";

const INDUSTRIES = [
  {
    id: "realestate",
    icon: Building2,
    name: "Real Estate",
    title: "Automated Property Showings & Lead Nurturing",
    desc: "Deploy local property listing campaigns on Meta, capture site-visit requests via visual calendars, and trigger automated WhatsApp walkthrough videos. Build developer credibility effortlessly.",
    cta: "Setup Real Estate System",
    highlights: [
      "Instant site-visit bookings",
      "WhatsApp tour video automation",
      "Broker pipeline tracking",
    ],
  },
  {
    id: "local",
    icon: Store,
    name: "Local Businesses",
    title: "Instantly Capture Directory & Ad Leads",
    desc: "Sync leads from Justdial, IndiaMART, Google Maps, and website forms. Instantly text prospects via WhatsApp, route them to your calling agents, and track pipeline metrics.",
    cta: "Automate Local Leads",
    highlights: [
      "Justdial & IndiaMART API sync",
      "Auto WhatsApp intro text",
      "Call log mapping",
    ],
  },
  {
    id: "clinic",
    icon: Stethoscope,
    name: "Salons & Clinics",
    title: "Reduce Appointment No-Shows by 75%",
    desc: "Offer clients visual calendar scheduling. Send automated WhatsApp confirmation codes, reminder alerts 2 hours prior, and automated review prompts immediately after sessions.",
    cta: "Configure Clinic Bookings",
    highlights: [
      "75% reduction in no-shows",
      "Instant WhatsApp reminders",
      "Google review automation",
    ],
  },
  {
    id: "coach",
    icon: GraduationCap,
    name: "Coaches & Tutors",
    title: "Sell Consultations & Scale Course Enrollments",
    desc: "Design high-converting sales letters, integrate automated billing gates, host calendar bookings for strategy sessions, and manage relations inside our CRM pipelines.",
    cta: "Launch Coaching Funnel",
    highlights: [
      "Course membership access",
      "Strategy session booking",
      "Automated payment flows",
    ],
  },
];

const IndustryAndCalculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState("realestate");
  const currentIndustry =
    INDUSTRIES.find((i) => i.id === activeTab) || INDUSTRIES[0];

  // Calculator State
  const [leads, setLeads] = useState(250);
  const [ticket, setTicket] = useState(15000);

  // Math
  const conversionRate = 0.08; // 8% avg conversion with Advyu vs 2% manual
  const estimatedRevenue = Math.round(leads * conversionRate * ticket);
  const hoursSavedPerWeek = Math.round(leads * 0.25); // 15 mins saved per lead

  return (
    <div className="space-y-24 py-16 bg-card/10 border-t border-border">
      {/* Industry Workflows */}
      <section id="solutions" className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Industry Workflows Pre-configured
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            No matter your business niche, Advyu Solutions provides
            pre-configured workflows to automate your sales cycle from Day 1.
          </p>

          {/* Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(ind.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-all ${
                    activeTab === ind.id
                      ? "bg-brand-gradient text-primary-foreground shadow-lg shadow-primary/20"
                      : "border border-border bg-card/60 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {ind.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Detail Card */}
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl border border-border bg-card/40 p-8 lg:p-12 shadow-xl">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/10 px-3 py-1 rounded-full">
                {currentIndustry.name} Solution
              </span>
              <h3 className="mt-4 text-2xl font-bold">
                {currentIndustry.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {currentIndustry.desc}
              </p>

              <ul className="mt-6 space-y-2">
                {currentIndustry.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-xs font-medium text-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-xs font-semibold text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5"
              >
                {currentIndustry.cta}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card/60 p-6 flex flex-col justify-center items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-2xl bg-brand-gradient flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                {React.createElement(currentIndustry.icon, {
                  className: "h-8 w-8",
                })}
              </div>
              <h4 className="text-lg font-bold">
                Ready for {currentIndustry.name}?
              </h4>
              <p className="text-xs text-muted-foreground">
                Get the pre-built pipeline template, auto-responder sequence,
                and calendar setup instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border border-primary/30 bg-primary/5 p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
            <Calculator className="h-4 w-4" />
            Automation ROI Calculator
          </div>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Calculate Your Time & Revenue Gains
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Adjust your monthly lead volume and average deal ticket to see your
            potential return with Advyu.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Controls */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span>Monthly Leads Captured:</span>
                  <span className="text-primary font-bold">{leads} leads</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="50"
                  value={leads}
                  onChange={(e) => setLeads(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span>Average Deal Ticket Value (₹):</span>
                  <span className="text-primary font-bold">
                    ₹{ticket.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="200000"
                  step="2000"
                  value={ticket}
                  onChange={(e) => setTicket(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer"
                />
              </div>
            </div>

            {/* Results */}
            <div className="rounded-2xl border border-border bg-card/80 p-6 flex flex-col justify-center space-y-4 text-center">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">
                  Estimated Monthly Extra Revenue
                </span>
                <p className="text-3xl font-extrabold text-gradient-brand mt-1">
                  ₹{estimatedRevenue.toLocaleString()}
                </p>
              </div>

              <hr className="border-border" />

              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">
                  Team Hours Saved / Week
                </span>
                <p className="text-xl font-bold text-foreground mt-1">
                  ~{hoursSavedPerWeek} Hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryAndCalculator;
