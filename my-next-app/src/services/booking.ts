import { companyInfo } from "@/data/site";
import type { BookingFormState } from "@/types";

export function buildWhatsappUrl(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${companyInfo.whatsapp.replace(/[^\d]/g, "")}?text=${encoded}`;
}

export function buildBookingMessage(state: Partial<BookingFormState>, tourTitle?: string) {
  const lines = [
    `Hello ${companyInfo.name},`,
    "",
    "I would like to enquire about a tour:",
    tourTitle ? `• Tour: ${tourTitle}` : undefined,
    state.firstName ? `• Name: ${state.firstName} ${state.lastName ?? ""}`.trim() : undefined,
    state.email ? `• Email: ${state.email}` : undefined,
    state.phone ? `• Phone: ${state.phone}` : undefined,
    state.country ? `• Country: ${state.country}` : undefined,
    state.arrivalDate ? `• Arrival: ${state.arrivalDate}` : undefined,
    state.departureDate ? `• Departure: ${state.departureDate}` : undefined,
    state.adults || state.children
      ? `• Travellers: ${state.adults ?? 0} adults, ${state.children ?? 0} children`
      : undefined,
    state.accommodation ? `• Accommodation: ${state.accommodation}` : undefined,
    state.addOns && state.addOns.length > 0
      ? `• Add-ons: ${state.addOns.join(", ")}`
      : undefined,
    state.specialRequests ? `\nSpecial requests:\n${state.specialRequests}` : undefined,
  ].filter(Boolean);

  return lines.join("\n");
}
