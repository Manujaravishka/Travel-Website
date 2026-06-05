"use client";

import { motion } from "framer-motion";
import {
  Compass,
  ShieldCheck,
  Gem,
  Leaf,
  Headphones,
  Plane,
  type LucideIcon,
} from "lucide-react";
import { whyChooseUs, stats } from "@/data/whyChooseUs";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { SectionHeader } from "./SectionHeader";
import { Container } from "./Container";
import { LinkButton } from "./Button";

const iconMap: Record<string, LucideIcon> = {
  compass: Compass,
  "shield-check": ShieldCheck,
  gem: Gem,
  leaf: Leaf,
  headphones: Headphones,
  plane: Plane,
};

export function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
      />
      <Container className="relative">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Why travellers choose us"
              title="The kind of trip that earns a permanent place in your passport."
              align="left"
            />
          </div>
          <p className="text-base leading-7 text-ink-500 lg:col-span-5">
            Twelve years of crafting Sri Lanka journeys has taught us that the
            best trips feel both effortless and personal. Here is how we make
            that happen.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] ?? Compass;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-3xl border border-ink-900/5 bg-beige-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ocean-500/30 hover:shadow-xl hover:shadow-ocean-900/10"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-ocean-500/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-ocean-500/10" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean-500/10 text-ocean-600 transition-all group-hover:bg-ocean-500 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="relative mt-5 font-serif text-lg font-semibold text-ink-900">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm leading-6 text-ink-500">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-2 gap-6 rounded-3xl bg-beige-100 p-8 sm:grid-cols-4 sm:p-10"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="text-center sm:text-left"
            >
              <div className="font-serif text-4xl font-semibold text-ocean-600 sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LinkButton href="/about" variant="primary" showArrow size="lg">
            Discover our story
          </LinkButton>
          <LinkButton href="/contact" variant="outline" size="lg">
            Speak to a director
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
