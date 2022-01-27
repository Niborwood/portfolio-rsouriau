import Image from "next/image";

export default function Introduction() {
  return (
    <div>
      <h2 className="text-6xl sm:text-7xl md:text-8xl my-4">
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
