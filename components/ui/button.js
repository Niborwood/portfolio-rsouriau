import propTypes from "prop-types";

// COMPONENTS IMPORT
import Link from "./link";

export default function Button({ href, children, svg, type, light, large }) {
  let buttonClass = `inline-block  text-sm font-medium leading-5  transition duration-150 ease-in-out border border-transparent rounded-md  focus:outline-none ${
    light
      ? "bg-slate-100 hover:bg-slate-200 focus:border-slate-700 active:bg-slate-700 focus:shadow-outline-slate text-teal-600"
      : "bg-teal-600 hover:bg-teal-500 focus:border-teal-700 active:bg-teal-700 focus:shadow-outline-teal text-slate-100"
  } ${large ? "text-xl px-6 py-3" : "text-normal px-4 py-2"}`;

  if (!href)
    return (
      <button type={type} className={buttonClass}>
        <span className="inline-flex items-center gap-2">
          {svg && <span className="w-4 h-4">{svg}</span>} {children}
        </span>
      </button>
    );

  return (
    <Link href={href} className="no-underline hover:no-underline">
      <button type={type} className={buttonClass}>
        <span className="inline-flex items-center gap-2">
          {svg && <span className="w-4 h-4">{svg}</span>} {children}
        </span>
      </button>
    </Link>
  );
}

Button.propTypes = {
  href: propTypes.string,
  children: propTypes.node.isRequired,
  svg: propTypes.node,
  type: propTypes.string,
  light: propTypes.bool,
};

Button.defaultProps = {
  href: null,
  svg: null,
  type: "button",
  light: false,
};
