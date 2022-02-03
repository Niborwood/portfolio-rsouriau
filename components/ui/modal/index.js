import propTypes from "prop-types";

export default function Modal({ handleClose, children }) {
  return (
    <div className="fixed top-0 left-0 z-40 flex items-center justify-center w-screen h-screen p-4 overflow-y-hidden bg-gradient-to-tl from-teal-500/90 to-teal-700/90">
      {/* Close */}
      <div
        className="absolute top-0 right-0 p-4 text-white cursor-pointer sm:py-8 sm:px-12"
        onClick={handleClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      {/* Content */}
      {children}
    </div>
  );
}

Modal.propTypes = {
  handleClose: propTypes.func.isRequired,
  children: propTypes.node.isRequired,
};
