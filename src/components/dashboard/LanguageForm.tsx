import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

export const LanguageForm = () => {
  const { toast } = useToast();
  const [newLanguage, setNewLanguage] = useState({ name: "", level: "basic" });

  const handleSubmit = () => {
    console.log("Saving language:", newLanguage);
    toast({
      title: "Success",
      description: "Language has been saved successfully.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Language</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Language Name"
          value={newLanguage.name}
          onChange={(e) => setNewLanguage({ ...newLanguage, name: e.target.value })}
        />
        <Select
          value={newLanguage.level}
          onValueChange={(value) => setNewLanguage({ ...newLanguage, level: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Language Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="basic">Basic</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
            <SelectItem value="native">Native</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleSubmit} className="w-full">Add Language</Button>
      </CardContent>
    </Card>
  );
};