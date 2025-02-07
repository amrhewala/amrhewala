
import { TechnicalSkills } from "./skills/TechnicalSkills";
import { LanguageSkills } from "./skills/LanguageSkills";
import { SoftSkillsCarousel } from "./skills/SoftSkillsCarousel";
import { skills, languages, softSkills, getProgressValue } from "./skills/SkillsData";

export const Skills = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container">
        <div className="space-y-12">
          <TechnicalSkills skills={skills} getProgressValue={getProgressValue} />
          <LanguageSkills languages={languages} getProgressValue={getProgressValue} />
          <SoftSkillsCarousel softSkills={softSkills} />
        </div>
      </div>
    </section>
  );
};
