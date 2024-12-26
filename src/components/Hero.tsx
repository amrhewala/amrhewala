import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center text-center p-4 relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/10 to-background">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
      
      {/* Enhanced Profile Image Container with Modern Effects */}
      <div className="relative group">
        {/* Outer glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        
        {/* Inner container with multiple effects */}
        <div className="relative">
          {/* Background decorative circles */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full animate-spin-slow"></div>
          <div className="absolute -inset-2 bg-gradient-to-l from-primary/20 to-accent/20 rounded-full animate-spin-slow-reverse"></div>
          
          {/* Main image container */}
          <div className="relative group transform-gpu">
            <img
              src="/lovable-uploads/126b5734-9f0a-4a0b-9a9f-6a9b3dedd1ca.png"
              alt="Amr Hewala"
              className="w-52 h-52 rounded-full border-4 border-accent/50 shadow-2xl 
                       transition-all duration-500 object-cover z-10 relative
                       group-hover:scale-105 group-hover:brightness-110
                       animate-fade-in
                       [mask-image:linear-gradient(white,white)]"
            />
            
            {/* Overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500
                          mix-blend-overlay"></div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                          bg-gradient-to-r from-transparent via-white/20 to-transparent
                          translate-x-[-100%] group-hover:translate-x-[100%]
                          transition-all duration-1000 ease-in-out"></div>
          </div>
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
          <Mail className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform hover:bg-accent/10 hover:border-accent">
          <GithubIcon className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};