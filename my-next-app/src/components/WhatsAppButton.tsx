"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { companyInfo } from "@/data/site";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(true), 1200);
    return () => window.clearTimeout(t);
  }, []);

  if (!visible) return null;

  const href = `https://wa.me/${companyInfo.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(
    `Hello ${companyInfo.name}, I'd like to plan a Sri Lanka trip.`
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            className="glass relative max-w-xs rounded-2xl px-4 py-3 text-sm shadow-xl shadow-ink-900/15"
          >
            <button
              type="button"
              onClick={() => setExpanded(false)}
              aria-label="Dismiss"
              className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-ink-900 text-white shadow"
            >
              <X className="h-3 w-3" />
            </button>
            <div className="font-semibold text-ink-900">Chat with us</div>
            <p className="mt-1 text-xs text-ink-500">
              We typically reply in under 5 minutes.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/40 sm:h-16 sm:w-16"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-emerald-500 animate-ping opacity-30" />
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
      </motion.a>
    </div>
  );
}
