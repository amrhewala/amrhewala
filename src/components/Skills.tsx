import { TechnicalSkills } from "./skills/TechnicalSkills";
import { LanguageSkills } from "./skills/LanguageSkills";
import { SoftSkillsCarousel } from "./skills/SoftSkillsCarousel";
import { skills, languages, softSkills, getProgressValue } from "./skills/SkillsData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
export const Skills = () => {
  return <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-[4px]">
      <div className="container">
        <Card className="backdrop-blur-sm bg-white/80 border-none shadow-2xl hover:shadow-accent/20 transition-all duration-500 animate-fade-in">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-8 h-8 text-accent animate-pulse" />
              <CardTitle className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Skills & Expertise
              </CardTitle>
              <Sparkles className="w-8 h-8 text-accent animate-pulse" />
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            <TechnicalSkills skills={skills} getProgressValue={getProgressValue} />
            <LanguageSkills languages={languages} getProgressValue={getProgressValue} />
            <SoftSkillsCarousel softSkills={softSkills} />
          </CardContent>
        </Card>
      </div>
    </section>;
};