import Image from "next/image";

export default function Introduction() {
  return (
    <div className="flex flex-col justify-center h-full p-8 lg:w-2/3 lg:p-24 text-slate-800">
      <h2 className="my-4 text-6xl sm:text-7xl md:text-8xl">
        Hello !<br /> Je m&apos;appelle{" "}
        <span className="font-bold text-teal-600">Robin Souriau</span>.
      </h2>
      <h3 className="text-2xl md:text-3xl">
        Je suis{" "}
        <span className="font-bold text-teal-600">
          développeur web fullstack
        </span>{" "}
        basé à Paris.
      </h3>
    </div>
  );
}
