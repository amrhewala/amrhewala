import { ProfileSection } from "@/components/sections/ProfileSection";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Portfolio } from "@/components/Portfolio";
import { ContactForm } from "@/components/ContactForm";
import { CertificatesCarousel } from "@/components/hero/CertificatesCarousel";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { certificates } from "@/data/certificates";
import { SocialLinks } from "@/components/hero/SocialLinks";
import { LogoSection } from "@/components/sections/LogoSection";

// Define sections as an array of objects for easier reordering
const sections = [
  { 
    id: 'profile', 
    component: (
      <div className="space-y-4">
        <ProfileSection />
        <SocialLinks />
      </div>
    )
  },
  { 
    id: 'about', 
    component: (
      <div className="space-y-8">
        <About />
        <LogoSection />
      </div>
    ) 
  },
  { 
    id: 'education', 
    component: (
      <div className="py-8 flex justify-center">
        <div className="w-full max-w-6xl px-4">
          <CertificatesCarousel certificates={certificates} />
        </div>
      </div>
    ) 
  },
  { id: 'skills', component: <Skills /> },
  { id: 'experience', component: <Experience /> },
  { id: 'services', component: <Services /> },
  { id: 'portfolio', component: <Portfolio /> },
  { id: 'achievements', component: <Achievements /> },
  { id: 'testimonials', component: <Testimonials /> },
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