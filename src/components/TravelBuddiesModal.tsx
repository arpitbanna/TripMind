import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, MapPin, Calendar, Share2, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

interface TravelBuddiesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TravelBuddiesModal = ({ open, onOpenChange }: TravelBuddiesModalProps) => {
  const { toast } = useToast();

  const travelers = [
    {
      name: "Priya Sharma",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      route: "Mumbai → Goa",
      dates: "Dec 15-20",
      interests: ["Beaches", "Adventure", "Photography"],
      matchScore: 95,
    },
    {
      name: "Rahul Verma",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
      route: "Delhi → Manali",
      dates: "Dec 18-23",
      interests: ["Mountains", "Trekking", "Culture"],
      matchScore: 88,
    },
    {
      name: "Ananya Patel",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya",
      route: "Bengaluru → Ooty",
      dates: "Dec 20-24",
      interests: ["Nature", "Relaxation", "Food"],
      matchScore: 82,
    },
  ];

  const handleShareTrip = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    toast({
      title: "Trip link copied! 🎉",
      description: "Share it with your friends to travel together",
    });
  };

  const handleConnect = (name: string) => {
    toast({
      title: "Connection request sent! 🤝",
      description: `You can now chat with ${name}`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Users className="h-6 w-6 text-primary" />
            Find Travel Buddies
          </DialogTitle>
          <DialogDescription>
            Connect with travelers on similar routes and share experiences
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Share Trip Button */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/20">
                    <Share2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Share Your Trip</h4>
                    <p className="text-sm text-muted-foreground">
                      Let others join your adventure
                    </p>
                  </div>
                </div>
                <Button onClick={handleShareTrip} variant="outline">
                  Copy Link
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Travelers List */}
          <div>
            <h4 className="font-semibold mb-3">Nearby Travelers ({travelers.length})</h4>
            <div className="space-y-3">
              {travelers.map((traveler, index) => (
                <Card key={index} className="hover:shadow-hover transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-start gap-3 flex-1">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={traveler.avatar} />
                          <AvatarFallback>{traveler.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h5 className="font-semibold">{traveler.name}</h5>
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                              {traveler.matchScore}% match
                            </span>
                          </div>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-3 w-3" />
                              {traveler.route}
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-3 w-3" />
                              {traveler.dates}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {traveler.interests.map((interest) => (
                              <span
                                key={interest}
                                className="text-xs bg-muted px-2 py-1 rounded-full"
                              >
                                {interest}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col gap-2">
                        <Button
                          size="sm"
                          className="flex-1 sm:flex-none"
                          onClick={() => handleConnect(traveler.name)}
                        >
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Connect
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 sm:flex-none">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TravelBuddiesModal;
