import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillProgress } from "./SkillProgress";

type SkillOrLanguage = {
  name: string;
  level: string;
};

interface LanguageSkillsProps {
  languages: SkillOrLanguage[];
  getProgressValue: (level: string) => number;
}

export const LanguageSkills = ({ languages, getProgressValue }: LanguageSkillsProps) => {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border border-accent/20">
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Languages
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {languages.map((language, index) => (
          <SkillProgress key={index} item={language} getProgressValue={getProgressValue} />
        ))}
      </CardContent>
    </Card>
  );
};