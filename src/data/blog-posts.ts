
export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Data Analysis",
    excerpt: "Comprehensive guide to data analysis techniques and best practices in modern business intelligence.",
    date: "2024-01-01",
    image: "/HR_report-Salaries.png"
  },
  {
    title: "Power BI Insights",
    excerpt: "Deep dive into Power BI features and how to create impactful visualizations for business reporting.",
    date: "2024-12-27",
    image: "/Power-BI.png"
  }
];
