import React, { useState } from "react";
import {
  MessageSquare,
  Zap,
  Calendar,
  Bot,
  Image,
  TrendingUp,
  Check,
  Megaphone,
  Kanban,
  Layout,
} from "lucide-react";

const FEATURES = [
  {
    icon: MessageSquare,
    title: "Lead Capture: Every Channel",
    desc: "Every lead—whether from Facebook, Google, Instagram, your website, or a phone call—flows directly into your CRM pipeline. No more lost opportunities.",
  },
  {
    icon: Zap,
    title: "Follow-Up Automation",
    desc: "Never miss a beat. Automatically send personalized welcome messages via WhatsApp within seconds of lead capture, and trigger intelligent AI nurturing sequences.",
  },
  {
    icon: Calendar,
    title: "Seamless Appointment Booking",
    desc: "Leads book directly into your calendar based on your availability. Auto calendar sync, instant confirmations, and smart reminder sequences eliminate no-shows.",
  },
  {
    icon: Bot,
    title: "Your 24/7 AI Assistant",
    desc: "Intelligent WhatsApp chatbots and AI call answering that route leads, answer FAQs, and book appointments automatically—even while you sleep.",
    link: "https://engage.advyu.com/",
  },
  {
    icon: Image,
    title: "Done-for-You Content Engine",
    desc: "Stay consistent effortlessly. Use an AI content calendar, ready-made creatives, and one-click publishing across Instagram, Facebook, TikTok, and Google.",
  },
  {
    icon: TrendingUp,
    title: "Smart Growth & Acquisition",
    desc: "Turn attention into customers with AI-powered marketing tools, automated review/reputation management, AI ad copy, retargeting, and budget optimization.",
  },
];

