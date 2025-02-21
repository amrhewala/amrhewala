import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
export const TechnicalSkills = ({
  skills,
  getProgressValue
}: TechnicalSkillsProps) => {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));
  const getSkillBadgeColor = (level: string) => {
    const value = getProgressValue(level);
    if (value >= 90) return "bg-emerald-500/5 text-emerald-700 hover:bg-emerald-500/10";
    if (value >= 70) return "bg-blue-500/5 text-blue-700 hover:bg-blue-500/10";
    if (value >= 50) return "bg-yellow-500/5 text-yellow-700 hover:bg-yellow-500/10";
    return "bg-gray-500/5 text-gray-700 hover:bg-gray-500/10";
  };
  const renderSkillLevel = (level: string) => {
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
  return <div className="grid gap-6">
      {categories.map(category => <Card key={category} className="bg-white/5 backdrop-blur-sm border border-accent/10 transform transition-all duration-500 hover:shadow-lg">
          <CardHeader className="py-3">
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {category}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {skills.filter(skill => skill.category === category).map((skill, index) => <div key={index} className={`rounded-lg p-2.5 transition-all duration-300 ${getSkillBadgeColor(skill.level)}`}>
                    <div className="flex items-center justify-between gap-2 px-[95px] my-0 mx-0 py-0 rounded-none">
                      <span className="font-medium text-sm">{skill.name}</span>
                      {renderSkillLevel(skill.level)}
                    </div>
                  </div>)}
            </div>
          </CardContent>
        </Card>)}
    </div>;
};