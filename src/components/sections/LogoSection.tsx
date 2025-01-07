import { LogoGrid } from "../hero/LogoGrid";
import { education } from "@/data/education";
import { workplaces } from "@/data/workplaces";

export const LogoSection = () => {
  return (
    <section className="w-full flex justify-center py-6">
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Education & Work Experience
        </h2>
        <LogoGrid items={[...education, ...workplaces]} />
      </div>
    </section>
  );
};