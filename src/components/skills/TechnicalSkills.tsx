
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CircleDot, Star, StarHalf } from "lucide-react";

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

  const getSkillLevelIcon = (level: string) => {
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
    <div className="grid gap-6">
      {categories.map((category) => (
        <Card 
          key={category} 
          className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-all duration-300"
        >
          <CardHeader className="py-3 border-b border-gray-100">
            <CardTitle className="text-xl font-bold text-primary">
              {category}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-3 rounded-md bg-white shadow-sm hover:shadow transition-all duration-200"
                  >
                    <span className="font-medium text-gray-800">{skill.name}</span>
                    {getSkillLevelIcon(skill.level)}
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
