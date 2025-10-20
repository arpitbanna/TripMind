import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, DollarSign, Users, Sparkles, Train, Car, Plane as PlaneIcon } from "lucide-react";
import { useState } from "react";
import mapImage from "@/assets/map-routes.jpg";

const Planner = () => {
  const [showItinerary, setShowItinerary] = useState(false);

  const mockItinerary = {
    destination: "Bali, Indonesia",
    duration: "7 Days",
    budget: "₹50,000",
    highlights: ["Ubud Rice Terraces", "Sacred Monkey Forest", "Tanah Lot Temple", "Beach Hopping"],
  };

  const transportOptions = [
    {
      type: "Train",
      icon: Train,
      price: "₹2,500",
      duration: "12h",
      co2: "15kg",
      eco: "best",
    },
    {
      type: "Flight",
      icon: PlaneIcon,
      price: "₹8,500",
      duration: "2h",
      co2: "85kg",
      eco: "high",
    },
    {
      type: "Cab",
      icon: Car,
      price: "₹4,200",
      duration: "8h",
      co2: "45kg",
      eco: "medium",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="mb-8 animate-fade-in text-center">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">AI Trip Planner</span>
            </h1>
            <p className="text-muted-foreground">Let AI create your perfect itinerary</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Planning Form */}
            <Card className="shadow-soft animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Plan Your Trip
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="destination" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Destination
                  </Label>
                  <Input id="destination" placeholder="Where do you want to go?" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="budget" className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      Budget
                    </Label>
                    <Input id="budget" placeholder="₹50,000" type="number" />
                  </div>
                  <div>
                    <Label htmlFor="travelers" className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Travelers
                    </Label>
                    <Input id="travelers" placeholder="2" type="number" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="dates" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Travel Dates
                  </Label>
                  <Input id="dates" placeholder="Select dates" type="text" />
                </div>

                <div>
                  <Label htmlFor="interests">Interests</Label>
                  <Input id="interests" placeholder="Adventure, Culture, Relaxation..." />
                </div>

                <Button 
                  className="w-full bg-gradient-hero hover:shadow-hover"
                  onClick={() => setShowItinerary(true)}
                >
                  Generate Itinerary
                </Button>

                {showItinerary && (
                  <div className="mt-6 p-4 bg-accent/50 rounded-lg animate-fade-in">
                    <h3 className="font-semibold mb-3 text-lg">Your Itinerary Preview</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Destination:</strong> {mockItinerary.destination}</p>
                      <p><strong>Duration:</strong> {mockItinerary.duration}</p>
                      <p><strong>Budget:</strong> {mockItinerary.budget}</p>
                      <div>
                        <strong>Highlights:</strong>
                        <ul className="list-disc list-inside mt-1">
                          {mockItinerary.highlights.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Map View */}
            <Card className="shadow-soft animate-slide-up" style={{ animationDelay: "100ms" }}>
              <CardHeader>
                <CardTitle>Route Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative rounded-lg overflow-hidden h-[400px]">
                  <img 
                    src={mapImage} 
                    alt="Travel route map" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm text-white font-medium">
                      Interactive route planning coming soon
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Transport Options */}
          {showItinerary && (
            <div className="mt-8 animate-fade-in">
              <Tabs defaultValue="transport" className="w-full">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                  <TabsTrigger value="transport">Transport</TabsTrigger>
                  <TabsTrigger value="itinerary">Full Itinerary</TabsTrigger>
                </TabsList>
                <TabsContent value="transport" className="mt-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    {transportOptions.map((option, index) => (
                      <Card 
                        key={index} 
                        className={`shadow-soft hover:shadow-hover transition-all ${
                          option.eco === "best" ? "ring-2 ring-eco-green" : ""
                        }`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <option.icon className="h-8 w-8 text-primary" />
                            {option.eco === "best" && (
                              <span className="text-xs bg-eco-green text-white px-2 py-1 rounded-full">
                                Best Eco
                              </span>
                            )}
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{option.type}</h3>
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <p><strong>Price:</strong> {option.price}</p>
                            <p><strong>Duration:</strong> {option.duration}</p>
                            <p><strong>CO₂:</strong> {option.co2}</p>
                          </div>
                          <Button className="w-full mt-4" variant="outline">
                            Select
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="itinerary">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-center text-muted-foreground">
                        Detailed day-by-day itinerary will appear here
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Planner;
