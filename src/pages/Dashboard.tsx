import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const { toast } = useToast();
  const [newLogo, setNewLogo] = useState({ name: "", logo: "", type: "education" });
  const [newCertificate, setNewCertificate] = useState({ name: "", image: "", institution: "" });
  const [newArticle, setNewArticle] = useState({ title: "", excerpt: "", date: "" });
  const [newExperience, setNewExperience] = useState({
    title: "",
    company: "",
    period: "",
    description: "",
    skills: "",
  });
  const [newSkill, setNewSkill] = useState({ name: "", level: "beginner" });
  const [newLanguage, setNewLanguage] = useState({ name: "", level: "basic" });

  const handleSubmit = (type: string, data: any) => {
    // In a real app, this would save to a backend
    console.log(`Saving ${type}:`, data);
    toast({
      title: "Success",
      description: `${type} has been saved successfully.`,
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      <Tabs defaultValue="logos" className="space-y-4">
        <TabsList className="grid grid-cols-3 lg:grid-cols-6 gap-4">
          <TabsTrigger value="logos">Logos</TabsTrigger>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="languages">Languages</TabsTrigger>
        </TabsList>

        <TabsContent value="logos">
          <Card>
            <CardHeader>
              <CardTitle>Add Logo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Institution Name"
                value={newLogo.name}
                onChange={(e) => setNewLogo({ ...newLogo, name: e.target.value })}
              />
              <Input
                placeholder="Logo URL"
                value={newLogo.logo}
                onChange={(e) => setNewLogo({ ...newLogo, logo: e.target.value })}
              />
              <Select
                value={newLogo.type}
                onValueChange={(value) => setNewLogo({ ...newLogo, type: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="workplace">Workplace</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={() => handleSubmit("logo", newLogo)}>Add Logo</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="certificates">
          <Card>
            <CardHeader>
              <CardTitle>Add Certificate</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Certificate Name"
                value={newCertificate.name}
                onChange={(e) => setNewCertificate({ ...newCertificate, name: e.target.value })}
              />
              <Input
                placeholder="Image URL"
                value={newCertificate.image}
                onChange={(e) => setNewCertificate({ ...newCertificate, image: e.target.value })}
              />
              <Input
                placeholder="Institution"
                value={newCertificate.institution}
                onChange={(e) => setNewCertificate({ ...newCertificate, institution: e.target.value })}
              />
              <Button onClick={() => handleSubmit("certificate", newCertificate)}>Add Certificate</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="articles">
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
              <Button onClick={() => handleSubmit("article", newArticle)}>Add Article</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="experience">
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
              <Button onClick={() => handleSubmit("experience", newExperience)}>Add Experience</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills">
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
              <Button onClick={() => handleSubmit("skill", newSkill)}>Add Skill</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="languages">
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
              <Button onClick={() => handleSubmit("language", newLanguage)}>Add Language</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;