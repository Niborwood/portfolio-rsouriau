import { Fragment } from "react";

// COMPONENTS IMPORT
import Link from "../ui/link";

const menuElements = [
  {
    href: "about",
    name: "A Propos",
    svg: (
      <path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      />
    ),
  },
  {
    href: "works",
    name: "Works",
    svg: (
      <Fragment>
        <path
          fillRule="evenodd"
          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
      </Fragment>
    ),
  },
  {
    href: "cv",
    name: "CV",
    svg: (
      <path
        fillRule="evenodd"
        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
        clipRule="evenodd"
      />
    ),
  },
  {
    href: "contact",
    name: "Contact",
    svg: (
      <Fragment>
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </Fragment>
    ),
  },
];

export default function NavBar() {
  const navElements = menuElements.map((element) => (
    <Fragment key={element.href}>
      <li className="">
        <Link href={`/#${element.href}`} light>
          <span className="inline-flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {element.svg}
            </svg>
            <span className="hidden md:inline">{element.name}</span>
          </span>
        </Link>
      </li>
    </Fragment>
  ));

  return (
    <nav className="fixed z-50 flex flex-row items-center justify-between w-full px-4 py-8 border-b-4 border-white bg-gradient-to-br from-teal-700/75 to-teal-500/75 lg:p-8 text-slate-100 backdrop-blur-md">
      <h1 className="text-2xl">
        <Link href="/" light>
          Robin Souriau
        </Link>
      </h1>
      <ul className="flex items-center justify-center gap-4">{navElements}</ul>
    </nav>
  );
}
