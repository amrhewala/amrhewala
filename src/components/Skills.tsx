
import { TechnicalSkills } from "./skills/TechnicalSkills";
import { LanguageSkills } from "./skills/LanguageSkills";
import { SoftSkillsCarousel } from "./skills/SoftSkillsCarousel";
import { skills, languages, softSkills, getProgressValue } from "./skills/SkillsData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Star, StarHalf, CircleDot } from "lucide-react";

export const Skills = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(0,0,0,0.1) 2%, transparent 0%)`,
          backgroundSize: '50px 50px',
        }}
      />
      <div className="container relative">
        <Card className="backdrop-blur-xl bg-white/80 border-none shadow-lg hover:shadow-xl transition-all duration-500">
          <CardHeader className="pb-2">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-accent" />
                <CardTitle className="text-4xl md:text-5xl font-bold text-center text-primary">
                  Skills & Expertise
                </CardTitle>
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <div className="h-1 w-32 bg-accent rounded-full" />
            </div>
          </CardHeader>
          <CardContent className="space-y-10 p-6">
            <div className="grid gap-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary flex items-center gap-2 before:content-[''] before:w-2 before:h-8 before:bg-accent before:rounded-full">
                  <span className="ml-2">Technical Proficiency</span>
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  <span className="inline-flex items-center gap-1"><Star className="w-4 h-4 text-accent fill-accent" /> Expert</span> &nbsp;•&nbsp;
                  <span className="inline-flex items-center gap-1"><StarHalf className="w-4 h-4 text-blue-500" /> Advanced</span> &nbsp;•&nbsp;
                  <span className="inline-flex items-center gap-1"><CircleDot className="w-4 h-4 text-yellow-500" /> Intermediate</span> &nbsp;•&nbsp;
                  <span className="inline-flex items-center gap-1"><CircleDot className="w-4 h-4 text-gray-400" /> Basic</span>
                </p>
                <TechnicalSkills skills={skills} getProgressValue={getProgressValue} />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary flex items-center gap-2 before:content-[''] before:w-2 before:h-8 before:bg-accent before:rounded-full">
                  <span className="ml-2">Language Proficiency</span>
                </h3>
                <LanguageSkills languages={languages} getProgressValue={getProgressValue} />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary flex items-center gap-2 before:content-[''] before:w-2 before:h-8 before:bg-accent before:rounded-full">
                  <span className="ml-2">Soft Skills & Certifications</span>
                </h3>
                <SoftSkillsCarousel softSkills={softSkills} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
