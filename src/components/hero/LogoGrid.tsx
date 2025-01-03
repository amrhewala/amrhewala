import { Card } from "@/components/ui/card";

interface LogoItem {
  name: string;
  logo?: string;
  image?: string;
  color: string;
  institution?: string;
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
        <Card 
          key={index} 
          className="w-24 h-24 relative group p-2 rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
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
        </Card>
      ))}
    </div>
  );
};