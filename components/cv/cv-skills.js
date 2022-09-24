import { useMemo } from "react";

// COMPONENT IMPORTS
import TagCloud from "../ui/tag-cloud";
import Link from "../ui/link";
import useTranslation from "next-translate/useTranslation";

export default function CVSkills({ tags }) {
  const { t, lang } = useTranslation();

  const interests = useMemo(
    () => [
      {
        name: t('cv.hobbies.roundnet'),
        date: `${t('cv.hobbies.since')} 2020`,
      },
      {
        name: t('cv.hobbies.podcast'),
        date: "2017 - 2020",
      },
      {
        name: t('cv.hobbies.other'),
        date: (
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
              strokeWidth="2"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        ),
      },
    ],
    [lang]
  );

  const interestsList = interests.map((interest) => (
    <div
      className="flex flex-col justify-between xs:flex-row lg:flex-col xl:flex-row sm:w-3/4 lg:w-full"
      key={interest.name}
    >
      <p className="w-full xs:w-2/3 lg:w-full xl:w-2/5 text-slate-400 dark:text-slate-300">
        {interest.date}
      </p>
      <div className="w-full xs:w-3/5 lg:w-full xl:w-3/5">
        <p>{interest.name}</p>
      </div>
    </div>
  ));

  return (
    <div className="px-8 py-12 mx-auto space-y-8 lg:w-1/3 lg:p-12 xl:p-18 xl:pr-24 lg:py-0">
      <div className="space-y-4 text-slate-500">
        <h3 className="mb-8 text-2xl text-teal-600">{t("cv.skills.title")}</h3>
        <TagCloud tags={tags} />
        <div className="dark:text-slate-300">
          {t("cv.skills.cta")}
          <Link href="/#works">{t("cv.skills.cta_link")}</Link>
        </div>
      </div>
      <div className="space-y-4 text-slate-600 dark:text-slate-300">
        <h3 className="mb-8 text-2xl text-teal-600">Centres d&apos;intérêts</h3>
        {interestsList}
      </div>
    </div>
  );
}
