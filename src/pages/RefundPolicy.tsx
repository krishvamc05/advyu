import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ArrowLeft, RefreshCw, Mail, Clock, AlertCircle } from "lucide-react";

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Refund & Cancellation Policy | ADVYU Solutions"
        description="Official Refund & Cancellation Policy for ADVYU Solutions. Learn about cancellation windows, eligibility, and 5 to 7 day refund turnaround."
        canonical="/refund-policy"
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
              <RefreshCw className="h-3.5 w-3.5" />
              Billing & Cancellations
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Refund & Cancellation Policy
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Last updated: October 29, 2026
            </p>
          </div>

          {/* Policy Body */}
          <div className="space-y-10 pt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <section className="space-y-3">
              <p>
                At ADVYU Solutions ("ADVYU", "we", "our", or "us"), operating the
                platform at advyu.com, we strive to maintain complete transparency
                in our commercial relationships, recurring subscriptions, and
                custom automation services.
              </p>
              <p>
                This Refund & Cancellation Policy outlines the exact conditions
                under which cancellations and refunds are granted in compliance
                with Reserve Bank of India (RBI) Payment Aggregator guidelines.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                1. Cancellation Window and Process
              </h2>
              <p>
                Clients can request cancellation of services or subscriptions
                under the following terms:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-foreground">Before Service Initiation:</strong>{" "}
                  Clients may cancel any custom onboarding or workflow setup order
                  prior to the commencement of technical configuration or API
                  integration by emailing support@advyu.com.
                </li>
                <li>
                  <strong className="text-foreground">Subscription Renewals:</strong>{" "}
                  Monthly or annual recurring software subscriptions can be cancelled
                  at any time through your dashboard or by notifying our support desk
                  at least 48 hours prior to the next billing date.
                </li>
                <li>
                  <strong className="text-foreground">Post-Fulfillment:</strong>{" "}
                  Once custom API integrations (such as verified WhatsApp Cloud API
                  numbers) have been provisioned and handed over, setup fees
                  cannot be cancelled.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                2. Refund Eligibility & Conditions
              </h2>
              <p>
                Refunds are evaluated and issued under the following specific criteria:
              </p>
              <div className="grid gap-4 pt-2">
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-bold text-foreground">
                    Initial 7-Day Guarantee
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed sm:text-sm">
                    If you are unsatisfied with our SaaS platform within 7 days of
                    your first subscription payment, you are eligible to request a
                    full refund of your platform subscription fee.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-bold text-foreground">
                    Technical or Billing Errors
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed sm:text-sm">
                    In cases of verified duplicate transactions, system overcharging,
                    or failure to provision cloud access due to platform outage,
                    100% of the erroneous amount will be refunded immediately.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-destructive/20 bg-destructive/5 p-4 text-xs text-muted-foreground sm:text-sm">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Non-Refundable Expenses:</strong>{" "}
                    Statutory government levies, third-party carrier messaging fees
                    (such as Meta WhatsApp conversation charges), and merchant payment
                    gateway transaction fees incurred are strictly non-refundable.
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                3. Mandatory Refund Timeline (5 to 7 Working Days)
              </h2>
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="font-bold text-foreground">
                      Standard Banking Turnaround Cycle
                    </h3>
                    <p className="text-sm font-semibold text-primary">
                      All approved refunds are initiated within 48 hours and will be
                      credited to the customer's original payment method / bank account
                      within 5 to 7 working days, subject to inter-bank clearing cycles.
                    </p>
                  </div>
                </div>
              </div>
              <p className="pt-2">
                Refunds are credited back directly to the source bank account,
                debit/credit card, UPI VPA, or net banking channel used during the
                original purchase. We do not issue cash refunds.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                4. How to Request a Refund
              </h2>
              <p>
                To raise a cancellation or refund request, please email our billing
                desk with your transaction reference:
              </p>
              <div className="mt-4 rounded-xl border border-border bg-card p-6">
                <p className="font-semibold text-foreground">
                  ADVYU Solutions Billing Desk
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">Email Inquiries</p>
                    <a
                      href="mailto:support@advyu.com"
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      support@advyu.com
                    </a>
                  </div>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Please include your full name, registered email address, transaction
                  date, and payment gateway reference number for rapid resolution.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
