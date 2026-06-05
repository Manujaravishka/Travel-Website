"use client";

import { useMemo, useState, useTransition } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Check, ChevronRight, MessageCircle, Users } from "lucide-react";
import { tours, getTour } from "@/data/tours";
import { destinations } from "@/data/destinations";
import { submitBookingEnquiry } from "@/services/actions";
import { fadeUp } from "@/lib/animations";
import { formatPrice } from "@/lib/utils";
import type { BookingFormState } from "@/types";

const accommodations = [
  { value: "luxury", label: "Luxury 5★" },
  { value: "boutique", label: "Boutique 4★" },
  { value: "standard", label: "Standard 3★" },
] as const;

const addOnOptions = [
  "Private airport transfers",
  "Ayurvedic spa days",
  "Surf lessons",
  "Cooking class",
  "Helicopter tour",
  "Hot air balloon",
];

type Props = {
  initialTour?: string;
  initialDestination?: string;
};

const today = new Date().toISOString().slice(0, 10);

export function BookingForm({ initialTour, initialDestination }: Props) {
  const [pending, startTransition] = useTransition();
  const [state, setState] = useState<BookingFormState>({
    tourId: initialTour ?? "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    arrivalDate: "",
    departureDate: "",
    adults: 2,
    children: 0,
    accommodation: "luxury",
    addOns: [],
    specialRequests: "",
  });
  const [result, setResult] = useState<{
    ok: boolean;
    message: string;
    whatsappUrl?: string;
  } | null>(null);

  const tour = useMemo(
    () => (state.tourId ? getTour(state.tourId) : undefined),
    [state.tourId]
  );
  const destination = useMemo(
    () => (initialDestination ? destinations.find((d) => d.slug === initialDestination) : undefined),
    [initialDestination]
  );

  const estimated = useMemo(() => {
    if (!tour) return null;
    const days = tour.days;
    const base = tour.price * state.adults;
    const surcharge = state.accommodation === "luxury" ? 0 : state.accommodation === "boutique" ? -0.1 : -0.2;
    return {
      base: Math.max(0, base * (1 + surcharge)),
      perPerson: tour.price,
      days,
    };
  }, [tour, state.adults, state.accommodation]);

  function setField<K extends keyof BookingFormState>(key: K, value: BookingFormState[K]) {
    setState((s) => ({ ...s, [key]: value }));
  }

  function toggleAddOn(addOn: string) {
    setState((s) => ({
      ...s,
      addOns: s.addOns.includes(addOn)
        ? s.addOns.filter((a) => a !== addOn)
        : [...s.addOns, addOn],
    }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    startTransition(async () => {
      const res = await submitBookingEnquiry(state, tour?.title);
      setResult(res);
    });
  }

  if (result?.ok && result.whatsappUrl) {
    return (
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="overflow-hidden rounded-3xl border border-ink-900/5 bg-white shadow-xl"
      >
        <div className="flex flex-col items-center p-10 text-center sm:p-14">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
            <Check className="h-7 w-7" />
          </div>
          <h3 className="mt-6 font-serif text-2xl font-semibold text-ink-900 sm:text-3xl">
            Your enquiry is ready, {state.firstName}.
          </h3>
          <p className="mt-2 max-w-md text-ink-500">{result.message}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={result.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-emerald-500 px-6 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Send via WhatsApp
            </a>
          </div>
          <p className="mt-6 max-w-md text-xs text-ink-500">
            A travel director will follow up within 24 hours to confirm details
            and pricing. We will never share your information.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-8 lg:grid-cols-12"
    >
      <div className="space-y-6 lg:col-span-7">
        <Card title="1 · Your details">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="First name" required>
              <input
                type="text"
                required
                value={state.firstName}
                onChange={(e) => setField("firstName", e.target.value)}
                placeholder="Isabella"
                className="form-input"
              />
            </Field>
            <Field label="Last name" required>
              <input
                type="text"
                required
                value={state.lastName}
                onChange={(e) => setField("lastName", e.target.value)}
                placeholder="Moreau"
                className="form-input"
              />
            </Field>
            <Field label="Email" required>
              <input
                type="email"
                required
                value={state.email}
                onChange={(e) => setField("email", e.target.value)}
                placeholder="you@example.com"
                className="form-input"
              />
            </Field>
            <Field label="Phone">
              <input
                type="tel"
                value={state.phone}
                onChange={(e) => setField("phone", e.target.value)}
                placeholder="+33 6 12 34 56 78"
                className="form-input"
              />
            </Field>
            <Field label="Country of residence" className="sm:col-span-2">
              <input
                type="text"
                value={state.country}
                onChange={(e) => setField("country", e.target.value)}
                placeholder="France"
                className="form-input"
              />
            </Field>
          </div>
        </Card>

        <Card title="2 · Your trip">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Tour (optional)" className="sm:col-span-2">
              <select
                value={state.tourId}
                onChange={(e) => setField("tourId", e.target.value)}
                className="form-input"
              >
                <option value="">— Bespoke itinerary, no fixed tour —</option>
                {tours.map((t) => (
                  <option key={t.id} value={t.slug}>
                    {t.title} · {t.duration} · from {formatPrice(t.price)}
                  </option>
                ))}
              </select>
              {destination && !state.tourId && (
                <p className="mt-2 text-xs text-ocean-600">
                  Planning around {destination.name}? We will tailor an itinerary to your dates.
                </p>
              )}
            </Field>
            <Field label="Arrival date">
              <div className="relative">
                <Calendar className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                <input
                  type="date"
                  min={today}
                  value={state.arrivalDate}
                  onChange={(e) => setField("arrivalDate", e.target.value)}
                  className="form-input pl-11"
                />
              </div>
            </Field>
            <Field label="Departure date">
              <div className="relative">
                <Calendar className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                <input
                  type="date"
                  min={state.arrivalDate || today}
                  value={state.departureDate}
                  onChange={(e) => setField("departureDate", e.target.value)}
                  className="form-input pl-11"
                />
              </div>
            </Field>
            <Field label="Adults">
              <Counter
                value={state.adults}
                onChange={(v) => setField("adults", Math.max(1, v))}
                min={1}
                max={20}
              />
            </Field>
            <Field label="Children">
              <Counter
                value={state.children}
                onChange={(v) => setField("children", Math.max(0, v))}
                min={0}
                max={20}
              />
            </Field>
            <Field label="Accommodation" className="sm:col-span-2">
              <div className="grid grid-cols-3 gap-2">
                {accommodations.map((a) => (
                  <button
                    type="button"
                    key={a.value}
                    onClick={() => setField("accommodation", a.value)}
                    className={`rounded-2xl border px-3 py-3 text-sm font-medium transition ${
                      state.accommodation === a.value
                        ? "border-ocean-500 bg-ocean-500/5 text-ocean-700"
                        : "border-ink-900/10 bg-white text-ink-700 hover:border-ocean-500/30"
                    }`}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </Field>
            <Field label="Add-ons" className="sm:col-span-2">
              <div className="flex flex-wrap gap-2">
                {addOnOptions.map((a) => {
                  const on = state.addOns.includes(a);
                  return (
                    <button
                      type="button"
                      key={a}
                      onClick={() => toggleAddOn(a)}
                      className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                        on
                          ? "border-ocean-500 bg-ocean-500 text-white"
                          : "border-ink-900/10 bg-white text-ink-700 hover:border-ocean-500/30"
                      }`}
                    >
                      {a}
                    </button>
                  );
                })}
              </div>
            </Field>
            <Field label="Special requests" className="sm:col-span-2">
              <textarea
                rows={4}
                value={state.specialRequests}
                onChange={(e) => setField("specialRequests", e.target.value)}
                placeholder="Honeymoon, dietary requirements, accessibility needs, bucket-list experiences…"
                className="form-input resize-none"
              />
            </Field>
          </div>
        </Card>

        {result && !result.ok && (
          <p className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {result.message}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-ocean-500 px-6 text-sm font-semibold text-white shadow-lg shadow-ocean-500/25 transition hover:-translate-y-0.5 hover:bg-ocean-600 disabled:opacity-50 sm:w-auto"
        >
          {pending ? "Preparing your enquiry…" : "Send enquiry"}
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <aside className="lg:col-span-5">
        <div className="sticky top-28 overflow-hidden rounded-3xl border border-ink-900/5 bg-white shadow-xl">
          {tour ? (
            <div className="relative aspect-[4/3]">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="aspect-[4/3] bg-gradient-to-br from-ocean-500 to-emerald-500" />
          )}
          <div className="p-7">
            <h3 className="font-serif text-2xl font-semibold text-ink-900">
              {tour ? tour.title : "Bespoke itinerary"}
            </h3>
            {tour && (
              <p className="mt-1 text-sm text-ink-500">
                {tour.duration} · {tour.location}
              </p>
            )}
            {!tour && (
              <p className="mt-1 text-sm text-ink-500">
                Tailored to your dates, tastes, and travel style.
              </p>
            )}

            <div className="mt-6 space-y-3 border-t border-ink-900/5 pt-5 text-sm">
              <Row label="Travelers" value={`${state.adults} adults${state.children ? `, ${state.children} children` : ""}`} />
              <Row label="Stay" value={accommodations.find((a) => a.value === state.accommodation)?.label ?? "Luxury 5★"} />
              {tour && <Row label="From / person" value={formatPrice(tour.price)} />}
              {state.addOns.length > 0 && (
                <Row label="Add-ons" value={`${state.addOns.length} selected`} />
              )}
            </div>

            {estimated && (
              <div className="mt-6 rounded-2xl bg-beige-100 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-ink-500">
                  Indicative total
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-serif text-2xl font-semibold text-ink-900">
                    {formatPrice(estimated.base)}
                  </span>
                  <span className="text-xs text-ink-500">
                    · final price confirmed in your proposal
                  </span>
                </div>
              </div>
            )}

            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-sm text-emerald-700">
              <Users className="h-4 w-4 flex-shrink-0" />
              <span>No payment now — your card is only charged after you confirm the proposal.</span>
            </div>
          </div>
        </div>
      </aside>

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

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-ink-900/5 bg-white p-7 shadow-sm sm:p-8">
      <h3 className="font-serif text-lg font-semibold text-ink-900">{title}</h3>
      <div className="mt-5">{children}</div>
    </div>
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

function Counter({
  value,
  onChange,
  min,
  max,
}: {
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
}) {
  return (
    <div className="flex h-12 items-center gap-3 rounded-2xl border border-ink-900/10 bg-white px-4">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-ink-900/5 text-ink-700 transition hover:bg-ink-900/10"
        aria-label="Decrease"
      >
        −
      </button>
      <span className="min-w-6 text-center text-base font-semibold text-ink-900">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-ink-900/5 text-ink-700 transition hover:bg-ink-900/10"
        aria-label="Increase"
      >
        +
      </button>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-ink-500">{label}</span>
      <span className="font-medium text-ink-900">{value}</span>
    </div>
  );
}
