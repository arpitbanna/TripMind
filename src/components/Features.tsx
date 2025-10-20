import { Card, CardContent } from "@/components/ui/card";
import { Brain, Leaf, Users, MapPin, Wallet, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Trip Planner",
      description: "Smart itineraries tailored to your preferences, budget, and travel style.",
      color: "text-primary",
    },
    {
      icon: Leaf,
      title: "Eco Travel",
      description: "Compare carbon footprints and choose sustainable transport options.",
      color: "text-eco-green",
    },
    {
      icon: Users,
      title: "Local Connect",
      description: "Discover authentic experiences from local artisans and guides.",
      color: "text-secondary",
    },
    {
      icon: MapPin,
      title: "Hidden Gems",
      description: "Uncover secret spots and off-the-beaten-path destinations.",
      color: "text-travel-blue",
    },
    {
      icon: Wallet,
      title: "Expense Splitter",
      description: "Track and split travel expenses effortlessly with your group.",
      color: "text-primary",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Real-time safety updates and emergency assistance at your fingertips.",
      color: "text-destructive",
    },
  ];

  return (
    <section className="py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need for the
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Perfect Trip</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make your travel planning seamless and sustainable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-slide-up border-border bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
