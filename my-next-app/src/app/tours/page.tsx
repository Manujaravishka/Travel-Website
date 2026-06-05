import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ToursExplorer } from "@/components/ToursExplorer";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Tours",
  description:
    "Browse hand-crafted Sri Lanka tour itineraries. Filter by destination, style, and budget — then tailor to your perfect trip.",
};

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ToursPage({ searchParams }: Props) {
  const { category } = await searchParams;
  return (
    <>
      <div className="bg-gradient-to-b from-beige-100 to-beige-50 pb-12 pt-32 sm:pt-40">
        <Container>
          <SectionHeader
            eyebrow="Tours"
            title="Curated journeys, ready to be tailored to you."
            description="Each tour is a starting point. Tell us your dates and preferences, and we will shape the perfect version for you."
          />
        </Container>
      </div>
      <div className="bg-beige-50 pb-20">
        <ToursExplorer initialCategory={category} />
      </div>
      <CTASection />
    </>
  );
}
