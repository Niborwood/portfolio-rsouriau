import propTypes from "prop-types";
import { Fragment } from "react";

import NavBar from "../components/navbar";

export default function Layout({ children }) {
  return (
    <Fragment>
      <NavBar />
      <main>{children}</main>
    </Fragment>
  );
}

Layout.propTypes = {
  children: propTypes.node.isRequired,
};
