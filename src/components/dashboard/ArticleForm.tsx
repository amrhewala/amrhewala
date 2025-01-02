import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export const ArticleForm = () => {
  const { toast } = useToast();
  const [newArticle, setNewArticle] = useState({ title: "", excerpt: "", date: "" });

  const handleSubmit = () => {
    console.log("Saving article:", newArticle);
    toast({
      title: "Success",
      description: "Article has been saved successfully.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Article</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Title"
          value={newArticle.title}
          onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
        />
        <Textarea
          placeholder="Excerpt"
          value={newArticle.excerpt}
          onChange={(e) => setNewArticle({ ...newArticle, excerpt: e.target.value })}
        />
        <Input
          type="date"
          value={newArticle.date}
          onChange={(e) => setNewArticle({ ...newArticle, date: e.target.value })}
        />
        <Button onClick={handleSubmit} className="w-full">Add Article</Button>
      </CardContent>
    </Card>
  );
};