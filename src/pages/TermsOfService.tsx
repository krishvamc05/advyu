import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ArrowLeft, FileText, Mail } from "lucide-react";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Terms of Service | Advyu"
        description="Review the terms and conditions governing the use of Advyu Solutions, our marketing automation tools, and messaging services."
        canonical="/terms"
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
              <FileText className="h-3.5 w-3.5" />
              Legal & Compliance
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Terms of Service
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Last updated: October 26, 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10 pt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <section className="space-y-3">
              <p>
                Welcome to Advyu Solutions ("Advyu", "we", "our", or "us").
                These Terms of Service govern your access to and use of our
                website (advyu.com), software applications, messaging
                workflows, and related automation services.
              </p>
              <p>
                By accessing or using our services, you confirm that you have
                read, understood, and agreed to be bound by these terms. If you
                do not agree, you must discontinue using our services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                1. Service Overview
              </h2>
              <p>
                Advyu provides a suite of business growth, lead capture, CRM,
                and communication automation tools. This includes integrations
                with official channels like WhatsApp, unified social inboxes,
                and appointment booking tools designed to help businesses manage
                customer interactions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                2. Account Registration and Security
              </h2>
              <p>
                When you create an account with us, you agree to:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Provide accurate, current, and complete business information.
                </li>
                <li>
                  Maintain the confidentiality of your login credentials and API
                  keys.
                </li>
                <li>
                  Accept responsibility for all activity occurring under your
                  account.
                </li>
                <li>
                  Notify us immediately at support@advyu.com if you suspect
                  unauthorized access to your account.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                3. Acceptable Use Policy
              </h2>
              <p>
                You agree to use our platform strictly for legitimate business
                purposes and in full compliance with local and international
                laws. You agree NOT to:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Send unsolicited spam messages, deceptive marketing, or bulk
                  campaigns to individuals who have not provided opt-in consent.
                </li>
                <li>
                  Violate WhatsApp Business Messaging Policies or the terms of
                  any connected third-party platform.
                </li>
                <li>
                  Upload or distribute malicious code, viruses, or harmful
                  scripts.
                </li>
                <li>
                  Attempt to reverse engineer, decompile, or compromise our
                  underlying infrastructure.
                </li>
                <li>
                  Use our services to harass, defraud, or impersonate any person
                  or entity.
                </li>
              </ul>
              <p>
                Violation of our acceptable use guidelines may result in
                immediate suspension or termination of your account without
                prior notice.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                4. Third-Party Integrations
              </h2>
              <p>
                Our services integrate with external platforms including Meta
                (WhatsApp Cloud API) and third-party communication providers.
                Your use of these integrations is subject to each provider's
                terms of service. Advyu is not responsible for policy changes,
                downtime, or account restrictions imposed by external platform
                operators.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                5. Intellectual Property
              </h2>
              <p>
                All rights, title, and interest in the Advyu platform, including
                our logos, interface designs, software code, and documentation,
                remain the exclusive property of Advyu Solutions. You retain
                complete ownership of your business data, customer records, and
                content uploaded to your workspace.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                6. Subscription and Billing Terms
              </h2>
              <p>
                Access to paid tiers and automation packages is billed on a
                recurring subscription basis (monthly or annually) as selected
                during sign-up. Invoices are generated automatically, and
                payments must be made via authorized payment methods.
              </p>
              <p>
                You may cancel your recurring plan at any time through your
                account settings. Cancellation stops future renewals while
                allowing access through the end of the current billing cycle.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                7. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, Advyu
                Solutions and its directors, employees, or partners will not be
                held liable for any indirect, incidental, special, or
                consequential damages resulting from service interruptions, loss
                of business data, or loss of profits arising out of your use of
                our tools.
              </p>
              <p>
                Our total liability for any claim arising from these terms is
                limited to the amount paid by you to Advyu in the three months
                preceding the event giving rise to the claim.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                8. Modifications to Terms
              </h2>
              <p>
                We may revise these Terms of Service periodically to reflect
                operational updates or changes in law. When updates occur, the
                revision date at the top of this document will be updated.
                Continued use of our platform after updates indicates acceptance
                of the amended terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                9. Contact Information
              </h2>
              <p>
                If you have questions or concerns about these Terms of Service,
                please reach out directly:
              </p>
              <div className="mt-4 rounded-xl border border-border bg-card p-6">
                <p className="font-semibold text-foreground">
                  Advyu Solutions Support
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">Support Desk</p>
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

export default TermsOfService;
