"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { Container } from "./Container";
import { TourCard } from "./TourCard";
import { tours } from "@/data/tours";
import { destinations } from "@/data/destinations";
import { staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

const categories = [
  { value: "all", label: "All" },
  { value: "cultural", label: "Cultural" },
  { value: "adventure", label: "Adventure" },
  { value: "beach", label: "Beach" },
  { value: "wildlife", label: "Wildlife" },
  { value: "wellness", label: "Wellness" },
];

type Filters = {
  q: string;
  category: string;
  destination: string;
  maxPrice: number;
};

export function ToursExplorer({ initialCategory }: { initialCategory?: string }) {
  const [filters, setFilters] = useState<Filters>({
    q: "",
    category: initialCategory ?? "all",
    destination: "all",
    maxPrice: 3000,
  });

  const filtered = useMemo(() => {
    return tours.filter((t) => {
      if (filters.category !== "all" && t.category !== filters.category) return false;
      if (filters.destination !== "all" && t.destination !== filters.destination)
        return false;
      if (t.price > filters.maxPrice) return false;
      if (filters.q) {
        const q = filters.q.toLowerCase();
        const haystack = `${t.title} ${t.location} ${t.highlights.join(" ")}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <>
      <div className="sticky top-16 z-30 -mx-4 mb-8 border-b border-ink-900/5 bg-beige-50/90 px-4 py-4 backdrop-blur md:top-20">
        <Container>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                <input
                  type="text"
                  placeholder="Search tours, places, experiences…"
                  value={filters.q}
                  onChange={(e) => setFilters((f) => ({ ...f, q: e.target.value }))}
                  className="h-12 w-full rounded-full border border-ink-900/10 bg-white pl-11 pr-4 text-sm text-ink-900 outline-none transition focus:border-ocean-500"
                />
              </div>
              <select
                value={filters.destination}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, destination: e.target.value }))
                }
                className="h-12 rounded-full border border-ink-900/10 bg-white px-5 text-sm font-medium text-ink-900 outline-none transition focus:border-ocean-500"
              >
                <option value="all">All destinations</option>
                {destinations.map((d) => (
                  <option key={d.slug} value={d.slug}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((c) => (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => setFilters((f) => ({ ...f, category: c.value }))}
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-all",
                    filters.category === c.value
                      ? "border-ocean-500 bg-ocean-500 text-white"
                      : "border-ink-900/10 bg-white text-ink-700 hover:border-ocean-500/30"
                  )}
                >
                  {c.label}
                </button>
              ))}
              <div className="ml-auto flex items-center gap-3 rounded-full border border-ink-900/10 bg-white px-4 py-2 text-xs text-ink-500">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                <span>Up to</span>
                <span className="font-semibold text-ink-900">
                  ${filters.maxPrice.toLocaleString()}
                </span>
                <input
                  type="range"
                  min={500}
                  max={3000}
                  step={100}
                  value={filters.maxPrice}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, maxPrice: Number(e.target.value) }))
                  }
                  className="accent-ocean-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-ink-900/15 bg-white p-12 text-center">
            <h3 className="font-serif text-xl text-ink-900">No tours match your filters yet.</h3>
            <p className="mt-2 text-sm text-ink-500">
              Try widening the budget or clearing the search — or message us for a custom itinerary.
            </p>
          </div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((t, i) => (
              <TourCard key={t.id} tour={t} index={i} />
            ))}
          </motion.div>
        )}
      </Container>
    </>
  );
}
