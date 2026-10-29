import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin, Lock } from "lucide-react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Privacy Policy | ADVYU Solutions"
        description="Learn how ADVYU Solutions collects, uses, and secures your personal and business data in compliance with the Indian IT Act and DPDP Act."
        canonical="/privacy-policy"
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
              <ShieldCheck className="h-3.5 w-3.5" />
              Statutory Privacy & Data Protection
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Last updated: October 29, 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10 pt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <section className="space-y-3">
              <p>
                At ADVYU Solutions ("ADVYU", "we", "our", or "us"), accessible
                from advyu.com, respecting and safeguarding the personal and
                business information of our visitors, clients, and merchants is
                paramount.
              </p>
              <p>
                This Privacy Policy outlines our data collection, handling, and
                security protocols in strict compliance with the{" "}
                <strong className="text-foreground">
                  Information Technology Act, 2000
                </strong>
                , the{" "}
                <strong className="text-foreground">
                  Information Technology (Reasonable Security Practices and
                  Procedures and Sensitive Personal Data or Information) Rules,
                  2011
                </strong>
                , and the{" "}
                <strong className="text-foreground">
                  Digital Personal Data Protection Act, 2023 (DPDP Act)
                </strong>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                1. Information We Collect
              </h2>
              <p>
                We only collect data necessary to provide and manage our CRM,
                marketing automation, and messaging services:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-foreground">Customer Contact Data:</strong>{" "}
                  Full name, company name, corporate email address, contact phone
                  number, and physical billing address provided when submitting forms
                  or registering an account.
                </li>
                <li>
                  <strong className="text-foreground">Payment & Billing Records:</strong>{" "}
                  GST number (where applicable), transaction identifiers, billing
                  invoices, and order history. Note: Card details, CVV, and net banking
                  passwords are never stored on our servers; they are processed
                  directly through RBI-authorized payment aggregators.
                </li>
                <li>
                  <strong className="text-foreground">Communication & Workflow Logs:</strong>{" "}
                  Lead responses, message delivery receipts, and chatbot configuration
                  data processed through the WhatsApp Business Cloud API.
                </li>
                <li>
                  <strong className="text-foreground">Technical Log Data:</strong>{" "}
                  IP addresses, browser type, device information, timestamp of
                  access, and session activity collected for security auditing and
                  preventing DDoS or fraudulent activities.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                2. Purpose of Data Processing
              </h2>
              <p>
                We utilize client information solely for legitimate commercial
                functions, including:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Configuring, delivering, and maintaining your cloud workspace and
                  automation integrations.
                </li>
                <li>
                  Processing subscription billing, tax invoicing, and issuing
                  refunds through certified payment gateways.
                </li>
                <li>
                  Providing dedicated customer support and addressing technical
                  inquiries.
                </li>
                <li>
                  Verifying account authenticity and preventing unauthorized access
                  or spam misuse.
                </li>
              </ul>
              <p className="font-semibold text-foreground">
                ADVYU Solutions does not sell, barter, or distribute your personal
                or customer information to third-party data brokers or advertisers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                3. Third-Party Data Sharing & Payment Gateways
              </h2>
              <p>
                To provide secure payment processing and messaging services, we
                collaborate with trusted, industry-certified partners:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-foreground">Payment Gateway Aggregators:</strong>{" "}
                  We integrate with licensed payment aggregators (such as PhonePe)
                  operating under Reserve Bank of India (RBI) guidelines. All financial
                  exchanges are conducted over encrypted PCI-DSS compliant channels.
                </li>
                <li>
                  <strong className="text-foreground">Communication Infrastructure:</strong>{" "}
                  WhatsApp Business Cloud API services provided through Meta for
                  automated notifications and customer communications.
                </li>
                <li>
                  <strong className="text-foreground">Cloud Hosting:</strong> High-security
                  cloud hosting facilities with physical access controls, continuous
                  monitoring, and firewall protection.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                4. Data Security and Encryption
              </h2>
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-foreground">
                      256-Bit SSL/TLS Security Standards
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed sm:text-sm">
                      All data exchanged between your web browser and our platform is
                      encrypted using current TLS 1.3 protocols. Stored data is
                      protected with industry-standard 256-bit AES encryption at rest,
                      and access permissions are restricted strictly to authorized
                      engineering and support personnel.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                5. User Rights Under the DPDP Act
              </h2>
              <p>
                In alignment with the Digital Personal Data Protection Act, 2023,
                you retain full rights to:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Request access to the personal data we hold about you.</li>
                <li>Request correction or updating of inaccurate personal records.</li>
                <li>
                  Request erasure of personal information upon closure of your
                  account, subject to statutory tax and financial retention laws.
                </li>
                <li>Nominate a representative or withdraw consent at any time.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                6. Grievance Officer & Official Contact Details
              </h2>
              <p>
                In accordance with the Information Technology Act, 2000, and the
                rules framed thereunder, the details of our Grievance Officer are
                provided below:
              </p>
              <div className="mt-4 rounded-xl border border-border bg-card p-6">
                <p className="text-base font-bold text-foreground">
                  ADVYU Solutions - Grievance & Compliance Desk
                </p>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
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

export default PrivacyPolicy;
