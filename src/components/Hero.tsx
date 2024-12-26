import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center p-4 bg-gradient-to-b from-primary/10 to-background">
      <img
        src="https://media.licdn.com/dms/image/C4D03AQEGlLGVOJBxVw/profile-displayphoto-shrink_800_800/0/1516939338092?e=1715212800&v=beta&t=Hy_Hs5Ib_Iu0Hy7Hs5Ib_Iu0"
        alt="Amr Hewala"
        className="w-32 h-32 rounded-full border-4 border-accent mb-8"
      />
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Amr Hewala</h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8">Senior Software Engineer</p>
      <div className="flex gap-4 mb-8">
        <Button variant="outline" size="icon" asChild>
          <a href="https://www.linkedin.com/in/amr-hewala-7365a896/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="icon">
          <Mail className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon">
          <GithubIcon className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};