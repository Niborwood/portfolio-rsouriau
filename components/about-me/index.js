// COMPONENT IMPORTS
import BackgroundGradient from "../ui/background-gradient";

export default function AboutMe() {
  return (
    <BackgroundGradient id="about-me">
      <div className="flex flex-col justify-between min-h-screen gap-8 px-8 py-24 lg:flex-row lg:p-24">
        <div className="flex text-3xl sm:text-4xl sm:w-2/3 xl:w-1/3 xl:items-end">
          <p className="pt-4 border-t-4 border-white xl:w-2/3">
            Je vois le développement comme un travail manuel : un atelier, des
            outils, la faculté un peu magique de pouvoir potentiellement tout
            construire.
          </p>
        </div>
        <div className="prose xl:text-lg sm:columns-2 xl:w-1/2 xl:columns-2 text-slate-100">
          <p>
            Je ne sais pas vraiment si vous lirez cela un jour, mais qui sait.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est sed
            molestias repudiandae minima aperiam tempora dolore! Nobis maiores
            eaque vel optio magni. Ipsum, repellat quia distinctio veniam hic
            ipsam omnis obcaecati ad vel magnam vero deleniti eaque sit, nam
            adipisci nulla ea aspernatur consectetur ex! Perferendis eius odio
            magnam possimus voluptate, reiciendis illo quas id hic tempore?
            Maxime possimus cumque assumenda quod nobis, corporis aspernatur
            modi ratione! Neque id, explicabo commodi odit assumenda ratione
            incidunt recusandae ad obcaecati temporibus vel aspernatur! Repellat
            dolorem reprehenderit aut distinctio recusandae, enim non sint
            beatae sed, optio modi tenetur dolorum minus aspernatur corporis
            vitae fugit tempora, placeat nihil consequatur libero cum asperiores
            ea autem!
          </p>
          <p>
            Récemment, je me suis pris au jeu de NextJS. Je tiens ici enfin le
            framework qui me dit que c&apos;est le bon, celui où j&apos;ai ce
            sentiment de &quot;m&apos;amuser sérieusement&quot;, à
            n&apos;importe quelle échelle. Evidemment, il me reste à apprendre
            (je suppose qu&apos;il me restera toujours à apprendre, et j&apos;en
            fait même le voeu solennel), mais si un chemin se distingue des
            autres, à coups de fonctionnalités et de confort de développement,
            c&apos;est bien celui de NextJS. En attendant le prochain, je
            suppose.
          </p>
        </div>
      </div>
    </BackgroundGradient>
  );
}
