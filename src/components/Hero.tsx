import { ProfileImage } from "./hero/ProfileImage";
import { LogoGrid } from "./hero/LogoGrid";
import { SocialLinks } from "./hero/SocialLinks";
import { CertificatesCarousel } from "./hero/CertificatesCarousel";
import { BlogPosts } from "./hero/BlogPosts";
import { education } from "@/data/education";
import { workplaces } from "@/data/workplaces";
import { certificates } from "@/data/certificates";
import { blogPosts } from "@/data/blog-posts";

export const Hero = () => {
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
      <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in delay-100">
        Senior Data Analysis
      </p>
       <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in delay-100">
        About Me
        Senior Data Analysis I am a seasoned Senior Data Specialist at the Egyptian Economic Authority - GAFI (General Authority for Investment and Free Zones), dedicated to driving impactful data analysis and visualization strategies to elevate decision-making processes. In addition to this role, I bring a wealth of experience from successfully leading my own startup company in Europe for four years as its Chief Executive Officer. In the dynamic landscape of the investment management industry, I specialize in transforming complex datasets into actionable insights. My skill set includes advanced proficiency in Analytical Skills, Databases, and Quantitative Research. Notably, I played a pivotal role at GAFI, where I computerized all processes at the financial department and created a comprehensive database from scratch, covering the period from 2008 until now. This involved managing and analyzing vast amounts of data, generating numerous reports, and crafting intricate queries. My academic background includes valuable experience in academia, contributing to the fields of Business Administration and Management from Suez Canal University and Development Economics and International Development from the University of Vienna. As a data-driven professional with programming expertise, I excel in harnessing the power of analytics to inform strategic decision-making. Let's connect and explore how my unique blend of skills in data analysis, visualization, programming, and database management can contribute to the success of our mutual endeavors.
      </p>
      <LogoGrid items={[...education, ...workplaces]} />
      <SocialLinks />
      <CertificatesCarousel certificates={certificates} />
      <BlogPosts posts={blogPosts} />
    </div>
  );
};
