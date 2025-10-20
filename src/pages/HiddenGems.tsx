import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, MapPin, Star, Heart } from "lucide-react";
import { useState } from "react";
import localGemsImage from "@/assets/local-gems.jpg";

const HiddenGems = () => {
  const [filter, setFilter] = useState("all");

  const gems = [
    {
      name: "Secret Beach Cove",
      location: "Goa, India",
      category: "relaxing",
      rating: 4.8,
      description: "Pristine beach away from tourist crowds",
      image: localGemsImage,
    },
    {
      name: "Mountain Monastery",
      location: "Ladakh, India",
      category: "cultural",
      rating: 4.9,
      description: "Ancient monastery with breathtaking views",
      image: localGemsImage,
    },
    {
      name: "Adventure Trek",
      location: "Himachal, India",
      category: "adventure",
      rating: 4.7,
      description: "Thrilling trek through unexplored trails",
      image: localGemsImage,
    },
    {
      name: "Artisan Village",
      location: "Rajasthan, India",
      category: "cultural",
      rating: 4.6,
      description: "Traditional crafts and local artisans",
      image: localGemsImage,
    },
    {
      name: "Waterfall Paradise",
      location: "Kerala, India",
      category: "relaxing",
      rating: 4.8,
      description: "Hidden waterfall in lush forest",
      image: localGemsImage,
    },
    {
      name: "Rock Climbing Spot",
      location: "Karnataka, India",
      category: "adventure",
      rating: 4.7,
      description: "Natural rock formations for climbing",
      image: localGemsImage,
    },
  ];

  const filteredGems = filter === "all" 
    ? gems 
    : gems.filter(gem => gem.category === filter);

  const randomGem = gems[Math.floor(Math.random() * gems.length)];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Hidden Gems</span>
            </h1>
            <p className="text-muted-foreground mb-6">
              Discover secret spots and authentic local experiences
            </p>

            {/* Spontaneity Button */}
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:shadow-hover group"
              onClick={() => alert(`Suggested: ${randomGem.name} in ${randomGem.location}!`)}
            >
              <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
              Surprise Me!
            </Button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up">
            {[
              { value: "all", label: "All Gems" },
              { value: "relaxing", label: "Relaxing" },
              { value: "adventure", label: "Adventure" },
              { value: "cultural", label: "Cultural" },
            ].map((item) => (
              <Button
                key={item.value}
                variant={filter === item.value ? "default" : "outline"}
                onClick={() => setFilter(item.value)}
                className={filter === item.value ? "bg-gradient-hero" : ""}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Gems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGems.map((gem, index) => (
              <Card 
                key={index} 
                className="overflow-hidden shadow-soft hover:shadow-hover transition-all hover:-translate-y-1 animate-scale-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={gem.image} 
                    alt={gem.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Heart className="h-4 w-4 text-destructive" />
                    </button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{gem.name}</h3>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{gem.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{gem.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{gem.description}</p>
                  <Button className="w-full" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HiddenGems;
