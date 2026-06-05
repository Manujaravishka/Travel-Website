import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { BookingForm } from "./BookingForm";

export const metadata: Metadata = {
  title: "Book your journey",
  description:
    "Plan your bespoke Sri Lanka trip. Share your preferences and a personal travel director will reply within 24 hours.",
};

type Props = {
  searchParams: Promise<{ tour?: string; destination?: string }>;
};

export default async function BookingPage({ searchParams }: Props) {
  const { tour, destination } = await searchParams;
  return (
    <>
      <div className="bg-gradient-to-b from-beige-100 to-beige-50 pb-12 pt-32 sm:pt-40">
        <Container>
          <SectionHeader
            eyebrow="Book your journey"
            title="Tell us about the trip you have in mind."
            description="Share a few details and we will reply within 24 hours with a hand-crafted proposal. No obligation, no template."
          />
        </Container>
      </div>
      <section className="bg-beige-50 pb-24">
        <Container>
          <BookingForm initialTour={tour} initialDestination={destination} />
        </Container>
      </section>
    </>
  );
}
