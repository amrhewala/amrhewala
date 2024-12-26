import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Vodafone",
    period: "2019 - Present",
    description: "Leading development teams and implementing enterprise-level solutions.",
    skills: ["React", "Node.js", "AWS", "Agile"],
  },
  {
    title: "Software Engineer",
    company: "Etisalat",
    period: "2016 - 2019",
    description: "Developed and maintained web applications for telecom services.",
    skills: ["JavaScript", "PHP", "MySQL", "REST APIs"],
  },
];

export const Experience = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{exp.title}</CardTitle>
                <p className="text-gray-600">{exp.company} • {exp.period}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};