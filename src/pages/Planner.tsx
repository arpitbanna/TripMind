import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import MapPicker from "@/components/MapPicker";
import TravelBuddiesModal from "@/components/TravelBuddiesModal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, MapPin, DollarSign, Users, Sparkles, Plus, Minus, Leaf, Zap, Users as UsersGroup, Mountain, Compass, Map } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mapImage from "@/assets/map-routes.jpg";

const Planner = () => {
  const navigate = useNavigate();
  const [showItinerary, setShowItinerary] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [travelers, setTravelers] = useState(1);
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  const [mapPickerOpen, setMapPickerOpen] = useState(false);
  const [selectedLocationField, setSelectedLocationField] = useState<"from" | "to">("from");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [travelBuddiesOpen, setTravelBuddiesOpen] = useState(false);

  const preferences = [
    { id: "solo", label: "Solo", icon: Users },
    { id: "group", label: "Group", icon: UsersGroup },
    { id: "eco", label: "Eco", icon: Leaf },
    { id: "fast", label: "Fast", icon: Zap },
    { id: "scenic", label: "Scenic", icon: Mountain },
  ];

  const togglePreference = (id: string) => {
    setSelectedPreferences(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const handleSmartRecommender = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowItinerary(true);
    }, 2000);
  };

  const handleMapPicker = (field: "from" | "to") => {
    setSelectedLocationField(field);
    setMapPickerOpen(true);
  };

  const handleLocationSelect = (location: string) => {
    if (selectedLocationField === "from") {
      setFromLocation(location);
    } else {
      setToLocation(location);
    }
  };

  const mockItinerary = [
    {
      day: 1,
      title: "Arrive in Ubud",
      places: ["Ubud Rice Terraces", "Sacred Monkey Forest"],
      distance: "25km",
      time: "6h",
      mode: "Bus",
      aiTip: "Visit rice terraces at sunrise for best photos and fewer crowds",
    },
    {
      day: 2,
      title: "Cultural Exploration",
      places: ["Tanah Lot Temple", "Uluwatu Temple"],
      distance: "40km",
      time: "8h",
      mode: "Scooter",
      aiTip: "Eco-friendly scooter rental available - saves 60% CO₂",
    },
    {
      day: 3,
      title: "Beach Day",
      places: ["Seminyak Beach", "Canggu Beach"],
      distance: "15km",
      time: "5h",
      mode: "Bicycle",
      aiTip: "Hidden gem: Local beachside café serves best smoothie bowls",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-12 bg-gradient-card">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8 animate-fade-in text-center">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-teal bg-clip-text text-transparent">AI Trip Planner</span>
            </h1>
            <p className="text-muted-foreground">Let TripMind create your perfect itinerary</p>
          </div>

          {/* Preference Chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in">
            {preferences.map((pref) => (
              <button
                key={pref.id}
                onClick={() => togglePreference(pref.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  selectedPreferences.includes(pref.id)
                    ? "bg-gradient-teal text-white shadow-hover scale-105"
                    : "bg-card text-muted-foreground hover:bg-muted hover:scale-105"
                }`}
              >
                <pref.icon className="h-4 w-4" />
                {pref.label}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Planning Form */}
            <Card className="shadow-soft animate-slide-up backdrop-blur-sm bg-card/95">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Sparkles className="h-6 w-6 text-primary" />
                  Plan Your Trip ✈️
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <Label htmlFor="from" className="flex items-center justify-between mb-2">
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      Starting Location
                    </span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleMapPicker("from")}
                      className="h-auto p-1 text-xs"
                    >
                      <Map className="h-3 w-3 mr-1" />
                      Pick from Map
                    </Button>
                  </Label>
                  <Input 
                    id="from" 
                    placeholder="Enter city or location" 
                    className="h-12"
                    list="location-suggestions"
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                  />
                  <datalist id="location-suggestions">
                    <option value="New Delhi, India" />
                    <option value="Mumbai, India" />
                    <option value="Bengaluru, India" />
                  </datalist>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-dashed hover:bg-primary/5"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Stop
                </Button>

                <div>
                  <Label htmlFor="to" className="flex items-center justify-between mb-2">
                    <span className="flex items-center gap-2">
                      <Compass className="h-4 w-4 text-primary" />
                      Destination
                    </span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleMapPicker("to")}
                      className="h-auto p-1 text-xs"
                    >
                      <Map className="h-3 w-3 mr-1" />
                      Pick from Map
                    </Button>
                  </Label>
                  <Input 
                    id="to" 
                    placeholder="Where do you want to go?" 
                    className="h-12"
                    list="location-suggestions"
                    value={toLocation}
                    onChange={(e) => setToLocation(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="days" className="mb-2 block">Trip Duration (Days)</Label>
                    <Input id="days" type="number" placeholder="7" min="1" className="h-12" />
                  </div>
                  <div>
                    <Label className="mb-2 block">Optional Date Range</Label>
                    <Input type="date" className="h-12" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="budget" className="flex items-center gap-2 mb-2">
                    <DollarSign className="h-4 w-4 text-primary" />
                    Budget (₹)
                  </Label>
                  <Input 
                    id="budget" 
                    placeholder="50,000" 
                    type="number" 
                    className="h-12"
                  />
                </div>

                <div>
                  <Label className="flex items-center gap-2 mb-3">
                    <Users className="h-4 w-4 text-primary" />
                    Number of Travelers
                  </Label>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setTravelers(Math.max(1, travelers - 1))}
                      className="h-12 w-12"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-2xl font-semibold min-w-[3rem] text-center">
                      {travelers}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setTravelers(travelers + 1)}
                      className="h-12 w-12"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="interests" className="mb-2 block">
                    Interests (auto-suggestions)
                  </Label>
                  <Input 
                    id="interests" 
                    placeholder="Type: beaches, mountains, heritage..." 
                    className="h-12"
                    list="interest-suggestions"
                  />
                  <datalist id="interest-suggestions">
                    <option value="Beaches" />
                    <option value="Mountains" />
                    <option value="Heritage & Culture" />
                    <option value="Adventure Sports" />
                    <option value="Food & Cuisine" />
                    <option value="Wildlife Safari" />
                    <option value="Photography" />
                    <option value="Relaxation & Wellness" />
                  </datalist>
                </div>

                <Button 
                  className="w-full h-14 text-lg font-bold bg-gradient-teal hover:shadow-hover transform hover:scale-105 transition-all"
                  onClick={handleSmartRecommender}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Planning your route...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-5 w-5" />
                      Smart Recommender
                    </>
                  )}
                </Button>
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

          {/* Loading State */}
          {isLoading && (
            <div className="mt-8 text-center animate-fade-in">
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-card rounded-full shadow-soft">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary" />
                <p className="text-lg font-medium bg-gradient-teal bg-clip-text text-transparent">
                  TripMind is planning your perfect route...
                </p>
              </div>
            </div>
          )}

          {/* Day-by-Day Itinerary */}
          {showItinerary && !isLoading && (
            <div className="mt-8 animate-fade-in space-y-6">
              <h2 className="text-3xl font-bold text-center mb-8">
                Your Personalized Itinerary
              </h2>
              
              <div className="space-y-4">
                {mockItinerary.map((day, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-hover transition-all">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-full bg-gradient-teal flex items-center justify-center text-white">
                            <span className="text-2xl font-bold">Day {day.day}</span>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3">{day.title}</h3>
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-muted-foreground mb-2">Places to Visit:</p>
                              <ul className="space-y-1">
                                {day.places.map((place, i) => (
                                  <li key={i} className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-primary" />
                                    <span>{place}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="space-y-2">
                              <p className="flex items-center gap-2">
                                <Compass className="h-4 w-4 text-primary" />
                                <strong>Distance:</strong> {day.distance}
                              </p>
                              <p className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-primary" />
                                <strong>Time:</strong> {day.time}
                              </p>
                              <p className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <strong>Travel Mode:</strong> {day.mode}
                              </p>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-accent/20 rounded-lg border-l-4 border-primary">
                            <p className="flex items-start gap-2">
                              <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span><strong>AI Tip:</strong> {day.aiTip}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center pt-6">
                <Button 
                  className="h-12 px-8 text-lg font-semibold bg-gradient-teal hover:shadow-hover"
                  onClick={() => navigate('/booking')}
                >
                  Save & Continue to Booking
                </Button>
                <Button 
                  variant="outline" 
                  className="h-12 px-8 text-lg font-semibold"
                  onClick={() => setShowItinerary(false)}
                >
                  Edit Route
                </Button>
                <Button 
                  variant="outline" 
                  className="h-12 px-8 text-lg font-semibold border-eco-green text-eco-green hover:bg-eco-light"
                >
                  <Leaf className="h-5 w-5 mr-2" />
                  Replan with Eco Mode
                </Button>
                <Button 
                  variant="outline" 
                  className="h-12 px-8 text-lg font-semibold border-primary text-primary hover:bg-primary/10"
                  onClick={() => setTravelBuddiesOpen(true)}
                >
                  <UsersGroup className="h-5 w-5 mr-2" />
                  Find Travel Buddies 🤝
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />

      {/* Modals */}
      {isLoading && <LoadingScreen message="TripMind is planning your perfect route..." />}
      <MapPicker 
        open={mapPickerOpen} 
        onOpenChange={setMapPickerOpen}
        onLocationSelect={handleLocationSelect}
      />
      <TravelBuddiesModal
        open={travelBuddiesOpen}
        onOpenChange={setTravelBuddiesOpen}
      />
    </div>
  );
};

export default Planner;
