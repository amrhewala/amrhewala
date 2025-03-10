
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const experiences = [{
  title: "Senior Data Specialist",
  company: "GAFI",
  period: "2018 - Present",
  description: "Leading development teams and implementing enterprise-level solutions.",
  achievements: [
    "Spearheaded the analysis of financial data to generate actionable insights, improving operational efficiency by 15% and supporting strategic decision-making.",
    "Designed and implemented Power BI dashboards, reducing manual reporting time by 40% and enhancing financial transparency across departments.",
    "Led a team of 4 data analysts, optimizing workflows and reducing report turnaround time by 30%.",
    "Identified key financial trends, resulting in a 25% improvement in data processing speed and accuracy.",
    "Collaborated with cross-functional teams to develop automated data pipelines, reducing manual data entry errors by 20%.",
    "Conducted training sessions on Power BI and data visualization best practices, improving team productivity by 15%."
  ],
  skills: ["PHP", "Python", "NumPy", "Pandas", "Matplotlib", "Agile"]
}, {
  title: "CEO",
  company: "Family Company s.r.o",
  period: "2015 - 2018",
  description: "Family company is a multi-service provider; that offers consulting and support for Small and medium enterprises and business entrepreneurs, to help ensure a solid construction of medium-size business enterprises.",
  skills: ["Business Consultation", "Business Entrepreneurs Consulting ", "Companies Formation", "Legal Services", "IT Services"]
}, {
  title: " Data Specialist",
  company: "GAFI",
  period: "2007 - 2015",
  description: "Leading development teams and implementing enterprise-level solutions.",
  achievements: [
    "Supervised financial operations for Adabia Free Zone projects, ensuring compliance with regulatory standards and improving reporting accuracy by 20%.",
    "Digitized 80% of financial paperwork by developing a comprehensive database, streamlining bookkeeping, registrations, and accounting processes.",
    "Served as an Oracle ERP Key User, training team members and optimizing system usage, resulting in a 15% improvement in operational efficiency.",
    "Acted as the Investor Support Lead, resolving financial and operational issues, and maintaining a 100% compliance rate with updated guidelines.",
    "Established a feedback loop with the central help desk, improving service quality and reducing resolution time by 25%."
  ],
  skills: ["MS Accsses", "MS Excel", "Agile"]
}];
export const Experience = () => {
  return <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-0">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-accent" />
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">{exp.title}</CardTitle>
                <p className="text-gray-600">{exp.company} • {exp.period}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700">{exp.description}</p>
                
                {exp.achievements && (
                  <div className="mb-4">
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => <Badge key={idx} variant="secondary" className="hover:bg-accent/20 transition-colors">
                      {skill}
                    </Badge>)}
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
