import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Clock } from "lucide-react";
import { useState } from "react";
import doctorImage from "@/assets/doctor-portrait.jpg";

interface DoctorCardProps {
  name: string;
  specialty: string;
  description: string;
  availability: string;
  timing: string;
  image?: string;
}

export const DoctorCard = ({
  name,
  specialty,
  description,
  availability,
  timing,
  image = doctorImage,
}: DoctorCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-24 h-24 rounded-lg object-cover"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-foreground">{name}</h3>
              <p className="text-sm font-medium text-success">{specialty}</p>
              <Badge variant="success" className="mt-1 text-xs">
                {availability}
              </Badge>
            </div>
            
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="flex-shrink-0 p-1 rounded-full hover:bg-muted transition-colors"
            >
              <Heart
                className={`w-5 h-5 ${
                  isFavorite ? "fill-destructive text-destructive" : "text-muted-foreground"
                }`}
              />
            </button>
          </div>
          
          <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center gap-1 mt-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs font-medium text-foreground">{timing}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
