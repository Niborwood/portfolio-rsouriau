import { supabase } from "../../utils/supabase-client";

// COMPONENT IMPORTS
import WorkHead from "../../components/works/work-head";
import WorkSidebar from "../../components/works/work-sidebar";
import WorkContent from "../../components/works/work-content";

export default function WorkPage({ work }) {
  console.log(work);
  return (
    <div>
      <WorkHead title={work.title} description={work.description} />

      <hr className="border-dashed sm:my-8 border-slate-300" />

      <div className="flex flex-col gap-8 sm:flex-row">
        <WorkSidebar
          techs={[
            "React",
            "NextJS",
            "Vercel",
            "MongoDB",
            "Next-auth",
            "Firebase Storage",
            "MUI",
          ]}
          demoLink={work.demoLink}
          githubLink={work.githubLink}
        />

        <hr className="border-dashed sm:my-8 border-slate-300" />

        <WorkContent
          context={work.context}
          work={work.work}
          images={[
            "/images/misc/placeholder.jpg",
            "/images/works/spiderman.jpg",
          ]}
        />
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

export async function getStaticProps({ params }) {
  // Get the work data from the database and param
  const { workId } = params;
  const { data: work, error } = await supabase
    .from("works")
    .select("*")
    .eq("id", workId)
    .single();

  // Return props
  return {
    props: {
      work,
    },
  };
}
