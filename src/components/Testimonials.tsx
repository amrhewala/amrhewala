import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, Tech Solutions Inc.",
    content: "Amr's data analysis expertise transformed our business operations. His insights led to a 30% increase in efficiency.",
    avatar: "/placeholder.svg",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "Director of Operations, DataCorp",
    content: "Working with Amr was a game-changer for our data management systems. His attention to detail and innovative solutions are unmatched.",
    avatar: "/placeholder.svg",
    rating: 5
  },
  {
    name: "Michael Brown",
    role: "Founder, StartUp Hub",
    content: "The business consulting services provided were invaluable to our startup's growth. Highly recommended for any business seeking data-driven solutions.",
    avatar: "/placeholder.svg",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
      <div className="container relative">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Client Testimonials
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="backdrop-blur-sm bg-white/80 border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};