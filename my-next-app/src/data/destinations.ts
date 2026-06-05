import type { Destination } from "@/types";

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const destinations: Destination[] = [
  {
    slug: "ella",
    name: "Ella",
    region: "Hill Country",
    tagline: "Misty peaks, tea valleys, and the iconic Nine Arches.",
    description:
      "A storybook town wrapped in emerald tea estates and cloud forests. Hike to Ella Rock, walk the Nine Arches Bridge, and watch the world unfurl from Little Adam's Peak.",
    image: unsplash("1588417305211-c6d8baf0f4ce", 1600),
    highlights: ["Nine Arches Bridge", "Little Adam's Peak", "Ella Rock Hike", "Tea Factory Tours"],
    bestTime: "January – April",
    startingPrice: 320,
    tourCount: 18,
    rating: 4.9,
    coords: { lat: 6.8667, lng: 81.05 },
  },
  {
    slug: "sigiriya",
    name: "Sigiriya",
    region: "Cultural Triangle",
    tagline: "The Lion Rock, rising from jungle myth into legend.",
    description:
      "An ancient citadel carved into a 200-metre monolith, surrounded by manicured gardens and frescoes that have watched over a thousand years of sky.",
    image: unsplash("1564507592333-c60657eea523", 1600),
    highlights: ["Sigiriya Rock Fortress", "Pidurangala Sunset", "Dambulla Cave Temple", "Village Safari"],
    bestTime: "February – September",
    startingPrice: 410,
    tourCount: 24,
    rating: 4.9,
    coords: { lat: 7.957, lng: 80.7603 },
  },
  {
    slug: "mirissa",
    name: "Mirissa",
    region: "Southern Coast",
    tagline: "Coconut palms, sapphire water, and whales at dawn.",
    description:
      "A barefoot sliver of coast where fishing boats sway beside boutique cafés. Set sail for blue whales, surf secret breaks, and toast sunsets with your toes in the sand.",
    image: unsplash("1505881502353-a1986add3762", 1600),
    highlights: ["Whale Watching", "Coconut Tree Hill", "Secret Beach Coves", "Surf Lessons"],
    bestTime: "November – April",
    startingPrice: 280,
    tourCount: 16,
    rating: 4.8,
    coords: { lat: 5.9483, lng: 80.4719 },
  },
  {
    slug: "kandy",
    name: "Kandy",
    region: "Central Highlands",
    tagline: "Where culture, ceremony, and a sacred tooth converge.",
    description:
      "Sri Lanka's cultural capital, set around a tranquil lake and home to the Temple of the Sacred Tooth Relic. Witness traditional dance, botanical wonder, and the colour of puja.",
    image: unsplash("1573843981267-be1999ff37cd", 1600),
    highlights: ["Temple of the Tooth", "Royal Botanic Gardens", "Kandyan Dance Show", "Bahirawakanda Vihara"],
    bestTime: "December – April",
    startingPrice: 350,
    tourCount: 21,
    rating: 4.7,
    coords: { lat: 7.2906, lng: 80.6337 },
  },
  {
    slug: "galle",
    name: "Galle",
    region: "Southern Coast",
    tagline: "A living fort where colonial time meets Indian Ocean.",
    description:
      "A 17th-century Dutch fort hugging a sun-warmed peninsula. Cobbled lanes, boutique villas, and a lighthouse that has watched centuries of trade and tide.",
    image: unsplash("1605649487212-47bdab064df7", 1600),
    highlights: ["Galle Fort Walk", "Lighthouse", "Unawatuna Beach", "Handunugoda Tea Estate"],
    bestTime: "November – April",
    startingPrice: 295,
    tourCount: 19,
    rating: 4.8,
    coords: { lat: 6.0535, lng: 80.221 },
  },
  {
    slug: "nuwara-eliya",
    name: "Nuwara Eliya",
    region: "Hill Country",
    tagline: "Little England, wrapped in cloud and Ceylon tea.",
    description:
      "A highland retreat of rose gardens, colonial bungalows, and the world's finest tea. Take the legendary train from Kandy and watch waterfalls and tea pickers stream past the window.",
    image: unsplash("1518509562904-e7ef99cddc85", 1600),
    highlights: ["Tea Plantation Tours", "Horton Plains", "World's End", "Scenic Train Journey"],
    bestTime: "February – May",
    startingPrice: 380,
    tourCount: 17,
    rating: 4.8,
    coords: { lat: 6.9497, lng: 80.7891 },
  },
  {
    slug: "yala",
    name: "Yala",
    region: "Southeast Coast",
    tagline: "Leopards, elephants, and untamed dry-zone wilderness.",
    description:
      "Sri Lanka's most celebrated national park — a mosaic of forest, lagoon, and savanna where the elusive leopard stalks between ancient ruins and watering holes.",
    image: unsplash("1545569310-29c80e7f7c8d", 1600),
    highlights: ["Leopard Safaris", "Elephant Gatherings", "Bundala Bird Sanctuary", "Sithulpawwa Temple"],
    bestTime: "February – July",
    startingPrice: 340,
    tourCount: 14,
    rating: 4.9,
    coords: { lat: 6.3725, lng: 81.5195 },
  },
];

export const getDestination = (slug: string) =>
  destinations.find((d) => d.slug === slug);
