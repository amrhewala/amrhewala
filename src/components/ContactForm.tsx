import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email using a backend service
    // For now, we'll just show a success message
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Contact Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="bg-white/5 backdrop-blur-sm border border-accent/20">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-accent" />
                <a href="mailto:a.hewala@gafi.gov.eg" className="hover:text-accent">
                  a.hewala@gafi.gov.eg
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-accent" />
                <span>+20 (123) 456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-accent" />
                <span>Cairo, Egypt</span>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-white/5 backdrop-blur-sm border border-accent/20">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};