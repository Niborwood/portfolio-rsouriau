export default function Introduction() {
  return (
    <div className="relative flex flex-col justify-center h-screen p-8 lg:w-2/3 lg:p-24 text-slate-800 dark:text-slate-300 dark:bg-slate-900">
      {/* Rounded figure */}
      {/* <div className="absolute left-0 z-0 rounded-full bg-teal-500/30 top-50 w-96 h-96"></div> */}

      {/* Content */}
      <h2 className="z-10 my-4 text-5xl sm:text-7xl md:text-8xl ">
        <span className="inline-flex items-center gap-4 my-2">
          Hello !{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-teal-600 dark:text-teal-600 sm:w-32 sm:h-32 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
            />
          </svg>
        </span>
        <br /> Je m&apos;appelle{" "}
        <span className="font-bold text-teal-600 dark:text-teal-600">
          Robin Souriau
        </span>
        .
      </h2>
      <h3 className="text-2xl md:text-3xl">
        Je suis{" "}
        <span className="font-bold text-teal-600 dark:text-teal-600">
          développeur web fullstack
        </span>{" "}
        basé à Paris.
      </h3>
    </div>
  );
}
