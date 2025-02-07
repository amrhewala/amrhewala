
import { education } from "@/data/education";
import { Card, CardContent } from "@/components/ui/card";
import { CollapsibleText } from "@/components/ui/collapsible-text";

export const EducationDetails = () => {
  return (
    <section className="w-full py-8">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Educational Journey
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="backdrop-blur-sm bg-white/80 border-none shadow-lg hover:shadow-accent/20 transition-all duration-500">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">{edu.name}</h3>
                <CollapsibleText text={edu.fullDescription} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
