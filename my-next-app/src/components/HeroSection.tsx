"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Search, Star } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=80",
    eyebrow: "A tropical island escape",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=2400&q=80",
    eyebrow: "Eight UNESCO World Heritage sites",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2400&q=80",
    eyebrow: "Curated luxury, hand-crafted",
  },
];

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-ink-900"
    >
      <AnimatePresence mode="sync">
        {slides.map(
          (slide, i) =>
            i === index && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt="Sri Lanka landscape"
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            )
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/40 to-ink-900/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900/60 to-transparent" />

      <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
            className="group relative h-12 w-1.5 overflow-hidden rounded-full bg-white/30 transition-all"
          >
            <span
              className={`absolute inset-x-0 top-0 rounded-full bg-white transition-all duration-500 ${
                i === index ? "h-full" : "h-0 group-hover:h-1/2"
              }`}
            />
          </button>
        ))}
      </div>

      <div className="container-luxe relative z-10 flex flex-col items-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur"
        >
          <Star className="h-3.5 w-3.5 fill-sunset-400 text-sunset-400" />
          Trusted by 4,800+ travellers worldwide
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.p
            key={slides[index].id + "-eyebrow"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-sunset-300 sm:text-base"
          >
            {slides[index].eyebrow}
          </motion.p>
        </AnimatePresence>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Explore the beauty of <em className="not-italic text-sunset-300">Sri Lanka</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg"
        >
          From misty tea highlands to sun-warmed shores, we design private
          Sri Lankan journeys with the people who know them best.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link
            href="#search"
            className="group inline-flex h-14 items-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-ink-900 shadow-2xl shadow-black/20 transition-all hover:-translate-y-0.5"
          >
            <Search className="h-4 w-4" />
            Plan your journey
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </Link>
          <Link
            href="/tours"
            className="inline-flex h-14 items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 text-sm font-medium text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/20"
          >
            Browse signature tours
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex items-center gap-6 text-xs text-white/60 sm:gap-10"
        >
          <div>
            <div className="font-serif text-2xl text-white">12+</div>
            <div className="mt-1 uppercase tracking-widest">Years</div>
          </div>
          <div className="h-8 w-px bg-white/20" />
          <div>
            <div className="font-serif text-2xl text-white">4.95</div>
            <div className="mt-1 uppercase tracking-widest">Rating</div>
          </div>
          <div className="h-8 w-px bg-white/20" />
          <div>
            <div className="font-serif text-2xl text-white">180+</div>
            <div className="mt-1 uppercase tracking-widest">Tours</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
