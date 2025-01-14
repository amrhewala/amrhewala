import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";

const achievements = {
    title: "Highly Commended – Suez Free Zone, Egypt",
    description: `
      Led a team in crafting the winning proposal for the Suez Free Zone, recognized as "Highly Commended" in the Global Free Zones of the Year 2023 Awards. 
      Leveraged expertise in data analysis, strategic communication, and report writing to highlight the Free Zone’s innovative strategies and achievements. 
      Showcased the Zone’s focus on attracting labor-intensive projects, enriching local expertise, and fostering innovation. 
      Highlighted key investments from global companies like Galaxy Chemicals and Schneider Electric, creating over 900 jobs, and the Zone’s support for SMEs through flexible leasing arrangements and tailored services. 
      Also emphasized sustainability initiatives, including promoting electric vehicles and decarbonization efforts.
    `,
    link: "https://www.fdiintelligence.com/content/rankings-and-awards/global-free-zones-of-the-year-2023-awards-best-zones-overall-83065",
    year: "2023",
    photos: [
      "/public/CONGRATULATIONS.jpg", // Replace with your actual image paths
      "/public/CONGRATULATIONS.jpeg", // Replace with your actual image paths
    ],
  },
  {
    title: "Entrepreneurial Success",
    description: "Led a successful startup company in Europe for 4 years",
    year: "2015-2018",
  },
  {
    title: "Database Innovation",
    description: "Created comprehensive database system covering 2008 to present",
    year: "2008-Present",
  }
];

export const Achievements = () => {
  return (
    <section className="py-8 relative">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Achievements
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-accent" />
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-6 h-6 text-accent" />
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                </div>
                <Badge variant="secondary">{achievement.year}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
