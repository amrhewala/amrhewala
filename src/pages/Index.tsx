import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Portfolio } from "@/components/Portfolio";
import { Skills } from "@/components/Skills";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/AuthProvider";
import { LogOut } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await signOut();
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar with Logout */}
      <nav className="fixed top-0 right-0 p-4 z-50">
        {user && (
          <Button
            onClick={handleLogout}
            variant="outline"
            className="flex items-center gap-2 hover:bg-accent/20"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <About />
        <Skills />
        <Experience />
        <Portfolio />
      </main>
    </div>
  );
};

export default Index;