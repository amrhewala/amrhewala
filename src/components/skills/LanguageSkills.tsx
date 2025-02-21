
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDot, Star, StarHalf } from "lucide-react";

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
    if (value >= 90) return "bg-emerald-500/5 text-emerald-700 hover:bg-emerald-500/10";
    if (value >= 70) return "bg-blue-500/5 text-blue-700 hover:bg-blue-500/10";
    if (value >= 50) return "bg-yellow-500/5 text-yellow-700 hover:bg-yellow-500/10";
    return "bg-gray-500/5 text-gray-700 hover:bg-gray-500/10";
  };

  const renderLanguageLevel = (level: string) => {
    const value = getProgressValue(level);
    if (value >= 90) {
      return <Star className="w-4 h-4 text-emerald-500 fill-current" />;
    }
    if (value >= 70) {
      return <StarHalf className="w-4 h-4 text-blue-500" />;
    }
    if (value >= 50) {
      return <CircleDot className="w-4 h-4 text-yellow-500" />;
    }
    return <CircleDot className="w-4 h-4 text-gray-400" />;
  };

  return (
    <Card className="bg-white/5 backdrop-blur-sm border border-accent/10">
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
        {languages.map((language, index) => (
          <div 
            key={index}
            className={`rounded-lg p-2.5 transition-all duration-300 ${getLanguageBadgeColor(language.level)}`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-medium text-sm">{language.name}</span>
              {renderLanguageLevel(language.level)}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
