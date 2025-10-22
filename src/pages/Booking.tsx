import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plane, Hotel, Home, Package, Train, Bus, Car, 
  ArrowLeftRight, Calendar, Users, Star, Leaf, Clock
} from "lucide-react";
import { useState } from "react";

const Booking = () => {
  const [activeTab, setActiveTab] = useState("flights");
  const [showResults, setShowResults] = useState(false);

  const bookingTabs = [
    { id: "flights", label: "Flights", icon: Plane },
    { id: "hotels", label: "Hotels", icon: Hotel },
    { id: "homestays", label: "Homestays & Villas", icon: Home },
    { id: "packages", label: "Holiday Packages", icon: Package },
    { id: "trains", label: "Trains", icon: Train },
    { id: "buses", label: "Buses", icon: Bus },
    { id: "cabs", label: "Cabs", icon: Car },
  ];

  const transportOptions = [
    {
      type: "Flight",
      icon: Plane,
      airline: "Akasa Air",
      price: "₹6,796",
      duration: "2h 15m",
      departure: "21:55",
      arrival: "00:50",
      from: "New Delhi",
      to: "Bengaluru",
      co2: "85kg",
      isNonStop: true,
    },
    {
      type: "Train",
      icon: Train,
      airline: "Rajdhani Express",
      price: "₹2,500",
      duration: "12h 30m",
      departure: "16:45",
      arrival: "05:15",
      from: "New Delhi",
      to: "Bengaluru",
      co2: "15kg",
      isBestEco: true,
    },
    {
      type: "Bus",
      icon: Bus,
      airline: "VRL Travels",
      price: "₹1,800",
      duration: "18h",
      departure: "18:00",
      arrival: "12:00",
      from: "New Delhi",
      to: "Bengaluru",
      co2: "45kg",
    },
  ];

  const hotelOption = {
    name: "The Oberoi, Bengaluru",
    rating: 4.8,
    reviews: 1240,
    price: "₹8,500",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header Tabs */}
          <div className="mb-8 animate-fade-in">
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {bookingTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                    activeTab === tab.id
                      ? "bg-gradient-teal text-white shadow-hover"
                      : "bg-card text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Booking Card */}
          <Card className="shadow-hover mb-8 animate-slide-up">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div>
                  <Label htmlFor="from" className="flex items-center gap-2 mb-2">
                    <ArrowLeftRight className="h-4 w-4 text-primary" />
                    From
                  </Label>
                  <Input 
                    id="from" 
                    placeholder="Delhi, New Delhi, India" 
                    className="h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="to" className="flex items-center gap-2 mb-2">
                    <ArrowLeftRight className="h-4 w-4 text-primary" />
                    To
                  </Label>
                  <Input 
                    id="to" 
                    placeholder="Bengaluru, Karnataka, India" 
                    className="h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="departure" className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    Departure
                  </Label>
                  <Input 
                    id="departure" 
                    type="date" 
                    className="h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="travelers" className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-primary" />
                    Travelers & Class
                  </Label>
                  <Input 
                    id="travelers" 
                    placeholder="1 Adult, Economy" 
                    className="h-12"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <button className="px-4 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
                  Regular
                </button>
                <button className="px-4 py-2 rounded-full border border-input hover:border-primary transition-all">
                  Student
                </button>
                <button className="px-4 py-2 rounded-full border border-input hover:border-primary transition-all">
                  Senior Citizen
                </button>
                <button className="px-4 py-2 rounded-full border border-input hover:border-eco-green text-eco-green hover:bg-eco-light transition-all flex items-center gap-2">
                  <Leaf className="h-4 w-4" />
                  Eco Saver
                </button>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <input type="checkbox" id="aiMode" className="h-4 w-4 rounded" />
                <label htmlFor="aiMode" className="text-sm font-medium">
                  Add Smart Recommender Mix (AI Mode) - Best combination of train + bus + cab
                </label>
              </div>

              <Button 
                className="w-full h-14 text-lg font-semibold bg-gradient-teal hover:shadow-hover"
                onClick={() => setShowResults(true)}
              >
                Search / Book Now
              </Button>
            </CardContent>
          </Card>

          {/* Search Results */}
          {showResults && (
            <div className="animate-fade-in space-y-6">
              <h2 className="text-2xl font-bold mb-6">Available Options</h2>
              
              {/* Transport Options */}
              <div className="grid gap-4">
                {transportOptions.map((option, index) => (
                  <Card key={index} className={`shadow-soft hover:shadow-hover transition-all ${
                    option.isBestEco ? "ring-2 ring-eco-green" : ""
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-full bg-primary/10">
                            <option.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-lg">{option.airline}</h3>
                              {option.isBestEco && (
                                <span className="text-xs bg-eco-green text-white px-3 py-1 rounded-full font-medium">
                                  Best Eco
                                </span>
                              )}
                              {option.isNonStop && (
                                <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium">
                                  Non-stop
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{option.type}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Departure</p>
                            <p className="font-semibold text-lg">{option.departure}</p>
                            <p className="text-xs text-muted-foreground">{option.from}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              Duration
                            </p>
                            <p className="font-semibold">{option.duration}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Arrival</p>
                            <p className="font-semibold text-lg">{option.arrival}</p>
                            <p className="text-xs text-muted-foreground">{option.to}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1">
                              <Leaf className="h-3 w-3" />
                              CO₂
                            </p>
                            <p className="font-semibold">{option.co2}</p>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary mb-2">{option.price}</p>
                          <Button className="w-full md:w-auto">Select</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Best Eco Mix Option */}
              <Card className="shadow-hover bg-gradient-to-br from-eco-light to-background border-2 border-eco-green">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 rounded-full bg-eco-green text-white">
                      <Leaf className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Best Eco Mix (AI Recommended)</h3>
                      <p className="text-sm text-muted-foreground">
                        New Delhi → Bengaluru by train → Hotel by auto
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex gap-6">
                      <div>
                        <p className="text-sm text-muted-foreground">Total Duration</p>
                        <p className="font-semibold text-lg">13h 45m</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Total CO₂</p>
                        <p className="font-semibold text-lg text-eco-green">18kg</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Total Price</p>
                        <p className="font-bold text-2xl text-primary">₹3,200</p>
                      </div>
                    </div>
                    <Button className="bg-eco-green hover:bg-eco-green/90">
                      Select Eco Mix
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Hotel Suggestion */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Recommended Stay</h3>
                <Card className="shadow-soft hover:shadow-hover transition-all">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row gap-0">
                      <img 
                        src={hotelOption.image} 
                        alt={hotelOption.name}
                        className="w-full md:w-64 h-48 object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                      />
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-bold text-lg mb-2">{hotelOption.name}</h4>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-soft-yellow text-soft-yellow" />
                              <span className="font-semibold">{hotelOption.rating}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              ({hotelOption.reviews} reviews)
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Per night</p>
                            <p className="text-2xl font-bold text-primary">{hotelOption.price}</p>
                          </div>
                          <Button variant="outline">Change Stay</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Book All CTA */}
              <div className="text-center py-8">
                <Button className="h-16 px-12 text-lg font-bold bg-gradient-teal hover:shadow-hover transform hover:scale-105 transition-all">
                  Book All in One Go
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  Save 15% when booking transport + stay together
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
