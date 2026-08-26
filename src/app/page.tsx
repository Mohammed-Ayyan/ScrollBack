import { Hero } from '@/components/landing/Hero';
import { EditorialTeaserGrid } from '@/components/landing/EditorialTeaserGrid';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <EditorialTeaserGrid />
    </div>
  );
}
