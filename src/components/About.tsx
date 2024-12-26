import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="container">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center mb-8">About Me</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-gray-700 leading-relaxed">
            <p>
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