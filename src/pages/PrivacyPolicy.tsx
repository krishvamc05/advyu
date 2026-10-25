import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ArrowLeft, ShieldCheck, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Privacy Policy | Advyu"
        description="Learn how Advyu collects, uses, and protects your personal and business data across our marketing and automation suite."
        canonical="/privacy"
      />
      <Navbar />

      <main className="py-12 sm:py-16">
        <div className="container mx-auto max-w-4xl px-6">
          {/* Breadcrumb / Back Link */}
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
              <ShieldCheck className="h-3.5 w-3.5" />
              Legal & Privacy
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Last updated: October 26, 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10 pt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <section className="space-y-3">
              <p>
                At Advyu Solutions ("Advyu", "we", "our", or "us"), accessible
                from advyu.com, protecting the privacy of our visitors and
                clients is a core commitment. This Privacy Policy details the
                types of information we collect, how we use it, and your rights
                regarding your data.
              </p>
              <p>
                By using our website, software platform, or automation services,
                you agree to the collection and use of information in accordance
                with this policy.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                1. Information We Collect
              </h2>
              <p>
                We only collect data necessary to provide our business
                automation and marketing services:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-foreground">Contact Details:</strong>{" "}
                  Your name, business email address, phone number, and company
                  name when you request a demo, fill out our contact forms, or
                  contact our team directly.
                </li>
                <li>
                  <strong className="text-foreground">Account Information:</strong>{" "}
                  Credentials, workspace configurations, and billing contact
                  details when you register for an Advyu account.
                </li>
                <li>
                  <strong className="text-foreground">
                    Communication & Workflow Data:
                  </strong>{" "}
                  Message logs, campaign metrics, and chatbot triggers configured
                  within your automation workflows to help deliver support and
                  monitor service health.
                </li>
                <li>
                  <strong className="text-foreground">Technical Log Data:</strong>{" "}
                  Standard web logs such as your browser type, IP address,
                  referring pages, operating system, and timestamp of visits to
                  improve website speed and protect against malicious traffic.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                2. How We Use Your Information
              </h2>
              <p>
                We use the data collected strictly for direct operational
                purposes, including:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Setting up and delivering your CRM and messaging workflows.
                </li>
                <li>
                  Providing prompt technical support and answering your queries.
                </li>
                <li>
                  Transmitting system alerts, service updates, and billing
                  receipts.
                </li>
                <li>
                  Monitoring platform reliability, uptime, and fraud prevention.
                </li>
                <li>
                  Refining features based on aggregate usage statistics.
                </li>
              </ul>
              <p className="font-medium text-foreground">
                We never sell, rent, or trade your personal data or customer
                records to third parties for advertising.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                3. WhatsApp & Third-Party Service Providers
              </h2>
              <p>
                To provide messaging integrations (such as the official WhatsApp
                Business Cloud API), Advyu connects with verified service
                partners including Meta. Your communication data is processed in
                compliance with Meta's developer and business terms.
              </p>
              <p>
                We may also use trusted cloud hosting providers, database
                services, and payment gateways. These partners only process data
                instructed by us under strict confidentiality terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                4. Data Security & Storage
              </h2>
              <p>
                We use industry-standard security measures, including SSL/TLS
                encryption for data in transit and encrypted data storage at
                rest. Access to client data is strictly restricted to authorized
                personnel who require access for maintenance or support.
              </p>
              <p>
                While no electronic transmission over the internet is completely
                infallible, we continuously review and update our safeguards to
                maintain the integrity of your data.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                5. Data Retention & Your Rights
              </h2>
              <p>
                We keep your information as long as your workspace remains
                active or as necessary to fulfill legal obligations and resolve
                disputes. You have full rights to:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Request a copy of the personal information we hold about you.</li>
                <li>Request corrections to inaccurate or incomplete information.</li>
                <li>
                  Request permanent deletion of your data when your account is
                  closed.
                </li>
                <li>Opt out of marketing updates at any time.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                6. Cookies & Tracking
              </h2>
              <p>
                Advyu uses essential cookies to remember your theme preferences
                (such as Dark Mode) and maintain active sessions. You can choose
                to disable cookies through your browser settings, though some
                features of the site may function with reduced speed.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                7. Contact Us
              </h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to
                exercise your data rights, please contact our team:
              </p>
              <div className="mt-4 rounded-xl border border-border bg-card p-6">
                <p className="font-semibold text-foreground">
                  Advyu Solutions Data Protection
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">Direct Email</p>
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

export default PrivacyPolicy;
