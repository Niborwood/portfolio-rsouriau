import Image from "next/image";
import Link from "next/link";

export default function Slide({ _id, title, description, image }) {
  return (
    <div className="flex-grow-0 flex-shrink-0 w-full snap-center sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <div className="relative w-full transition-all duration-300 border-l-8 border-teal-600 aspect-square hover:drop-shadow-lg">
        <Link href={`/works/${_id}`} passHref>
          <a>
            <Image
              src={image}
              alt={title}
              title={title}
              layout="fill"
              className="block object-cover transition-all duration-300 grayscale hover:grayscale-0"
            />
          </a>
        </Link>
      </div>

      <h3>
        <Link href={`/works/${_id}`} passHref>
          <a className="inline-flex items-center gap-2 mt-2 mb-1 text-2xl text-teal-600 capitalize hover:underline underline-offset-2">
            {title}{" "}
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
          </a>
        </Link>
      </h3>
      <div className="text-slate-600">{description}</div>
    </div>
  );
}
