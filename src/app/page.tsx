import { Hero } from '@/components/landing/Hero';
import { EditorialTeaserGrid } from '@/components/landing/EditorialTeaserGrid';
import { SeoContentSection } from '@/components/landing/SeoContentSection';
import { FaqSection } from '@/components/landing/FaqSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <EditorialTeaserGrid />
      <SeoContentSection />
      <FaqSection />
    </div>
  );
}
