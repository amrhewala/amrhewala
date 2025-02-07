
import { TechnicalSkills } from "./skills/TechnicalSkills";
import { LanguageSkills } from "./skills/LanguageSkills";
import { SoftSkillsCarousel } from "./skills/SoftSkillsCarousel";
import { skills, languages, softSkills, getProgressValue } from "./skills/SkillsData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Skills = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container">
        <Card className="backdrop-blur-sm bg-white/80 border-none shadow-2xl hover:shadow-accent/20 transition-all duration-500 mb-8">
          <CardHeader className="pb-2">
            <CardTitle className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <TechnicalSkills skills={skills} getProgressValue={getProgressValue} />
            <LanguageSkills languages={languages} getProgressValue={getProgressValue} />
            <SoftSkillsCarousel softSkills={softSkills} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
