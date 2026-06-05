"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, MapPin, Star, Users } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { formatPrice } from "@/lib/utils";
import type { Tour } from "@/types";

type Props = {
  tour: Tour;
  index?: number;
};

export function TourCard({ tour, index = 0 }: Props) {
  return (
    <motion.article
      variants={fadeUp}
      transition={{ delay: index * 0.05 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-900/5 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-ocean-900/15"
    >
      <Link
        href={`/booking?tour=${tour.slug}`}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
        {tour.oldPrice && (
          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-sunset-400 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
            Save {formatPrice(tour.oldPrice - tour.price)}
          </div>
        )}
        <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-ink-900 shadow-lg">
          <Star className="h-3.5 w-3.5 fill-sunset-400 text-sunset-400" />
          {tour.rating.toFixed(1)}
          <span className="text-ink-500">({tour.reviews})</span>
        </div>
        <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          <MapPin className="h-3.5 w-3.5" />
          {tour.location.split("→")[0]?.trim()}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-ocean-600">
          <span className="h-1.5 w-1.5 rounded-full bg-sunset-400" />
          {tour.category}
        </div>
        <h3 className="font-serif text-xl font-semibold leading-snug text-ink-900">
          {tour.title}
        </h3>
        <ul className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-500">
          <li className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-ocean-500" />
            {tour.duration}
          </li>
          <li className="flex items-center gap-1.5">
            <Users className="h-4 w-4 text-ocean-500" />
            {tour.groupSize}
          </li>
        </ul>
        <p className="mt-4 line-clamp-2 text-sm leading-6 text-ink-500">
          {tour.highlights[0]}
        </p>

        <div className="mt-6 flex items-end justify-between border-t border-ink-900/5 pt-5">
          <div>
            <div className="text-xs uppercase tracking-widest text-ink-500">
              From
            </div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-serif text-2xl font-semibold text-ink-900">
                {formatPrice(tour.price)}
              </span>
              {tour.oldPrice && (
                <span className="text-sm text-ink-500 line-through">
                  {formatPrice(tour.oldPrice)}
                </span>
              )}
              <span className="text-xs text-ink-500">/ person</span>
            </div>
          </div>
          <Link
            href={`/booking?tour=${tour.slug}`}
            className="inline-flex h-10 items-center gap-1.5 rounded-full bg-ocean-500 px-5 text-sm font-medium text-white shadow-lg shadow-ocean-500/25 transition-all hover:-translate-y-0.5 hover:bg-ocean-600"
          >
            Book now
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
