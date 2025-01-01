import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";

export const SocialLinks = () => {
  return (
    <div className="flex gap-4 mb-12 animate-fade-in delay-200">
      <Button variant="outline" size="icon" asChild className="rounded-full hover:scale-110 transition-transform hover:bg-accent/10 hover:border-accent">
        <a href="https://www.linkedin.com/in/amr-hewala-7365a896/" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild className="rounded-full hover:scale-110 transition-transform hover:bg-accent/10 hover:border-accent">
        <a href="mailto:a.hewala@gafi.gov.eg" target="_blank" rel="noopener noreferrer">
          <Mail className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild className="rounded-full hover:scale-110 transition-transform hover:bg-accent/10 hover:border-accent">
        <a href="https://github.com/amrhewala" target="_blank" rel="noopener noreferrer">
          <GithubIcon className="h-5 w-5" />
        </a>
      </Button>
    </div>
  );
};