import { motion } from "framer-motion";

// COMPONENT IMPORTS
import BackgroundGradient from "../ui/background-gradient";

export default function AboutMe() {
  return (
    <BackgroundGradient id="about">
      <div className="flex flex-col justify-between min-h-screen gap-8 px-8 py-24 lg:flex-row lg:p-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: "some" }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
          }}
          className="flex text-3xl sm:text-4xl sm:w-2/3 xl:w-1/3 xl:items-end"
        >
          <p className="pt-4 border-t-4 border-white dark:border-slate-300/70 xl:w-2/3">
            Je vois le développement comme un travail manuel : un atelier, des
            outils, la faculté de pouvoir{" "}
            <strong className="text-slate-800 dark:text-slate-50">
              résoudre toutes sortes de problèmes
            </strong>
            , des plus usuels aux plus spécifiques.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: "some" }}
          transition={{ duration: 3.5, delay: 1, type: "spring" }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="prose sm:columns-2 xl:w-1/2 xl:columns-2 prose-p:text-slate-100 dark:prose-p:text-slate-300/60 prose-strong:text-slate-800 dark:prose-strong:text-slate-100"
        >
          <p>
            Il aura fallu quasiment 10 ans pour boucler la boucle. Depuis les
            premiers tutos HTML/CSS jusqu&apos;à ce portfolio, il s&apos;est
            passé plein de choses. Des interviews culturelles de personnalités
            de la musique, de la gestion fonctionnelle de projets web, des
            projets personnels liés au cinéma ou au sport. Mais au final, il
            semblerait que ce soit James Cameron qui ait raison : le{" "}
            <strong>code</strong> finit toujours pas l&apos;emporter.
          </p>
          <p>
            Après un retour au source et une formidable formation de 6 mois chez
            O&apos;Clock et le{" "}
            <strong>Titre Pro Développeur web et mobile</strong> obtenu, me
            voilà donc enfin officiellement développeur web JavaScript.
          </p>
          <p>
            <strong>Fullstack</strong> parce que j&apos;aime toucher à tout, de
            la carrosserie au capot, parce que des lignes de code, qu&apos;elles
            soient exécutées côté client ou côté serveur, cela reste des lignes
            de code : une magie étonnament rationnelle, passionnante.{" "}
            <strong>Web</strong>, parce que depuis petit, c&apos;est un medium
            qui me plaît et me fascine, tant dans sa construction que dans sa
            compréhension.
          </p>
          <p>
            Récemment, je me suis pris au jeu de <strong>React</strong>. Je
            tiens ici enfin le framework qui me dit que c&apos;est le bon, celui
            où j&apos;ai ce sentiment de &quot;m&apos;amuser sérieusement&quot;,
            à n&apos;importe quelle échelle. Evidemment, il me reste à apprendre
            (je suppose qu&apos;il me restera toujours à apprendre, et j&apos;en
            fait même le voeu solennel), mais si un chemin se distingue des
            autres, c&apos;est bien celui-ci. <strong>NextJS</strong> est
            également un péché mignon. Ce qui ne veut pas dire que côté back, je
            ne m&apos;amuse pas avec les possibilités offertes par{" "}
            <strong>Node</strong>, de l&apos;algorithmie et de la gestion de
            serveur.
          </p>
          <p>
            Pour autant, ces 10 années furent tout le contraire de perdues.
            J&apos;y ai appris un sens du travail en <strong>équipe</strong>, à
            petite et grande échelle, un goût prononcé pour la{" "}
            <strong>polyvalence</strong> et l&apos;adaptation et une envie de
            construire, toujours à plusieurs, des outils et des services utiles
            et performants.
          </p>
          <p>
            A la prochaine <strong>aventure</strong> !
          </p>
        </motion.div>
      </div>
    </BackgroundGradient>
  );
}
