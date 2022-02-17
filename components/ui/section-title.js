import propTypes from "prop-types";
import { motion } from "framer-motion";

// COMPONENT IMPORTS
import Divider from "../ui/divider";

export default function SectionTitle({ title, light }) {
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
      className={`px-8 pt-12 pb-0 mb-24 text-5xl sm:text-7xl text-slate-${
        light ? "100" : "800"
      } dark:text-slate-300 lg:px-24 lg:py-0`}
    >
      <Divider />
      {title}
    </motion.h2>
  );
}

SectionTitle.propTypes = {
  title: propTypes.string.isRequired,
  light: propTypes.bool,
};

SectionTitle.defaultProps = {
  light: false,
  doublePadding: false,
};
