import { Fragment } from "react";
import propTypes from "prop-types";

// COMPONENTS IMPORT
import Link from "../ui/link";

const menuElements = [
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

const socials = [
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/robinsouriau",
    svg: (
      <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
    ),
  },
  {
    id: "github",
    href: "https://github.com/Niborwood",
    svg: (
      <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
    ),
  },
];

export default function NavBar({ isDark, setIsDark }) {
  const navElements = menuElements.map((element) => (
    <li className="items-center" key={element.href}>
      <Link title={element.name} href={`/#${element.href}`} light>
        <span className="inline-flex items-center gap-2 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 transition-all ease-in-out xs:w-7 xs:h-7 md:text-slate-200/90 group-hover:text-slate-200"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {element.svg}
          </svg>
          <span className="hidden md:inline">{element.name}</span>
        </span>
      </Link>
    </li>
  ));

  const socialElements = socials.map((element) => (
    <li className="items-center" key={element.id}>
      <a
        href={element.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2"
        title={`${element.id} personnal account`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 pt-0.5 transition-all ease-in-out xs:w-7 xs:h-7 md:text-slate-200/90 dark:md:text-slate-400/90 hover:text-slate-200"
          fill="currentColor"
          viewBox="0 0 26 26"
        >
          {element.svg}
        </svg>
      </a>
    </li>
  ));

  return (
    <nav className="fixed z-30 flex flex-row items-center justify-between w-full px-4 py-6 border-b-4 border-white dark:border-slate-900 bg-gradient-to-br from-teal-700/75 dark:from-teal-900/75 to-teal-500/75 dark:to-teal-800/75 lg:p-6 text-slate-100 dark:text-slate-300 backdrop-blur-md">
      <h1 className="xs:text-xl sm:text-2xl">
        <Link href="/" light>
          <span className="hidden xs:block">Robin Souriau</span>
          <span className="xs:hidden">R. Souriau</span>
        </Link>
      </h1>
      <div className="flex flex-row gap-1 sm:gap-4">
        <ul className="flex flex-row items-end justify-center gap-1 xs:gap-2 sm:gap-4 ">
          {navElements}
        </ul>
        <ul className="flex flex-row items-center justify-center">
          {socialElements}
        </ul>
        <button
          onClick={() => setIsDark((prev) => !prev)}
          className="self-baseline hover:text-slate-200"
        >
          {/* Dark Mode */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isDark ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  isDark: propTypes.bool.isRequired,
  setIsDark: propTypes.func.isRequired,
};
