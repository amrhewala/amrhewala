
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronUp } from "lucide-react";

type SkillOrLanguage = {
  name: string;
  level: string;
  category: string;
};

interface TechnicalSkillsProps {
  skills: SkillOrLanguage[];
  getProgressValue: (level: string) => number;
}

export const TechnicalSkills = ({ skills, getProgressValue }: TechnicalSkillsProps) => {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  const getSkillBadgeColor = (level: string) => {
    const value = getProgressValue(level);
    if (value >= 90) return "bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/20";
    if (value >= 70) return "bg-blue-500/10 text-blue-700 hover:bg-blue-500/20";
    if (value >= 50) return "bg-yellow-500/10 text-yellow-700 hover:bg-yellow-500/20";
    return "bg-gray-500/10 text-gray-700 hover:bg-gray-500/20";
  };

  const getSkillDots = (level: string) => {
    const value = getProgressValue(level);
    const dots = Math.ceil(value / 20); // Convert percentage to 1-5 scale
    return Array(dots).fill("•").join("");
  };

  return (
    <div className="grid gap-6">
      {categories.map((category) => (
        <Card 
          key={category} 
          className="bg-white/5 backdrop-blur-sm border border-accent/20 transform transition-all duration-500 hover:scale-[1.02]"
        >
          <CardHeader className="py-3">
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {category}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <div 
                    key={index} 
                    className={`rounded-lg p-3 transition-all duration-300 ${getSkillBadgeColor(skill.level)}`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium">{skill.name}</span>
                      <div className="flex items-center gap-1">
                        <span className="text-xs opacity-75">{getSkillDots(skill.level)}</span>
                        {getProgressValue(skill.level) >= 90 && (
                          <ChevronUp className="w-4 h-4 text-emerald-500 animate-bounce" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
