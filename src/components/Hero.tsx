import { useEffect, useState } from "react";
import {
  ArrowRight,
  PhoneCall,
  Sparkles,
  Bot,
  TrendingUp,
  Clock,
} from "lucide-react";

const TRUST_ITEMS = [
  { icon: Bot, label: "24/7 AI Assistant" },
  { icon: TrendingUp, label: "3X Faster Revenue Growth" },
  { icon: Clock, label: "75% Time Saved" },
];

const LOGOS = [
  "Justdial",
  "IndiaMART",
  "Meta",
  "Zapier",
  "Pabbly Connect",
  "Shopify",
  "WooCommerce",
  "HubSpot",
  "Zoho CRM",
  "Razorpay",
  "Stripe",
  "Google Ads",
];

const Hero = () => {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    const heights = [40, 65, 50, 80, 95, 72];
    const t = setTimeout(() => setBars(heights), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 hero-glow" />
      <div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />

      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container relative mx-auto px-6 py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Copy column */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Marketing AI: Automate Your Growth
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Automate Your Business,{" "}
              <span className="text-gradient-brand">Scale Without Limits.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Stop losing revenue to delayed follow-ups and scattered software.
              Advyu goes beyond basic marketing automation. We give you the tools
              to capture leads and close deals, plus the hands-on partnership to
              make sure your team actually adopts the system. Scale your business
              without breaking your operations.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                Book Free Demo Session
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-primary/50 hover:bg-card"
              >
                <PhoneCall className="h-4 w-4 text-primary" />
                Request Call-Back
              </a>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
              {TRUST_ITEMS.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15">
                    <Icon className="h-3 w-3 text-primary" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual column */}
          <div className="relative animate-fade-in lg:pl-8">
            <div className="relative animate-float">
              {/* Floating badge 1: Lead Captured */}
              <div className="absolute -left-6 top-4 z-20 glass rounded-2xl border border-border p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/15">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" className="text-blue-500"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-foreground">
                      Lead Captured
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      via Social Profile / Website
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge 2: AI Nurturing */}
              <div className="absolute -right-6 top-24 z-20 glass rounded-2xl border border-border p-3 shadow-xl animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/15">
                    <Bot className="h-4 w-4 text-green-500" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-foreground">
                      AI Bot Nurtures
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      Automated follow-up sent
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge 3: Revenue Boost */}
              <div className="absolute -right-4 bottom-8 z-20 glass rounded-2xl border border-border p-3 shadow-xl animate-fade-in" style={{ animationDelay: "1s" }}>
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                  Revenue Boost
                </p>
                <p className="text-lg font-bold text-gradient-brand">+312%</p>
              </div>

              {/* Mockup window */}
              <div className="glass overflow-hidden rounded-2xl border border-border shadow-2xl">
                <div className="flex items-center gap-2 border-b border-border bg-card/40 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                  <span className="ml-3 text-xs font-medium text-muted-foreground">
                    advyu.app / dashboard
                  </span>
                </div>

                <div className="flex">
                  {/* Sidebar */}
                  <div className="hidden flex-col gap-3 border-r border-border p-4 sm:flex">
                    {[true, false, false, false].map((active, i) => (
                      <span
                        key={i}
                        className={`h-8 w-8 rounded-lg ${active ? "bg-brand-gradient" : "bg-muted"}`}
                      />
                    ))}
                  </div>

                  {/* Body */}
                  <div className="flex-1 space-y-4 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="h-2.5 w-28 rounded-full bg-primary/60" />
                        <div className="mt-2 h-2 w-40 rounded-full bg-muted" />
                      </div>
                      <span className="rounded-full bg-primary/15 px-3 py-1 text-[10px] font-semibold text-primary">
                        Live
                      </span>
                    </div>

                    {/* Chart */}
                    <div className="flex h-32 items-end justify-between gap-2 rounded-xl border border-border bg-card/30 p-4">
                      {bars.length === 0
                        ? [40, 65, 50, 80, 95, 72].map((h, i) => (
                            <span
                              key={i}
                              className="w-full rounded-t-md bg-muted"
                              style={{ height: 0 }}
                            />
                          ))
                        : bars.map((h, i) => (
                            <span
                              key={i}
                              className="animate-grow-bar w-full rounded-t-md bg-brand-gradient"
                              style={{
                                height: `${h}%`,
                                animationDelay: `${i * 0.1}s`,
                              }}
                            />
                          ))}
                    </div>

                    {/* Detail rows */}
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between rounded-lg border border-border bg-card/30 px-3 py-2">
                        <span className="h-2 w-24 rounded-full bg-muted" />
                        <span className="h-2 w-10 rounded-full bg-primary/60" />
                      </div>
                      <div className="flex items-center justify-between rounded-lg border border-border bg-card/30 px-3 py-2">
                        <span className="h-2 w-32 rounded-full bg-muted" />
                        <span className="h-2 w-8 rounded-full bg-accent/70" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted-by marquee */}
        <div className="mt-20 border-t border-border pt-10">
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Integrated With &amp; Trusted By
          </p>
          <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
            <div className="flex w-max animate-marquee gap-12">
              {[...LOGOS, ...LOGOS].map((name, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap text-lg font-bold text-muted-foreground/60"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
