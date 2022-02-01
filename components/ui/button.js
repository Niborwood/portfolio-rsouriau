import propTypes from "prop-types";

// COMPONENTS IMPORT
import Link from "./link";

export default function Button({ href, children, svg }) {
  let buttonClass =
    "inline-block px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-teal-600 border border-transparent rounded-md hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700";

  return (
    <Link href={href} className="no-underline hover:no-underline">
      <button className={buttonClass}>
        <span className="inline-flex items-center gap-2">
          {svg && <span className="w-4 h-4">{svg}</span>} {children}
        </span>
      </button>
    </Link>
  );
}

Button.propTypes = {
  href: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
  svg: propTypes.node,
};

Button.defaultProps = {
  svg: null,
};
