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
  icon?: string;
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
    { name: "Data Analysis", description: "Expertise in gathering, cleaning, and preprocessing data" },
    { name: "Project Management", description: "Experience with Agile methodologies and freelancing projects" },
    { name: "Data Visualization", description: "Proficient in creating insightful visualizations using various tools" },
    { name: "Problem Solving", description: "Strong analytical and statistical problem-solving abilities" },
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
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Carousel className="w-full">
                <CarouselContent>
                  {softSkills.map((skill, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                          <p className="text-sm text-gray-600">{skill.description}</p>
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