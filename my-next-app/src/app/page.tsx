import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { SearchSection } from "@/components/SearchSection";
import { DestinationsSection, ToursSection } from "@/components/Sections";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { GallerySection } from "@/components/GallerySection";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Explore the Beauty of Sri Lanka",
  description:
    "Bespoke luxury Sri Lanka journeys — private guides, hand-picked stays, and trusted local experts. Plan your trip with Ceylon Luxe.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SearchSection />
      <DestinationsSection />
      <ToursSection />
      <WhyChooseUsSection />
      <TestimonialSection />
      <GallerySection />
      <CTASection />
    </>
  );
}
