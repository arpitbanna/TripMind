import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";
import localGemsImage from "@/assets/local-gems.jpg";

const TopDestinations = () => {
  const destinations = [
    {
      name: "Bali, Indonesia",
      rating: 4.9,
      travelers: "2.4M",
      image: localGemsImage,
      trending: true,
    },
    {
      name: "Kyoto, Japan",
      rating: 4.8,
      travelers: "1.8M",
      image: localGemsImage,
      trending: true,
    },
    {
      name: "Santorini, Greece",
      rating: 4.7,
      travelers: "1.5M",
      image: localGemsImage,
      trending: false,
    },
    {
      name: "Iceland",
      rating: 4.9,
      travelers: "1.2M",
      image: localGemsImage,
      trending: true,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Top Destinations This Month 🌍
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the most popular destinations trending among travelers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-soft hover:shadow-hover transition-all hover:-translate-y-1 animate-scale-in group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {destination.trending && (
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    🔥 Trending
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{destination.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {destination.travelers} travelers
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
