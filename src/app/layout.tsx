import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://scrollback.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Instagram Time Calculator — See How Much Time You Spend Scrolling | ScrollBack',
    template: '%s | ScrollBack',
  },
  description:
    "See how much time you've spent on Instagram and Reels. Use your Instagram average daily time to calculate hours, days, years, estimated Reels, and what that time could become.",
  keywords: [
    'Instagram time calculator',
    'Instagram screen time',
    'Instagram time spent',
    'Instagram usage calculator',
    'Reels time calculator',
    'Reels screen time',
    'How much time do I spend on Instagram',
    'How many Reels have I watched',
    'Instagram scrolling calculator',
    'Social media time calculator',
    'Screen time calculator',
    'Time wasted on Instagram',
    'Calculate Instagram time spent',
  ],
  authors: [{ name: 'ScrollBack' }],
  creator: 'ScrollBack',
  publisher: 'ScrollBack',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Instagram Time Calculator — How Much Time Have You Spent Scrolling? | ScrollBack',
    description:
      'Enter your reported average daily Instagram time to calculate cumulative hours, full days lost, estimated Reels watched, and alternate life milestones.',
    url: siteUrl,
    siteName: 'ScrollBack',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ScrollBack — Instagram Time & Screen Time Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much of Your Life Went Into Scrolling? | ScrollBack Instagram Time Calculator',
    description:
      'Calculate total hours lost, estimated Reels watched, and alternate life achievements with your reported Instagram average.',
    images: ['/og-image.png'],
    creator: '@scrollback_app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'googlebb15fd00739c1f2a',
  },
};

const jsonLdWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ScrollBack',
  url: siteUrl,
  description:
    'An interactive Instagram time calculator revealing cumulative screen time, estimated Reels watched, and opportunity costs.',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/instagram-time-calculator?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

const jsonLdSoftwareApp = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'ScrollBack Instagram Time Calculator',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  url: `${siteUrl}/calculator`,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description:
    'Calculate your cumulative Instagram screen time, full days lost, and estimated short video count using your reported average daily time.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftwareApp) }}
        />
      </head>
      <body className="min-h-screen bg-background text-editorial-cream flex flex-col antialiased selection:bg-accent-coral selection:text-background">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
