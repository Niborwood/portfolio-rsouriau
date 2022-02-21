import propTypes from "prop-types";

export default function TagCloud({ tags }) {
  // Each tag becomes a chip
  const tagCloud = tags.map((tag) => (
    <span
      className={`flex px-4 py-2 text-sm font-semibold text-center rounded-full ${
        tag.favorite
          ? "bg-teal-700 text-slate-50 dark:text-slate-100"
          : "bg-slate-200 text-slate-600 dark:bg-slate-400 dark:text-slate-900"
      } w-max`}
      key={tag.id}
    >
      {tag.name}
    </span>
  ));

  return <div className="flex flex-wrap gap-2 mt-2">{tagCloud}</div>;
}

TagCloud.propTypes = {
  tags: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
    })
  ).isRequired,
};
