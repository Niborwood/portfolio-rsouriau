import { supabase } from "../../utils/supabase-client";
import Head from "next/head";

// COMPONENT IMPORTS
import WorkHead from "../../components/works/work-head";
import WorkSidebar from "../../components/works/work-sidebar";
import WorkContent from "../../components/works/work-content";
import Error from "../../components/ui/error";

export default function WorkPage({ work, nextWorkSlug, error }) {
  if (error) return <Error message={error} />;

  return (
    <div className="py-8">
      <Head>
        <title>{work.title} - Portfolio | Robin Souriau</title>
        <meta
          name="description"
          content={work.description.slice(0, 130) + "..."}
        />
        <meta property="og:title" content={work.title} />
        <meta property="og:description" content={work.description} />
        <meta property="og:image" content={work.image} />
      </Head>

      <WorkHead
        title={work.title}
        description={work.description}
        image={work.thumbnail}
      />

      <hr className="border-dashed sm:my-8 border-slate-300 dark:border-slate-400" />

      <div className="flex flex-col gap-8 sm:flex-row">
        <WorkSidebar
          techs={work.tags}
          demoLink={work.demoLink}
          githubLink={work.githubLink}
        />

        <hr className="border-dashed sm:my-8 border-slate-300" />

        <WorkContent
          context={work.context}
          work={work.work}
          images={work.images}
          nextWorkSlug={nextWorkSlug}
        />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  // Get only works that aren't previews
  const { data: works, error } = await supabase
    .from("works")
    .select("slug")
    .eq("preview", false);
  const worksPaths = works.map((work) => ({
    params: {
      workSlug: work.slug,
    },
  }));

  return {
    paths: worksPaths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Get the work data from the database and param
  const { workSlug } = params;
  let work = null;
  let workError = null;
  let nextWorkSlug = null;

  try {
    const { data, error } = await supabase
      .from("works")
      .select(
        `*,
      tags (id,name,favorite)`
      )
      .eq("slug", workSlug)
      .limit(1)
      .single();
    work = data;

    if (error) throw new Error(error);

    // Get the next work data from the database
    const { data: nextWork } = await supabase
      .from("works")
      .select("slug")
      .gt("id", work.id)
      .eq("preview", false)
      .limit(1)
      .single();

    nextWorkSlug = nextWork;
  } catch (error) {
    workError = error.message;
  }

  // Return props. If there's no next work, return "roundnet-france" slug by default
  return {
    props: {
      work,
      nextWorkSlug: nextWorkSlug
        ? `/works/${nextWorkSlug.slug}`
        : "/works/roundnet-france",
      error: workError,
    },
    revalidate: 86400,
  };
}
