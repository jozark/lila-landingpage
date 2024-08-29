import NavBar from '@/app/components/NavBar';
import HeroSection from '@/app/components/HeroSection';
import FeatureSection from '@/app/components/FeatureSection';
import AppPreviewSection from '@/app/components/AppPreviewSection';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        <HeroSection />
        <FeatureSection />
        <AppPreviewSection />
      </main>
    </>
  );
}
