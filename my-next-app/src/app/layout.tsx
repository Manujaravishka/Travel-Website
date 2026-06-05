import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { companyInfo } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ceylonluxe.travel"),
  title: {
    default: `${companyInfo.name} · ${companyInfo.tagline}`,
    template: `%s · ${companyInfo.name}`,
  },
  description:
    "Bespoke luxury journeys across Sri Lanka. Curated tours, hand-picked stays, and trusted local experts for foreign travellers seeking the extraordinary.",
  keywords: [
    "Sri Lanka tours",
    "luxury travel Sri Lanka",
    "Sri Lanka honeymoon",
    "private guided tours",
    "Ceylon travel",
    "Colombo travel agency",
  ],
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${companyInfo.name} · ${companyInfo.tagline}`,
    description:
      "Bespoke luxury journeys across Sri Lanka — hand-crafted itineraries, curated stays, and trusted local experts.",
    siteName: companyInfo.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyInfo.name} · ${companyInfo.tagline}`,
    description:
      "Bespoke luxury journeys across Sri Lanka — hand-crafted itineraries, curated stays, and trusted local experts.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e5c8a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen bg-beige-50 text-ink-900 antialiased">
        <Navbar />
        <main className="flex flex-col">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
