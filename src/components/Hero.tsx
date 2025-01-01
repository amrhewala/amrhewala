import { ProfileImage } from "./hero/ProfileImage";
import { LogoGrid } from "./hero/LogoGrid";
import { SocialLinks } from "./hero/SocialLinks";
import { CertificatesCarousel } from "./hero/CertificatesCarousel";
import { BlogPosts } from "./hero/BlogPosts";

export const Hero = () => {
  const education = [
    {
      name: "Udacity",
      logo: "/udacity.svg",
      color: "#02b3e4"
    },
    {
      name: "Udacity",
      logo: "/udacity.png",
      color: "#02b3e4"
    },
    {
      name: "Google",
      logo: "/Google__G__logo.svg.png",
      color: "#4285F4"
    },
    {
      name: "Power-BI",
      logo: "/Power-BI.png",
      color: "#F2C811"
    },
    {
      name: "U-M",
      logo: "/U-M_Logo-Hex.png",
      color: "#00274C"
    },
    {
      name: "Coursera",
      logo: "/coursera-vector-logo-2022.png",
      color: "#0056D2"
    },
    {
      name: "data-analytics",
      logo: "/data-analytics.jpg",
      color: "#1a365d"
    },
    {
      name: "python",
      logo: "/python.png",
      color: "#3776AB"
    },
    {
      name: "Wien",
      logo: "/Uni.png",
      color: "#1a365d"
    }
  ];

  const certificates = [
    {
      name: "Certificate 1",
      image: "/placeholder.svg",
      institution: "Institution 1",
      color: "#1a365d"
    },
    {
      name: "Certificate 2",
      image: "/placeholder.svg",
      institution: "Institution 2",
      color: "#1a365d"
    }
  ];

  const workplaces = [
    {
      name: "GAFI",
      logo: "/GAFI.svg",
      color: "#1a365d"
    },
    {
      name: "Suez_Canal_University",
      logo: "/Suez_Canal_University.svg",
      color: "#1a365d"
    }
  ];

  const blogPosts = [
    {
      title: "Data Analsis",
      excerpt: "Short description of article 1",
      date: "2024-01-01"
    },
    {
      title: "Power BI",
      excerpt: "Short description of Power BI",
      date: "2024-12-27"
    }
  ];

  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center text-center p-4 relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/10 to-background">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
      
      <ProfileImage 
        src="/lovable-uploads/126b5734-9f0a-4a0b-9a9f-6a9b3dedd1ca.png"
        alt="Amr Hewala"
      />

      <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
        Amr Hewala
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in delay-100">Senior Data Analysis</p>
      
      <LogoGrid items={[...education, ...workplaces]} />
      <SocialLinks />
      <CertificatesCarousel certificates={certificates} />
      <BlogPosts posts={blogPosts} />
    </div>
  );
};