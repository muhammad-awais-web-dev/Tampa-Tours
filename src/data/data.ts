// --- Interfaces (Same as before) ---

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
  classification: 'Intelligent' | 'Mammal' | 'Avian' | 'Aquatic' | 'Insect' | 'Flora';
  description: string;
  height: string;
  dangerLevel: 'Safe' | 'Caution' | 'Deadly';
  imageUrl: string;
}

export interface Activity {
  id: string;
  title: string;
  duration: string;
  price: number; // Galactic Credits
  requiredGear: string[];
  description: string;
}

export interface TourSpot {
  id: string;
  name: string;
  region: string;
  description: string;
  heroImage: string;
  availableActivities: string[]; // Activity IDs
  rating: number;
  difficulty: DifficultyLevel;
}

// --- 1. PLANET INFO ---

export const PLANET_INFO: PlanetStats = {
  name: "Tampa",
  gravity: "0.6g (40% lighter than Earth)",
  tempAverage: "26°C (Tropical)",
  dayDuration: "22 Earth Hours",
  moons: ["Kaelo (Violet)", "Ria (Blue)"],
  description: "A super-oxygenated, low-gravity paradise orbiting a binary star system. Known for its vertical jungles and magnetic floating islands."
};

// --- 2. ACTIVITIES (6 Total) ---

export const ACTIVITIES: Activity[] = [
  {
    id: 'act-yoga',
    title: 'Zero-G Yoga',
    duration: '1 Hour',
    price: 50,
    requiredGear: ['Flexible Bodysuit'],
    description: 'Perform poses impossible on Earth while floating on a magnetic platform.'
  },
  {
    id: 'act-glide',
    title: 'Canopy Gliding',
    duration: '3 Hours',
    price: 250,
    requiredGear: ['Wing-Suit', 'Nav-Goggles'],
    description: 'Leap from the Vellara towers and glide on the thermal winds through the jungle.'
  },
  {
    id: 'act-cruise',
    title: 'Double-Sunset Cruise',
    duration: '4 Hours',
    price: 120,
    requiredGear: ['UV-Filter Sunglasses'],
    description: 'Watch the binary stars Sol-A and Sol-B set over the purple ocean.'
  },
  {
    id: 'act-surf',
    title: 'Geyser Surfing',
    duration: '2 Hours',
    price: 400,
    requiredGear: ['Hydro-Board', 'Crash Helmet'],
    description: 'Ride the slow-motion water columns erupting from the Crystal Geysers.'
  },
  {
    id: 'act-cave',
    title: 'Abyssal Spelunking',
    duration: '5 Hours',
    price: 550,
    requiredGear: ['O2-Booster', 'Thermal Lamp'],
    description: 'Deep cave exploration to see the roots of the world-trees and glowing fungi.'
  },
  {
    id: 'act-magnet',
    title: 'Magnetic Sail-Racing',
    duration: '2 Hours',
    price: 300,
    requiredGear: ['G-Force Suit'],
    description: 'Race small pods that surf the magnetic field lines between floating islands.'
  }
];

// --- 3. TOUR SPOTS (10 Total) ---

