import propTypes from "prop-types";

// COMPONENTS IMPORT
import Button from "./button";

export default function Error({ message, onlyMessage = false }) {
  return (
    <div>
      <div className="p-4 space-y-4 text-xl font-bold text-center text-white bg-red-500">
        An error occured{message ? `: ${message}` : "."}
      </div>
      {!onlyMessage && (
        <div className="flex items-center justify-center mt-36">
          <Button href="/">Home</Button>
        </div>
      )}
    </div>
  );
}

Error.propTypes = {
  message: propTypes.string,
  onlyMessage: propTypes.bool,
};
