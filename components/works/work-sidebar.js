import propTypes from "prop-types";

// COMPONENT IMPORTS
import Link from "../../components/ui/link";
import TagCloud from "../../components/ui/tag-cloud";

export default function WorkSidebar({ techs, demoLink, githubLink }) {
  return (
    <div className="p-8 mt-16 mb-8 sm:w-1/4 sm:pt-0 sm:mt-12 lg:p-24 lg:pt-12">
      {/* TECHS */}
      <div className="mb-16">
        <h3 className="pl-1 text-xl uppercase text-slate-400">
          Technologies utilisées
        </h3>
        <TagCloud tags={techs} />
      </div>

      {/* DEMOLINK */}

      <div>
        <h4 className="pl-1 text-xl uppercase text-slate-400">Liens</h4>
        <div className="flex flex-col gap-1">
          <Link href={githubLink} className="pl-1 mt-2" iconType="github">
            Repo GitHub
          </Link>
          {demoLink && (
            <Link href={demoLink} className="pl-1 mt-2">
              Démo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

WorkSidebar.propTypes = {
  techs: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
    })
  ).isRequired,
  demoLink: propTypes.string,
  githubLink: propTypes.string.isRequired,
};

WorkSidebar.defaultProps = {
  demoLink: null,
};