export const TOUR_SPOTS: TourSpot[] = [
  {
    id: 'spot-01',
    name: 'The Levitating Archipelago',
    region: 'Equatorial Magnetic Zone',
    description: 'A chain of massive rock islands floating 500m above the sea. The view is unmatched.',
    heroImage: '/assets/spots/archipelago.webp',
    availableActivities: ['act-yoga', 'act-magnet'],
    rating: 4.9,
    difficulty: 'Moderate'
  },
  {
    id: 'spot-02',
    name: 'Vellaris Prime',
    region: 'Deep Jungle',
    description: 'The capital city of the Vellara, woven entirely out of living bio-luminescent vines in the high canopy.',
    heroImage: '/assets/spots/city.webp',
    availableActivities: ['act-glide', 'act-cruise'],
    rating: 4.7,
    difficulty: 'Relaxing'
  },
  {
    id: 'spot-03',
    name: 'The Crystal Geysers',
    region: 'Kaelo Basin',
    description: 'Thermal vents that shoot sparkling mineral water high into the low-gravity atmosphere.',
    heroImage: '/assets/spots/geysers.webp',
    availableActivities: ['act-surf'],
    rating: 4.5,
    difficulty: 'Extreme'
  },
  {
    id: 'spot-04',
    name: 'Sapphire Sands Beach',
    region: 'Eastern Coast',
    description: 'Endless beaches made of crushed blue gemstones. The waves here are 20ft high but move in slow motion.',
    heroImage: '/assets/spots/beach.webp',
    availableActivities: ['act-cruise', 'act-yoga'],
    rating: 4.8,
    difficulty: 'Relaxing'
  },
  {
    id: 'spot-05',
    name: 'The Whispering Caverns',
    region: 'Underground',
    description: 'Massive cave systems filled with Sonic-Reeds that hum when the wind blows.',
    heroImage: '/assets/spots/caves.webp',
    availableActivities: ['act-cave'],
    rating: 4.2,
    difficulty: 'Expert'
  },
  {
    id: 'spot-06',
    name: 'Mount Aethel',
    region: 'Highlands',
    description: 'The highest peak on Tampa. At the summit, the atmosphere is thin enough to see the stars during the day.',
    heroImage: '/assets/spots/mountain.webp',
    availableActivities: ['act-glide', 'act-magnet'],
    rating: 4.6,
    difficulty: 'Extreme'
  },
  {
    id: 'spot-07',
    name: 'The Glass Desert',
    region: 'Southern Hemisphere',
    description: 'A region where lightning strikes turn the sand into intricate glass sculptures.',
    heroImage: '/assets/spots/desert.webp',
    availableActivities: ['act-magnet'],
    rating: 4.1,
    difficulty: 'Moderate'
  },
  {
    id: 'spot-08',
    name: 'Star-Fall Crater',
    region: 'Northern Wastes',
    description: 'An ancient impact site that is now a lush lake filled with glowing algae.',
    heroImage: '/assets/spots/crater.webp',
    availableActivities: ['act-cruise', 'act-surf'],
    rating: 4.3,
    difficulty: 'Moderate'
  },
  {
    id: 'spot-09',
    name: 'The Razor Canyon',
    region: 'Western Rift',
    description: 'A narrow canyon filled with sharp wind currents. Only for the bravest gliders.',
    heroImage: '/assets/spots/canyon.webp',
    availableActivities: ['act-glide', 'act-cave'],
    rating: 4.8,
    difficulty: 'Expert'
  },
  {
    id: 'spot-10',
    name: 'Nimbus Gardens',
    region: 'Cloud Layer',
    description: 'Bio-engineered platforms that float within the clouds themselves.',
    heroImage: '/assets/spots/clouds.webp',
    availableActivities: ['act-yoga'],
    rating: 5.0,
    difficulty: 'Relaxing'
  }
];

// --- 4. SPECIES (23 Total) ---

