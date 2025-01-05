import { ProfileImage } from "./hero/ProfileImage";
import { SocialLinks } from "./hero/SocialLinks";
import { LogoGrid } from "./hero/LogoGrid";
import { CertificatesCarousel } from "./hero/CertificatesCarousel";
import { BlogPosts } from "./hero/BlogPosts";
import { blogPosts } from "@/data/blog-posts";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 py-24 space-y-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Senior Data Analysis
              </h1>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="leading-relaxed">
                  I am a seasoned Senior Data Specialist at the Egyptian Economic Authority - GAFI (General Authority for Investment and Free Zones), dedicated to driving impactful data analysis and visualization strategies to elevate decision-making processes.
                </p>
                <p className="leading-relaxed">
                  In addition to this role, I bring a wealth of experience from successfully leading my own startup company in Europe for four years as its Chief Executive Officer.
                </p>
              </div>
            </div>
            <SocialLinks />
          </div>
          <div className="space-y-12 lg:pl-8">
            <div className="flex justify-center">
              <ProfileImage 
                src="/lovable-uploads/194265e1-a038-4904-be43-b6ea5e35a693.png"
                alt="Profile"
              />
            </div>
            <LogoGrid />
          </div>
        </div>
        <div className="space-y-16">
          <CertificatesCarousel />
          <BlogPosts posts={blogPosts} />
        </div>
      </div>
    </section>
  );
};