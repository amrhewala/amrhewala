
import { Card, CardContent } from "@/components/ui/card";
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
  const getLanguageLevelIcon = (level: string) => {
    const value = getProgressValue(level);
    if (value >= 90) {
      return <Star className="w-5 h-5 text-accent fill-accent" />;
    }
    if (value >= 70) {
      return <StarHalf className="w-5 h-5 text-blue-500" />;
    }
    if (value >= 50) {
      return <CircleDot className="w-5 h-5 text-yellow-500" />;
    }
    return <CircleDot className="w-5 h-5 text-gray-400" />;
  };

  return (
    <Card className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border-none shadow-md">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {languages.map((language, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-3 rounded-md bg-white shadow-sm hover:shadow transition-all duration-200"
            >
              <span className="font-medium text-gray-800">{language.name}</span>
              {getLanguageLevelIcon(language.level)}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
