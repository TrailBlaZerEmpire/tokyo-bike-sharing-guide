import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Battery, Clock, MapPin } from "lucide-react";

interface ServiceCardProps {
  name: string;
  description: string;
  image: string;
  color: "primary" | "secondary" | "accent" | "chart-4";
  price: string;
  coverage: string;
  vehicleType: string;
  features: string[];
  link?: string;
}

export function ServiceCard({
  name,
  description,
  image,
  color,
  price,
  coverage,
  vehicleType,
  features,
  link,
}: ServiceCardProps) {
  const colorClasses = {
    primary: "border-primary/20 hover:border-primary",
    secondary: "border-secondary/20 hover:border-secondary",
    accent: "border-accent/20 hover:border-accent",
    "chart-4": "border-chart-4/20 hover:border-chart-4",
  };

  const badgeClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90",
    "chart-4": "bg-chart-4 text-primary-foreground hover:bg-chart-4/90",
  };

  const buttonClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90",
    "chart-4": "bg-chart-4 text-primary-foreground hover:bg-chart-4/90",
  };

  return (
    <Card className={cn("h-full flex flex-col transition-all duration-300 border-2", colorClasses[color])}>
      <div className="relative h-48 overflow-hidden bg-muted p-4 flex items-center justify-center group">
        <div className={cn("absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20", 
          color === "primary" ? "bg-primary" : 
          color === "secondary" ? "bg-secondary" : 
          color === "accent" ? "bg-accent" : "bg-chart-4"
        )} />
        <img 
          src={image} 
          alt={name} 
          className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110 z-10" 
        />
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-display font-bold">{name}</h3>
          <Badge className={cn("rounded-none px-2 py-1 text-xs font-bold uppercase tracking-wider", badgeClasses[color])}>
            {vehicleType}
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{description}</p>
      </CardHeader>
      
      <CardContent className="flex-grow space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center text-xs text-muted-foreground uppercase tracking-wider font-bold">
              <Clock className="w-3 h-3 mr-1" /> Price
            </div>
            <p className="font-bold text-lg leading-tight">{price}</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center text-xs text-muted-foreground uppercase tracking-wider font-bold">
              <MapPin className="w-3 h-3 mr-1" /> Coverage
            </div>
            <p className="font-medium text-sm leading-tight">{coverage}</p>
          </div>
        </div>
        
        <div className="space-y-2 pt-2">
          <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold flex items-center">
            <Battery className="w-3 h-3 mr-1" /> Key Features
          </div>
          <ul className="space-y-1">
            {features.map((feature, i) => (
              <li key={i} className="text-sm flex items-start">
                <span className={cn("mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0", 
                  color === "primary" ? "bg-primary" : 
                  color === "secondary" ? "bg-secondary" : 
                  color === "accent" ? "bg-accent" : "bg-chart-4"
                )} />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <Button className={cn("w-full rounded-none font-bold", buttonClasses[color])} asChild>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Visit Website <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
