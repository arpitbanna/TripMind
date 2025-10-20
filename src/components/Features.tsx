import { Card, CardContent } from "@/components/ui/card";
import { Brain, Leaf, Users, MapPin, Wallet, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Trip Planner",
      description: "Smart itineraries tailored to your preferences, budget, and travel style.",
      color: "text-primary",
      path: "/planner",
    },
    {
      icon: Leaf,
      title: "Eco Travel",
      description: "Compare carbon footprints and choose sustainable transport options.",
      color: "text-eco-green",
      path: "/eco-score",
    },
    {
      icon: Users,
      title: "Local Connect",
      description: "Discover authentic experiences from local artisans and guides.",
      color: "text-secondary",
      path: "/planner",
    },
    {
      icon: MapPin,
      title: "Hidden Gems",
      description: "Uncover secret spots and off-the-beaten-path destinations.",
      color: "text-travel-blue",
      path: "/hidden-gems",
    },
    {
      icon: Wallet,
      title: "Expense Splitter",
      description: "Track and split travel expenses effortlessly with your group.",
      color: "text-primary",
      path: "/expenses",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Real-time safety updates and emergency assistance at your fingertips.",
      color: "text-destructive",
      path: "/safety",
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
            <Link key={index} to={feature.path}>
              <Card
                className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-slide-up border-border bg-card cursor-pointer h-full"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
