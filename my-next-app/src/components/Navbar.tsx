"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, companyInfo } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
          transparent
            ? "bg-transparent"
            : "bg-beige-50/80 shadow-sm shadow-ink-900/5 backdrop-blur-xl"
        )}
      >
        <div className="container-luxe flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className={cn(
              "group flex items-center gap-2 font-serif text-xl font-semibold tracking-tight",
              transparent ? "text-white" : "text-ink-900"
            )}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sunset-400 text-white shadow-lg shadow-sunset-400/30 transition-transform group-hover:scale-110">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
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

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    transparent
                      ? active
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                      : active
                        ? "text-ocean-600"
                        : "text-ink-700 hover:text-ink-900"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className={cn(
                        "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full",
                        transparent ? "bg-white" : "bg-sunset-400"
                      )}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                transparent
                  ? "text-white/90 hover:text-white"
                  : "text-ink-700 hover:text-ink-900"
              )}
            >
              <Phone className="h-4 w-4" />
              {companyInfo.phone}
            </a>
            <Link
              href="/booking"
              className={cn(
                "inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-medium transition-all duration-300",
                transparent
                  ? "bg-white text-ink-900 hover:bg-beige-100"
                  : "bg-ocean-500 text-white shadow-lg shadow-ocean-500/25 hover:bg-ocean-600"
              )}
            >
              Book a tour
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden",
              transparent
                ? "bg-white/10 text-white backdrop-blur"
                : "bg-ink-900/5 text-ink-900"
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-beige-50 px-6 pb-8 pt-24"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-2xl px-4 py-3 text-lg font-medium transition-colors",
                        pathname === link.href
                          ? "bg-ocean-500/10 text-ocean-600"
                          : "text-ink-900 hover:bg-ink-900/5"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3">
                <Link
                  href="/booking"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-ocean-500 px-6 font-medium text-white shadow-lg shadow-ocean-500/25"
                >
                  Book a tour
                </Link>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                  onClick={() => setOpen(false)}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink-900/15 px-6 font-medium text-ink-900"
                >
                  <Phone className="h-4 w-4" />
                  {companyInfo.phone}
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
