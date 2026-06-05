import type { GalleryItem } from "@/types";

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const gallery: GalleryItem[] = [
  {
    id: "g-1",
    src: unsplash("1546708973-acdd1f3a6f1d", 1200),
    alt: "Mist over a tropical forest canopy at dawn",
    category: "nature",
    span: "tall",
  },
  {
    id: "g-2",
    src: unsplash("1507525428034-b723cf961d3e", 1200),
    alt: "Aerial view of a turquoise tropical shoreline",
    category: "beach",
    span: "wide",
  },
  {
    id: "g-3",
    src: unsplash("1571536802807-30451e3955d8", 1200),
    alt: "Ornate detail of a Buddhist temple",
    category: "culture",
    span: "square",
  },
  {
    id: "g-4",
    src: unsplash("1476514525535-07fb3b4ae5f1", 1200),
    alt: "Crystal clear tropical water from above",
    category: "beach",
    span: "square",
  },
  {
    id: "g-5",
    src: unsplash("1545569310-29c80e7f7c8d", 1200),
    alt: "An elephant in the wild",
    category: "wildlife",
    span: "wide",
  },
  {
    id: "g-6",
    src: unsplash("1488646953014-85cb44e25828", 1200),
    alt: "A traveller on a pristine beach at golden hour",
    category: "beach",
    span: "tall",
  },
  {
    id: "g-7",
    src: unsplash("1518509562904-e7ef99cddc85", 1200),
    alt: "Tea plantations stretch to the horizon",
    category: "nature",
    span: "square",
  },
  {
    id: "g-8",
    src: unsplash("1552733407-5d5c46c3bb3b", 1200),
    alt: "A train winds through misty highlands",
    category: "nature",
    span: "wide",
  },
  {
    id: "g-9",
    src: unsplash("1605648916361-9bc12ad6a569", 1200),
    alt: "Surfer riding a tropical wave",
    category: "beach",
    span: "square",
  },
  {
    id: "g-10",
    src: unsplash("1605649487212-47bdab064df7", 1200),
    alt: "The historic Galle Fort at golden hour",
    category: "culture",
    span: "tall",
  },
];
