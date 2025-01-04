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
      
      <LogoGrid items={[...education, ...workplaces]} />
      <SocialLinks />
      <CertificatesCarousel certificates={certificates} />
      <BlogPosts posts={blogPosts} />
    </div>
  );
};