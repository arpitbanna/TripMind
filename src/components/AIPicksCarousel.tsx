import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-travel.jpg";

const AIPicksCarousel = () => {
  const aiPicks = [
    {
      destination: "Swiss Alps Adventure",
      location: "Switzerland",
      duration: "5 Days",
      reason: "Based on your love for mountains",
      image: heroImage,
      price: "₹85,000",
    },
    {
      destination: "Tropical Paradise",
      location: "Maldives",
      duration: "7 Days",
      reason: "Perfect for relaxation seekers",
      image: heroImage,
      price: "₹1,20,000",
    },
    {
      destination: "Cultural Experience",
      location: "Kyoto, Japan",
      duration: "6 Days",
      reason: "Matches your cultural interests",
      image: heroImage,
      price: "₹95,000",
    },
    {
      destination: "Safari Adventure",
      location: "Kenya",
      duration: "8 Days",
      reason: "For wildlife enthusiasts",
      image: heroImage,
      price: "₹1,50,000",
    },
  ];

  return (
    <section className="py-16 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary animate-float" />
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                AI Picks For You
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Personalized destination recommendations based on your travel preferences
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {aiPicks.map((pick, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden shadow-soft hover:shadow-hover transition-all group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={pick.image}
                      alt={pick.destination}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="font-bold text-lg text-white mb-1">
                        {pick.destination}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{pick.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{pick.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4 p-2 bg-accent/50 rounded-lg">
                      <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{pick.reason}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary">{pick.price}</span>
                      <Link to="/planner">
                        <Button size="sm" variant="outline">
                          Explore
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default AIPicksCarousel;
