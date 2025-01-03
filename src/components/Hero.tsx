import { ProfileImage } from "./hero/ProfileImage";
import { LogoGrid } from "./hero/LogoGrid";
import { SocialLinks } from "./hero/SocialLinks";
import { CertificatesCarousel } from "./hero/CertificatesCarousel";
import { BlogPosts } from "./hero/BlogPosts";
import { Background } from "./hero/Background";
import { Header } from "./hero/Header";
import { education, workplaces, certificates, blogPosts } from "@/data/profileData";

export const Hero = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center text-center p-4 relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/10 to-background">
      <Background />
      
      <ProfileImage 
        src="/personalphoto.jpg"
        alt="Amr Hewala"
      />

      <Header 
        name="Amr Hewala"
        title="Senior Data Analysis"
      />
      
      <LogoGrid items={[...education, ...workplaces]} />
      <SocialLinks />
      <CertificatesCarousel certificates={certificates} />
      <BlogPosts posts={blogPosts} />
    </div>
  );
};