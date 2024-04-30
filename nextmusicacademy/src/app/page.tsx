import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/ui/FeaturedCourses";

export default function Home() {
  return (
    <main className="min-h-screen bg-grid-white/[0.02] bg-black/[0.96] antialiased">
      <HeroSection />
      <FeaturedCourses />
    </main>
  );
}
