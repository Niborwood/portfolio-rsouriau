import propTypes from "prop-types";
import { Fragment } from "react";

import NavBar from "../components/navbar";
import Contact from "../components/contact";

export default function Layout({ children }) {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <main className="h-full overflow-hidden dark:bg-slate-900 dark:text-slate-300">
        {children}
      </main>
      <Contact />
    </div>
  );
}

Layout.propTypes = {
  children: propTypes.node.isRequired,
};
