import Image from "next/image";
import propTypes from "prop-types";

export default function WorkHead({ title, description, image }) {
  return (
    <div className="w-full px-8 py-24 lg:p-24">
      <div className="flex flex-col justify-center gap-8 sm:flex-row">
        <div className="sm:w-96">
          <h4 className="pl-1 text-xl uppercase text-slate-400">Projet</h4>
          <h2 className="mb-4 text-teal-600 text-7xl">{title}</h2>
          <p className="text-xl">{description}</p>
        </div>
        <div className="relative w-full sm:w-96 aspect-square drop-shadow-md">
          <Image
            src={image}
            alt={title}
            title={title}
            layout="fill"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

WorkHead.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  image: propTypes.string,
};

WorkHead.defaultProps = {
  image: "/images/misc/placeholder.jpg",
};
