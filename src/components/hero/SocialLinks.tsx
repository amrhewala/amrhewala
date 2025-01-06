import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";

export const SocialLinks = () => {
  return (
    <div className="flex gap-6 mb-8 animate-fade-in delay-200">
      <Button variant="outline" size="lg" asChild className="rounded-full hover:scale-110 transition-transform hover:bg-accent/10 hover:border-accent p-4">
        <a href="https://www.linkedin.com/in/amr-hewala-7365a896/" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon className="h-8 w-8" />
        </a>
      </Button>
      <Button variant="outline" size="lg" asChild className="rounded-full hover:scale-110 transition-transform hover:bg-accent/10 hover:border-accent p-4">
        <a href="mailto:a.hewala@gafi.gov.eg" target="_blank" rel="noopener noreferrer">
          <Mail className="h-8 w-8" />
        </a>
      </Button>
      <Button variant="outline" size="lg" asChild className="rounded-full hover:scale-110 transition-transform hover:bg-accent/10 hover:border-accent p-4">
        <a href="https://github.com/amrhewala" target="_blank" rel="noopener noreferrer">
          <GithubIcon className="h-8 w-8" />
        </a>
      </Button>
    </div>
  );
};