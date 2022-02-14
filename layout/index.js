import propTypes from "prop-types";
import { Fragment } from "react";

import NavBar from "../components/navbar";
import Contact from "../components/contact";

export default function Layout({ children }) {
  return (
    <Fragment>
      <NavBar />
      <main className="h-full dark:bg-slate-900 dark:text-slate-300">
        {children}
      </main>
      <Contact />
    </Fragment>
  );
}

Layout.propTypes = {
  children: propTypes.node.isRequired,
};
