import propTypes from "prop-types";

export default function BackgroundGradient({ children, id }) {
  return (
    <div
      id={id}
      className=" bg-gradient-to-bl from-teal-700 dark:from-teal-900 to-teal-500 dark:to-teal-700 text-slate-100 dark:text-slate-300/80"
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
