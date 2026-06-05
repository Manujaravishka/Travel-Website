"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Expand, X } from "lucide-react";
import { gallery } from "@/data/gallery";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { SectionHeader } from "./SectionHeader";
import { Container } from "./Container";

const categories = [
  "all",
  "beach",
  "culture",
  "wildlife",
  "nature",
] as const;

type Category = (typeof categories)[number];

const spanClass: Record<string, string> = {
  tall: "md:row-span-2 aspect-[3/4]",
  wide: "md:col-span-2 aspect-[16/9]",
  square: "aspect-square",
};

export function GallerySection() {
  const [category, setCategory] = useState<Category>("all");
  const [active, setActive] = useState<number | null>(null);

  const filtered =
    category === "all"
      ? gallery
      : gallery.filter((g) => g.category === category);

  return (
    <section id="gallery" className="bg-beige-50 py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Gallery"
          title="A glimpse of Sri Lanka through our lens"
          description="A hand-picked collection from across the island — coastline, culture, wildlife, and the moments in between."
        />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-all ${
                category === c
                  ? "border-ocean-500 bg-ocean-500 text-white shadow-md"
                  : "border-ink-900/10 bg-white text-ink-700 hover:border-ocean-500/30"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4"
        >
          {filtered.map((item, i) => (
            <motion.button
              key={item.id}
              variants={fadeUp}
              type="button"
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl shadow-md shadow-ink-900/10 ${
                spanClass[item.span] ?? "aspect-square"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="text-left text-white">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-sunset-300">
                    {item.category}
                  </div>
                  <div className="mt-1 text-sm font-medium">{item.alt}</div>
                </div>
              </div>
              <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink-900 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <Expand className="h-4 w-4" />
              </div>
            </motion.button>
          ))}
        </motion.div>
      </Container>

      {active !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/95 p-4 backdrop-blur"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative aspect-[4/3] w-full max-w-5xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[active].src}
              alt={filtered[active].alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
