"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Send, Check, MessageCircle } from "lucide-react";
import { submitContactEnquiry } from "@/services/actions";
import { fadeUp } from "@/lib/animations";

const subjects = [
  "General enquiry",
  "Bespoke itinerary",
  "Group booking",
  "Partnership",
  "Other",
];

export function ContactForm() {
  const [pending, startTransition] = useTransition();
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: subjects[0],
    message: "",
  });
  const [result, setResult] = useState<{
    ok: boolean;
    message: string;
    whatsappUrl?: string;
  } | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    startTransition(async () => {
      const res = await submitContactEnquiry(state);
      setResult(res);
    });
  }

  if (result?.ok && result.whatsappUrl) {
    return (
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="rounded-3xl border border-ink-900/5 bg-white p-10 text-center shadow-xl"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
          <Check className="h-7 w-7" />
        </div>
        <h3 className="mt-6 font-serif text-2xl font-semibold text-ink-900">
          Thank you, {state.name.split(" ")[0]}.
        </h3>
        <p className="mt-2 text-ink-500">{result.message}</p>
        <a
          href={result.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-emerald-500 px-6 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:bg-emerald-600"
        >
          <MessageCircle className="h-4 w-4" />
          Send via WhatsApp
        </a>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-ink-900/5 bg-white p-7 shadow-xl sm:p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Your name" required>
          <input
            type="text"
            required
            value={state.name}
            onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
            placeholder="Isabella Moreau"
            className="form-input"
          />
        </Field>
        <Field label="Email" required>
          <input
            type="email"
            required
            value={state.email}
            onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
            placeholder="you@example.com"
            className="form-input"
          />
        </Field>
        <Field label="Subject" className="sm:col-span-2">
          <select
            value={state.subject}
            onChange={(e) => setState((s) => ({ ...s, subject: e.target.value }))}
            className="form-input"
          >
            {subjects.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
        <Field label="Message" required className="sm:col-span-2">
          <textarea
            required
            rows={5}
            value={state.message}
            onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
            placeholder="Tell us a little about your trip…"
            className="form-input resize-none"
          />
        </Field>
      </div>

      {result && !result.ok && (
        <p className="mt-4 text-sm text-red-600">{result.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ocean-500 px-6 text-sm font-semibold text-white shadow-lg shadow-ocean-500/25 transition hover:-translate-y-0.5 hover:bg-ocean-600 disabled:opacity-50 sm:w-auto"
      >
        {pending ? "Sending…" : "Send message"}
        <Send className="h-4 w-4" />
      </button>

      <style>{`
        .form-input {
          width: 100%;
          background: transparent;
          padding: 0.875rem 1rem;
          font-size: 0.95rem;
          color: var(--ink-900);
          border-radius: 1rem;
          border: 1px solid rgba(11,15,23,0.08);
          outline: none;
          transition: border-color 0.2s;
        }
        .form-input:focus { border-color: var(--ocean-500); }
      `}</style>
    </form>
  );
}

function Field({
  label,
  required,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
        {label}
        {required && <span className="ml-1 text-sunset-400">*</span>}
      </span>
      {children}
    </label>
  );
}