export const SPECIES: Species[] = [
  // -- Intelligent --
  {
    id: 'sp-01',
    name: 'The Vellara',
    classification: 'Intelligent',
    description: 'Tall, four-armed architects. They weave cities into trees.',
    height: '2.3m',
    dangerLevel: 'Safe',
    imageUrl: '/assets/species/vellara.webp'
  },
  
  // -- Mammals (Land) --
  {
    id: 'sp-02',
    name: 'Bounce-Hopper',
    classification: 'Mammal',
    description: 'Spherical fur-balls that jump 30ft. Very friendly.',
    height: '0.4m',
    dangerLevel: 'Safe',
    imageUrl: '/assets/species/hopper.webp'
  },
  {
    id: 'sp-03',
    name: 'Hex-Panther',
    classification: 'Mammal',
    description: 'Six-legged predator with camouflage fur. Hunts in the canopy.',
    height: '1.2m',
    dangerLevel: 'Deadly',
    imageUrl: '/assets/species/panther.webp'
  },
  {
    id: 'sp-04',
    name: 'Sloth-Strider',
    classification: 'Mammal',
    description: 'Massive, slow-moving herbivore with legs like stilts.',
    height: '5.0m',
    dangerLevel: 'Safe',
    imageUrl: '/assets/species/sloth.webp'
  },
  {
    id: 'sp-05',
    name: 'Silver-Back Digger',
    classification: 'Mammal',
    description: 'Burrows into the floating islands to eat mineral roots.',
    height: '0.8m',
    dangerLevel: 'Caution',
    imageUrl: '/assets/species/digger.webp'
  },
  {
    id: 'sp-06',
    name: 'Cloud-Lemur',
    classification: 'Mammal',
    description: 'Has flaps of skin to glide between trees. Steals tourist snacks.',
    height: '0.5m',
    dangerLevel: 'Caution',
    imageUrl: '/assets/species/lemur.webp'
  },

  // -- Avian (Flying) --
  {
    id: 'sp-07',
    name: 'Sky-Ray (Aeromanta)',
    classification: 'Avian',
    description: 'Giant manta-rays that float on air currents.',
    height: '4m Wingspan',
    dangerLevel: 'Caution',
    imageUrl: '/assets/species/skyray.webp'
  },
  {
    id: 'sp-08',
    name: 'Prism-Wing',
    classification: 'Avian',
    description: 'Small birds with feathers that refract light like crystals.',
    height: '0.2m',
    dangerLevel: 'Safe',
    imageUrl: '/assets/species/prism.webp'
  },
  {
    id: 'sp-09',
    name: 'Thunder-Hawk',
    classification: 'Avian',
    description: 'Dives at supersonic speeds to catch prey.',
    height: '1.5m',
    dangerLevel: 'Deadly',
    imageUrl: '/assets/species/hawk.webp'
  },
  {
    id: 'sp-10',
    name: 'Whisper-Moth',
    classification: 'Avian',
    description: 'Nocturnal insects the size of a dinner plate. Attracted to light.',
    height: '0.3m',
    dangerLevel: 'Safe',
    imageUrl: '/assets/species/moth.webp'
  },
  {
    id: 'sp-11',
    name: 'Balloon-Owl',
    classification: 'Avian',
    description: 'Inflates its throat sac to float silently while hunting.',
    height: '0.6m',
    dangerLevel: 'Caution',
    imageUrl: '/assets/species/owl.webp'
  },

  // -- Aquatic --
  {
    id: 'sp-12',
    name: 'Neon-Shark',
    classification: 'Aquatic',
    description: 'Bio-luminescent predator that hunts in the deep reefs.',
    height: '3.0m',
    dangerLevel: 'Deadly',
    imageUrl: '/assets/species/shark.webp'
  },
  {
    id: 'sp-13',
    name: 'Glass-Jelly',
    classification: 'Aquatic',
    description: 'Completely transparent jellyfish. Hard to see, painful sting.',
    height: '1.0m',
    dangerLevel: 'Caution',
    imageUrl: '/assets/species/jelly.webp'
  },
  {
    id: 'sp-14',
    name: 'Singing-Whale',
    classification: 'Aquatic',
    description: 'Generates low-frequency hums that can be felt on land.',
    height: '20m',
    dangerLevel: 'Safe',
    imageUrl: '/assets/species/whale.webp'
  },
  {
    id: 'sp-15',
    name: 'Thermal-Turtle',
    classification: 'Aquatic',
    description: 'Shell is heat-resistant. Swims near underwater volcanoes.',
    height: '1.5m',
    dangerLevel: 'Safe',
    imageUrl: '/assets/species/turtle.webp'
  },

  // -- Flora (Plants) --
  {
    id: 'sp-16',
    name: 'Helium-Fern',
    classification: 'Flora',
    description: 'Floats upright, tethered by vines. Filled with gas.',
    height: '15m',
    dangerLevel: 'Safe',
    imageUrl: '/assets/species/fern.webp'
  },
  {
    id: 'sp-17',
    name: 'Iron-Root Tree',
    classification: 'Flora',
    description: 'The skyscrapers of the jungle. Wood is as hard as metal.',
    height: '300m',
    dangerLevel: 'Safe',
    imageUrl: '/assets/species/ironroot.webp'
  },
  {
    id: 'sp-18',
    name: 'Razor-Vine',
    classification: 'Flora',
    description: 'Thorns are incredibly sharp. Do not touch.',
    height: 'Varies',
    dangerLevel: 'Caution',
    imageUrl: '/assets/species/vine.webp'
  },
  {
    id: 'sp-19',
    name: 'Oxygen-Puff',
    classification: 'Flora',
    description: 'Releases bursts of pure oxygen when touched.',
    height: '0.5m',
    dangerLevel: 'Safe',
    imageUrl: '/assets/species/puff.webp'
  },
  {
    id: 'sp-20',
    name: 'Star-Moss',
    classification: 'Flora',
    description: 'Glows bright purple at night. Covers the jungle floor.',
    height: 'Ground',
    dangerLevel: 'Safe',
    imageUrl: '/assets/species/moss.webp'
  },
  {
    id: 'sp-21',
    name: 'Sonic-Reed',
    classification: 'Flora',
    description: 'Hollow stems that create music in the wind.',
    height: '2m',
    dangerLevel: 'Safe',
    imageUrl: '/assets/species/reed.webp'
  },
  {
    id: 'sp-22',
    name: 'Trap-Lily',
    classification: 'Flora',
    description: 'Large enough to swallow a Cloud-Lemur whole.',
    height: '1.0m',
    dangerLevel: 'Caution',
    imageUrl: '/assets/species/lily.webp'
  },
  {
    id: 'sp-23',
    name: 'Mirror-Leaf',
    classification: 'Flora',
    description: 'Leaves are reflective silver to deflect the double suns.',
    height: '5m',
    dangerLevel: 'Safe',
    imageUrl: '/assets/species/mirror.webp'
  }
];