import React, { useState } from "react";
import { Mail, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

type StandardTrackingFieldKey = string;
type RegisteredCustomFieldId = string;
type TrackingCustomField = { value?: unknown; label: string };
type TrackingFileField = { file?: File; label: string };
type TrackingImageDataField = { dataUrl?: string; label: string };

const postTrackingEvent = (
  trackingPayload: Record<string, unknown> & {
    formData: Record<StandardTrackingFieldKey, unknown>;
    formLabels: Record<StandardTrackingFieldKey, string>;
  },
  options: {
    customFields?: Record<RegisteredCustomFieldId, TrackingCustomField>;
    fileFields?: Record<RegisteredCustomFieldId, TrackingFileField>;
    imageDataFields?: Record<RegisteredCustomFieldId, TrackingImageDataField>;
  } = {},
) => {
  const { customFields = {}, fileFields = {}, imageDataFields = {} } = options;
  const eventPayload = {
    ...trackingPayload,
    formData: { ...trackingPayload.formData },
    formLabels: { ...trackingPayload.formLabels },
  };
  const body = new FormData();

  for (const [key, field] of Object.entries(customFields)) {
    if (field.value === undefined) continue;
    eventPayload.formData[key] = field.value;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(imageDataFields)) {
    const dataUrl = field.dataUrl;
    if (!dataUrl) continue;
    if (!dataUrl.startsWith("data:image/")) {
      throw new Error("Image data field must be a data:image/* base64 string");
    }
    eventPayload.formData[key] = dataUrl;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(fileFields)) {
    const file = field.file;
    if (!file) continue;
    if (file.size > 50 * 1024 * 1024) {
      throw new Error("File must be 50 MB or smaller");
    }
    eventPayload.formData[key] = {
      filename: file.name,
      size: file.size,
      type: file.type || "application/octet-stream",
    };
    eventPayload.formLabels[key] = field.label;
    body.append(key, file, file.name);
  }

  for (const key of Object.keys(eventPayload.formData)) {
    eventPayload.formLabels[key] ||= key;
  }

  body.append("event", JSON.stringify(eventPayload));

  fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
    method: "POST",
    headers: { version: "2021-07-28" },
    body,
  }).catch(() => {});
};

const PROFESSIONS = [
  "Working Professional",
  "Business Owner",
  "Freelancer",
  "Coach",
  "Healer",
  "Consultant",
  "Others",
];

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    profession: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trackingPayload = {
      type: "external_form_submission",
      timestamp: Date.now(),
      formId: "advyu-strategy-call",
      formData: {
        first_name: form.name,
        email: form.email,
        phone: form.phone,
        city: form.city,
      },
      formLabels: {
        first_name: "Full Name",
        email: "Email",
        phone: "Phone",
        city: "City",
      },
      url: window.location.href,
      title: document.title,
      path: window.location.pathname,
      userAgent: navigator.userAgent,
      trackingId: "tk_64959605cad24cfbaaba2e007e324df9",
      locationId: "gb92slRrcMDkR0vzQPsq",
      projectId: "1788071300877144500",
      sessionId: crypto.randomUUID(),
      properties: {
        deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent)
          ? "mobile"
          : "desktop",
        source: "ai_studio",
        projectId: "1788071300877144500",
        formName: "Advyu Strategy Call",
      },
    };

    postTrackingEvent(trackingPayload, {
      customFields: {
        JJfhv8U6DnQu8HzoA9eM: { value: form.profession, label: "Profession" },
      },
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-card/20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border border-primary/30 bg-primary/5 p-8 lg:p-12 shadow-2xl overflow-hidden relative">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />

          <div className="relative grid gap-10 lg:grid-cols-2">
            {/* Left: Info */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Schedule a Free 1-on-1 Strategy Call
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let us map out your sales funnel, show you a live demo of the
                WhatsApp broadcast panel, and calculate how many monthly hours
                you can save.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">Email Us</p>
                    <a
                      href="mailto:support@advyu.com"
                      className="text-sm font-semibold hover:text-primary"
                    >
                      support@advyu.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Local Support
                    </p>
                    <p className="text-sm font-semibold">
                      Mon - Sat, 10 AM - 7 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-card/60 p-10 text-center">
                  <CheckCircle2 className="h-14 w-14 text-primary" />
                  <h3 className="mt-4 text-xl font-bold">Thank You!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Your request has been received. Our team will reach out
                    shortly to schedule your strategy call.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground">
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="mt-1.5 w-full rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground">
                        Phone *
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="mt-1.5 w-full rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground">
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="mt-1.5 w-full rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground">
                        City
                      </label>
                      <input
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        className="mt-1.5 w-full rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Your city"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground">
                        Profession
                      </label>
                      <select
                        name="profession"
                        value={form.profession}
                        onChange={handleChange}
                        className="mt-1.5 w-full rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">Select...</option>
                        {PROFESSIONS.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
                  >
                    Submit
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="text-center text-[10px] text-muted-foreground/70">
                    By submitting you agree to our Privacy Policy & Terms of
                    Service.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
