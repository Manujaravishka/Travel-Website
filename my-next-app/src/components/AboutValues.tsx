"use client";

import { Compass, Heart, Leaf, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";

const values: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Heart,
    title: "Personal",
    description:
      "No two travellers are the same. We design every journey around you — your pace, your tastes, your definition of luxury.",
  },
  {
    icon: Leaf,
    title: "Responsible",
    description:
      "We partner with community-led conservation and tourism projects, so your visit helps protect the places you came to see.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted",
    description:
      "Twelve years, 4,800 travellers, and a 4.95 average rating. Every guide, hotel, and partner has been personally vetted.",
  },
  {
    icon: Compass,
    title: "Curious",
    description:
      "We are forever exploring new corners of the island. The tea planter who knows a hidden waterfall. The chef with a 200-year-old recipe.",
  },
];

export function AboutValues() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="What we stand for"
          title="Four principles that guide every journey."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="rounded-3xl border border-ink-900/5 bg-beige-50 p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean-500/10 text-ocean-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-ink-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-500">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
