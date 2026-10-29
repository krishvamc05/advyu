import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ArrowLeft, FileText, Mail, MapPin, Phone } from "lucide-react";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Terms & Conditions | ADVYU Solutions"
        description="Official Terms and Conditions governing the use of ADVYU Solutions platform, software, and marketing automation services."
        canonical="/terms"
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
              <FileText className="h-3.5 w-3.5" />
              Legal & Compliance Terms
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Terms & Conditions
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Last updated: October 29, 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10 pt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <section className="space-y-3">
              <p>
                These Terms and Conditions ("Terms") constitute a legally binding
                agreement between you (the "Client", "Merchant", or "User") and{" "}
                <strong className="text-foreground">ADVYU Solutions</strong> ("ADVYU",
                "we", "us", or "our"), governing your access to and use of our
                website (advyu.com), software applications, and related digital
                automation services.
              </p>
              <p>
                By accessing our website, creating an account, or purchasing any
                subscription package, you agree to be bound by these Terms and our
                associated policies. If you do not agree with any part of these
                Terms, you must refrain from using our services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                1. Scope of Services
              </h2>
              <p>
                ADVYU Solutions offers a comprehensive business growth and CRM
                automation suite designed for enterprises, clinics, salons, and
                service providers. Our digital services include:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Multi-channel lead capture pipelines and centralized CRM inbox
                  management.
                </li>
                <li>
                  Official Meta WhatsApp Cloud API messaging integrations and
                  automated chatbot workflows.
                </li>
                <li>
                  Online appointment scheduling, review automation, and client
                  nurturing funnels.
                </li>
                <li>
                  Technical implementation support and workflow deployment
                  services.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                2. User Obligations & Acceptable Use
              </h2>
              <p>
                In utilizing the ADVYU platform and integrations, you agree to
                comply strictly with all applicable Indian and international
                laws, as well as Meta's WhatsApp Business Messaging Policies. You
                explicitly agree NOT to:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Transmit unsolicited commercial messages (spam), fraudulent
                  schemes, or marketing communications to recipients without
                  verified opt-in consent.
                </li>
                <li>
                  Distribute defamatory, obscene, deceptive, or infringing
                  materials.
                </li>
                <li>
                  Attempt to circumvent system rate limits, reverse-engineer
                  source code, or compromise platform security.
                </li>
                <li>
                  Use our services for any unauthorized financial transactions or
                  prohibited business activities.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                3. Payment Terms, Billing, and Currencies
              </h2>
              <p>
                All platform subscriptions, setup packages, and services are
                quoted and billed in Indian Rupees (INR ₹) unless explicitly stated
                otherwise.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-foreground">Payment Gateways:</strong> Payments
                  are securely processed via RBI-authorized payment aggregators
                  (including PhonePe, UPI, net banking, debit cards, and credit
                  cards).
                </li>
                <li>
                  <strong className="text-foreground">Billing Cycles:</strong> Subscription
                  fees are charged in advance on a recurring monthly or annual
                  schedule according to your selected engagement tier.
                </li>
                <li>
                  <strong className="text-foreground">Taxes:</strong> Applicable Good and
                  Services Tax (GST) will be charged in accordance with Indian tax
                  statutes and reflected on valid tax invoices.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                4. Intellectual Property Rights
              </h2>
              <p>
                All proprietary software, algorithms, trademarks, visual assets,
                and documentation hosted on advyu.com remain the sole intellectual
                property of ADVYU Solutions. Clients retain complete ownership of
                their customer data, uploaded logos, and business content stored
                within their account workspace.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                5. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permissible under Indian law, ADVYU Solutions,
                its proprietors, directors, and affiliates shall not be liable for
                any indirect, incidental, punitive, or consequential damages,
                including loss of profits, data corruption, or business interruption
                arising from the use or inability to use our services.
              </p>
              <p>
                Our aggregate liability for any claim arising out of these Terms
                shall be limited strictly to the total amount paid by you to ADVYU
                Solutions in the three (3) months preceding the cause of action.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                6. Governing Law & Jurisdiction
              </h2>
              <p>
                These Terms and Conditions shall be governed by, construed, and
                enforced in accordance with the laws of the Republic of India.
              </p>
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm font-semibold text-foreground">
                Any dispute, controversy, or claim arising out of or relating to
                these Terms shall be subject to the exclusive jurisdiction of the
                competent courts located in Hyderabad, Telangana, India.
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                7. Termination of Account
              </h2>
              <p>
                We reserve the right to suspend or terminate your account access
                immediately, without liability, if you violate any provision of
                these Terms, engage in unsolicited spam broadcasting, or fail to
                settle outstanding invoices upon notice.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                8. Contact & Legal Notices
              </h2>
              <p>
                For any formal legal notifications or questions regarding these
                Terms, please reach out to our legal department:
              </p>
              <div className="mt-4 rounded-xl border border-border bg-card p-6">
                <p className="font-bold text-foreground">
                  ADVYU Solutions - Legal Department
                </p>
                <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>
                      Plot No. 4/2, Sector 1, HUDA Techno Enclave, HITEC City, Madhapur, Hyderabad, Telangana 500081, India
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <a
                      href="mailto:support@advyu.com"
                      className="font-medium text-primary hover:underline"
                    >
                      support@advyu.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <a
                      href="tel:+919550154269"
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      +91 95501 54269
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
