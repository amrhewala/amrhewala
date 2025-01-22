import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

// Define the type for achievement items
interface Achievement {
  title: string;
  description: string;
  subtitle: string;
  year: string;
  photos?: string[];
  link?: string;
}

// Define the achievements array
const achievements: Achievement[] = [
  {
    title: "Prize: Highly Commended – Suez Free Zone, Egypt",
    subtitle: "Global Free Zones of the Year 2023 Awards by fDi Intelligence",
    description: `I am proud to have led a team in crafting the winning proposal that earned the Suez Free Zone a "Highly Commended" recognition in the Global Free Zones of the Year 2023 Awards, an international competition organized by the Financial Times' FDI Intelligence to showcase the best free zone practices worldwide.

Leveraging my expertise in data analysis, strategic communication, and report writing, I worked closely with my team to highlight the Free Zone's innovative strategies, economic impact, and sustainability efforts. Our submission demonstrated how the Suez Free Zone has evolved into a hub for knowledge, expertise, and investment, attracting global corporations and fostering local economic growth.

Key Contributions & Achievements:
* Strategic Investment Focus: Attracting labor-intensive projects to enhance local expertise and drive industrial innovation.
* Major Global Investments: Showcasing expansions by Galaxy Chemicals and Schneider Electric, leading to over 900 new jobs.
* Empowering SMEs: Implementing flexible leasing models, tailored support services, and industry clusters to strengthen small and medium enterprises.
* Sustainability Leadership: Advancing electric vehicle adoption, sustainability training, and decarbonization efforts to align with global net-zero goals.

This recognition not only underscores my ability to lead teams, analyze complex data, and develop compelling reports, but also highlights my commitment to driving economic growth, fostering innovation, and promoting sustainability in free zones.

#SuezFreeZone #FDIIntelligence #GlobalFreeZones #FinancialTimes #EconomicGrowth #DataAnalysis #Leadership`,
    year: "2023",
    photos: [
      "/CONGRATULATIONS.png",
      "/FDI LOGO.png",
      "/2023-2.png",
      "/Suez free zone.png"
    ],
    link: "https://www.fdiintelligence.com/content/rankings-and-awards/global-free-zones-of-the-year-2023-awards-best-zones-overall-83065"
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
