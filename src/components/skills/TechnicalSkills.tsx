import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillProgress } from "./SkillProgress";

type SkillOrLanguage = {
  name: string;
  level: string;
};

interface TechnicalSkillsProps {
  skills: SkillOrLanguage[];
  getProgressValue: (level: string) => number;
}

export const TechnicalSkills = ({ skills, getProgressValue }: TechnicalSkillsProps) => {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border border-accent/20">
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Technical Skills
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {skills.map((skill, index) => (
          <SkillProgress key={index} item={skill} getProgressValue={getProgressValue} />
        ))}
      </CardContent>
    </Card>
  );
};