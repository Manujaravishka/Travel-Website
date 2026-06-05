"use server";

import { companyInfo } from "@/data/site";
import { buildBookingMessage, buildWhatsappUrl } from "@/services/booking";
import type { BookingFormState } from "@/types";

export interface BookingEnquiryResult {
  ok: boolean;
  message: string;
  whatsappUrl?: string;
}

export async function submitBookingEnquiry(
  state: BookingFormState,
  tourTitle?: string
): Promise<BookingEnquiryResult> {
  if (!state.firstName || !state.email) {
    return { ok: false, message: "Please share your name and email so we can reach you." };
  }
  const whatsappUrl = buildWhatsappUrl(
    buildBookingMessage(state, tourTitle) + `\n\n— Sent from ${companyInfo.name} website`
  );
  return {
    ok: true,
    message: "Thank you. We've prepared a WhatsApp message — tap below to send.",
    whatsappUrl,
  };
}

export async function submitContactEnquiry(form: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  if (!form.name || !form.email || !form.message) {
    return { ok: false, message: "Please complete the required fields." };
  }
  const text = `Hello ${companyInfo.name},\n\n${form.message}\n\n— ${form.name} (${form.email})${
    form.subject ? `\nSubject: ${form.subject}` : ""
  }\n\n— Sent from ${companyInfo.name} website`;
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(text)}`;
  return {
    ok: true,
    message: "Thank you. Tap below to send your message via WhatsApp.",
    whatsappUrl,
  };
}
