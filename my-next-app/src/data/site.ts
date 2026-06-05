import type { NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours" },
  { label: "Destinations", href: "/destinations" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
  { label: "TripAdvisor", href: "https://tripadvisor.com", icon: "compass" },
];

export const companyInfo = {
  name: "Ceylon Luxe",
  tagline: "Bespoke Sri Lanka journeys",
  email: "hello@ceylonluxe.travel",
  phone: "+94 77 123 4567",
  whatsapp: "+94771234567",
  address: "12 Galle Face Court, Colombo 03, Sri Lanka",
  hours: "Mon – Sat · 9:00 – 18:00 IST",
};
