import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Senior Data Specialist",
    company: "GAFI",
    period: "2018 - Present",
    description: "Leading development teams and implementing enterprise-level solutions.",
    skills: ["React", "Node.js", "AWS", "Agile"],
  },
  {
    title: "Software Engineer",
    company: "GAFI",
    period: "2015 - 2018",
    description: "Developed and maintained web applications for telecom services.",
    skills: ["JavaScript", "PHP", "MySQL", "REST APIs"],
  },
  {
    title: " Data Specialist",
    company: "GAFI",
    period: "2007 - 2015",
    description: "Leading development teams and implementing enterprise-level solutions.",
    skills: ["React", "Node.js", "AWS", "Agile"],
  },
];

export const Experience = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-accent" />
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">{exp.title}</CardTitle>
                <p className="text-gray-600">{exp.company} • {exp.period}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="hover:bg-accent/20 transition-colors">
                      {skill}
                    </Badge>
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
