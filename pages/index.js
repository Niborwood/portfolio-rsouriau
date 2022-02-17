import Head from "next/head";
import { Fragment } from "react";
import { supabase } from "../utils/supabase-client";

// COMPONENT IMPORTS
import Introduction from "../components/introduction";
import AboutMe from "../components/about-me";
import Works from "../components/works";
import CV from "../components/cv";

export default function Home({ works, tags, error, errorTags }) {
  return (
    <Fragment>
      {/* Head */}
      <Head>
        <title>
          Robin Souriau - Développeur web fullstack, CV &amp; Portfolio
        </title>
        <meta
          name="title"
          content="Robin Souriau - Développeur web fullstack, CV & Portfolio"
        />
        <meta
          name="description"
          content="React, NextJS, Node and Tailwind enthusiast. This is my personal portfolio and CV. Discover my works!"
        />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.robinsouriau.dev/" />
        <meta
          property="og:title"
          content="Robin Souriau - Développeur web fullstack, CV & Portfolio"
        />
        <meta
          property="og:description"
          content="React, NextJS, Node and Tailwind enthusiast. This is my personal portfolio and CV. Discover my works!"
        />
        <meta
          property="og:image"
          content="/images/cv/robin-souriau-developpeur-fullstack.jpg"
        />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.robinsouriau.dev/" />
        <meta
          property="twitter:title"
          content="Robin Souriau - Développeur web fullstack, CV & Portfolio"
        />
        <meta
          property="twitter:description"
          content="React, NextJS, Node and Tailwind enthusiast. This is my personal portfolio and CV. Discover my works!"
        />
        <meta
          property="twitter:image"
          content="/images/cv/robin-souriau-developpeur-fullstack.jpg"
        />
      </Head>

      {/* Content */}
      <Introduction />
      {error ? <p>Erreur</p> : <Works works={works} />}
      <AboutMe />
      {errorTags ? <p>Erreur</p> : <CV tags={tags} />}
    </Fragment>
  );
}

export async function getStaticProps() {
  // Get works form slider display
  const { data: works, error } = await supabase
    .from("works")
    .select("id,title,description,thumbnail,slug,preview")
    .order("id", { ascending: true });

  // Get tags for tag cloud display
  const { data: tags, error: errorTags } = await supabase
    .from("tags")
    .select("id,name,favorite")
    .order("name", { ascending: true });

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
