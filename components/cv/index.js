// COMPONENT IMPORTS
import Divider from "../ui/divider";
import CVHead from "./cv-head";
import CVExperiences from "./cv-experiences";
import CVSkills from "./cv-skills";

export default function CV({ tags }) {
  return (
    <div id="cv" className="">
      {/* TITLE */}
      <h2 className="px-8 pt-12 pb-0 mb-24 text-7xl text-slate-800 lg:px-24 lg:py-0">
        <Divider />
        C.V.
      </h2>

      <div className="flex flex-col justify-around lg:flex-row">
        {/* IMAGE & INFOS */}
        <CVHead />

        <hr />

        {/* FORMATION & EXPERIENCES */}
        <CVExperiences />

        <hr />

        {/* COMPETENCES & INTERETS */}
        <CVSkills tags={tags} />

        <hr />
      </div>
    </div>
  );
}
