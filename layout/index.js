import propTypes from "prop-types";
import { Fragment } from "react";

import NavBar from "../components/navbar";
import Contact from "../components/contact";

export default function Layout({ children }) {
  return (
    <Fragment>
      <NavBar />
      <main>{children}</main>
      <Contact />
    </Fragment>
  );
}

Layout.propTypes = {
  children: propTypes.node.isRequired,
};
