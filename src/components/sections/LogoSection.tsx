import { LogoGrid } from "../hero/LogoGrid";
import { education } from "@/data/education";
import { workplaces } from "@/data/workplaces";

export const LogoSection = () => {
  return (
    <section className="w-full flex justify-center mb-12">
      <LogoGrid items={[...education, ...workplaces]} />
    </section>
  );
};