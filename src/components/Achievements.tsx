import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
// Define the type for achievement items
interface Achievement {
  title: string;
  description: string;
  year: string;
  photos?: string[];
  link?: string;
}
// Define the achievements array
const achievements: Achievement[] = [
  {
    title: "Highly Commended – Suez Free Zone, Egypt",
    description: "Led a team in crafting the winning proposal for the Suez Free Zone, recognized as \"Highly Commended\" in the Global Free Zones of the Year 2023 Awards. Leveraged expertise in data analysis, strategic communication, and report writing to highlight the Free Zone's innovative strategies and achievements. Showcased the Zone's focus on attracting labor-intensive projects, enriching local expertise, and fostering innovation. Highlighted key investments from global companies like Galaxy Chemicals and Schneider Electric, creating over 900 jobs, and the Zone's support for SMEs through flexible leasing arrangements and tailored services. Also emphasized sustainability initiatives, including promoting electric vehicles and decarbonization efforts.",
    year: "2023",
    photos: [
      "/lovable-uploads/d1fc3a80-6a16-4a51-8fcb-6ac81beac217.png",
      "/lovable-uploads/f85eb75f-c64d-4d76-bdd5-6d964a32ed8f.png"
    ],
    link: "https://www.fdiintelligence.com/content/rankings-and-awards/global-free-zones-of-the-year-2023-awards-best-zones-overall-83065"
  },
  {
    title: "Entrepreneurial Success",
    description: "Led a successful startup company in Europe for 4 years",
    year: "2015-2018"
  },
  {
    title: "Database Innovation",
    description: "Created comprehensive database system covering 2008 to present",
    year: "2008-Present"
  }
];
export const Achievements = () => {
  return (
    <section className="py-8 relative bg-[#F1F0FB]">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#0EA5E9] to-[#F97316] bg-clip-text text-transparent">
          Achievements
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-[#D3E4FD]"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#0EA5E9] to-[#F97316]" />
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-6 h-6 text-[#0EA5E9]" />
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                </div>
                <Badge variant="secondary">{achievement.year}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{achievement.description}</p>
                {achievement.photos && (
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {achievement.photos.map((photo, photoIndex) => (
                      <img
                        key={photoIndex}
                        src={photo}
                        alt={`Achievement photo ${photoIndex + 1}`}
                        className="rounded-lg shadow-md w-full h-auto"
                      />
                    ))}
                  </div>
                )}
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0EA5E9] hover:text-[#F97316] underline inline-block mt-4"
                  >
                    Read more about this achievement
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Achievements;
