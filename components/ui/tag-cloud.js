import propTypes from "prop-types";

export default function TagCloud({ tags }) {
  // Each tag becomes a chip
  const tagCloud = tags.map((tag) => (
    <span
      className={`flex px-4 py-2 text-sm font-semibold text-center rounded-full ${
        tag.favorite
          ? "bg-teal-600 text-slate-50 dark:text-slate-200"
          : "bg-slate-200 text-slate-500 dark:bg-slate-400 dark:text-slate-700"
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
