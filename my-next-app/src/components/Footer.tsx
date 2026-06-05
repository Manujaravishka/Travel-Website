import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "./Container";
import { navLinks, companyInfo, socialLinks } from "@/data/site";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink-900 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-ocean-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-sunset-400/10 blur-3xl"
      />

      <Container className="relative">
        <div className="grid gap-12 py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2 font-serif text-2xl font-semibold">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sunset-400 text-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 22h20L12 2z" />
                  <circle cx="12" cy="14" r="2" fill="currentColor" />
                </svg>
              </span>
              {companyInfo.name}
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              Bespoke luxury journeys across Sri Lanka. Hand-crafted itineraries,
              hand-picked stays, and trusted local experts — for travellers who
              want the extraordinary.
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/80">
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-3 transition hover:text-sunset-300"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5">
                  <Mail className="h-4 w-4" />
                </span>
                {companyInfo.email}
              </a>
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 transition hover:text-sunset-300"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5">
                  <Phone className="h-4 w-4" />
                </span>
                {companyInfo.phone}
              </a>
              <p className="flex items-center gap-3">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/5">
                  <MapPin className="h-4 w-4" />
                </span>
                {companyInfo.address}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-4">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                Explore
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/80 transition hover:text-sunset-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                Discover
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <Link href="/destinations" className="text-white/80 transition hover:text-sunset-300">
                    All destinations
                  </Link>
                </li>
                <li>
                  <Link href="/tours" className="text-white/80 transition hover:text-sunset-300">
                    All tours
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/80 transition hover:text-sunset-300">
                    Our story
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/80 transition hover:text-sunset-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                Support
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                <li className="text-white/80">{companyInfo.hours}</li>
                <li>
                  <a
                    href={`https://wa.me/${companyInfo.whatsapp.replace(/[^\d]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 transition hover:text-sunset-300"
                  >
                    WhatsApp concierge
                  </a>
                </li>
                <li>
                  <Link href="/booking" className="text-white/80 transition hover:text-sunset-300">
                    Booking enquiries
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                Follow
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-sunset-300 hover:text-sunset-300"
                    >
                      <SocialIcon icon={s.icon} className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-white/50">
                Travel inspiration, twice a month. Always curated, never spam.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {year} {companyInfo.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Terms
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Sustainability
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
