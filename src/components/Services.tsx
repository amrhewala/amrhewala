import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Code, LineChart, Database, PenTool, Search } from "lucide-react";

const services = [
  {
    title: "Data Analysis",
    description: "Comprehensive data analysis services using Python, Pandas, and advanced statistical methods",
    icon: LineChart,
    tools: ["Python", "Pandas", "NumPy", "Statistical Analysis"]
  },
  {
    title: "Database Management",
    description: "Design and implementation of efficient database systems and data warehouses",
    icon: Database,
    tools: ["SQL", "Database Design", "Data Modeling"]
  },
  {
    title: "Business Consulting",
    description: "Strategic business consulting for SMEs and entrepreneurs",
    icon: Briefcase,
    tools: ["Business Strategy", "Market Analysis", "Growth Planning"]
  },
  {
    title: "Data Visualization",
    description: "Creating insightful data visualizations and interactive dashboards",
    icon: PenTool,
    tools: ["Power BI", "Data Visualization", "Dashboard Design"]
  },
  {
    title: "Process Optimization",
    description: "Streamlining and automating business processes for improved efficiency",
    icon: Code,
    tools: ["Process Analysis", "Automation", "Workflow Optimization"]
  },
  {
    title: "Data-Driven Insights",
    description: "Extracting actionable insights from complex datasets",
    icon: Search,
    tools: ["Data Mining", "Predictive Analytics", "Reporting"]
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Services Offered
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <service.icon className="w-6 h-6 text-accent" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool, idx) => (
                    <Badge key={idx} variant="secondary" className="hover:bg-accent/20 transition-colors">
                      {tool}
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