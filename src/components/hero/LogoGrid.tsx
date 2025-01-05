import { Card } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface LogoItem {
  name: string;
  logo?: string;
  image?: string;
  color: string;
  institution?: string;
  description?: string;
}

interface LogoGridProps {
  items: LogoItem[];
}

export const LogoGrid = ({ items }: LogoGridProps) => {
  const getImageSource = (item: LogoItem): string => {
    if ('image' in item && item.image) {
      return item.image;
    }
    return item.logo || '';
  };

  return (
    <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in delay-200 max-w-4xl">
      {items.map((item, index) => (
        <Dialog key={index}>
          <DialogTrigger>
            <HoverCard>
              <HoverCardTrigger>
                <div 
                  className="w-24 h-24 relative group p-2 rounded-lg hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: `${item.color}10` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10 rounded-lg" />
                  <img
                    src={getImageSource(item)}
                    alt={item.name}
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                  />
                  <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-1 rounded-b-lg transition-opacity">
                    {item.name}
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 p-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">{item.name}</h4>
                  {item.institution && (
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
                  )}
                  {item.description && (
                    <p className="text-sm">{item.description}</p>
                  )}
                </div>
              </HoverCardContent>
            </HoverCard>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <div className="p-4">
              <img
                src={getImageSource(item)}
                alt={item.name}
                className="w-full h-auto object-contain"
              />
              <h3 className="text-lg font-semibold mt-4">{item.name}</h3>
              {item.institution && (
                <p className="text-sm text-muted-foreground">{item.institution}</p>
              )}
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};