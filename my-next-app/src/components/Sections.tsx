"use client";

import { motion } from "framer-motion";
import { DestinationCard } from "./DestinationCard";
import { TourCard } from "./TourCard";
import { SectionHeader } from "./SectionHeader";
import { Container } from "./Container";
import { LinkButton } from "./Button";
import { destinations } from "@/data/destinations";
import { tours } from "@/data/tours";
import { staggerContainer } from "@/lib/animations";

export function DestinationsSection() {
  const featured = destinations.slice(0, 6);

  return (
    <section id="destinations" className="bg-beige-50 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Destinations"
            title="Seven places, each a world of its own."
            description="From mist-wrapped highlands to sun-warmed shores, these are the corners of Sri Lanka we return to again and again."
            align="left"
            className="max-w-2xl"
          />
          <LinkButton href="/destinations" variant="outline" showArrow>
            All destinations
          </LinkButton>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((d, i) => (
            <DestinationCard key={d.slug} destination={d} index={i} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export function ToursSection() {
  const featured = tours.filter((t) => t.featured).slice(0, 3);

  return (
    <section id="tours" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Featured journeys"
            title="Hand-picked tours from our travel directors."
            description="Each itinerary can be tailored to your dates, pace, and travel style — start from one of our favourites."
            align="left"
            className="max-w-2xl"
          />
          <LinkButton href="/tours" variant="outline" showArrow>
            All tours
          </LinkButton>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((t, i) => (
            <TourCard key={t.id} tour={t} index={i} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
