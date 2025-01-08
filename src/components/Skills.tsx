import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type SkillOrLanguage = {
  name: string;
  level: string;
};

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

const getProgressValue = (level: string): number => {
  const levels: { [key: string]: number } = {
    beginner: 25,
    basic: 25,
    intermediate: 50,
    advanced: 75,
    expert: 100,
    native: 100,
  };
  return levels[level] || 0;
};

export const Skills = () => {
  const skills: SkillOrLanguage[] = [
    { name: "Python", level: "advanced" },
    { name: "Panda", level: "expert" },
    { name: "Power BI", level: "expert" },
    { name: "SQL", level: "expert" },
  ];

  const languages: SkillOrLanguage[] = [
    { name: "English", level: "advanced" },
    { name: "Arabic", level: "native" },
    { name: "German", level: "basic" },
  ];

  const softSkills: SoftSkill[] = [
    { 
      name: "Data Analysis", 
      description: "Expertise in gathering, cleaning, and preprocessing data",
      certificates: [
        {
          name: "Data Analysis with SPSS",
          institution: "Ain Shams University",
          date: "June 2009",
          image: "/lovable-uploads/7369b8dd-7b33-41b0-9e51-4d4dd5b26fee.png"
        }
      ]
    },
    { 
      name: "Project Management", 
      description: "Experience with Agile methodologies and freelancing projects",
      certificates: [
        {
          name: "Electronic Management",
          institution: "ASI-EGYPT",
          date: "December 2008 - January 2009",
          image: "/lovable-uploads/56535ad7-88bf-4549-84db-8b01c6e3f0da.png"
        },
        {
          name: "Electronic Planning",
          institution: "The American University in Cairo",
          date: "May 2010",
          image: "/lovable-uploads/ed6529f6-27aa-463f-969b-6d44fa68f316.png"
        }
      ]
    },
    { 
      name: "Computer Skills", 
      description: "Proficient in various computer applications and systems",
      certificates: [
        {
          name: "ICDL Certificate",
          institution: "European Computer Driving Licence Foundation",
          date: "March 2006",
          image: "/lovable-uploads/c334ef08-8213-490d-a6ab-9e832c266cdb.png"
        },
        {
          name: "MS Access",
          institution: "SLCC",
          date: "July 2008",
          image: "/lovable-uploads/4f7a9098-4d5d-46a9-8c79-a37f1df342aa.png"
        }
      ]
    },
    { 
      name: "Business Applications", 
      description: "Experience with enterprise software and business applications",
      certificates: [
        {
          name: "Oracle Financial Applications",
          institution: "Oracle University",
          date: "May 2009",
          image: "/lovable-uploads/cad52907-ccef-4b1f-8d2d-6ff94811394f.png"
        },
        {
          name: "E-Commerce Basics",
          institution: "The American University in Cairo",
          date: "Summer 2004/05",
          image: "/lovable-uploads/8d75844c-a5bd-48f7-aab0-d99addd1470d.png"
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container">
        <div className="space-y-12">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 backdrop-blur-sm border border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground capitalize">{skill.level}</span>
                    </div>
                    <Progress value={getProgressValue(skill.level)} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {languages.map((language, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{language.name}</span>
                      <span className="text-sm text-muted-foreground capitalize">{language.level}</span>
                    </div>
                    <Progress value={getProgressValue(language.level)} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/5 backdrop-blur-sm border border-accent/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Soft Skills & Certifications
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
                                <div key={certIndex} className="flex items-start space-x-3">
                                  <img 
                                    src={cert.image} 
                                    alt={cert.name}
                                    className="w-12 h-12 object-contain"
                                  />
                                  <div>
                                    <h4 className="text-sm font-medium">{cert.name}</h4>
                                    <p className="text-xs text-gray-500">{cert.institution}</p>
                                    <p className="text-xs text-gray-400">{cert.date}</p>
                                  </div>
                                </div>
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
        </div>
      </div>
    </section>
  );
};