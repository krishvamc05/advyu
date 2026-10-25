import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ArrowLeft, RefreshCw, Mail } from "lucide-react";

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Refund Policy | Advyu"
        description="Review the refund policy and cancellation guidelines for Advyu Solutions platform and services."
        canonical="/refund"
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
              <RefreshCw className="h-3.5 w-3.5" />
              Billing & Refunds
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Refund Policy
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Last updated: October 26, 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10 pt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <section className="space-y-3">
              <p>
                At Advyu Solutions ("Advyu", "we", "our", or "us"), we want to
                ensure you have a completely transparent and rewarding
                experience using our sales, marketing, and CRM automation
                tools.
              </p>
              <p>
                Please read this Refund Policy carefully to understand our
                guidelines regarding trial periods, subscription cancellations,
                and refund requests.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                1. Free Trial & Evaluation
              </h2>
              <p>
                We offer free trial access and one-on-one strategy walkthroughs
                so you can thoroughly evaluate our platform features, WhatsApp
                workflows, and CRM capabilities before committing to a paid
                subscription.
              </p>
              <p>
                During any active trial period, you can test our tools without
                obligation and may cancel your account at any time without
                being billed.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                2. Subscription Renewals & Cancellations
              </h2>
              <p>
                Advyu subscriptions are billed in advance on a recurring monthly
                or annual basis depending on your selected billing term.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  You may cancel your subscription at any time directly through
                  your account dashboard or by writing to support@advyu.com.
                </li>
                <li>
                  Upon cancellation, your workspace remains fully active until
                  the end of your current paid billing period.
                </li>
                <li>
                  No future charges will be billed after cancellation is
                  confirmed.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                3. Refund Eligibility
              </h2>
              <p>
                Because our software and cloud automation resources are
                allocated immediately upon payment, fees are generally
                non-refundable except under the following specific conditions:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-foreground">First-Time Purchases:</strong>{" "}
                  If you are unsatisfied with our services within 7 days of your
                  first subscription payment, you can contact our support team
                  to request a full refund.
                </li>
                <li>
                  <strong className="text-foreground">Billing Errors:</strong> In
                  the event of duplicate charges or erroneous billing caused by a
                  technical error, we will promptly refund the excess amount.
                </li>
                <li>
                  Mid-cycle cancellations or renewal charges beyond the initial
                  7-day period are non-refundable.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                4. Processing of Refunds
              </h2>
              <p>
                To request a refund, please send an email to{" "}
                <a
                  href="mailto:support@advyu.com"
                  className="font-semibold text-primary underline"
                >
                  support@advyu.com
                </a>{" "}
                with your account email and transaction ID.
              </p>
              <p>
                Once approved, your refund will be processed and returned to your
                original payment method within 5 to 10 business days depending
                on your bank or card issuer.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
