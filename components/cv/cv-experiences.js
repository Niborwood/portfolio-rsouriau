const experiences = [
  {
    title: "Chef de projet web",
    company: "Pimlicom",
    date: "2016 - 2020",
    description:
      "Gestion de projet web pour TPE & PME. Élaboration de CDC. Suivi technique de développement. Rédaction web. Positionnement et stratégie SEO. Recettage. Formations.",
  },
  {
    title: "Rédacteur en chef",
    company: "HypeSoul",
    date: "2013 - 2016",
    description:
      "Rédacteur, développeur web et Community Manager au sein d'un média de culture urbaine. Administration du CMS Wordpress. Monitoring et reporting SEO & e-réputation",
  },
];

const formations = [
  {
    date: "2021",
    title: "Formation fullstack JS/React",
    details: "O'Clock",
  },
  {
    date: "2013 - 2015",
    title: "Master 2 Culture et Métiers du Web",
    details: "Mention Très Bien, UPEM",
  },
  {
    date: "2011 - 2013",
    title: "Licence 3 Sciences Humaines et Sociales",
    details: "Mention Assez Bien, UPEM",
  },
  {
    date: "2009 - 2010",
    title: "Baccalauréat L, option Anglais Renforcé",
    details: "Mention Bien, Lycée Françoise Cabrini",
  },
];

export default function CVExperiences() {
  const experiencesList = experiences.map((experience) => (
    <div
      className="flex flex-row justify-between lg:flex-col xl:flex-row"
      key={experience.title}
    >
      <p className="w-2/5 lg:w-full xl:w-2/5 text-slate-400">
        {experience.date}
      </p>
      <div className="w-3/5 lg:w-full xl:w-3/5">
        <p>
          {experience.title} | {experience.company}
        </p>
        <p className="text-slate-400">{experience.description}</p>
      </div>
    </div>
  ));

  const formationsList = formations.map((formation) => (
    <div
      className="flex flex-row justify-between lg:flex-col xl:flex-row"
      key={formation.title}
    >
      <p className="w-2/5 lg:w-full xl:w-2/5 text-slate-400">
        {formation.date}
      </p>
      <div className="w-3/5 lg:w-full xl:w-3/5">
        <p>{formation.title}</p>
        <p className="text-slate-400">{formation.details}</p>
      </div>
    </div>
  ));

  return (
    <div className="px-8 py-12 mx-auto space-y-8 lg:w-1/3 lg:p-12 xl:p-18 lg:py-0">
      <div className="space-y-4 text-slate-600">
        <h3 className="mb-8 text-2xl text-teal-600">Expériences</h3>
        {experiencesList}
      </div>
      <div className="space-y-4 text-slate-600">
        <h3 className="mb-8 text-2xl text-teal-600">Formations</h3>
        {formationsList}
      </div>
    </div>
  );
}
