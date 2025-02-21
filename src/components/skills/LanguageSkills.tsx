
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronUp } from "lucide-react";

type SkillOrLanguage = {
  name: string;
  level: string;
};

interface LanguageSkillsProps {
  languages: SkillOrLanguage[];
  getProgressValue: (level: string) => number;
}

export const LanguageSkills = ({ languages, getProgressValue }: LanguageSkillsProps) => {
  const getLanguageBadgeColor = (level: string) => {
    const value = getProgressValue(level);
    if (value >= 90) return "bg-emerald-500/10 text-emerald-700";
    if (value >= 70) return "bg-blue-500/10 text-blue-700";
    if (value >= 50) return "bg-yellow-500/10 text-yellow-700";
    return "bg-gray-500/10 text-gray-700";
  };

  const getLanguageDots = (level: string) => {
    const value = getProgressValue(level);
    const dots = Math.ceil(value / 20); // Convert percentage to 1-5 scale
    return Array(dots).fill("•").join("");
  };

  return (
    <Card className="bg-white/5 backdrop-blur-sm border border-accent/20">
      <CardHeader>
        <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Languages
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {languages.map((language, index) => (
            <div 
              key={index}
              className={`rounded-lg p-3 transition-all duration-300 ${getLanguageBadgeColor(language.level)}`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-medium">{language.name}</span>
                <div className="flex items-center gap-1">
                  <span className="text-xs opacity-75">{getLanguageDots(language.level)}</span>
                  {getProgressValue(language.level) >= 90 && (
                    <ChevronUp className="w-4 h-4 text-emerald-500 animate-bounce" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
