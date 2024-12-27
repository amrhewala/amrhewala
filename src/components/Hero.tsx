import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Hero = () => {
  const education = [
    {
      name: "Suez Canal University",
      logo: "/Suez Canal University.svg",
    },
    {
      name: "Education 2",
      logo: "/placeholder.svg",
    }
  ];

  const certificates = [
    {
      name: "Certificate 1",
      image: "/placeholder.svg",
      institution: "Institution 1"
    },
    {
      name: "Certificate 2",
      image: "/placeholder.svg",
      institution: "Institution 2"
    }
  ];

  const workplaces = [
    {
      name: "GAFI",
      logo: "/GAFI.svg",
    },
    {
      name: "Workplace 2",
      logo: "/placeholder.svg",
    }
  ];

  const blogPosts = [
    {
      title: "Data Analsis",
      excerpt: "Short description of article 1",
      date: "2024-01-01"
    },
    {
      title: "Article 2",
      excerpt: "Short description of article 2",
      date: "2024-01-02"
    }
  ];

  // Helper function to get the correct image source
  const getImageSource = (item: typeof certificates[0] | typeof workplaces[0] | typeof education[0]): string => {
    if ('image' in item) {
      return item.image;
    }
    return item.logo;
  };

  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center text-center p-4 relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/10 to-background">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
      
      {/* Profile Image Container */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        <div className="relative w-48 h-48 overflow-hidden rounded-full">
          <img
            src="/lovable-uploads/126b5734-9f0a-4a0b-9a9f-6a9b3dedd1ca.png"
            alt="Amr Hewala"
            className="w-full h-full object-cover object-center hover:scale-105 transition-all duration-500 filter hover:brightness-110 animate-fade-in z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
        Amr Hewala
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in delay-100">Senior Data Analysis</p>
      
      {/* Education and Workplace Logos */}
      <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in delay-200">
        {[...education, ...workplaces].map((item, index) => (
          <div key={index} className="w-16 h-16 relative group">
            <img
              src={getImageSource(item)}
              alt={item.name}
              className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      
      {/* Social Media Section */}
      <div className="flex gap-4 mb-12 animate-fade-in delay-200">
        <Button variant="outline" size="icon" asChild className="rounded-full hover:scale-110 transition-transform hover:bg-accent/10 hover:border-accent">
          <a href="https://www.linkedin.com/in/amr-hewala-7365a896/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild className="rounded-full hover:scale-110 transition-transform hover:bg-accent/10 hover:border-accent">
          <a href="mailto:a.hewala@gafi.gov.eg" target="_blank" rel="noopener noreferrer">
            <Mail className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild className="rounded-full hover:scale-110 transition-transform hover:bg-accent/10 hover:border-accent">
          <a href="https://github.com/amrhewala" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="h-5 w-5" />
          </a>
        </Button>
      </div>

      {/* Certificates Section */}
      <div className="w-full max-w-4xl mb-12 animate-fade-in delay-300">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Certificates & Experience
        </h2>
        <Carousel className="w-full">
          <CarouselContent>
            {certificates.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/3">
                <Card className="bg-white/5 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-colors">
                  <CardContent className="flex items-center justify-center p-6">
                    <img
                      src={getImageSource(item)}
                      alt={item.name}
                      className="h-24 object-contain hover:scale-105 transition-transform"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Blog Posts Section */}
      <div className="w-full max-w-4xl animate-fade-in delay-400">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
                <p className="text-sm text-gray-500">{post.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
