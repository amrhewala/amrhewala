import { LogoGrid } from "../hero/LogoGrid";
import { education } from "@/data/education";
import { workplaces } from "@/data/workplaces";

export const LogoSection = () => {
  return (
    <section className="w-full py-6">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Education & Work Experience
        </h1>
        <LogoGrid items={[...education, ...workplaces]} />
      </div>
    </section>
  );
};