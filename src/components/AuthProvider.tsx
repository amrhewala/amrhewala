import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClient, User } from '@supabase/supabase-js';
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({ 
  user: null, 
  loading: true,
  signOut: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for changes on auth state
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
      
      if (event === 'SIGNED_IN') {
        navigate('/dashboard');
        toast({
          title: "Welcome back!",
          description: "You have successfully signed in.",
        });
      }
      
      if (event === 'SIGNED_OUT') {
        navigate('/login');
        toast({
          title: "Signed out",
          description: "You have been signed out successfully.",
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        title: "Error",
        description: "There was a problem signing out.",
        variant: "destructive",
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};