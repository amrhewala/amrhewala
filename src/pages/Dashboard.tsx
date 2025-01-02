import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogoUploadForm } from "@/components/dashboard/LogoUploadForm";
import { CertificateUploadForm } from "@/components/dashboard/CertificateUploadForm";
import { ArticleForm } from "@/components/dashboard/ArticleForm";
import { ExperienceForm } from "@/components/dashboard/ExperienceForm";
import { SkillForm } from "@/components/dashboard/SkillForm";
import { LanguageForm } from "@/components/dashboard/LanguageForm";

const Dashboard = () => {
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
          <LogoUploadForm />
        </TabsContent>

        <TabsContent value="certificates">
          <CertificateUploadForm />
        </TabsContent>

        <TabsContent value="articles">
          <ArticleForm />
        </TabsContent>

        <TabsContent value="experience">
          <ExperienceForm />
        </TabsContent>

        <TabsContent value="skills">
          <SkillForm />
        </TabsContent>

        <TabsContent value="languages">
          <LanguageForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;