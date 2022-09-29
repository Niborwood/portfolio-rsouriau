import Head from "next/head";
import { Fragment } from "react";
import { supabase } from "../utils/supabase-client";
import useTranslation from "next-translate/useTranslation";

// COMPONENT IMPORTS
import Introduction from "../components/introduction";
import AboutMe from "../components/about-me";
import Works from "../components/works";
import CV from "../components/cv";
import Error from "../components/ui/error";

export default function Home({ works, tags, error, errorTags }) {
  const { t } = useTranslation("common");

  return (
    <Fragment>
      {/* Head */}
      <Head>
        <title>{t("head.title")}</title>
        <meta name="title" content={t("head.title")} />
        <meta name="description" content={t("head.description")} />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.robinsouriau.dev/" />
        <meta property="og:title" content={t("head.title")} />
        <meta property="og:description" content={t("head.description")} />
        <meta
          property="og:image"
          content="/images/cv/robin-souriau-developpeur-fullstack.jpg"
        />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.robinsouriau.dev/" />
        <meta property="twitter:title" content={t("head.title")} />
        <meta property="twitter:description" content={t("head.description")} />
        <meta
          property="twitter:image"
          content="/images/cv/robin-souriau-developpeur-fullstack.jpg"
        />
      </Head>

      {/* Content */}
      <Introduction />
      {error ? <Error onlyMessage /> : <Works works={works} />}
      <AboutMe />
      {errorTags ? <Error onlyMessage /> : <CV tags={tags} />}
    </Fragment>
  );
}

export async function getStaticProps() {
  // Get works form slider display & tags for skills
  const [{ data: works, error }, { data: tags, error: errorTags }] =
    await Promise.all([
      supabase
        .from("works")
        .select("id,title,description,thumbnail,slug,preview")
        .order("position", { ascending: true })
        .order("id", { ascending: true }),
      supabase
        .from("tags")
        .select("id,name,favorite")
        .order("name", { ascending: true }),
    ]);

  // Return props
  return {
    props: {
      works,
      tags,
      error,
      errorTags,
    },
    revalidate: 86400,
  };
}
