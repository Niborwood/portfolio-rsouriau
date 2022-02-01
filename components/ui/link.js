import NextLink from "next/link";

export default function Link({ href, className, externalLink, children }) {
  return (
    <NextLink href={href} passHref>
      <a
        className={`text-teal-600 inline-flex items-center gap-1 hover:underline underline-offset-4 ${className}`}
        target={externalLink ? "_blank" : null}
        rel={externalLink ? "noopener noreferrer" : null}
      >
        {externalLink && (
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
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        )}
        {children}
      </a>
    </NextLink>
  );
}
