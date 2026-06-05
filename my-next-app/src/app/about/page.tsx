import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { AboutValues } from "@/components/AboutValues";
import { AboutTeam } from "@/components/AboutTeam";
import { stats } from "@/data/whyChooseUs";

export const metadata: Metadata = {
  title: "About",
  description:
    "Twelve years of hand-crafting Sri Lanka journeys. Meet the people, partners, and principles behind Ceylon Luxe.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-900 py-32 text-white sm:py-44">
        <Image
          src="https://images.unsplash.com/photo-1546708973-acdd1f3a6f1d?auto=format&fit=crop&w=2400&q=80"
          alt="Sri Lankan landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/30 to-ink-900/90" />
        <Container className="relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur">
              Our story
            </span>
            <h1 className="mt-5 text-balance font-serif text-4xl font-semibold leading-[1.05] sm:text-6xl">
              A small team of Sri Lankans, obsessed with showing you the island we love.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              Ceylon Luxe began in 2014 with a single question — what if the best
              of Sri Lanka could be experienced at the pace of a friend, not a
              brochure? Twelve years later, that question is still our compass.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-beige-50 py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean-600">
                The journey
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
                From a single tea bungalow to a country-wide network of friends.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-ink-500">
                <p>
                  We started in a restored colonial bungalow in Nuwara Eliya, hosting
                  a handful of travellers a year. Word travelled — slowly, the right
                  way — and we found ourselves curating journeys across the island.
                </p>
                <p>
                  Today, our network spans 38 vetted properties, 24 expert guides, and
                  a small but mighty team in Colombo. We still hand-pick every hotel,
                  still answer the phone after hours, and still believe the best trips
                  are the ones that change you quietly.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1518509562904-e7ef99cddc85?auto=format&fit=crop&w=1200&q=80"
                alt="Tea estate in Sri Lanka"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <AboutValues />

      <section className="bg-beige-100 py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <div className="font-serif text-4xl font-semibold text-ocean-600 sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <AboutTeam />

      <CTASection />
    </>
  );
}
