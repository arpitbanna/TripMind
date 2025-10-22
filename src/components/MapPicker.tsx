import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface MapPickerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLocationSelect: (location: string) => void;
}

const MapPicker = ({ open, onOpenChange, onLocationSelect }: MapPickerProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const popularLocations = [
    "Mumbai, Maharashtra",
    "Delhi, India",
    "Bengaluru, Karnataka",
    "Goa, India",
    "Jaipur, Rajasthan",
    "Kolkata, West Bengal",
  ];

  const handleSelectLocation = (location: string) => {
    onLocationSelect(location);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Pick from Map
          </DialogTitle>
          <DialogDescription>
            Select a location from the map or search for a place
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for a location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Mock Map */}
          <div className="relative h-64 rounded-lg bg-gradient-to-br from-teal/20 to-turquoise/20 border-2 border-dashed border-primary/30 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-2 animate-bounce" />
              <p className="text-sm text-muted-foreground">Interactive map preview</p>
              <p className="text-xs text-muted-foreground mt-1">Click on popular locations below</p>
            </div>
          </div>

          {/* Popular Locations */}
          <div>
            <h4 className="font-semibold mb-3">Popular Locations</h4>
            <div className="grid grid-cols-2 gap-2">
              {popularLocations.map((location) => (
                <Button
                  key={location}
                  variant="outline"
                  className="justify-start"
                  onClick={() => handleSelectLocation(location)}
                >
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  {location}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MapPicker;
