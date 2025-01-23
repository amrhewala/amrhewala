import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "HR Report",
    description: "This Power BI dashboard provides a comprehensive overview of employee salaries, workforce distribution, and key HR insights. The report analyzes various aspects, including gender pay distribution, overtime hours by department, employee experience levels, country-wise salary distribution, and bonuses by employee levels.\n\nKey Insights:\n* Employee Demographics:\n\nTotal employees: 689\nMale employees: 449 | Female employees: 240\n* Salary Distribution:\n\nTotal Salaries: 17M\nSalaries by Gender: Males earn 11M, while females earn 6M, indicating a gender pay gap.\n* Overtime Analysis:\n\nTotal overtime hours: 689\nTop departments with highest overtime:\nManufacturing (140 hrs)\nQuality Control (89 hrs)\nAccount Management (84 hrs)\n* Employee Experience & Growth:\n\nMajority of employees have 4-5 years of experience.\nFewer employees with 7+ years of experience, highlighting potential retention concerns.\n* Regional Salary & Bonus Distribution:\n\nEgypt leads in total salaries and bonuses, followed by UAE, Saudi Arabia, Syria, and Lebanon.\nBonus distribution varies significantly by employee levels, with Level 2 employees receiving the highest share (48.2%).\nBusiness Impact & Decision-Making:\nThis report helps HR and leadership teams:\n* Identify salary gaps and workforce trends.\n* Optimize overtime management to improve productivity.\n* Analyze retention trends based on experience levels.\n* Enhance compensation strategies for equitable growth.\n\n* This data-driven approach enables better HR planning, employee engagement, and financial efficiency.\n\n#HRAnalytics #PowerBI #SalaryReport #WorkforceInsights #EmployeeEngagement #DataDrivenDecisionMaking",
    technologies: ["Power BI", "Ms Excel","Data Visualization","Data Analysis","Data Cleansing","Data Processing"],
    images: ["/HR_report-Salaries.png", "/HR_report-Salaries-Gender.png"],
    image: "/HR_report-Salaries.png", // Primary display image
  },
  {
    title: "Sales Analysis Report-Arabic-",
    description: "Conducted a comprehensive sales analysis from 2009 to 2011, examining key relationships between sales performance, market demand, and various sales categories. This included an in-depth evaluation of sales trends by region, product type, and customer segment, as well as an analysis of distribution patterns and sales dynamics. Additionally, I identified the primary producers involved in the case (late or on time) and assessed their impact on overall sales performance. A key focus was determining high-impact customer segments, analyzing their influence on demand, and evaluating how location, customer category, and product type shape sales trends.",
    technologies: ["Power BI", "Ms Excel","Data Visualization","Data Analysis","Data Cleansing","Data Processing"],
    image: "/Sales_Analysis.png",
  },
];

export const Portfolio = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
      <div className="container relative">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Portfolio
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 backdrop-blur-sm bg-white/80 border-none">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />  
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-accent transition-colors">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700 whitespace-pre-line">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="hover:bg-accent/20 transition-colors">
                      {tech}
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
