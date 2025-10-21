import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, MapPin, Star, Heart, Navigation, Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import localGemsImage from "@/assets/local-gems.jpg";

const HiddenGems = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [distanceFilter, setDistanceFilter] = useState("all");
  const [ratingFilter, setRatingFilter] = useState("all");

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

  const handleNearMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          alert(`Your location: ${position.coords.latitude}, ${position.coords.longitude}\nShowing gems near you!`);
        },
        () => {
          alert("Unable to retrieve your location. Please enable location services.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const filteredGems = gems.filter(gem => {
    const matchesCategory = filter === "all" || gem.category === filter;
    const matchesSearch = searchQuery === "" || 
      gem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gem.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRating = ratingFilter === "all" || gem.rating >= parseFloat(ratingFilter);
    return matchesCategory && matchesSearch && matchesRating;
  });

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

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
              {/* Near Me Button */}
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleNearMe}
                className="gap-2"
              >
                <Navigation className="h-5 w-5" />
                Near Me
              </Button>

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

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search by destination or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>
            </div>
          </div>

          {/* Filters Section */}
          <div className="mb-8 animate-slide-up">
            <div className="flex items-center gap-2 mb-4">
              <SlidersHorizontal className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Filters</h3>
            </div>
            
            <div className="space-y-4">
              {/* Category Filters */}
              <div>
                <p className="text-sm font-medium mb-2">Category</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: "all", label: "All Gems" },
                    { value: "relaxing", label: "Relaxing" },
                    { value: "adventure", label: "Adventure" },
                    { value: "cultural", label: "Cultural" },
                  ].map((item) => (
                    <Button
                      key={item.value}
                      variant={filter === item.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilter(item.value)}
                      className={filter === item.value ? "bg-gradient-hero" : ""}
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <p className="text-sm font-medium mb-2">Minimum Rating</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: "all", label: "All Ratings" },
                    { value: "4.5", label: "4.5+" },
                    { value: "4.7", label: "4.7+" },
                    { value: "4.8", label: "4.8+" },
                  ].map((item) => (
                    <Button
                      key={item.value}
                      variant={ratingFilter === item.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setRatingFilter(item.value)}
                      className={ratingFilter === item.value ? "bg-gradient-hero" : ""}
                    >
                      <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                      {item.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
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
