import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Sparkles, Star } from "lucide-react";
import { Container } from "@/components/Container";
import { TourCard } from "@/components/TourCard";
import { LinkButton } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { destinations, getDestination } from "@/data/destinations";
import { getToursByDestination } from "@/data/tours";
import { formatPrice } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) return { title: "Destination not found" };
  return {
    title: dest.name,
    description: dest.description,
  };
}

export default async function DestinationDetailPage({ params }: Props) {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) notFound();
  const related = getToursByDestination(dest.slug).slice(0, 3);

  return (
    <>
      <section className="relative h-[60svh] min-h-[480px] w-full overflow-hidden">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/40 to-ink-900/30" />
        <Container className="relative flex h-full flex-col justify-end pb-12 text-white">
          <Link
            href="/destinations"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All destinations
          </Link>
          <div className="flex items-center gap-1.5 text-sm uppercase tracking-[0.18em] text-sunset-300">
            <MapPin className="h-4 w-4" />
            {dest.region}
          </div>
          <h1 className="mt-3 font-serif text-5xl font-semibold leading-[1.05] sm:text-7xl">
            {dest.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80 sm:text-xl">
            {dest.tagline}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur">
              <Star className="h-4 w-4 fill-sunset-400 text-sunset-400" />
              {dest.rating.toFixed(1)} · {dest.tourCount} tours
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur">
              <Calendar className="h-4 w-4" />
              Best: {dest.bestTime}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sunset-400 px-3 py-1.5 font-semibold">
              From {formatPrice(dest.startingPrice)}
            </span>
          </div>
        </Container>
      </section>

      <section className="bg-beige-50 py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean-600">
                About {dest.name}
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
                {dest.description}
              </h2>
              <div className="mt-8">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                  Highlights
                </h3>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {dest.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-3 rounded-2xl border border-ink-900/5 bg-white p-4"
                    >
                      <Sparkles className="h-4 w-4 text-sunset-400" />
                      <span className="text-sm font-medium text-ink-900">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="sticky top-28 rounded-3xl border border-ink-900/5 bg-white p-7 shadow-xl shadow-ink-900/5">
                <h3 className="font-serif text-xl font-semibold text-ink-900">
                  Plan your visit
                </h3>
                <p className="mt-2 text-sm text-ink-500">
                  Tell us your dates and we will pair you with a private guide who
                  knows {dest.name} intimately.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <LinkButton href={`/booking?destination=${dest.slug}`} size="lg" showArrow>
                    Enquire about {dest.name}
                  </LinkButton>
                  <LinkButton href="/contact" variant="outline" size="lg">
                    Speak to a director
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-white py-20">
          <Container>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
              Tours that include {dest.name}
            </h2>
            <p className="mt-3 max-w-2xl text-base text-ink-500">
              Ready-made journeys that feature {dest.name}, or use them as inspiration
              for your own.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((t, i) => (
                <TourCard key={t.id} tour={t} index={i} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}
