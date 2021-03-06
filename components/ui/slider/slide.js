import Image from "next/image";
import Link from "next/link";

export default function Slide({
  title,
  description,
  thumbnail,
  slug,
  preview,
}) {
  return (
    <div className="flex-grow-0 flex-shrink-0 w-full snap-center sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <div
        className={`relative rounded-lg w-full transition-all duration-300 border-l-8 ${
          preview ? "border-slate-600" : "border-teal-600"
        } aspect-square hover:drop-shadow-lg`}
      >
        {preview ? (
          <Image
            src={thumbnail}
            alt={title}
            title={title}
            layout="fill"
            className="block object-cover rounded-r-lg grayscale"
          />
        ) : (
          <Link href={`/works/${slug}`} passHref>
            <a className="relative block w-full h-full">
              <Image
                src={thumbnail}
                alt={title}
                title={title}
                layout="fill"
                className="block object-cover transition-all duration-300 rounded-r-lg grayscale hover:grayscale-0"
              />
            </a>
          </Link>
        )}
      </div>

      <h3 className="mt-2 mb-1 text-2xl text-slate-600 dark:text-slate-300">
        {preview ? (
          title
        ) : (
          <Link href={`/works/${slug}`} passHref>
            <a className="inline-flex items-center gap-2 text-teal-600 capitalize hover:underline underline-offset-2">
              {title}{" "}
              <span>
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </a>
          </Link>
        )}
      </h3>
      <div className="text-slate-600 dark:text-slate-300">{description}</div>
    </div>
  );
}
