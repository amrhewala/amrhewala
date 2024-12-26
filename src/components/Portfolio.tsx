import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Telecom Service Portal",
    description: "Enterprise portal for managing telecom services and customer data.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/placeholder.svg",
  },
  {
    title: "Customer Management System",
    description: "Internal tool for customer relationship management.",
    technologies: ["Angular", "Express", "PostgreSQL"],
    image: "/placeholder.svg",
  },
];

export const Portfolio = () => {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline">{tech}</Badge>
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