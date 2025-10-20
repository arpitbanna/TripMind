import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Wallet, Shield, Leaf, ArrowRight } from "lucide-react";

const QuickLinks = () => {
  const links = [
    {
      title: "Expense Splitter",
      description: "Track and split trip costs",
      icon: Wallet,
      path: "/expenses",
      color: "text-primary",
    },
    {
      title: "Safety Dashboard",
      description: "Emergency contacts & alerts",
      icon: Shield,
      path: "/safety",
      color: "text-destructive",
    },
    {
      title: "Eco Score",
      description: "Track your green impact",
      icon: Leaf,
      path: "/eco-score",
      color: "text-eco-green",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">More Features</h2>
          <p className="text-muted-foreground">Everything you need for a perfect trip</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <Link key={index} to={link.path}>
              <Card className="group hover:shadow-hover transition-all hover:-translate-y-1 animate-slide-up h-full">
                <CardContent className="p-6">
                  <div className={`${link.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <link.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                    {link.title}
                    <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground text-sm">{link.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
