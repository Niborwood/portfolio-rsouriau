import propTypes from "prop-types";

// COMPONENTS IMPORT
import Button from "./button";

export default function Error({ message }) {
  return (
    <div>
      <div className="p-4 space-y-4 text-xl font-bold text-center text-white bg-red-500">
        Une erreur est survenue : {message}
      </div>
      <div className="flex items-center justify-center mt-36">
        <Button href="/">Retour à l&apos;accueil</Button>
      </div>
    </div>
  );
}

Error.propTypes = {
  message: propTypes.string,
};

Error.defaultProps = {
  message: "Une erreur est survenue.",
};
