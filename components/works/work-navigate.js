import propTypes from "prop-types";

// COMPONENT IMPORTS
import Button from "../ui/button";

export default function WorkNavigate({ slug }) {
  return (
    <div className="flex flex-col items-center justify-between gap-2 xs:flex-row">
      <Button
        href="/#works"
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        }
      >
        Retour
      </Button>
      <Button
        href={slug}
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        }
      >
        Voir un autre projet
      </Button>
    </div>
  );
}

WorkNavigate.propTypes = {
  slug: propTypes.string.isRequired,
};
