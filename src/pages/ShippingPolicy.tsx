import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ArrowLeft, Truck, Mail, CheckCircle2 } from "lucide-react";

const ShippingPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Shipping & Fulfillment Policy | ADVYU Solutions"
        description="Service Delivery and Digital Fulfillment Policy for ADVYU Solutions software, CRM, and automation workflows."
        canonical="/shipping-policy"
      />
      <Navbar />

      <main className="py-12 sm:py-16">
        <div className="container mx-auto max-w-4xl px-6">
          {/* Breadcrumb */}
          <div className="mb-8">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary sm:text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </a>
          </div>

          {/* Header */}
          <div className="border-b border-border pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Truck className="h-3.5 w-3.5" />
              Service Delivery & Fulfillment
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Shipping & Fulfillment Policy
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Last updated: October 29, 2026
            </p>
          </div>

          {/* Policy Content */}
          <div className="space-y-10 pt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                1. Digital Service Delivery
              </h2>
              <p>
                ADVYU Solutions ("ADVYU", "we", "our") operates as a technology
                and business automation provider. All products and services
                offered across our platform (advyu.com), including CRM software,
                WhatsApp Cloud API integrations, automated lead capture workflows,
                and digital growth tools, are strictly digital deliverables.
              </p>
              <div className="mt-3 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm font-semibold text-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span>No physical products or tangible goods are packaged or shipped.</span>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                2. Method of Delivery
              </h2>
              <p>
                Upon successful payment and verification of your subscription or
                service order, all digital deliverables are provisioned electronically
                through the following channels:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-foreground">Workspace Credentials:</strong>{" "}
                  Login details, secure portal access links, and dashboard invitations
                  are dispatched to your registered business email address.
                </li>
                <li>
                  <strong className="text-foreground">Workflow Deployments:</strong>{" "}
                  Custom automation configurations, chatbot templates, and funnel
                  connections are activated directly within your cloud workspace.
                </li>
                <li>
                  <strong className="text-foreground">Onboarding Communication:</strong>{" "}
                  API verification steps, onboarding instructions, and live walkthrough
                  invitations are communicated via official WhatsApp channels and
                  scheduled video sessions.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                3. Delivery Turnaround Times
              </h2>
              <p>
                Our delivery and fulfillment timelines are structured as follows:
              </p>
              <div className="grid gap-4 sm:grid-cols-2 pt-2">
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    Instant / Within 24 Hours
                  </p>
                  <h3 className="mt-1 font-bold text-foreground">
                    Standard Workspace Access
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    Automated confirmation emails and initial dashboard login credentials
                    are provisioned within 24 hours of successful payment confirmation.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    2 to 7 Business Days
                  </p>
                  <h3 className="mt-1 font-bold text-foreground">
                    Custom Integrations & WhatsApp API
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    Custom funnel builds, CRM data migrations, and official WhatsApp Business
                    Cloud API approvals typically require 2 to 7 business days upon receiving
                    the required client documentation and verification permissions.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                4. Client Responsibilities for Timely Delivery
              </h2>
              <p>
                Certain automated workflows and messaging integrations depend on
                statutory and platform approvals (such as Meta Business verification
                and DNS domain records). Clients must furnish accurate details,
                access tokens, or verification codes promptly to ensure fulfillment
                within the standard 2 to 7 business day window.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                5. Non-Receipt or Fulfillment Assistance
              </h2>
              <p>
                If you have completed your payment and have not received your
                access credentials or onboarding confirmation within 24 hours,
                please verify your email spam folder or contact our fulfillment desk
                immediately:
              </p>
              <div className="mt-4 rounded-xl border border-border bg-card p-6">
                <p className="font-semibold text-foreground">
                  ADVYU Solutions Fulfillment Desk
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">Fulfillment Support</p>
                    <a
                      href="mailto:support@advyu.com"
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      support@advyu.com
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingPolicy;
