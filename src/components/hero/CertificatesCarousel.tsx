
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface Certificate {
  name: string;
  image: string;
  institution: string;
  color: string;
}

interface CertificatesCarouselProps {
  certificates: Certificate[];
}

export const CertificatesCarousel = ({ certificates }: CertificatesCarouselProps) => {
  return (
    <div className="w-full max-w-4xl mb-12 animate-fade-in delay-300">
      <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Certificates & Experience
      </h1>
      <Carousel className="w-full">
        <CarouselContent>
          {certificates.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <Card className="bg-white/5 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-colors">
                  <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                    <Dialog>
                      <DialogTrigger>
                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white text-sm">Click to view</span>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <div className="p-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-auto object-contain"
                          />
                          <h3 className="text-lg font-semibold mt-4" style={{ color: item.color }}>
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-500">{item.institution}</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <div className="text-center">
                      <h3 className="font-semibold text-lg" style={{ color: item.color }}>
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">{item.institution}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
