import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

export const metadata: Metadata = {
  title: 'ScrollBack — Instagram Reels Time & Life Cost Calculator',
  description: 'An editorial data storytelling experience revealing the true cost of your Instagram Reels screen time. Total hours lost, videos watched, historical event milestones, and your alternate reality timeline.',
  keywords: ['Instagram Reels calculator', 'screen time calculator', 'digital detox', 'scrolling habit', 'productivity'],
  openGraph: {
    title: 'ScrollBack — How much of your life disappeared into scrolling?',
    description: 'Calculate your Reels screen time and see what your scrolling hours became.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-editorial-cream flex flex-col antialiased selection:bg-accent-coral selection:text-background">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
