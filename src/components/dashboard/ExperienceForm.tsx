import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export const ExperienceForm = () => {
  const { toast } = useToast();
  const [newExperience, setNewExperience] = useState({
    title: "",
    company: "",
    period: "",
    description: "",
    skills: "",
  });

  const handleSubmit = () => {
    console.log("Saving experience:", newExperience);
    toast({
      title: "Success",
      description: "Experience has been saved successfully.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Experience</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Job Title"
          value={newExperience.title}
          onChange={(e) => setNewExperience({ ...newExperience, title: e.target.value })}
        />
        <Input
          placeholder="Company"
          value={newExperience.company}
          onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
        />
        <Input
          placeholder="Period (e.g., 2020-2023)"
          value={newExperience.period}
          onChange={(e) => setNewExperience({ ...newExperience, period: e.target.value })}
        />
        <Textarea
          placeholder="Description"
          value={newExperience.description}
          onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
        />
        <Input
          placeholder="Skills (comma separated)"
          value={newExperience.skills}
          onChange={(e) => setNewExperience({ ...newExperience, skills: e.target.value })}
        />
        <Button onClick={handleSubmit} className="w-full">Add Experience</Button>
      </CardContent>
    </Card>
  );
};