import propTypes from "prop-types";

// COMPONENT IMPORTS
import Divider from "../ui/divider";

export default function SectionTitle({ title, light }) {
  return (
    <h2
      className={`px-8 pt-12 pb-0 mb-24 text-5xl sm:text-7xl text-slate-${
        light ? "100" : "800"
      } lg:px-24 lg:py-0`}
    >
      <Divider />
      {title}
    </h2>
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
