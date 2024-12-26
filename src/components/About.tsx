import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />
      <div className="container relative">
        <Card className="backdrop-blur-sm bg-white/80 border-none shadow-2xl hover:shadow-accent/20 transition-all duration-500">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-gray-700 leading-relaxed space-y-4">
            <p className="animate-fade-in">
              Senior Software Engineer with over 8 years of experience in web development and team leadership. 
              Specialized in building scalable web applications and mentoring junior developers. 
              Currently focused on React, Node.js, and cloud technologies.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};