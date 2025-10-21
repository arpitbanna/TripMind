import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import TopDestinations from "@/components/TopDestinations";
import AIPicksCarousel from "@/components/AIPicksCarousel";
import TravelTips from "@/components/TravelTips";
import QuickLinks from "@/components/QuickLinks";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <TopDestinations />
        <AIPicksCarousel />
        <TravelTips />
        <QuickLinks />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
