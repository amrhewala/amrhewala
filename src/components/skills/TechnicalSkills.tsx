
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

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

  const getLevelColor = (level: string) => {
    const value = getProgressValue(level);
    if (value >= 90) return "bg-green-500";
    if (value >= 70) return "bg-blue-500";
    if (value >= 50) return "bg-yellow-500";
    return "bg-gray-500";
  };

  return (
    <div className="grid gap-6">
      {categories.map((category) => (
        <Card key={category} className="bg-white/5 backdrop-blur-sm border border-accent/20">
          <CardHeader>
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {category}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground capitalize">{skill.level}</span>
                    </div>
                    <Progress 
                      value={getProgressValue(skill.level)} 
                      className={`h-2 ${getLevelColor(skill.level)}`}
                    />
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
