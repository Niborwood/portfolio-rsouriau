import { supabase } from "../../utils/supabase-client";

// COMPONENT IMPORTS
import WorkHead from "../../components/works/work-head";
import WorkSidebar from "../../components/works/work-sidebar";
import WorkContent from "../../components/works/work-content";

export default function WorkPage({ work }) {
  return (
    <div>
      <WorkHead
        title={work.title}
        description={work.description}
        image={work.thumbnail}
      />

      <hr className="border-dashed sm:my-8 border-slate-300" />

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
  const { data: work, error } = await supabase
    .from("works")
    .select(
      `*,
    tags (id,name)`
    )
    .eq("slug", workSlug)
    .limit(1)
    .single();

  // Return props
  return {
    props: {
      work,
    },
  };
}
