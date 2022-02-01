import Head from "next/head";
import { Fragment } from "react";
import { supabase } from "../utils/supabase-client";

// COMPONENT IMPORTS
import Introduction from "../components/introduction";
import AboutMe from "../components/about-me";
import Works from "../components/works";
import CV from "../components/cv";

export default function Home({ works }) {
  return (
    <Fragment>
      {/* Head */}
      <Head>
        <title>
          Robin Souriau - Développeur web fullstack, CV &amp; Portfolio
        </title>
      </Head>

      {/* Content */}
      <Introduction />
      <AboutMe />
      <Works works={works} />
      <CV />
    </Fragment>
  );
}

export async function getStaticProps() {
  const { data: works, error } = await supabase
    .from("works")
    .select("id,title,description,thumbnail,slug,preview")
    .order("id", { ascending: true });

  // Return props
  return {
    props: {
      works,
    },
  };
}
