import Head from "next/head";
import Image from "next/image";

// COMPONENT IMPORTS
import NavBar from "../components/navbar";
import Introduction from "../components/introduction";

export default function Home() {
  return (
    <div className="font-headings text-slate-800">
      <NavBar />
      <main className="h-screen">
        <div id="about" className="flex items-center justify-center h-full ">
          <Introduction />
        </div>
        <div className="flex items-center justify-center h-full bg-teal-600 text-white">
          <p>Et bien le bonjour.</p>
        </div>
      </main>
    </div>
  );
}
