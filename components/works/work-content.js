import propTypes from "prop-types";

// COMPONENT IMPORTS
import WorkImages from "./work-images";

export default function WorkContent({ context, work, images }) {
  return (
    <div className="px-8 py-12 space-y-8 prose lg:p-24 sm:w-3/4 prose-slate prose-h3:text-3xl">
      <div>
        <h3 className="mt-0">Contexte</h3>
        <p>{context}</p>
      </div>
      <hr />
      <div>
        <h3>Réalisation</h3>
        <p>{work}</p>
      </div>
      <hr />
      <div>
        <h3>Images</h3>
        <WorkImages images={images} />
      </div>
    </div>
  );
}

WorkContent.propTypes = {
  context: propTypes.string.isRequired,
  work: propTypes.string.isRequired,
  images: propTypes.arrayOf(propTypes.string).isRequired,
};
