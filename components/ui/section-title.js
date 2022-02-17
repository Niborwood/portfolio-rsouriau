import propTypes from "prop-types";
import { motion } from "framer-motion";

// COMPONENT IMPORTS
import Divider from "../ui/divider";

export default function SectionTitle({ title, light, svg, svgLink }) {
  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: "some" }}
      transition={{ duration: 2 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className={`px-8 gap-2 inline-flex flex-row items-end pt-12 pb-0 mb-12 text-5xl sm:text-7xl text-slate-${
        light ? "100" : "800"
      } dark:text-slate-300 lg:px-24 lg:py-0`}
    >
      <div>
        <Divider />
        {title}
      </div>
      {svg && (
        <a
          href={svgLink}
          target="_blank"
          rel="noreferrer"
          className="transition dark:hover:text-slate-100 hover:text-slate-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {svg}
          </svg>
        </a>
      )}
    </motion.h2>
  );
}

SectionTitle.propTypes = {
  title: propTypes.string.isRequired,
  light: propTypes.bool,
  svg: propTypes.node,
  svgLink: propTypes.string,
};

SectionTitle.defaultProps = {
  light: false,
  doublePadding: false,
  svg: null,
  svgLink: null,
};
