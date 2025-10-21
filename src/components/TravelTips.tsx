import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, User } from "lucide-react";
import localGemsImage from "@/assets/local-gems.jpg";

const TravelTips = () => {
  const stories = [
    {
      title: "10 Essential Tips for Solo Travelers",
      author: "Sarah Johnson",
      readTime: "5 min read",
      category: "Travel Tips",
      image: localGemsImage,
      excerpt: "Discover the secrets to safe and enjoyable solo travel adventures...",
    },
    {
      title: "How I Traveled Southeast Asia on a Budget",
      author: "Mike Chen",
      readTime: "8 min read",
      category: "Local Stories",
      image: localGemsImage,
      excerpt: "My journey through Thailand, Vietnam, and Cambodia for under $1000...",
    },
    {
      title: "Hidden Cafes in European Cities",
      author: "Emma Laurent",
      readTime: "6 min read",
      category: "Travel Tips",
      image: localGemsImage,
      excerpt: "Explore charming local cafes away from tourist hotspots...",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Local Stories & Travel Tips
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get inspired by real travelers and learn from their experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-soft hover:shadow-hover transition-all hover:-translate-y-1 animate-slide-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {story.category}
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {story.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {story.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{story.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{story.readTime}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="w-full group/btn">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Read Story
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelTips;
