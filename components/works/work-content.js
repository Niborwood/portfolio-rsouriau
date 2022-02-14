import propTypes from "prop-types";
import ReactMarkdown from "react-markdown";

// COMPONENT IMPORTS
import WorkImages from "./work-images";
import WorkNavigate from "./work-navigate";
import Link from "../ui/link";

export default function WorkContent({ context, work, images, nextWorkSlug }) {
  return (
    <div className="px-8 py-12 space-y-8 prose lg:p-24 sm:w-3/4 prose-slate prose-h3:text-3xl prose-h4:text-xl dark:prose-p:text-slate-400 dark:prose-h4:text-slate-300 dark:prose-strong:text-slate-200 dark:prose-h3:text-slate-200 dark:prose-li:text-slate-400">
      <div>
        <h3 className="mt-0">Contexte</h3>
        <ReactMarkdown
          components={{
            a: ({ children, href }) => (
              <Link href={href} noSvg>
                {children}
              </Link>
            ),
            code: ({ children }) => (
              <code className="px-2 py-1.5 text-sm bg-gray-200 rounded-md m-0.5">
                {children}
              </code>
            ),
          }}
        >
          {context}
        </ReactMarkdown>
      </div>
      <hr />
      <div>
        <h3>Réalisation</h3>
        <ReactMarkdown
          components={{
            a: ({ children, href }) => (
              <Link href={href} noSvg>
                {children}
              </Link>
            ),
          }}
        >
          {work}
        </ReactMarkdown>
      </div>
      <hr />
      <div>
        <h3>Images</h3>
        <WorkImages images={images} />
      </div>
      <hr />
      <WorkNavigate slug={nextWorkSlug} />
    </div>
  );
}

WorkContent.propTypes = {
  context: propTypes.string.isRequired,
  work: propTypes.string.isRequired,
  images: propTypes.arrayOf(propTypes.string).isRequired,
  nextWorkSlug: propTypes.string.isRequired,
};
