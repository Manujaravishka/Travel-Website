import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { DestinationCard } from "@/components/DestinationCard";
import { CTASection } from "@/components/CTASection";
import { destinations } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Seven of Sri Lanka's most captivating destinations — explore Ella, Sigiriya, Mirissa, Kandy, Galle, Nuwara Eliya, and Yala.",
};

export default function DestinationsPage() {
  return (
    <>
      <div className="bg-gradient-to-b from-beige-100 to-beige-50 pb-12 pt-32 sm:pt-40">
        <Container>
          <SectionHeader
            eyebrow="Destinations"
            title="Seven unforgettable places, one island."
            description="Each of these destinations tells a different story. Use them as starting points — then let us craft the journey in between."
          />
        </Container>
      </div>
      <section className="bg-beige-50 pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d, i) => (
              <DestinationCard key={d.slug} destination={d} index={i} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
