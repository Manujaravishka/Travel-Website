"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Star } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { formatPrice } from "@/lib/utils";
import type { Destination } from "@/types";

type Props = {
  destination: Destination;
  index?: number;
};

export function DestinationCard({ destination, index = 0 }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ delay: index * 0.05 }}
      className="group relative h-full"
    >
      <Link
        href={`/destinations/${destination.slug}`}
        className="relative block h-[420px] overflow-hidden rounded-3xl shadow-lg shadow-ink-900/10 sm:h-[460px]"
      >
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-500/0 via-transparent to-sunset-400/20 mix-blend-overlay opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute left-5 top-5 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-ink-900 shadow-lg">
          <Star className="h-3.5 w-3.5 fill-sunset-400 text-sunset-400" />
          {destination.rating.toFixed(1)}
        </div>

        <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-ink-900">
          <ArrowUpRight className="h-4 w-4" />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <div className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-sunset-300">
            <MapPin className="h-3.5 w-3.5" />
            {destination.region}
          </div>
          <h3 className="font-serif text-3xl font-semibold leading-tight tracking-tight">
            {destination.name}
          </h3>
          <p className="mt-2 line-clamp-2 max-w-md text-sm leading-6 text-white/80">
            {destination.tagline}
          </p>
          <div className="mt-4 flex items-end justify-between border-t border-white/15 pt-4">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-white/60">
                From
              </div>
              <div className="font-serif text-2xl font-semibold">
                {formatPrice(destination.startingPrice)}
              </div>
            </div>
            <div className="text-right text-xs text-white/70">
              {destination.tourCount} tours
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