const TOUR_TABS = [
  {
    id: "whatsapp",
    label: "WhatsApp Broadcasts",
    title: "Automate Conversations & Scale Engagement",
    desc: "Email filters are crowded. Focus on WhatsApp, where Indian clients are active 24/7. Send launch notifications, broadcasts, and invoices with custom variables automatically.",
    bullets: [
      "Deploy visual chatbot trees for instant customer replies",
      "Send bulk broadcasts safely using Official Cloud API keys",
      "Multi-agent shared inbox so all sales reps can reply",
    ],
    visual: (
      <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-6 space-y-4">
        <div className="flex items-center gap-3 bg-emerald-900/40 p-3 rounded-lg border border-emerald-500/20">
          <div className="h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono text-emerald-300">
            WhatsApp Cloud API Connected
          </span>
        </div>
        <div className="space-y-2">
          <div className="bg-emerald-900/30 p-3 rounded-lg text-xs text-foreground/90 max-w-[80%]">
            Hello Rajesh! Your appointment is confirmed for 4:00 PM today.
          </div>
          <div className="bg-primary/20 p-3 rounded-lg text-xs text-foreground/90 max-w-[80%] ml-auto text-right">
            Great! Can I get the location details?
          </div>
          <div className="bg-emerald-900/30 p-3 rounded-lg text-xs text-foreground/90 max-w-[80%]">
            Here is the location map link: https://maps.google.com/?q=advyu
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "ads",
    label: "AI Ads Launcher",
    title: "Ditch Complex Ad Managers & Agency Costs",
    desc: "Our simplified Meta and Google ads module generates optimized audiences and ad copy variations in seconds. Launch campaigns directly without standard technical complexity.",
    bullets: [
      "AI copywriter creates high-converting titles & descriptions",
      "Launch with just 3 clicks with automated targeting profiles",
      "Consolidated lead tracking maps spend directly to actual ROI",
    ],
    visual: (
      <div className="rounded-xl border border-purple-500/30 bg-purple-950/20 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
            AI Ad Campaign Generator
          </span>
          <span className="rounded-full bg-purple-500/20 px-2.5 py-0.5 text-[10px] text-purple-300">
            Ready to Launch
          </span>
        </div>
        <div className="space-y-2 border border-purple-500/20 bg-card/40 p-4 rounded-lg">
          <div className="h-3 w-3/4 rounded bg-purple-400/40" />
          <div className="h-2 w-full rounded bg-muted/60" />
          <div className="h-2 w-4/5 rounded bg-muted/60" />
          <button className="w-full mt-2 rounded bg-brand-gradient py-2 text-xs font-bold text-primary-foreground shadow">
            LAUNCH CAMPAIGN (3 CLICKS)
          </button>
        </div>
      </div>
    ),
  },
  {
    id: "crm",
    label: "Unified CRM",
    title: "Visual Pipeline For Your Entire Sales Team",
    desc: "Advyu CRM aggregates leads from Justdial, IndiaMART, FB Lead forms, and landing pages automatically. Track client stage migrations and task schedules cleanly.",
    bullets: [
      "Visual drag-and-drop Kanban boards for pipeline control",
      "Automatic lead assignment to prevent delay",
      "Full communication logs (calls, WhatsApp texts) mapped to profiles",
    ],
    visual: (
      <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-6 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {["New Leads", "Contacted", "Booked"].map((col, idx) => (
            <div
              key={idx}
              className="bg-card/60 p-2 rounded-lg border border-border"
            >
              <span className="text-[10px] font-bold text-cyan-400 uppercase">
                {col}
              </span>
              <div className="mt-2 space-y-1.5">
                <div className="p-2 bg-muted/40 rounded text-[10px] font-medium text-foreground">
                  Rahul S.
                </div>
                {idx > 0 && (
                  <div className="p-2 bg-primary/20 rounded text-[10px] font-medium text-primary">
                    Priya M.
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "funnels",
    label: "Visual Funnels",
    title: "Drag, Drop, and Launch Landing Pages",
    desc: "Create high-converting landing pages and websites with zero coding. All pages load instantly on secure AWS servers to maximize mobile ad conversion rates.",
    bullets: [
      "Mobile-optimized templates designed for high lead conversion",
      "Integrate lead capture forms and calendar bookings directly",
      "SSL certificates provisioned automatically for custom domains",
    ],
    visual: (
      <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-6 text-center">
        <div className="mx-auto max-w-[200px] border-2 border-dashed border-amber-500/40 p-4 rounded-xl space-y-2">
          <div className="text-xs font-bold text-amber-400">
            High-Converting Landing Page
          </div>
          <div className="text-[10px] text-muted-foreground">
            Traffic ➔ Leads ➔ Sales
          </div>
          <div className="h-6 bg-brand-gradient rounded text-[10px] text-primary-foreground font-bold flex items-center justify-center">
            Claim Offer
          </div>
        </div>
      </div>
    ),
  },
];

const CAPABILITIES = [
  {
    category: "AI & Ads",
    popular: true,
    title: "AI Facebook Ads",
    desc: "Auto-generate high-converting Facebook campaigns with AI.",
  },
  {
    category: "AI & Ads",
    popular: false,
    title: "AI Google Ads",
    desc: "Smart PPC campaigns that optimize spend automatically.",
  },
  {
    category: "AI & Ads",
    popular: false,
    title: "Reputation Management",
    desc: "Automate review requests and monitor your brand rating across Google.",
  },
  {
    category: "Build & Launch",
    popular: true,
    title: "Landing Page Builder",
    desc: "Drag-and-drop pages that convert visitors to buyers.",
  },
  {
    category: "Build & Launch",
    popular: false,
    title: "Website Builder",
    desc: "Launch a full website in minutes — no code needed.",
  },
  {
    category: "Build & Launch",
    popular: false,
    title: "Form Builder",
    desc: "Collect leads, surveys, and payments effortlessly.",
  },
  {
    category: "Build & Launch",
    popular: false,
    title: "AWS Hosting",
    desc: "Enterprise-grade secure hosting powered by Amazon Web Services.",
  },
  {
    category: "Build & Launch",
    popular: false,
    title: "Custom Domains",
    desc: "Connect your own domain and build a branded experience.",
  },
  {
    category: "Manage & Operate",
    popular: true,
    title: "Task Management",
    desc: "Keep your team aligned with boards, tasks, and deadlines.",
  },
  {
    category: "Manage & Operate",
    popular: false,
    title: "Sales Pipeline",
    desc: "Visualize every deal and close more with drag-and-drop boards.",
  },
  {
    category: "Manage & Operate",
    popular: false,
    title: "Centralized CRM",
    desc: "Store, segment, and manage every client relationship.",
  },
  {
    category: "Manage & Operate",
    popular: false,
    title: "Interactive Dashboards",
    desc: "Real-time visual dashboards that turn raw data into actionable growth insights.",
  },
  {
    category: "Manage & Operate",
    popular: false,
    title: "Membership Application",
    desc: "Gate premium content and manage course member access.",
  },
  {
    category: "Manage & Operate",
    popular: false,
    title: "Team Members",
    desc: "Invite your team and control access with specific user roles.",
  },
  {
    category: "Connect & Automate",
    popular: true,
    title: "Unified Chat Inbox",
    desc: "All client conversations in one unified inbox (WhatsApp, IG, FB).",
  },
  {
    category: "Connect & Automate",
    popular: false,
    title: "Email Marketing",
    desc: "Powerful drip campaigns that nurture leads on autopilot.",
  },
  {
    category: "Connect & Automate",
    popular: false,
    title: "Calendar Booking",
    desc: "Let clients book meetings that sync seamlessly with your schedule.",
  },
  {
    category: "Connect & Automate",
    popular: false,
    title: "Automation Workflow",
    desc: "Trigger actions automatically — zero manual work required.",
  },
  {
    category: "Connect & Automate",
    popular: false,
    title: "AI Calling",
    desc: "Automated AI voice calls to book, follow up, and qualify leads around the clock.",
  },
  {
    category: "Connect & Automate",
    popular: false,
    title: "Integrations Hub",
    desc: "Connect 1000+ apps via native and Zapier-powered integrations.",
  },
];

const FeaturesAndTour: React.FC = () => {
  const [activeTab, setActiveTab] = useState("whatsapp");
  const currentTour = TOUR_TABS.find((t) => t.id === activeTab) || TOUR_TABS[0];

  return (
    <div className="space-y-24 py-16">
      {/* Core Features */}
      <section id="features" className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Features That Drive Revenue
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            We built Advyu Solutions with only the features that actually add to
            your bottom line. No fluff, just pure conversions.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((item, idx) => {
            const Icon = item.icon;
            const Card = (
              <div
                key={idx}
                className="group rounded-2xl border border-border bg-card/40 p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-brand-gradient group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            );

            return item.link ? (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {Card}
              </a>
            ) : (
              Card
            );
          })}
        </div>
      </section>

      {/* Product Tour */}
      <section id="tour" className="bg-card/20 border-y border-border py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Interactive Product Tour
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Explore the visual workflows inside our platform and discover how
              we help double your conversion rates.
            </p>

            {/* Tabs Header */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {TOUR_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all ${
                    activeTab === tab.id
                      ? "bg-brand-gradient text-primary-foreground shadow-lg shadow-primary/20"
                      : "border border-border bg-card/60 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2 items-center max-w-5xl mx-auto rounded-3xl border border-border bg-card/40 p-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tight">
                {currentTour.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {currentTour.desc}
              </p>
              <ul className="space-y-3">
                {currentTour.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-foreground/90"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <div>{currentTour.visual}</div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            All Platform Capabilities
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Everything you need to launch, manage, and scale your business or
            agency—in one dashboard.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((cap, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-border bg-card/30 p-6 flex flex-col justify-between transition-all hover:border-primary/30"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full border border-primary/20 bg-primary/10">
                    {cap.category}
                  </span>
                  {cap.popular && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <h4 className="text-base font-semibold">{cap.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturesAndTour;
