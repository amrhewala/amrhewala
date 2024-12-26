import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center text-center p-4 relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/10 to-background">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
      
      {/* Enhanced Profile Image Container */}
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
      <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in delay-100">Senior Software Engineer</p>
      <div className="flex gap-4 mb-8 animate-fade-in delay-200">
        <Button variant="outline" size="icon" asChild className="rounded-full hover:scale-110 transition-transform hover:bg-accent/10 hover:border-accent">
          <a href="https://www.linkedin.com/in/amr-hewala-7365a896/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform hover:bg-accent/10 hover:border-accent">
        <a href="mailto:a.hewala@gafi.gov.eg" target="_blank" rel="noopener noreferrer">
        <Mail className="h-5 w-5" />
        </a>
        </Button>
        <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform hover:bg-accent/10 hover:border-accent">
          <GithubIcon className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
