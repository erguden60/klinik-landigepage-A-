import HeroSection from "@/section/HeroSection";
import FeaturesSection from "@/section/FeaturesSection";
import HowItWorksSection from "@/section/HowItWorksSection"; // Yeni bölüm
import AboutUsSection from "@/section/AboutUsSection"; // Yeni bölüm

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection /> {/* Buraya ekle */}
      <AboutUsSection /> {/* Buraya ekle */}
    </main>
  );
}
