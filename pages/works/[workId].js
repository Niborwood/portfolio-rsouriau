import Image from "next/image";
import Link from "../../components/ui/link";

export default function WorkPage() {
  return (
    <div>
      <div className="w-full px-8 py-24 lg:p-24">
        <div className="flex flex-col justify-center gap-8 sm:flex-row">
          <div className="sm:w-96">
            <h4 className="pl-1 text-xl uppercase text-slate-400">Projet</h4>
            <h2 className="mb-4 text-teal-600 text-7xl">Project title</h2>
            <p className="text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              necessitatibus expedita quasi autem nihil! Mollitia amet adipisci
              odio harum expedita nostrum quidem quis ipsum minus dicta
              obcaecati velit.
            </p>
          </div>
          <div className="relative w-full sm:w-96 aspect-square drop-shadow-md">
            <Image
              src="/images/works/spiderman.jpg"
              alt="Project title"
              title="Project title"
              layout="fill"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <hr className="my-8 border-dashed border-slate-300" />
      <div className="flex flex-row gap-8 px-8 py-24 lg:p-24">
        <div className="w-1/4">
          <div className="mb-16">
            <h4 className="pl-1 text-xl uppercase text-slate-400">
              Technologies utilisées
            </h4>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="flex px-4 py-2 text-sm font-semibold rounded-full text-slate-500 bg-slate-200 align-center w-max">
                React
              </span>
              <span className="flex px-4 py-2 text-sm font-semibold rounded-full text-slate-500 bg-slate-200 align-center w-max">
                NextJS
              </span>
              <span className="flex px-4 py-2 text-sm font-semibold rounded-full text-slate-500 bg-slate-200 align-center w-max">
                Vercel
              </span>
              <span className="flex px-4 py-2 text-sm font-semibold rounded-full text-slate-500 bg-slate-200 align-center w-max">
                MongoDB
              </span>
              <span className="flex px-4 py-2 text-sm font-semibold rounded-full text-slate-500 bg-slate-200 align-center w-max">
                Next-auth
              </span>
              <span className="flex px-4 py-2 text-sm font-semibold rounded-full text-slate-500 bg-slate-200 align-center w-max">
                Firebase Storage
              </span>
              <span className="flex px-4 py-2 text-sm font-semibold rounded-full text-slate-500 bg-slate-200 align-center w-max">
                MUI
              </span>
            </div>
          </div>
          <div className="mb-16">
            <h4 className="pl-1 text-xl uppercase text-slate-400">
              Lien de démo
            </h4>
            <Link href="/" className="pl-1 mt-2" externalLink>
              Site
            </Link>
          </div>
        </div>
        <div className="w-3/4 space-y-8 prose prose-slate prose-h3:text-3xl">
          <div>
            <h3 className="mt-0">Contexte</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
              architecto, ullam praesentium temporibus dolorum dolores, dolor
              labore cupiditate vero, eius quam aliquid nulla odit magnam veniam
              voluptas. Ex, sunt excepturi nihil aspernatur magnam unde dolor
              molestias, distinctio quidem molestiae laudantium nulla iste saepe
              voluptatem doloribus esse inventore exercitationem beatae officia
              pariatur nobis. Magni sequi hic iusto facere beatae sint odit, aut
              temporibus, ipsa nostrum et esse sit necessitatibus dolorum
              laboriosam iure, expedita dolores quisquam repellat vero.
              Similique quae, ducimus maiores laudantium rem ratione. Atque,
              earum. Dolore perferendis reiciendis corporis quasi rerum. Quidem
              odio dolorum aperiam eligendi! Debitis incidunt pariatur
              praesentium asperiores nesciunt iusto recusandae!zio? Incidunt
              asperiores ut ipsam iure fuga dicta maiores.
            </p>
          </div>
          <hr />
          <div>
            <h3>Réalisation</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
              architecto, ullam praesentium temporibus dolorum dolores, dolor
              labore cupiditate vero, eius quam aliquid nulla odit magnam veniam
              voluptas. Ex, sunt excepturi nihil aspernatur magnam unde dolor
              molestias, distinctio quidem molestiae laudantium nulla iste saepe
              voluptatem doloribus esse inventore exercitationem beatae officia
              pariatur nobis. Magni sequi hic iusto facere beatae sint odit, aut
              temporibus, ipsa nostrum et esse sit necessitatibus dolorum
              laboriosam iure, expedita dolores quisquam repellat vero.
              Similique quae, ducimus maiores laudantium rem ratione. Atque,
              earum. Dolore perferendis reiciendis corporis quasi rerum. Quidem
              odio dolorum aperiam eligendi! Debitis incidunt pariatur
              praesentium asperiores nesciunt iusto recusandae!zio? Incidunt
              asperiores ut ipsam iure fuga dicta maiores.
            </p>
          </div>
          <hr />
          <div>
            <h3>Images</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
              architecto, ullam praesentium temporibus dolorum dolores, dolor
              labore cupiditate vero, eius quam aliquid nulla odit magnam veniam
              voluptas. Ex, sunt excepturi nihil aspernatur magnam unde dolor
              molestias, distinctio quidem molestiae laudantium nulla iste saepe
              voluptatem doloribus esse inventore exercitationem beatae officia
              pariatur nobis. Magni sequi hic iusto facere beatae sint odit, aut
              temporibus, ipsa nostrum et esse sit necessitatibus dolorum
              laboriosam iure, expedita dolores quisquam repellat vero.
              Similique quae, ducimus maiores laudantium rem ratione. Atque,
              earum. Dolore perferendis reiciendis corporis quasi rerum. Quidem
              odio dolorum aperiam eligendi! Debitis incidunt pariatur
              praesentium asperiores nesciunt iusto recusandae!zio? Incidunt
              asperiores ut ipsam iure fuga dicta maiores.
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { workId: "1" } },
      { params: { workId: "2" } },
      { params: { workId: "3" } },
      { params: { workId: "4" } },
      { params: { workId: "5" } },
      { params: { workId: "6" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
