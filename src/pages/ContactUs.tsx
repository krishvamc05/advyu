import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
} from "lucide-react";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Us | ADVYU Solutions"
        description="Official contact details, registered office address, support telephone, and grievance desk for ADVYU Solutions."
        canonical="/contact-us"
      />
      <Navbar />

      <main className="py-12 sm:py-16">
        <div className="container mx-auto max-w-5xl px-6">
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

          {/* Page Header */}
          <div className="border-b border-border pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <ShieldCheck className="h-3.5 w-3.5" />
              Official Merchant Information
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Contact Us
            </h1>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Get in touch with our customer support and corporate team.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            {/* Left: Entity Details & Address */}
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="text-lg font-bold text-foreground">
                  Registered Business Entity
                </h2>
                <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                      Entity Name (PAN / GST)
                    </span>
                    <p className="mt-1 text-base font-bold text-foreground">
                      ADVYU Solutions
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                      Business Domain
                    </span>
                    <p className="mt-1 font-medium text-foreground">
                      advyu.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Physical Address Card */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="text-lg font-bold text-foreground">
                  Registered Office Address
                </h2>
                <div className="mt-4 flex items-start gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div className="text-sm leading-relaxed text-muted-foreground">
                    <p className="font-semibold text-foreground">
                      ADVYU Solutions Corporate Office
                    </p>
                    <p className="mt-1">
                      Plot No. 4/2, Sector 1, HUDA Techno Enclave,
                    </p>
                    <p>HITEC City, Madhapur, Hyderabad,</p>
                    <p>Telangana 500081, India.</p>
                  </div>
                </div>
              </div>

              {/* Support & Response Channels */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="text-lg font-bold text-foreground">
                  Customer Support Desk
                </h2>
                <div className="mt-4 space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">Official Email</p>
                      <a
                        href="mailto:support@advyu.com"
                        className="font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        support@advyu.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">Customer Support Helpline</p>
                      <a
                        href="tel:+919550154269"
                        className="font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        +91 95501 54269
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">Operational Hours</p>
                      <p className="font-semibold text-foreground">
                        Monday to Saturday: 10:00 AM to 7:00 PM IST
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Response Time: Within 24 business hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <h2 className="text-xl font-bold text-foreground">
                  Send a Direct Message
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out the form below and our team will get back to you promptly.
                </p>

                {submitted ? (
                  <div className="mt-8 flex flex-col items-center justify-center rounded-xl border border-border bg-secondary/30 p-10 text-center">
                    <CheckCircle2 className="h-12 w-12 text-primary" />
                    <h3 className="mt-4 text-lg font-bold text-foreground">
                      Message Received
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Thank you for contacting ADVYU Solutions. A representative will contact you within 24 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Your Query or Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Describe your requirement, workflow setup, or billing inquiry..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient py-3 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5"
                    >
                      <Send className="h-4 w-4" />
                      Submit Inquiry
                    </button>

                    <p className="text-center text-[11px] text-muted-foreground">
                      By submitting this form, you acknowledge our{" "}
                      <a href="/privacy-policy" className="underline hover:text-foreground">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="/terms" className="underline hover:text-foreground">
                        Terms of Service
                      </a>
                      .
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
