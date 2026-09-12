import {
  Workflow,
  Users,
  GitBranch,
  Compass,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const PILLARS = [
  {
    icon: GitBranch,
    title: "Workflow Automation Journey",
    description:
      "We map your end-to-end business processes, from lead capture to fulfillment, and automate the repetitive hand-offs so work flows without friction or delay.",
  },
  {
    icon: Users,
    title: "Change Management",
    description:
      "Adoption is everything. We train your team, manage the transition, and build internal champions so the new system actually sticks and delivers ROI.",
  },
  {
    icon: ShieldCheck,
    title: "WhatsApp API & Automation",
    description:
      "Capture leads across every channel, nurture them with automated sequences, and book appointments 24/7 via the Meta-Verified WhatsApp API. All in one growth suite.",
  },
];

const STEPS = [
  {
    icon: Compass,
    step: "01",
    title: "Discover & Map",
    text: "We audit your current workflows, identify bottlenecks, and design an automation blueprint tailored to your business.",
  },
  {
    icon: Workflow,
    step: "02",
    title: "Build & Automate",
    text: "We connect your tools, deploy smart automations, and wire up the WhatsApp API for always-on lead engagement.",
  },
  {
    icon: Users,
    step: "03",
    title: "Adopt & Change",
    text: "Through hands-on training and change management, we get your team fully bought in and confident on the new system.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Scale & Optimise",
    text: "We monitor performance, refine workflows, and scale what works, so your growth compounds without limits.",
  },
];

const WorkflowChange = () => {
  return (
    <section className="relative overflow-hidden bg-card/30 py-24">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="container relative mx-auto px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Workflow className="h-3.5 w-3.5" />
            Beyond Software. A True Partner
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            We Don't Just Hand You Tools.{" "}
            <span className="text-gradient-brand">
              We Walk the Whole Journey With You.
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Advyu delivers more than the WhatsApp API and marketing
            automation. We embed in your business to drive workflow automation
            and team onboarding, ensuring the technology actively improves
            how your team works.
          </p>
        </div>

        {/* Three pillars */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-background/60 p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-primary-foreground shadow-lg shadow-primary/30">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Journey steps */}
        <div className="mt-20">
          <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            The Advyu Engagement Journey
          </h3>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(({ icon: Icon, step, title, text }) => (
              <div
                key={step}
                className="relative rounded-2xl border border-border bg-background/60 p-6"
              >
                <span className="absolute right-5 top-5 text-3xl font-bold text-primary/15">
                  {step}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h4 className="mt-4 text-base font-semibold">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowChange;
