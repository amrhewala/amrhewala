import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CertificateDisplay } from "./CertificateDisplay";

type SoftSkill = {
  name: string;
  description: string;
  certificates?: {
    name: string;
    institution: string;
    date: string;
    image: string;
  }[];
};

interface SoftSkillsCarouselProps {
  softSkills: SoftSkill[];
}

export const SoftSkillsCarousel = ({ softSkills }: SoftSkillsCarouselProps) => {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border border-accent/20">
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Soft Skills & Short Training
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel className="w-full">
          <CarouselContent>
            {softSkills.map((skill, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                    {skill.certificates && (
                      <div className="space-y-3 mt-4">
                        {skill.certificates.map((cert, certIndex) => (
                          <CertificateDisplay key={certIndex} certificate={cert} />
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
    </Card>
  );
};