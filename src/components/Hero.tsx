import { ProfileImage } from "./hero/ProfileImage";
import { SocialLinks } from "./hero/SocialLinks";
import { LogoGrid } from "./hero/LogoGrid";
import { CertificatesCarousel } from "./hero/CertificatesCarousel";
import { BlogPosts } from "./hero/BlogPosts";

export const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-16 space-y-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Senior Data Analysis</h1>
          <div className="prose max-w-none">
            <p>
              I am a seasoned Senior Data Specialist at the Egyptian Economic Authority - GAFI (General Authority for Investment and Free Zones), dedicated to driving impactful data analysis and visualization strategies to elevate decision-making processes.
            </p>
            <p>
              In addition to this role, I bring a wealth of experience from successfully leading my own startup company in Europe for four years as its Chief Executive Officer.
            </p>
            <p>
              In the dynamic landscape of the investment management industry, I specialize in transforming complex datasets into actionable insights. My skill set includes advanced proficiency in Analytical Skills, Databases, and Quantitative Research.
            </p>
            <p>
              Notably, I played a pivotal role at GAFI, where I computerized all processes at the financial department and created a comprehensive database from scratch, covering the period from 2008 until now. This involved managing and analyzing vast amounts of data, generating numerous reports, and crafting intricate queries.
            </p>
            <p>
              My academic background includes valuable experience in academia, contributing to the fields of Business Administration and Management from Suez Canal University and Development Economics and International Development from the University of Vienna.
            </p>
            <p>
              As a data-driven professional with programming expertise, I excel in harnessing the power of analytics to inform strategic decision-making. Let's connect and explore how my unique blend of skills in data analysis, visualization, programming, and database management can contribute to the success of our mutual endeavors.
            </p>
          </div>
          <SocialLinks />
        </div>
        <div className="space-y-8">
          <ProfileImage />
          <LogoGrid />
        </div>
      </div>
      <CertificatesCarousel />
      <BlogPosts />
    </section>
  );
};