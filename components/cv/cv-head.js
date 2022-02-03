import Image from "next/image";
import Link from "../ui/link";
import getAge from "../../utils/get-age";

export default function CVHead() {
  return (
    <div className="px-8 pb-16 mx-auto lg:w-1/3 lg:p-12 xl:p-18 xl:pl-24 lg:py-0">
      {/* Image */}
      <div className="relative max-w-xs p-1 mb-8 rounded-full drop-shadow-md bg-teal-600/20 aspect-square fit-cover shadow-teal-600/10">
        <div className="relative w-full h-full rounded-full bg-teal-600/40 right-5 bottom-1">
          <Image
            src="/images/cv/robin-souriau-developpeur-fullstack-removebg.png"
            alt="Robin Souriau, développeur web fullstack"
            title="Robin Souriau, développeur web fullstack"
            layout="fill"
            className="rounded-full"
          />
        </div>
      </div>

      {/* Informations principales */}
      <h2 className="mb-8 text-4xl text-teal-600">Robin SOURIAU</h2>
      <div className="flex flex-col gap-2">
        <p className="inline-flex items-center gap-1 text-lg text-slate-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          06/01/1993 ({getAge("1993, 1, 6")} ans)
        </p>
        <p className="inline-flex items-center gap-1 text-lg text-slate-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Paris, Seine-Saint-Denis
        </p>
        <p className="inline-flex items-center gap-1 text-lg text-slate-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
            />
          </svg>
          Permis B
        </p>
        <p className="inline-flex items-center gap-1 text-lg text-slate-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-teal-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <Link href="/contact">robin.souriau@gmail.com</Link>
        </p>
        <p className="inline-flex items-center gap-1 text-lg text-slate-600">
          <Link href="https://www.linkedin.com/in/robinsouriau">Linkedin</Link>
        </p>
        <p className="inline-flex items-center gap-1 text-lg text-slate-600">
          <Link href="https://github.com/Niborwood">GitHub</Link>
        </p>
      </div>
    </div>
  );
}
