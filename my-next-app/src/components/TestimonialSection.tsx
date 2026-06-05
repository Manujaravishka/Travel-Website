"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { SectionHeader } from "./SectionHeader";
import { Container } from "./Container";

export function TestimonialSection() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="relative overflow-hidden bg-beige-100 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-ocean-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-sunset-400/15 blur-3xl"
      />

      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Words from our travellers"
            title="Journeys that stay with you, long after the sand has left your shoes."
            description="Real reviews from real travellers. Every journey is custom — and every story is one of a kind."
            align="left"
            className="max-w-2xl"
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
              disabled={totalPages <= 1}
              aria-label="Previous testimonials"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink-900/10 bg-white text-ink-900 transition hover:bg-ink-900 hover:text-white disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setPage((p) => (p + 1) % totalPages)}
              disabled={totalPages <= 1}
              aria-label="Next testimonials"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink-900/10 bg-white text-ink-900 transition hover:bg-ink-900 hover:text-white disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 8 }}
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {visible.map((t) => (
              <motion.figure
                key={t.id}
                variants={fadeUp}
                className="group relative flex h-full flex-col rounded-3xl border border-ink-900/5 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ocean-900/10"
              >
                <Quote className="absolute right-6 top-6 h-10 w-10 text-ocean-500/15" />
                <div className="flex items-center gap-1 text-sunset-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-serif text-lg leading-7 text-ink-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-ink-900/5 pt-5">
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-white">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-ink-900">{t.name}</div>
                    <div className="text-xs text-ink-500">
                      {t.location} · {t.tour}
                    </div>
                  </div>
                </div>
              </motion.figure>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === page ? "w-8 bg-ocean-500" : "w-2 bg-ink-900/20"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
