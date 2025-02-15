
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Linkedin, Facebook } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

export const ArticlesSection = () => {
  const shareToLinkedIn = (title: string) => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${encodeURIComponent(title)}`, '_blank');
  };

  const shareToFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  return (
    <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container">
        <Card className="backdrop-blur-sm bg-white/80 border-none shadow-2xl hover:shadow-accent/20 transition-all duration-500 animate-fade-in">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-center gap-2">
              <FileText className="w-8 h-8 text-accent" />
              <CardTitle className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Articles
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <Card 
                key={index}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={post.image || "/placeholder.svg"} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => shareToLinkedIn(post.title)}
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="w-4 h-4" />
                      Share
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={shareToFacebook}
                      className="flex items-center gap-2"
                    >
                      <Facebook className="w-4 h-4" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
