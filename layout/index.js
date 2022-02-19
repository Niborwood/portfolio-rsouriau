import propTypes from "prop-types";
import { useEffect, useState } from "react";

import NavBar from "../components/navbar";
import Contact from "../components/contact";

export default function Layout({ children }) {
  // Handle dark mode
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  return (
    <div className={isDark ? "dark" : undefined}>
      <NavBar isDark={isDark} setIsDark={setIsDark} />
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
