import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Phone, MapPin, AlertCircle, MessageCircle } from "lucide-react";

const Safety = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 bg-gradient-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Safety Dashboard</span>
            </h1>
            <p className="text-muted-foreground">Your safety is our priority</p>
          </div>

          {/* Safety Score */}
          <Card className="mb-8 shadow-soft animate-slide-up bg-gradient-hero text-white">
            <CardContent className="p-8 text-center">
              <Shield className="h-16 w-16 mx-auto mb-4 opacity-90" />
              <div className="text-5xl font-bold mb-2">8.5/10</div>
              <p className="text-lg opacity-90">Current Safety Rating</p>
              <p className="text-sm mt-2 opacity-75">Based on local conditions and travel advisories</p>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-soft hover:shadow-hover transition-all animate-scale-in">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-destructive/10 p-3 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Emergency SOS</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Instant alert to emergency services and your contacts
                    </p>
                    <Button variant="destructive" className="w-full">
                      Emergency SOS
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-all animate-scale-in" style={{ animationDelay: "100ms" }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Nearest Hospital</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Find medical facilities near your location
                    </p>
                    <Button variant="outline" className="w-full">
                      View on Map
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Emergency Contacts */}
          <Card className="shadow-soft animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Police", number: "100", icon: Shield },
                  { name: "Ambulance", number: "102", icon: AlertCircle },
                  { name: "Fire Department", number: "101", icon: AlertCircle },
                  { name: "Tourist Helpline", number: "1363", icon: Phone },
                ].map((contact, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <contact.icon className="h-5 w-5 text-primary" />
                      <span className="font-medium">{contact.name}</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Call {contact.number}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Travel Chatbot */}
          <div className="fixed bottom-6 right-6 animate-float">
            <Button size="lg" className="rounded-full bg-gradient-hero shadow-hover h-14 w-14 p-0">
              <MessageCircle className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Safety;
