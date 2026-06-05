"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { companyInfo } from "@/data/site";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="container-luxe">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative isolate overflow-hidden rounded-[2rem] px-6 py-16 sm:px-12 sm:py-24"
        >
          <Image
            src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=2000&q=80"
            alt="Tropical beach at sunset"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-700/95 via-ocean-600/85 to-ink-900/80 mix-blend-multiply" />
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sunset-400/30 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-sunset-400" />
                Limited departures · 2026 / 2027
              </span>
              <h2 className="mt-5 text-balance font-serif text-3xl font-semibold leading-[1.1] text-white sm:text-5xl">
                Your Sri Lanka story starts with a single conversation.
              </h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
                Tell us how you like to travel. Within 24 hours, your personal
                travel director will reply with a hand-crafted proposal — no
                obligation, no template.
              </p>
            </div>

            <div className="flex flex-col items-stretch gap-3 sm:flex-row lg:flex-col lg:items-end">
              <Link
                href="/booking"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-ink-900 shadow-2xl shadow-black/30 transition hover:-translate-y-0.5"
              >
                Start planning
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <div className="grid grid-cols-2 gap-3 lg:w-full lg:grid-cols-1">
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <Phone className="h-4 w-4" />
                  {companyInfo.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <MessageCircle className="h-4 w-4" />
                  Send a message
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
