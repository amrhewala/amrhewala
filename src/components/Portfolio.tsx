
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CollapsibleText } from "./ui/collapsible-text";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "HR Report",
    description: "This Power BI dashboard provides a comprehensive overview of employee salaries, workforce distribution, and key HR insights. The report analyzes various aspects, including gender pay distribution, overtime hours by department, employee experience levels, country-wise salary distribution, and bonuses by employee levels.\n\nKey Insights:\n\n* Employee Demographics:\n\nTotal employees: 689\nMale employees: 449 | Female employees: 240\n\n* Salary Distribution:\n\nTotal Salaries: 17M\nSalaries by Gender: Males earn 11M, while females earn 6M, indicating a gender pay gap.\n\n* Overtime Analysis:\n\nTotal overtime hours: 689\nTop departments with highest overtime:\nManufacturing (140 hrs)\nQuality Control (89 hrs)\nAccount Management (84 hrs)\n\n* Employee Experience & Growth:\n\nMajority of employees have 4-5 years of experience.\nFewer employees with 7+ years of experience, highlighting potential retention concerns.\n\n* Regional Salary & Bonus Distribution:\n\nEgypt leads in total salaries and bonuses, followed by UAE, Saudi Arabia, Syria, and Lebanon.\nBonus distribution varies significantly by employee levels, with Level 2 employees receiving the highest share (48.2%).\nBusiness Impact & Decision-Making:\nThis report helps HR and leadership teams:\n* Identify salary gaps and workforce trends.\n* Optimize overtime management to improve productivity.\n* Analyze retention trends based on experience levels.\n* Enhance compensation strategies for equitable growth.\n* This data-driven approach enables better HR planning, employee engagement, and financial efficiency.\n\n#HRAnalytics #PowerBI #SalaryReport #WorkforceInsights #EmployeeEngagement #DataDrivenDecisionMaking",
    technologies: ["Power BI", "Ms Excel","Data Visualization","Data Analysis","Data Cleansing","Data Processing"],
    images: ["/HR_report-Salaries.png", "/HR_report-Salaries-Gender.png"],
  },
  {
    title: "Sales Analysis Report-Arabic-",
    description: "Conducted a comprehensive sales analysis from 2009 to 2011, examining key relationships between sales performance, market demand, and various sales categories. This included an in-depth evaluation of sales trends by region, product type, and customer segment, as well as an analysis of distribution patterns and sales dynamics. Additionally, I identified the primary producers involved in the case (late or on time) and assessed their impact on overall sales performance. A key focus was determining high-impact customer segments, analyzing their influence on demand, and evaluating how location, customer category, and product type shape sales trends.",
    technologies: ["Power BI", "Ms Excel","Data Visualization","Data Analysis","Data Cleansing","Data Processing"],
    images: ["/Sales_Analysis.png"],
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
              <Dialog>
                <DialogTrigger className="w-full">
                  <div className="relative h-48 overflow-hidden">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {project.images.map((image, imgIndex) => (
                          <CarouselItem key={imgIndex}>
                            <img 
                              src={image} 
                              alt={`${project.title} - Image ${imgIndex + 1}`}
                              className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {project.images.length > 1 && (
                        <>
                          <CarouselPrevious />
                          <CarouselNext />
                        </>
                      )}
                    </Carousel>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <Carousel className="w-full mb-6">
                      <CarouselContent>
                        {project.images.map((image, imgIndex) => (
                          <CarouselItem key={imgIndex}>
                            <img 
                              src={image} 
                              alt={`${project.title} - Image ${imgIndex + 1}`}
                              className="w-full h-auto object-contain"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {project.images.length > 1 && (
                        <>
                          <CarouselPrevious />
                          <CarouselNext />
                        </>
                      )}
                    </Carousel>
                    <p className="text-gray-700 whitespace-pre-line">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CollapsibleText text={project.description} />
                <div className="flex flex-wrap gap-2 mt-4">
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
