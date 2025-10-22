import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RatingModal from "@/components/RatingModal";
import {
  User,
  MapPin,
  Calendar,
  Award,
  Star,
  MessageSquare,
  Edit,
  Trash2,
  Leaf,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState("Traveler");
  const [userEmail, setUserEmail] = useState("traveler@tripmind.com");
  const [ratingModalOpen, setRatingModalOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/auth");
    }
    const storedName = localStorage.getItem("userName");
    if (storedName) setUserName(storedName);
  }, [navigate]);

  const savedTrips = [
    {
      id: 1,
      name: "Mumbai to Goa Beach Paradise",
      dates: "Dec 20-25, 2024",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
    },
    {
      id: 2,
      name: "Jaipur Heritage Tour",
      dates: "Jan 10-15, 2025",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400",
    },
  ];

  const pastTrips = [
    {
      id: 1,
      name: "Kerala Backwaters Expedition",
      dates: "Nov 5-10, 2024",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400",
      rating: 5,
    },
    {
      id: 2,
      name: "Manali Mountain Adventure",
      dates: "Oct 15-20, 2024",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400",
      rating: 4,
    },
  ];

  const ecoScore = 75;
  const ecoLevel = ecoScore >= 80 ? "Gold" : ecoScore >= 50 ? "Silver" : "Bronze";
  const co2Saved = 45;

  const handleSaveProfile = () => {
    localStorage.setItem("userName", userName);
    toast({
      title: "Profile updated! ✨",
      description: "Your changes have been saved",
    });
    setIsEditing(false);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your feedback 💚",
      description: "We appreciate your input!",
    });
  };

  const handleRateTrip = (tripName: string) => {
    setSelectedTrip(tripName);
    setRatingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-hero bg-clip-text text-transparent">Dashboard</span>
          </h1>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 gap-2">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="saved">Saved Trips</TabsTrigger>
              <TabsTrigger value="past">Past Trips</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
              <TabsTrigger value="eco">Eco Rewards</TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <Card className="shadow-hover">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      Profile Information
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => (isEditing ? handleSaveProfile() : setIsEditing(true))}
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      {isEditing ? "Save" : "Edit"}
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-6">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}`} />
                      <AvatarFallback>{userName[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold">{userName}</h3>
                      <p className="text-muted-foreground">{userEmail}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Award className="h-4 w-4 text-soft-yellow" />
                        <span className="text-sm font-medium">{ecoLevel} Traveler</span>
                      </div>
                    </div>
                  </div>

                  {isEditing && (
                    <div className="space-y-4 pt-4 border-t">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Saved Trips Tab */}
            <TabsContent value="saved" className="space-y-4">
              {savedTrips.map((trip) => (
                <Card key={trip.id} className="shadow-soft hover:shadow-hover transition-all">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row gap-0">
                      <img
                        src={trip.image}
                        alt={trip.name}
                        className="w-full md:w-48 h-32 object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                      />
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-bold text-lg mb-1">{trip.name}</h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {trip.dates}
                          </p>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" className="flex-1">
                            View Details
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Past Trips Tab */}
            <TabsContent value="past" className="space-y-4">
              {pastTrips.map((trip) => (
                <Card key={trip.id} className="shadow-soft hover:shadow-hover transition-all">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row gap-0">
                      <img
                        src={trip.image}
                        alt={trip.name}
                        className="w-full md:w-48 h-32 object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                      />
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-bold text-lg mb-1">{trip.name}</h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-2 mb-2">
                            <Calendar className="h-4 w-4" />
                            {trip.dates}
                          </p>
                          {trip.rating && (
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < trip.rating
                                      ? "fill-soft-yellow text-soft-yellow"
                                      : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleRateTrip(trip.name)}
                          >
                            <Star className="h-4 w-4 mr-2" />
                            Rate Again
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Feedback Tab */}
            <TabsContent value="feedback">
              <Card className="shadow-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Share Your Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="feedback-name">Name</Label>
                      <Input id="feedback-name" defaultValue={userName} />
                    </div>
                    <div>
                      <Label htmlFor="feedback-email">Email</Label>
                      <Input id="feedback-email" type="email" defaultValue={userEmail} />
                    </div>
                    <div>
                      <Label htmlFor="feedback-rating">Rating</Label>
                      <div className="flex gap-2 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            className="transition-transform hover:scale-110"
                          >
                            <Star className="h-8 w-8 text-muted-foreground hover:fill-soft-yellow hover:text-soft-yellow" />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="feedback-message">Message</Label>
                      <Textarea
                        id="feedback-message"
                        placeholder="Tell us about your experience..."
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-hero">
                      Submit Feedback
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Eco Rewards Tab */}
            <TabsContent value="eco" className="space-y-6">
              <Card className="shadow-hover bg-gradient-to-br from-eco-light to-background">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-full bg-eco-green text-white">
                      <Leaf className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">Eco Score: {ecoScore}/100</h3>
                      <p className="text-muted-foreground">
                        {ecoLevel} Level - Keep going! 🌱
                      </p>
                    </div>
                  </div>
                  <Progress value={ecoScore} className="h-3 mb-4" />
                  <p className="text-sm text-center text-muted-foreground">
                    You saved <span className="font-bold text-eco-green">{co2Saved}kg CO₂</span> this month — great job traveling green!
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {["Bronze", "Silver", "Gold"].map((level, index) => (
                  <Card
                    key={level}
                    className={`shadow-soft ${
                      ecoLevel === level ? "ring-2 ring-eco-green" : "opacity-60"
                    }`}
                  >
                    <CardContent className="p-6 text-center">
                      <Award
                        className={`h-16 w-16 mx-auto mb-3 ${
                          level === "Gold"
                            ? "text-soft-yellow"
                            : level === "Silver"
                            ? "text-gray-400"
                            : "text-orange-600"
                        }`}
                      />
                      <h4 className="font-bold text-lg">{level}</h4>
                      <p className="text-sm text-muted-foreground">
                        {index === 0 && "0-49 points"}
                        {index === 1 && "50-79 points"}
                        {index === 2 && "80-100 points"}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />

      <RatingModal
        open={ratingModalOpen}
        onOpenChange={setRatingModalOpen}
        tripName={selectedTrip}
      />
    </div>
  );
};

export default Dashboard;
