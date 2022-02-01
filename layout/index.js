import propTypes from "prop-types";
import { Fragment } from "react";

import NavBar from "../components/navbar";

export default function Layout({ children }) {
  return (
    <Fragment>
      <NavBar />
      <main className="h-screen">{children}</main>
    </Fragment>
  );
}

Layout.propTypes = {
  children: propTypes.node.isRequired,
};
