import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Leaf, Award, Share2, TrendingUp } from "lucide-react";

const EcoScore = () => {
  const ecoScore = 78;
  const co2Saved = 12;

  const tips = [
    "Choose trains over flights when possible",
    "Stay at eco-certified accommodations",
    "Support local businesses and artisans",
    "Use reusable water bottles and bags",
    "Opt for walking or cycling tours",
    "Avoid single-use plastics",
  ];

  const achievements = [
    { name: "Eco Warrior", desc: "5 green trips completed", unlocked: true },
    { name: "Local Hero", desc: "Supported 10 local businesses", unlocked: true },
    { name: "Carbon Crusher", desc: "Saved 50kg CO₂", unlocked: false },
    { name: "Green Explorer", desc: "Visit 3 eco-destinations", unlocked: true },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-12 bg-gradient-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Your Eco Score</span>
            </h1>
            <p className="text-muted-foreground">Track your sustainable travel impact</p>
          </div>

          {/* Main Score Card */}
          <Card className="mb-8 shadow-soft animate-slide-up overflow-hidden">
            <div className="bg-gradient-hero text-white p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <Leaf className="h-12 w-12" />
                    <div>
                      <div className="text-5xl font-bold">{ecoScore}</div>
                      <p className="opacity-90">Eco Score</p>
                    </div>
                  </div>
                  <p className="text-lg opacity-90">
                    You're doing great! Keep making green choices.
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center min-w-[200px]">
                  <div className="text-4xl font-bold mb-2">{co2Saved}kg</div>
                  <p className="text-sm opacity-90">CO₂ Saved</p>
                  <p className="text-xs mt-2 opacity-75">on this trip</p>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">Transport</span>
                    <span className="text-muted-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">Accommodation</span>
                    <span className="text-muted-foreground">70%</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">Local Support</span>
                    <span className="text-muted-foreground">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Green Tips */}
            <Card className="shadow-soft animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-eco-green" />
                  Green Travel Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Leaf className="h-4 w-4 text-eco-green mt-0.5 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="shadow-soft animate-scale-in" style={{ animationDelay: "100ms" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        achievement.unlocked
                          ? "bg-eco-light/20 border border-eco-green/30"
                          : "bg-muted/50"
                      }`}
                    >
                      <Award
                        className={`h-6 w-6 ${
                          achievement.unlocked ? "text-eco-green" : "text-muted-foreground"
                        }`}
                      />
                      <div className="flex-1">
                        <div className="font-medium text-sm">{achievement.name}</div>
                        <div className="text-xs text-muted-foreground">{achievement.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Share Score */}
          <Card className="shadow-soft animate-fade-in text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Share Your Impact</h3>
              <p className="text-muted-foreground mb-6">
                Inspire others to travel sustainably by sharing your eco score
              </p>
              <Button size="lg" className="bg-gradient-hero hover:shadow-hover">
                <Share2 className="mr-2 h-5 w-5" />
                Share on Social Media
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EcoScore;
