import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { workplaces } from "@/data/workplaces";

export const LogoGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {workplaces.map((workplace, index) => (
        <HoverCard key={workplace.name}>
          <HoverCardTrigger asChild>
            <div 
              className="group relative aspect-square bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex items-center justify-center overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={workplace.logo}
                alt={workplace.name}
                className="max-w-full max-h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 p-6 backdrop-blur-sm bg-white/90">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {workplace.name}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {workplace.description}
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
};