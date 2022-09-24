import useTranslation from "next-translate/useTranslation";
import { useMemo } from "react";

export default function CVExperiences() {
  const { t, lang } = useTranslation();

  const experiences = useMemo(
    () => [
      {
        title: t('cv.experiences.diggers.title'),
        company: "Diggers Factory",
        date: `2022 - ${t('cv.experiences.today')}`,
        description:
          t('cv.experiences.diggers.description'),
      },
      {
        title: t('cv.experiences.pimlicom.title'),
        company: "Pimlicom",
        date: "2016 - 2020",
        description:
          t('cv.experiences.pimlicom.description'),
      },
      {
        title: t('cv.experiences.hypesoul.title'),
        company: "HypeSoul",
        date: "2013 - 2016",
        description:
          t('cv.experiences.hypesoul.description'),
      },
    ],
    [lang]
  );

  const formations = useMemo(() => [
    {
      date: "2021",
      title: t('cv.education.titre_pro.title'),
    },
    {
      date: "2021",
      title: t('cv.education.oclock.title'),
      description: t('cv.education.oclock.description'),
    },
    {
      date: "2013 - 2015",
      title: t('cv.education.masters.title'),
      description: t('cv.education.masters.description'),
    },
    {
      date: "2011 - 2013",
      title: t('cv.education.licence.title'),
      description: t('cv.education.licence.description'),
    },
    {
      date: "2009 - 2010",
      title: t('cv.education.bac.title'),
      description: t('cv.education.bac.description'),
    },
  ], [lang]) ;

  const experiencesList = experiences.map((experience) => (
    <div
      className="flex flex-col justify-between xs:flex-row lg:flex-col xl:flex-row sm:w-3/4 lg:w-full"
      key={experience.title}
    >
      <p className="w-full xs:w-2/3 lg:w-full xl:w-2/5 text-slate-400 dark:text-slate-300">
        {experience.date}
      </p>
      <div className="w-full xs:w-3/5 lg:w-full xl:w-3/5 dark:text-slate-300">
        <p>
          {experience.title} | {experience.company}
        </p>
        <p className="text-slate-400 dark:text-slate-500">
          {experience.description}
        </p>
      </div>
    </div>
  ));

  const formationsList = formations.map((formation) => (
    <div
      className="flex flex-col justify-between xs:flex-row lg:flex-col xl:flex-row sm:w-3/4 lg:w-full"
      key={formation.title}
    >
      <p className="w-full xs:w-2/3 lg:w-full xl:w-2/5 text-slate-400 dark:text-slate-300">
        {formation.date}
      </p>
      <div className="w-full xs:w-3/5 lg:w-full xl:w-3/5 dark:text-slate-300">
        <p>{formation.title}</p>
        <p className="text-slate-400 dark:text-slate-500">
          {formation.description}
        </p>
      </div>
    </div>
  ));

  return (
    <div className="px-8 py-12 mx-auto space-y-8 lg:w-1/3 lg:p-12 xl:p-18 lg:py-0">
      <div className="space-y-4 text-slate-600">
        <h3 className="mb-8 text-2xl text-teal-600">
          {t("cv.experiences.title")}
        </h3>
        {experiencesList}
      </div>
      <div className="space-y-4 text-slate-600">
        <h3 className="mb-8 text-2xl text-teal-600">
          {t("cv.education.title")}
        </h3>
        {formationsList}
      </div>
    </div>
  );
}
