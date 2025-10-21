import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Leaf, Award } from "lucide-react";

const About = () => {
  const team = [
    { name: "AI Engine", role: "Smart Planning", icon: Brain },
    { name: "Eco Focus", role: "Sustainability", icon: Leaf },
    { name: "User First", role: "Experience", icon: Heart },
    { name: "Award Ready", role: "Hackathon 2025", icon: Award },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-12 bg-gradient-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-hero bg-clip-text text-transparent">TripMind</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              The smarter, greener, easier way to explore
            </p>
          </div>

          <Card className="mb-8 shadow-soft animate-slide-up">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground mb-4">
                TripMind was born from a simple idea: travel should be both exciting and
                responsible. We believe that technology can help us explore the world while
                protecting it for future generations.
              </p>
              <p className="text-muted-foreground mb-4">
                Our AI-powered platform makes it easy to plan trips that are not only
                memorable but also sustainable. From finding hidden gems to calculating
                carbon footprints, we put the power of smart travel in your hands.
              </p>
              <p className="text-muted-foreground">
                Built for Hackathon 2025, TripMind represents our commitment to innovation,
                sustainability, and creating meaningful travel experiences that connect
                people with places and cultures.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="shadow-soft hover:shadow-hover transition-all animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <member.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-hero text-white shadow-soft animate-fade-in">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg mb-6">
                "To empower travelers with AI-driven insights that make every journey
                smarter, greener, and more enriching—while supporting local communities
                and protecting our planet."
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <div>
                  <div className="text-3xl font-bold">1M+</div>
                  <div className="opacity-90">Routes Planned</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="opacity-90">Happy Travelers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">100+</div>
                  <div className="opacity-90">Destinations</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
