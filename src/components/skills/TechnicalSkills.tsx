
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type SkillOrLanguage = {
  name: string;
  level: string;
};

interface TechnicalSkillsProps {
  skills: SkillOrLanguage[];
  getProgressValue: (level: string) => number;
}

export const TechnicalSkills = ({ skills, getProgressValue }: TechnicalSkillsProps) => {
  const getLevelColor = (level: string) => {
    const value = getProgressValue(level);
    if (value >= 90) return "bg-green-500";
    if (value >= 70) return "bg-blue-500";
    if (value >= 50) return "bg-yellow-500";
    return "bg-gray-500";
  };

  return (
    <Card className="bg-white/5 backdrop-blur-sm border border-accent/20">
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Technical Skills
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${getLevelColor(skill.level)}`} />
              <Badge variant="outline" className="hover:bg-accent/20 transition-colors">
                {skill.name}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
