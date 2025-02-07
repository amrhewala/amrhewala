
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CollapsibleText } from "@/components/ui/collapsible-text";

export const About = () => {
  return (
    <section className="py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />
      <div className="container relative">
        <Card className="backdrop-blur-sm bg-white/80 border-none shadow-2xl hover:shadow-accent/20 transition-all duration-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg leading-relaxed">
            <CollapsibleText text="Senior Data Analysis I am a seasoned Senior Data Specialist at the Egyptian Economic Authority - GAFI (General Authority for Investment and Free Zones), dedicated to driving impactful data analysis and visualization strategies to elevate decision-making processes. In addition to this role, I bring a wealth of experience from successfully leading my own startup company in Europe for four years as its Chief Executive Officer.
In the dynamic landscape of the investment management industry, I specialize in transforming complex datasets into actionable insights. My skill set includes advanced proficiency in Analytical Skills, Databases, and Quantitative Research. Notably, I played a pivotal role at GAFI, where I computerized all processes at the financial department and created a comprehensive database from scratch, covering the period from 2008 until now. This involved managing and analyzing vast amounts of data, generating numerous reports, and crafting intricate queries.
My academic background includes valuable experience in academia, contributing to the fields of Business Administration and Management from Suez Canal University and Development Economics and International Development from the University of Vienna.
As a data-driven professional with programming expertise, I excel in harnessing the power of analytics to inform strategic decision-making. Let's connect and explore how my unique blend of skills in data analysis, visualization, programming, and database management can contribute to the success of our mutual endeavors." />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
