"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarCheck, CircleCheck, Send } from "lucide-react";
import { useSyncExternalStore, useState } from "react";
import { services } from "@/lib/services";
import { brand } from "@/lib/site";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  description: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  description: "",
};

const budgets = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
];

const inputBase =
  "w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 text-sm text-ink placeholder:text-ink-faint transition-colors duration-200 focus:border-accent/70 focus:bg-white/[0.05] focus:outline-none";

function usePreferredService() {
  return useSyncExternalStore(
    () => () => {},
    () => {
      try {
        return sessionStorage.getItem("preferred-service") ?? "";
      } catch {
        return "";
      }
    },
    () => ""
  );
}

export default function ConsultationForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const service = usePreferredService() || form.service;
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) {
      setErrors((e) => ({ ...e, [field]: undefined }));
    }
    if (field === "service") {
      try {
        sessionStorage.removeItem("preferred-service");
      } catch {
        /* storage unavailable */
      }
    }
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!form.email.trim()) next.email = "We need your work email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "That email doesn't look right.";
    if (!service) next.service = "Select the service you need.";
    return next;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const body = [
      `Full Name: ${form.name}`,
      `Work Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Company: ${form.company}`,
      `Service Required: ${service}`,
      `Budget Range: ${form.budget}`,
      `Project Description: ${form.description}`,
    ].join("\n");

    const subject = encodeURIComponent(
      `Project Inquiry — ${service} | ${form.name}`
    );
    const mail = `mailto:${brand.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
    window.location.href = mail;
    try {
      sessionStorage.removeItem("preferred-service");
    } catch {
      /* storage unavailable */
    }
    setSubmitted(true);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/80 p-6 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-7">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/[0.12] blur-3xl"
      />

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-[440px] flex-col items-center justify-center gap-5 text-center"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full border border-accent/30 bg-accent/10">
              <CircleCheck className="h-8 w-8 text-accent-bright" />
            </span>
            <h3 className="font-display text-xl font-semibold text-ink">
              Inquiry sent — thank you!
            </h3>
            <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
              Your email app should open with the details pre-filled. Our team
              will get back to you within{" "}
              <span className="text-ink">one business day</span>.
            </p>
            <a
              href={brand.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-accent-bright transition-colors hover:text-accent"
            >
              <CalendarCheck className="h-4 w-4" />
              Or book a call directly
            </a>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                  Start your project
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                  Free consultation · Proposal & timeline within one business day
                </p>
              </div>
              <span className="hidden rounded-full border border-accent/25 bg-accent/[0.08] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-bright sm:inline-flex">
                Free
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Field
                label="Full Name"
                htmlFor="cf-name"
                error={errors.name}
              >
                <input
                  id="cf-name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  aria-required="true"
                  aria-invalid={Boolean(errors.name)}
                  placeholder="Jane Cooper"
                  className={`${inputBase} h-10 ${errors.name ? "border-red-400/60" : ""}`}
                />
              </Field>
              <Field
                label="Work Email"
                htmlFor="cf-email"
                error={errors.email}
              >
                <input
                  id="cf-email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  aria-required="true"
                  aria-invalid={Boolean(errors.email)}
                  placeholder="jane@company.com"
                  className={`${inputBase} h-10 ${errors.email ? "border-red-400/60" : ""}`}
                />
              </Field>
              <Field label="Phone Number" htmlFor="cf-phone">
                <input
                  id="cf-phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+91 98765 43210"
                  className={`${inputBase} h-10`}
                />
              </Field>
              <Field label="Company / Business" htmlFor="cf-company">
                <input
                  id="cf-company"
                  type="text"
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  placeholder="Acme Inc."
                  className={`${inputBase} h-10`}
                />
              </Field>
              <Field
                label="Service Required"
                htmlFor="cf-service"
                error={errors.service}
              >
                <select
                  id="cf-service"
                  value={service}
                  onChange={(e) => update("service", e.target.value)}
                  aria-required="true"
                  aria-invalid={Boolean(errors.service)}
                  className={`${inputBase} h-10 appearance-none ${service ? "text-ink" : "text-ink-faint"} ${errors.service ? "border-red-400/60" : ""}`}
                >
                  <option value="" disabled className="bg-surface">
                    Select a service…
                  </option>
                  {services.map((s) => (
                    <option
                      key={s.id}
                      value={s.title}
                      className="bg-surface text-ink"
                    >
                      {s.title}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Budget Range" htmlFor="cf-budget">
                <select
                  id="cf-budget"
                  value={form.budget}
                  onChange={(e) => update("budget", e.target.value)}
                  className={`${inputBase} h-10 appearance-none ${form.budget ? "text-ink" : "text-ink-faint"}`}
                >
                  <option value="" disabled className="bg-surface">
                    Select a budget…
                  </option>
                  {budgets.map((b) => (
                    <option key={b} value={b} className="bg-surface text-ink">
                      {b}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field
              label="Project Description"
              htmlFor="cf-description"
              hint="Optional — a few lines about what you want to build."
            >
              <textarea
                id="cf-description"
                rows={3}
                value={form.description}
                onChange={(e) => update("description", e.target.value)}
                placeholder="e.g. We're an e-commerce brand looking to launch a Shopify store with marketplace integration and SEO…"
                className={`${inputBase} resize-none py-2.5`}
              />
            </Field>

            <button
              type="submit"
              className="group relative mt-1 inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-accent text-sm font-semibold text-white shadow-[0_10px_32px_-10px_rgba(91,124,250,0.8)] transition-all duration-300 hover:bg-accent-bright hover:shadow-[0_14px_40px_-10px_rgba(91,124,250,1)] active:translate-y-px"
            >
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              Submit Inquiry
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <p className="text-center text-[11px] leading-relaxed text-ink-faint">
              Prefer email?{" "}
              <a
                href={`mailto:${brand.email}`}
                className="text-ink-muted underline-offset-2 hover:text-ink hover:underline"
              >
                {brand.email}
              </a>
              {" · "}
              <a
                href={brand.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted underline-offset-2 hover:text-ink hover:underline"
              >
                Book a call
              </a>
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="text-xs font-medium text-ink-muted"
      >
        {label}
        {!error && hint && (
          <span className="ml-1.5 font-normal text-ink-faint">
            — {hint}
          </span>
        )}
      </label>
      {children}
      {error && (
        <motion.span
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
          className="text-[11px] text-red-400"
        >
          {error}
        </motion.span>
      )}
    </div>
  );
}
