import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Globe, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-travel.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful eco-travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="h-5 w-5 text-primary animate-float" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              AI-Powered Travel Assistant
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Plan Smart.
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Travel Green.
            </span>
            <br />
            Enjoy More.
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Your intelligent travel companion that helps you discover hidden gems,
            book eco-friendly transport, and create unforgettable experiences—all
            while keeping your carbon footprint low.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/planner">
              <Button size="lg" className="bg-gradient-hero hover:shadow-hover transition-all group">
                Start Planning
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4 mt-12">
            {[
              { icon: Sparkles, text: "AI-Powered" },
              { icon: Globe, text: "Smart Routes" },
              { icon: Leaf, text: "Eco-Friendly" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border shadow-soft animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
