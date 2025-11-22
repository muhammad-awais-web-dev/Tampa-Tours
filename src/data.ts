// src/data.ts

// --- 1. TypeScript Interfaces (The "Shape" of our data) ---

export type DifficultyLevel = 'Relaxing' | 'Moderate' | 'Extreme' | 'Expert';

export interface PlanetStats {
  name: string;
  gravity: string;
  tempAverage: string;
  dayDuration: string;
  moons: string[];
  description: string;
}

export interface Species {
  id: string;
  name: string;
  classification: 'Intelligent' | 'Wildlife' | 'Flora';
  description: string;
  height: string;
  lifespan?: string; // Optional, as flora might not track this nicely
  dangerLevel: 'Safe' | 'Caution' | 'Deadly';
  imageUrl: string; // Placeholder for now
}

export interface Activity {
  id: string;
  title: string;
  duration: string;
  price: number; // In Galactic Credits
  requiredGear: string[];
  description: string;
}

export interface TourSpot {
  id: string;
  name: string;
  region: string;
  description: string;
  heroImage: string;
  availableActivities: string[]; // Array of Activity IDs
  rating: number;
  difficulty: DifficultyLevel;
}

// --- 2. The Data (The Content) ---

export const PLANET_INFO: PlanetStats = {
  name: "Tampa",
  gravity: "0.6g (40% lighter than Earth)",
  tempAverage: "26°C (Tropical)",
  dayDuration: "22 Earth Hours",
  moons: ["Kaelo (Violet)", "Ria (Blue)"],
  description: "A super-oxygenated, low-gravity paradise orbiting a binary star system. Known for its vertical jungles and magnetic floating islands."
};

export const SPECIES: Species[] = [
  {
    id: 'sp-01',
    name: 'The Vellara',
    classification: 'Intelligent',
    description: 'Tall (7-8ft), four-armed humanoids with iridescent skin. They are master architects who weave living cities into the canopy.',
    height: '2.3m',
    lifespan: '120 Earth Years',
    dangerLevel: 'Safe',
    imageUrl: '/assets/species/vellara.jpg'
  },
  {
    id: 'sp-02',
    name: 'Sky-Ray (Aeromanta)',
    classification: 'Wildlife',
    description: 'Massive, manta-ray-like predators that float on thermal currents. They are attracted to shiny objects.',
    height: '4m Wingspan',
    dangerLevel: 'Caution',
    imageUrl: '/assets/species/sky-ray.jpg'
  },
  {
    id: 'sp-03',
    name: 'Bounce-Hopper',
    classification: 'Wildlife',
    description: 'Small, spherical mammals that use the low gravity to leap 30ft in a single bound. Very friendly.',
    height: '0.4m',
    dangerLevel: 'Safe',
    imageUrl: '/assets/species/hopper.jpg'
  },
  {
    id: 'sp-04',
    name: 'Helium-Fern',
    classification: 'Flora',
    description: 'Plants that synthesize lighter-than-air gases, causing them to float upright, tethered only by thin vines.',
    height: '15m - 50m',
    dangerLevel: 'Safe',
    imageUrl: '/assets/species/fern.jpg'
  }
];

export const ACTIVITIES: Activity[] = [
  {
    id: 'act-01',
    title: 'Zero-G Yoga',
    duration: '1 Hour',
    price: 50,
    requiredGear: ['Flexible Bodysuit'],
    description: 'Perform poses impossible on Earth while floating on a magnetic platform.'
  },
  {
    id: 'act-02',
    title: 'Canopy Gliding',
    duration: '3 Hours',
    price: 250,
    requiredGear: ['Wing-Suit', 'Nav-Goggles'],
    description: 'Leap from the Vellara towers and glide on the thermal winds through the jungle.'
  },
  {
    id: 'act-03',
    title: 'Double-Sunset Cruise',
    duration: '4 Hours',
    price: 120,
    requiredGear: ['UV-Filter Sunglasses'],
    description: 'Watch the binary stars Sol-A and Sol-B set over the purple ocean.'
  },
  {
    id: 'act-04',
    title: 'Geyser Surfing',
    duration: '2 Hours',
    price: 400,
    requiredGear: ['Hydro-Board', 'Crash Helmet'],
    description: 'Ride the slow-motion water columns erupting from the Crystal Geysers.'
  }
];

export const TOUR_SPOTS: TourSpot[] = [
  {
    id: 'spot-01',
    name: 'The Levitating Archipelago',
    region: 'Equatorial Magnetic Zone',
    description: 'A chain of massive rock islands floating 500m above the sea. The view is unmatched.',
    heroImage: '/assets/spots/archipelago.jpg',
    availableActivities: ['act-01', 'act-02'],
    rating: 4.9,
    difficulty: 'Moderate'
  },
  {
    id: 'spot-02',
    name: 'Vellaris Prime (Tree City)',
    region: 'Deep Jungle',
    description: 'The capital city of the Vellara, woven entirely out of living bio-luminescent vines.',
    heroImage: '/assets/spots/city.jpg',
    availableActivities: ['act-02', 'act-03'],
    rating: 4.7,
    difficulty: 'Relaxing'
  },
  {
    id: 'spot-03',
    name: 'The Crystal Geysers',
    region: 'Kaelo Basin',
    description: 'Thermal vents that shoot sparkling mineral water high into the low-gravity atmosphere.',
    heroImage: '/assets/spots/geysers.jpg',
    availableActivities: ['act-03', 'act-04'],
    rating: 4.5,
    difficulty: 'Extreme'
  }
];