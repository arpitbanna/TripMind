import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star, QrCode, Navigation } from "lucide-react";
import { useState } from "react";

const LocalConnect = () => {
  const [selectedArtisan, setSelectedArtisan] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const artisans = [
    {
      id: 1,
      name: "Green Valley Coffee Plantation",
      story: "Family-owned coffee plantation for 3 generations. We grow organic, shade-grown coffee using traditional methods.",
      distance: "2.3 km away",
      rating: 4.8,
      reviews: 156,
      category: "Coffee & Tea",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop",
      position: { top: "35%", left: "45%" },
    },
    {
      id: 2,
      name: "Sunrise Pottery Studio",
      story: "Creating handcrafted ceramics inspired by local traditions. Each piece tells a story of our heritage.",
      distance: "1.8 km away",
      rating: 4.9,
      reviews: 203,
      category: "Arts & Crafts",
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=300&fit=crop",
      position: { top: "55%", left: "30%" },
    },
    {
      id: 3,
      name: "Mountain Honey Collective",
      story: "Wild honey harvested from ancient forests. Supporting local beekeepers and preserving bee populations.",
      distance: "3.5 km away",
      rating: 4.7,
      reviews: 124,
      category: "Food & Beverages",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=300&fit=crop",
      position: { top: "25%", left: "65%" },
    },
    {
      id: 4,
      name: "Weaver's Heritage Textiles",
      story: "Traditional hand-woven fabrics using centuries-old techniques passed down through generations.",
      distance: "4.2 km away",
      rating: 4.9,
      reviews: 178,
      category: "Textiles",
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop",
      position: { top: "60%", left: "55%" },
    },
    {
      id: 5,
      name: "Spice Garden Tours",
      story: "Explore our organic spice garden and learn about traditional cultivation methods. Fresh spices available.",
      distance: "5.1 km away",
      rating: 4.6,
      reviews: 89,
      category: "Tours & Experiences",
      image: "https://images.unsplash.com/photo-1596040033229-a0b38ef7353d?w=400&h=300&fit=crop",
      position: { top: "45%", left: "75%" },
    },
  ];

  const filteredArtisans = artisans.filter(
    (artisan) =>
      artisan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artisan.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Connect with
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Local Artisans</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover authentic experiences and support local communities
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto animate-slide-up">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Find a coffee plantation near me..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Interactive Map */}
              <div className="lg:col-span-2">
                <Card className="overflow-hidden h-[600px] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-eco-green/5">
                    {/* Map Background */}
                    <div className="absolute inset-0 opacity-20">
                      <svg className="w-full h-full" viewBox="0 0 800 600">
                        <path
                          d="M100,300 Q250,200 400,280 T700,320"
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          className="text-primary"
                        />
                        <path
                          d="M150,400 Q300,350 450,380 T750,400"
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          className="text-secondary"
                        />
                      </svg>
                    </div>

                    {/* Artisan Markers */}
                    {filteredArtisans.map((artisan) => (
                      <button
                        key={artisan.id}
                        onClick={() => setSelectedArtisan(artisan.id)}
                        className="absolute group"
                        style={{
                          top: artisan.position.top,
                          left: artisan.position.left,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <div className="relative">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                              selectedArtisan === artisan.id
                                ? "bg-primary text-primary-foreground scale-125 shadow-glow"
                                : "bg-card border-2 border-primary text-primary hover:scale-110"
                            }`}
                          >
                            <MapPin className="h-6 w-6" />
                          </div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-eco-green rounded-full animate-ping" />
                        </div>
                        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-card border border-border rounded-lg px-3 py-1 whitespace-nowrap shadow-lg">
                            <p className="text-sm font-medium">{artisan.name}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Artisan Details */}
              <div className="lg:col-span-1">
                {selectedArtisan ? (
                  <Card className="animate-fade-in sticky top-24">
                    <CardHeader>
                      <CardTitle>Artisan Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {(() => {
                        const artisan = artisans.find((a) => a.id === selectedArtisan);
                        if (!artisan) return null;
                        return (
                          <div className="space-y-4">
                            <img
                              src={artisan.image}
                              alt={artisan.name}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                            <div>
                              <h3 className="text-xl font-semibold mb-2">{artisan.name}</h3>
                              <Badge variant="secondary" className="mb-2">
                                {artisan.category}
                              </Badge>
                              <p className="text-muted-foreground text-sm mb-4">{artisan.story}</p>
                            </div>
                            <div className="flex items-center gap-4 text-sm">
                              <div className="flex items-center gap-1">
                                <Navigation className="h-4 w-4 text-primary" />
                                <span>{artisan.distance}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                <span>
                                  {artisan.rating} ({artisan.reviews})
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button className="flex-1">
                                <Navigation className="h-4 w-4 mr-2" />
                                Get Directions
                              </Button>
                              <Button variant="outline" size="icon">
                                <QrCode className="h-5 w-5" />
                              </Button>
                            </div>
                          </div>
                        );
                      })()}
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="h-full flex items-center justify-center">
                    <CardContent className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Click on a marker to view artisan details
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Artisan Grid */}
        <section className="py-12 bg-gradient-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">All Local Artisans</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArtisans.map((artisan, index) => (
                <Card
                  key={artisan.id}
                  className="group hover:shadow-hover transition-all hover:-translate-y-1 cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedArtisan(artisan.id)}
                >
                  <CardContent className="p-0">
                    <img
                      src={artisan.image}
                      alt={artisan.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <Badge variant="secondary" className="mb-2">
                        {artisan.category}
                      </Badge>
                      <h3 className="text-xl font-semibold mb-2">{artisan.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {artisan.story}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Navigation className="h-4 w-4 text-primary" />
                          <span>{artisan.distance}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span>
                            {artisan.rating} ({artisan.reviews})
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LocalConnect;
