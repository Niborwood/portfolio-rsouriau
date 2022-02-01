import Head from "next/head";
import { Fragment } from "react";

// COMPONENT IMPORTS
import Introduction from "../components/introduction";
import AboutMe from "../components/about-me";
import Works from "../components/works";
import CV from "../components/cv";

export default function Home() {
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
      <Works />
      <CV />
    </Fragment>
  );
}
