import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

export const SkillForm = () => {
  const { toast } = useToast();
  const [newSkill, setNewSkill] = useState({ name: "", level: "beginner" });

  const handleSubmit = () => {
    console.log("Saving skill:", newSkill);
    toast({
      title: "Success",
      description: "Skill has been saved successfully.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Skill</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Skill Name"
          value={newSkill.name}
          onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
        />
        <Select
          value={newSkill.level}
          onValueChange={(value) => setNewSkill({ ...newSkill, level: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Skill Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
            <SelectItem value="expert">Expert</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleSubmit} className="w-full">Add Skill</Button>
      </CardContent>
    </Card>
  );
};