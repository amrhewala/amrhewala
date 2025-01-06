import { LogoGrid } from "../hero/LogoGrid";
import { education } from "@/data/education";
import { workplaces } from "@/data/workplaces";

export const LogoSection = () => {
  return (
    <section className="w-full flex justify-center py-6">
      <LogoGrid items={[...education, ...workplaces]} />
    </section>
  );
};