export type DestinationSlug =
  | "ella"
  | "sigiriya"
  | "mirissa"
  | "kandy"
  | "galle"
  | "nuwara-eliya"
  | "yala";

export interface Destination {
  slug: DestinationSlug;
  name: string;
  region: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  bestTime: string;
  startingPrice: number;
  tourCount: number;
  rating: number;
  coords: { lat: number; lng: number };
}

export interface Tour {
  id: string;
  title: string;
  slug: string;
  destination: DestinationSlug;
  image: string;
  gallery: string[];
  duration: string;
  days: number;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  location: string;
  groupSize: string;
  category: "adventure" | "cultural" | "beach" | "wildlife" | "wellness";
  highlights: string[];
  included: string[];
  itinerary: ItineraryDay[];
  featured?: boolean;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  quote: string;
  tour: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "beach" | "culture" | "wildlife" | "nature" | "food";
  span: "tall" | "wide" | "square";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SearchFormState {
  destination: string;
  date: string;
  travelers: number;
  tourType: string;
}

export interface BookingFormState {
  tourId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  arrivalDate: string;
  departureDate: string;
  adults: number;
  children: number;
  accommodation: "luxury" | "boutique" | "standard";
  addOns: string[];
  specialRequests: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface WhyChooseUsItem {
  icon: string;
  title: string;
  description: string;
}
