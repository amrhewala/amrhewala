
import { TechnicalSkills } from "./skills/TechnicalSkills";
import { LanguageSkills } from "./skills/LanguageSkills";
import { SoftSkillsCarousel } from "./skills/SoftSkillsCarousel";
import { skills, languages, softSkills, getProgressValue } from "./skills/SkillsData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export const Skills = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      <div className="container relative">
        <Card className="backdrop-blur-xl bg-white/80 border-none shadow-2xl hover:shadow-accent/20 transition-all duration-500">
          <CardHeader className="pb-2">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-accent animate-pulse" />
                <CardTitle className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Skills & Expertise
                </CardTitle>
                <Sparkles className="w-8 h-8 text-accent animate-pulse" />
              </div>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
            </div>
          </CardHeader>
          <CardContent className="space-y-10">
            <div className="grid gap-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-center text-primary">Technical Proficiency</h3>
                <TechnicalSkills skills={skills} getProgressValue={getProgressValue} />
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-center text-primary">Language Proficiency</h3>
                <LanguageSkills languages={languages} getProgressValue={getProgressValue} />
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-center text-primary">Soft Skills & Certifications</h3>
                <SoftSkillsCarousel softSkills={softSkills} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
