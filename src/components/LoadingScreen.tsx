import { Plane } from "lucide-react";

const LoadingScreen = ({ message = "Planning your smart route..." }: { message?: string }) => {
  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in">
      <div className="text-center">
        <div className="mb-6 animate-float">
          <div className="bg-gradient-hero p-6 rounded-2xl shadow-hover inline-block">
            <Plane className="h-16 w-16 text-white animate-pulse" />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
          TripMind
        </h2>
        <p className="text-muted-foreground animate-pulse">{message}</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
