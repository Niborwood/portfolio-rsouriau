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
      <div className="px-8 lg:p-24">
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
    </motion.div>
  );
}
