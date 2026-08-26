import { HistoricalEvent } from '@/types';

export const HISTORICAL_EVENTS: HistoricalEvent[] = [
  {
    year: 2010,
    title: 'Instagram Launched & iPad Unveiled',
    description: 'Instagram debuted on iOS while Apple released the very first iPad, changing touch computing forever.',
    category: 'tech',
    icon: '📱',
  },
  {
    year: 2011,
    title: 'Curiosity Rover Launched to Mars',
    description: 'NASA launched Curiosity to search for signs of past habitability on Mars.',
    category: 'space',
    icon: '🚀',
  },
  {
    year: 2012,
    title: 'Higgs Boson Discovery',
    description: 'CERN scientists confirmed the discovery of the Higgs Boson particle at the Large Hadron Collider.',
    category: 'science',
    icon: '⚛️',
  },
  {
    year: 2013,
    title: 'Voyager 1 Leaves Solar System',
    description: 'Voyager 1 officially became the first human-made object to venture into interstellar space.',
    category: 'space',
    icon: '🌌',
  },
  {
    year: 2014,
    title: 'First Comet Landing (Rosetta Mission)',
    description: 'ESA Philae lander touched down on Comet 67P, a historic space exploration first.',
    category: 'science',
    icon: '☄️',
  },
  {
    year: 2015,
    title: 'Gravitational Waves Detected',
    description: 'LIGO detected gravitational waves for the first time, proving Einstein’s 100-year-old prediction.',
    category: 'science',
    icon: '🌊',
  },
  {
    year: 2016,
    title: 'AlphaGo Beats World Champion',
    description: 'DeepMind’s AlphaGo defeated Go champion Lee Sedol, marking a huge breakthrough in Artificial Intelligence.',
    category: 'tech',
    icon: '🤖',
  },
  {
    year: 2017,
    title: 'SpaceX Reusable Rocket Landing',
    description: 'SpaceX achieved the first successful reflight of an orbital class booster rocket.',
    category: 'space',
    icon: '🚀',
  },
  {
    year: 2018,
    title: 'Tesla Roadster Sent to Space',
    description: 'SpaceX launched Falcon Heavy carrying Elon Musk’s Tesla Roadster towards Mars orbit.',
    category: 'space',
    icon: '🚗',
  },
  {
    year: 2019,
    title: 'First Image of a Black Hole',
    description: 'The Event Horizon Telescope team captured the world’s very first image of a supermassive black hole.',
    category: 'science',
    icon: '🕳️',
  },
  {
    year: 2020,
    title: 'Global Pandemic & Remote Work Era',
    description: 'COVID-19 reshaped global daily life, accelerating remote work, virtual events, and video culture.',
    category: 'world',
    icon: '🌍',
  },
  {
    year: 2021,
    title: 'James Webb Space Telescope Launch',
    description: 'The most powerful space telescope ever built was launched to observe the first galaxies.',
    category: 'space',
    icon: '🔭',
  },
  {
    year: 2022,
    title: 'ChatGPT & Generative AI Boom',
    description: 'OpenAI released ChatGPT to the public, igniting a global artificial intelligence revolution.',
    category: 'tech',
    icon: '🧠',
  },
  {
    year: 2023,
    title: 'Apple Vision Pro & Commercial Fusion Milestone',
    description: 'Spatial computing emerged alongside historic breakthroughs in net-energy-gain nuclear fusion.',
    category: 'tech',
    icon: '🥽',
  },
  {
    year: 2024,
    title: 'Autonomous AI Agents & Quantum Supremacy',
    description: 'AI agents began automating complex workflows, and quantum computers hit unprecedented qubit stability.',
    category: 'tech',
    icon: '⚡',
  },
  {
    year: 2025,
    title: 'Humanoid Robots & Commercial Moon Landers',
    description: 'Commercial robotics entered factories while private lunar missions established regular payload delivery.',
    category: 'tech',
    icon: '🤖',
  },
  {
    year: 2026,
    title: 'Next-Gen Neural Interfaces & Artemis Missions',
    description: 'Direct brain-computer interfaces gained clinical approval while crewed lunar orbits resumed.',
    category: 'science',
    icon: '🧬',
  },
];

export function getEventsForRange(startYear: number, endYear: number = 2026): HistoricalEvent[] {
  return HISTORICAL_EVENTS.filter(e => e.year >= startYear && e.year <= endYear);
}
