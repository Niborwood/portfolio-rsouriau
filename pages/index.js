import Head from "next/head";
import { Fragment } from "react";

// COMPONENT IMPORTS
import NavBar from "../components/navbar";
import Introduction from "../components/introduction";
import AboutMe from "../components/about-me";
import Works from "../components/works";

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
      <div className="font-headings text-slate-800">
        <NavBar />
        <main className="h-screen">
          <Introduction />
          <AboutMe />
          <Works />
        </main>
      </div>
    </Fragment>
  );
}
