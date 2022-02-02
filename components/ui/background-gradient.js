import propTypes from "prop-types";

export default function BackgroundGradient({ children, id }) {
  return (
    <div
      id={id}
      className=" bg-gradient-to-bl from-teal-700 to-teal-500 text-slate-100"
    >
      {children}
    </div>
  );
}

BackgroundGradient.propTypes = {
  children: propTypes.node.isRequired,
  id: propTypes.string,
};

BackgroundGradient.defaultProps = {
  id: null,
};
