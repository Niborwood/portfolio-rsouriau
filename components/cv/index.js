import { motion } from "framer-motion";

// COMPONENT IMPORTS
import CVHead from "./cv-head";
import CVExperiences from "./cv-experiences";
import CVSkills from "./cv-skills";
import SectionTitle from "../ui/section-title";

export default function CV({ tags }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: "some" }}
      transition={{ duration: 1.25 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      id="cv"
      className="pb-24"
    >
      {/* TITLE */}
      <div className="flex flex-row items-center gap-2 px-8 lg:p-24">
        <SectionTitle
          title="C.V."
          svg={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          }
          svgLink="/files/cv-souriau-robin-2022.pdf"
        />
        <div></div>
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
    </motion.div>
  );
}
