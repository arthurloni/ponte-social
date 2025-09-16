import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Users, Verified } from "lucide-react";

interface NGOCardProps {
  name: string;
  description: string;
  category: string;
  location: string;
  verified: boolean;
  supporters: number;
  image: string;
  goal: number;
  raised: number;
  urgency?: 'low' | 'medium' | 'high';
}

const NGOCard = ({ 
  name, 
  description, 
  category, 
  location, 
  verified, 
  supporters, 
  image, 
  goal, 
  raised, 
  urgency = 'low' 
}: NGOCardProps) => {
  const progressPercentage = (raised / goal) * 100;
  
  const urgencyColors = {
    low: 'bg-secondary',
    medium: 'bg-accent',
    high: 'bg-destructive'
  };

  const urgencyLabels = {
    low: 'Normal',
    medium: 'Urgente',
    high: 'Muito Urgente'
  };

  return (
    <Card className="group hover:shadow-medium transition-smooth cursor-pointer bg-gradient-card border-0 overflow-hidden">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {verified && (
            <Badge className="bg-primary text-primary-foreground">
              <Verified className="h-3 w-3 mr-1" />
              Verificada
            </Badge>
          )}
          
          <Badge className={`${urgencyColors[urgency]} text-white`}>
            {urgencyLabels[urgency]}
          </Badge>
        </div>

        {/* Heart Icon */}
        <div className="absolute top-3 right-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="bg-white/90 hover:bg-white text-gray-600 hover:text-destructive transition-smooth"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-smooth line-clamp-1">
              {name}
            </h3>
            <Badge variant="outline" className="mt-1">
              {category}
            </Badge>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Location and Supporters */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{supporters.toLocaleString()} apoiadores</span>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">
              R$ {raised.toLocaleString()} arrecadados
            </span>
            <span className="font-medium text-foreground">
              {progressPercentage.toFixed(0)}%
            </span>
          </div>
          
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            />
          </div>
          
          <div className="text-xs text-muted-foreground mt-1">
            Meta: R$ {goal.toLocaleString()}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button variant="default" className="flex-1">
            Doar Agora
          </Button>
          <Button variant="outline">
            Ver Mais
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default NGOCard;