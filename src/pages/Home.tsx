import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import QuickLinks from "@/components/QuickLinks";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <QuickLinks />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
