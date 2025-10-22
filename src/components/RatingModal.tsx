import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RatingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tripName: string;
}

const RatingModal = ({ open, onOpenChange, tripName }: RatingModalProps) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [review, setReview] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (rating === 0) {
      toast({
        title: "Please select a rating",
        variant: "destructive",
      });
      return;
    }

    // Store rating locally
    const ratings = JSON.parse(localStorage.getItem("tripRatings") || "{}");
    ratings[tripName] = { rating, review, date: new Date().toISOString() };
    localStorage.setItem("tripRatings", JSON.stringify(ratings));

    toast({
      title: "Thank you for your feedback! ⭐",
      description: "Your rating helps us improve",
    });

    onOpenChange(false);
    setRating(0);
    setReview("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Rate Your Trip</DialogTitle>
          <DialogDescription>{tripName}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Star Rating */}
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  className={`h-10 w-10 ${
                    star <= (hoveredRating || rating)
                      ? "fill-soft-yellow text-soft-yellow"
                      : "text-muted-foreground"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Review Text */}
          <div>
            <label className="text-sm font-medium mb-2 block">
              Share your experience (optional)
            </label>
            <Textarea
              placeholder="What did you love about this trip?"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <Button onClick={handleSubmit} className="w-full">
            Submit Rating
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RatingModal;
