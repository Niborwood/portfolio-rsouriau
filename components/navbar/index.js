import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="p-8 bg-teal-600 text-slate-100 flex flex-row justify-between">
      <h1 className="text-2xl">Robin Souriau</h1>
      <ul className="flex justify-center items-center gap-2">
        <li className="hover:underline underline-offset-4">
          <Link href="/#about">About</Link>
        </li>
        <li>|</li>
        <li className="hover:underline underline-offset-4">
          <Link href="/#projects">Projects</Link>
        </li>
        <li>|</li>
        <li className="hover:underline underline-offset-4">
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
