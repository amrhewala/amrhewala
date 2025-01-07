import { ProfileSection } from "@/components/sections/ProfileSection";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Portfolio } from "@/components/Portfolio";
import { ContactForm } from "@/components/ContactForm";
import { SocialSection } from "@/components/sections/SocialSection";
import { LogoSection } from "@/components/sections/LogoSection";
import { CertificatesCarousel } from "@/components/hero/CertificatesCarousel";
import { BlogPosts } from "@/components/hero/BlogPosts";
import { Achievements } from "@/components/Achievements";
import { certificates } from "@/data/certificates";
import { blogPosts } from "@/data/blog-posts";

// Define sections as an array of objects for easier reordering
const sections = [
  { id: 'profile', component: <ProfileSection /> },
  { id: 'social', component: <SocialSection /> },
  { id: 'about', component: <About /> },
  { id: 'achievements', component: <Achievements /> },
  { 
    id: 'certificates', 
    component: (
      <div className="py-8 flex justify-center">
        <div className="w-full max-w-6xl px-4">
          <CertificatesCarousel certificates={certificates} />
        </div>
      </div>
    ) 
  },
  { id: 'experience', component: <Experience /> },
  { id: 'portfolio', component: <Portfolio /> },
  { 
    id: 'blog', 
    component: (
      <div className="py-8 flex justify-center">
        <div className="w-full max-w-6xl px-4">
          <BlogPosts posts={blogPosts} />
        </div>
      </div>
    ) 
  },
  { id: 'contact', component: <ContactForm /> },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/10 to-background">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
      
      <div className="relative space-y-8">
        {sections.map(({ id, component }) => (
          <div key={id}>
            {component}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Index;