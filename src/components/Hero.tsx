import { ProfileSection } from "./sections/ProfileSection";
import { SocialSection } from "./sections/SocialSection";
import { LogoSection } from "./sections/LogoSection";
import { CertificatesCarousel } from "./hero/CertificatesCarousel";
import { BlogPosts } from "./hero/BlogPosts";
import { certificates } from "@/data/certificates";
import { blogPosts } from "@/data/blog-posts";

export const Hero = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center text-center p-4 relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/10 to-background">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
      
      <ProfileSection />
      <SocialSection />
      <LogoSection />
      <CertificatesCarousel certificates={certificates} />
      <BlogPosts posts={blogPosts} />
    </div>
  );
};