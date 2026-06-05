"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, MapPin, Search, Users } from "lucide-react";
import { destinations } from "@/data/destinations";
import { tours } from "@/data/tours";

const tourTypes = [
  { value: "all", label: "Any style" },
  { value: "cultural", label: "Cultural" },
  { value: "adventure", label: "Adventure" },
  { value: "beach", label: "Beach" },
  { value: "wildlife", label: "Wildlife" },
  { value: "wellness", label: "Wellness" },
];

export function SearchSection() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState(2);
  const [tourType, setTourType] = useState("all");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (date) params.set("date", date);
    if (travelers) params.set("travelers", String(travelers));
    if (tourType && tourType !== "all") params.set("category", tourType);
    router.push(`/tours${params.toString() ? `?${params.toString()}` : ""}`);
  }

  return (
    <section
      id="search"
      className="relative -mt-16 z-20 px-4 sm:-mt-20 md:-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="container-luxe"
      >
        <form
          onSubmit={onSubmit}
          className="glass rounded-3xl p-4 shadow-2xl shadow-ocean-900/10 sm:p-6"
        >
          <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-2">
            <Field
              icon={<MapPin className="h-5 w-5" />}
              label="Destination"
              className="md:col-span-4"
            >
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full appearance-none bg-transparent text-base font-medium text-ink-900 outline-none"
              >
                <option value="">Where to?</option>
                {destinations.map((d) => (
                  <option key={d.slug} value={d.slug}>
                    {d.name}, {d.region}
                  </option>
                ))}
              </select>
            </Field>

            <Field
              icon={<Calendar className="h-5 w-5" />}
              label="Travel date"
              className="md:col-span-3"
            >
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent text-base font-medium text-ink-900 outline-none"
              />
            </Field>

            <Field
              icon={<Users className="h-5 w-5" />}
              label="Travelers"
              className="md:col-span-2"
            >
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setTravelers((n) => Math.max(1, n - 1))}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-ink-900/5 text-ink-700 transition hover:bg-ink-900/10"
                  aria-label="Decrease travelers"
                >
                  −
                </button>
                <span className="min-w-6 text-center text-base font-semibold text-ink-900">
                  {travelers}
                </span>
                <button
                  type="button"
                  onClick={() => setTravelers((n) => Math.min(12, n + 1))}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-ink-900/5 text-ink-700 transition hover:bg-ink-900/10"
                  aria-label="Increase travelers"
                >
                  +
                </button>
              </div>
            </Field>

            <Field
              icon={<Search className="h-5 w-5" />}
              label="Tour type"
              className="md:col-span-2"
              hideIconOnMobile
            >
              <select
                value={tourType}
                onChange={(e) => setTourType(e.target.value)}
                className="w-full appearance-none bg-transparent text-base font-medium text-ink-900 outline-none"
              >
                {tourTypes.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </Field>

            <div className="md:col-span-1">
              <button
                type="submit"
                aria-label="Search tours"
                className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-ocean-500 px-4 text-sm font-semibold text-white shadow-lg shadow-ocean-500/30 transition-all hover:-translate-y-0.5 hover:bg-ocean-600 hover:shadow-xl hover:shadow-ocean-600/30"
              >
                <Search className="h-4 w-4" />
                <span className="hidden md:inline">Search</span>
              </button>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-ink-500 sm:text-left">
            {tours.length} curated tours across {destinations.length} destinations · free consultation
          </p>
        </form>
      </motion.div>
    </section>
  );
}

function Field({
  icon,
  label,
  children,
  className,
  hideIconOnMobile,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  className?: string;
  hideIconOnMobile?: boolean;
}) {
  return (
    <div
      className={`group flex items-center gap-3 rounded-2xl border border-ink-900/5 bg-white/60 px-4 py-3 transition-colors hover:border-ocean-500/30 ${className ?? ""}`}
    >
      <span
        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ocean-500/10 text-ocean-600 ${
          hideIconOnMobile ? "hidden sm:flex" : ""
        }`}
      >
        {icon}
      </span>
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-500">
          {label}
        </span>
        <div className="mt-0.5 truncate">{children}</div>
      </div>
    </div>
  );
}
