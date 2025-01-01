import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
}

interface BlogPostsProps {
  posts: BlogPost[];
}

export const BlogPosts = ({ posts }: BlogPostsProps) => {
  return (
    <div className="w-full max-w-4xl animate-fade-in delay-400">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Latest Articles
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <Card key={index} className="bg-white/5 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
              <p className="text-sm text-gray-500">{post.date}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{post.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};