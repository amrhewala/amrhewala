import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center text-center p-4 relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/10 to-background">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
      <img
        src="https://media.licdn.com/dms/image/C4D03AQEGlLGVOJBxVw/profile-displayphoto-shrink_800_800/0/1516939338092?e=1715212800&v=beta&t=Hy_Hs5Ib_Iu0Hy7Hs5Ib_Iu0"
        alt="Amr Hewala"
        className="w-40 h-40 rounded-full border-4 border-accent mb-8 shadow-xl hover:scale-105 transition-transform duration-300 animate-fade-in"
      />
      <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
        Amr Hewala
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in delay-100">Senior Software Engineer</p>
      <div className="flex gap-4 mb-8 animate-fade-in delay-200">
        <Button variant="outline" size="icon" asChild className="rounded-full hover:scale-110 transition-transform">
          <a href="https://www.linkedin.com/in/amr-hewala-7365a896/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
          <Mail className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
          <GithubIcon className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};