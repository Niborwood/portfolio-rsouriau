import Link from "../../components/ui/link";
import propTypes from "prop-types";

export default function WorkSidebar({ techs, demoLink, githubLink }) {
  // Each tech is a chip, forming a stack
  const stack = techs.map((tech) => (
    <span
      className="flex px-4 py-2 text-sm font-semibold text-center rounded-full text-slate-500 bg-slate-200 w-max"
      key={tech}
    >
      {tech}
    </span>
  ));

  return (
    <div className="p-8 mt-16 mb-8 sm:w-1/4 sm:pt-0 sm:mt-12 lg:p-24 lg:pt-12">
      {/* TECHS */}
      <div className="mb-16">
        <h4 className="pl-1 text-xl uppercase text-slate-400">
          Technologies utilisées
        </h4>
        <div className="flex flex-wrap gap-2 mt-2">{stack}</div>
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
  techs: propTypes.arrayOf(propTypes.string).isRequired,
  demoLink: propTypes.string,
  githubLink: propTypes.string.isRequired,
};

WorkSidebar.defaultProps = {
  demoLink: null,
};
