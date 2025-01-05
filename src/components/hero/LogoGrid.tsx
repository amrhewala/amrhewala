import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { workplaces } from "@/data/workplaces";

export const LogoGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {workplaces.map((workplace) => (
        <HoverCard key={workplace.name}>
          <HoverCardTrigger asChild>
            <div className="relative aspect-square bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer p-4 flex items-center justify-center">
              <img
                src={workplace.logo}
                alt={workplace.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">{workplace.name}</h4>
              <p className="text-sm text-muted-foreground">
                {workplace.description}
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
};