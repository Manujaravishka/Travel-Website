import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-gradient-to-b from-beige-50 to-beige-100 py-20">
      <Container className="text-center">
        <p className="font-serif text-[10rem] font-semibold leading-none text-ocean-500/20 sm:text-[14rem]">
          404
        </p>
        <h1 className="-mt-12 font-serif text-3xl font-semibold text-ink-900 sm:text-5xl">
          This page wandered off the map.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-ink-500">
          The page you are looking for does not exist — or has been moved. Let
          us help you find your way back.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <LinkButton href="/" size="lg" showArrow>
            Back to home
          </LinkButton>
          <LinkButton href="/tours" variant="outline" size="lg">
            Browse tours
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
