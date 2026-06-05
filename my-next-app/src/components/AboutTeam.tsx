"use client";

import Image from "next/image";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";

const team = [
  {
    name: "Anika Wijesinghe",
    role: "Founder & Managing Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    bio: "Born in Kandy, Anika founded Ceylon Luxe after twelve years in luxury travel across Asia.",
  },
  {
    name: "Ruwan De Silva",
    role: "Head of Experiences",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bio: "A former naturalist guide, Ruwan curates the wildlife and cultural experiences that define our tours.",
  },
  {
    name: "Maya Perera",
    role: "Concierge Director",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
    bio: "Maya runs our 24/7 concierge — the warm voice on the other end of the phone when plans change.",
  },
];

export function AboutTeam() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="The team"
          title="A small team, deeply rooted in Sri Lanka."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((t) => (
            <div
              key={t.name}
              className="group overflow-hidden rounded-3xl border border-ink-900/5 bg-beige-50"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-ink-900">
                  {t.name}
                </h3>
                <div className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-sunset-400">
                  {t.role}
                </div>
                <p className="mt-3 text-sm leading-6 text-ink-500">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
