// COMPONENT IMPORTS
import CVHead from "./cv-head";
import CVExperiences from "./cv-experiences";
import CVSkills from "./cv-skills";
import SectionTitle from "../ui/section-title";

export default function CV({ tags }) {
  return (
    <div id="cv" className="mb-24">
      {/* TITLE */}
      <div className="px-8 py-12 lg:p-24">
        <SectionTitle title="C.V." />
      </div>

      <div className="flex flex-col justify-around lg:flex-row">
        {/* IMAGE & INFOS */}
        <CVHead />
        <hr />

        {/* FORMATION & EXPERIENCES */}
        <CVExperiences />
        <hr />

        {/* COMPETENCES & INTERETS */}
        <CVSkills tags={tags} />
      </div>
    </div>
  );
}
