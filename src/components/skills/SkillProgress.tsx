import { Progress } from "@/components/ui/progress";

interface SkillOrLanguage {
  name: string;
  level: string;
}

interface SkillProgressProps {
  item: SkillOrLanguage;
  getProgressValue: (level: string) => number;
}

export const SkillProgress = ({ item, getProgressValue }: SkillProgressProps) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium">{item.name}</span>
        <span className="text-sm text-muted-foreground capitalize">{item.level}</span>
      </div>
      <Progress value={getProgressValue(item.level)} className="h-2" />
    </div>
  );
};