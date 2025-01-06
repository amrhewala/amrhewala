import { ProfileSection } from "@/components/sections/ProfileSection";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Portfolio } from "@/components/Portfolio";
import { ContactForm } from "@/components/ContactForm";
import { SocialSection } from "@/components/sections/SocialSection";
import { LogoSection } from "@/components/sections/LogoSection";
import { CertificatesCarousel } from "@/components/hero/CertificatesCarousel";
import { BlogPosts } from "@/components/hero/BlogPosts";
import { certificates } from "@/data/certificates";
import { blogPosts } from "@/data/blog-posts";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/10 to-background">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
      
      <div className="relative space-y-8">
        {/* Section 1: Profile */}
        <ProfileSection />
        
        {/* Section 2: About */}
        <About />
        
        {/* Section 3: Social Links */}
        <SocialSection />
        
        {/* Section 4: Logos (Work/Study) */}
        <LogoSection />
        
        {/* Section 5: Certificates */}
        <div className="py-8 flex justify-center">
          <div className="w-full max-w-6xl px-4">
            <CertificatesCarousel certificates={certificates} />
          </div>
        </div>
        
        {/* Section 6: Experience */}
        <Experience />
        
        {/* Section 7: Portfolio */}
        <Portfolio />
        
        {/* Section 8: Blog Posts */}
        <div className="py-8 flex justify-center">
          <div className="w-full max-w-6xl px-4">
            <BlogPosts posts={blogPosts} />
          </div>
        </div>
        
        {/* Section 9: Contact Form */}
        <ContactForm />
      </div>
    </main>
  );
};

export default Index;