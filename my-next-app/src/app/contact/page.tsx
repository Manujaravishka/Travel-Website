import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageCircle, Globe, Sparkles } from "lucide-react";
import { Container } from "@/components/Container";
import { ContactForm } from "./ContactForm";
import { companyInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ceylon Luxe — your personal travel director replies within 24 hours. WhatsApp, email, phone, or send a message via our contact form.",
};

const contactChannels = [
  {
    icon: MessageCircle,
    label: "WhatsApp concierge",
    value: companyInfo.whatsapp,
    href: `https://wa.me/${companyInfo.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(
      `Hello ${companyInfo.name}, I'd like to plan a Sri Lanka trip.`
    )}`,
    note: "Fastest replies · Mon–Sat",
    accent: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Mail,
    label: "Email",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
    note: "Detailed enquiries · 24h reply",
    accent: "bg-ocean-500/10 text-ocean-600",
  },
  {
    icon: Phone,
    label: "Phone",
    value: companyInfo.phone,
    href: `tel:${companyInfo.phone.replace(/\s/g, "")}`,
    note: "Direct line to a director",
    accent: "bg-sunset-400/10 text-sunset-500",
  },
  {
    icon: MapPin,
    label: "Studio",
    value: companyInfo.address,
    href: "https://maps.google.com/?q=Galle+Face+Colombo",
    note: "Visits by appointment",
    accent: "bg-beige-200 text-ink-700",
  },
];

const faqs = [
  {
    q: "How quickly will I hear back?",
    a: "A personal travel director replies to every enquiry within 24 hours — usually within a few hours during Sri Lankan business time. WhatsApp messages are typically answered in under 5 minutes.",
  },
  {
    q: "Is planning a trip with you free?",
    a: "Yes. We craft a fully personalised proposal with no obligation and no template. You only pay once you confirm the itinerary and we have secured every booking on your behalf.",
  },
  {
    q: "Do you handle group bookings?",
    a: "All the time. We coordinate multi-generational families, friends travelling together, and corporate retreats. Tell us your group size in the form and we will tailor the logistics accordingly.",
  },
  {
    q: "Can you help with visas, flights, and insurance?",
    a: "We focus on the on-the-ground experience — accommodation, guides, drivers, and activities. We are happy to recommend trusted partners for flights, travel insurance, and visa support.",
  },
  {
    q: "Which currencies do you accept?",
    a: "We quote in USD by default and accept payment in USD, EUR, GBP, AUD, and LKR. A 30% deposit secures your booking, with the balance due 30 days before arrival.",
  },
  {
    q: "What is your sustainability policy?",
    a: "We work exclusively with properties and suppliers who pay living wages, source responsibly, and contribute to local conservation. Carbon-offset options are offered on every itinerary.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-beige-100 via-beige-50 to-beige-50 pt-32 sm:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-ocean-500/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-sunset-400/10 blur-3xl"
        />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-ocean-500/20 bg-ocean-500/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-ocean-600">
              <span className="h-1.5 w-1.5 rounded-full bg-sunset-400" />
              Contact
            </span>
            <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.05] text-ink-900 sm:text-6xl">
              Let&apos;s start planning the Sri Lanka you&apos;ve been dreaming of.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink-500 sm:text-lg">
              Share a few details below and a personal travel director will
              reply within 24 hours with a hand-crafted proposal — no obligation,
              no template.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactChannels.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex flex-col gap-4 rounded-3xl border border-ink-900/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ocean-900/10"
                >
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${c.accent}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                      {c.label}
                    </div>
                    <div className="mt-1.5 break-words text-sm font-semibold text-ink-900 group-hover:text-ocean-600">
                      {c.value}
                    </div>
                    <div className="mt-2 text-xs text-ink-500">{c.note}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-beige-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean-600">
                Send a message
              </span>
              <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
                Tell us a little about the trip you have in mind.
              </h2>
              <p className="mt-4 text-base leading-7 text-ink-500">
                Anything you share helps us prepare a better first proposal —
                travel style, dream experiences, who is coming, and roughly when.
              </p>

              <ul className="mt-8 space-y-4 text-sm text-ink-700">
                {[
                  "You will receive a personal reply, never an auto-response",
                  "We can shape anything from a long weekend to a 21-day odyssey",
                  "Your details are kept private and never shared",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
                      <Sparkles className="h-3 w-3" />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-10 overflow-hidden rounded-3xl border border-ink-900/5 bg-white shadow-sm">
                <div className="relative aspect-[16/10]">
                  <iframe
                    title="Ceylon Luxe studio location"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=79.835%2C6.918%2C79.862%2C6.937&layer=mapnik&marker=6.9271%2C79.8612"
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="flex items-start gap-3 p-5">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-beige-100 text-ocean-600">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-ink-900">
                      Our studio
                    </div>
                    <div className="mt-0.5 text-sm text-ink-500">
                      {companyInfo.address}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-ocean-500/20 bg-ocean-500/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-ocean-600">
              <span className="h-1.5 w-1.5 rounded-full bg-sunset-400" />
              Frequently asked
            </span>
            <h2 className="mt-5 text-balance font-serif text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
              Everything you might want to know, before you ask.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink-500">
              Quick answers to the questions we hear most often. If yours
              isn&apos;t here, just message us.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-3xl border border-ink-900/5 bg-beige-50 p-6 open:bg-white open:shadow-sm"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-left text-base font-semibold text-ink-900 marker:hidden">
                  <span>{f.q}</span>
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-ocean-500/10 text-ocean-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-ink-500">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-beige-50 py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-8 rounded-3xl border border-ink-900/5 bg-white p-8 shadow-sm sm:p-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                  <Clock className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                  Studio hours
                </span>
              </div>
              <h3 className="mt-4 font-serif text-2xl font-semibold text-ink-900 sm:text-3xl">
                {companyInfo.hours}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-ink-500">
                We are based in Colombo (UTC+5:30). If you are travelling
                through different time zones, send a message whenever it suits
                you — we will reply when our office opens.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="flex flex-col gap-3 rounded-3xl border border-ink-900/5 bg-beige-100 p-6">
                <div className="flex items-center gap-3 text-sm font-semibold text-ink-900">
                  <Globe className="h-4 w-4 text-ocean-600" />
                  Travelling from afar?
                </div>
                <p className="text-sm leading-7 text-ink-500">
                  We regularly work with clients across Europe, North America,
                  Australia, and Asia. A scheduled video call is the easiest way
                  to align on details — we will send a calendar link after your
                  first message.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
