import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex flex-row items-center justify-between px-4 py-8 bg-gradient-to-br from-teal-700 to-teal-500 lg:p-8 text-slate-100">
      <h1 className="text-2xl hover:underline underline-offset-4">
        <Link href="/">Robin Souriau</Link>
      </h1>
      <ul className="flex items-center justify-center gap-2">
        <li className="hover:underline underline-offset-4">
          <Link href="/#about">About</Link>
        </li>
        <li>|</li>
        <li className="hover:underline underline-offset-4">
          <Link href="/#works">Works</Link>
        </li>
        <li>|</li>
        <li className="hover:underline underline-offset-4">
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
