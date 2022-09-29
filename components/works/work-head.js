import Image from "next/image";
import propTypes from "prop-types";
import useTranslation from 'next-translate/useTranslation'
export default function WorkHead({ title, description, image }) {
  const { t } = useTranslation('works')
  return (
    <div className="w-full px-8 pt-24 pb-12 lg:p-24 lg:pb-24 lg:pt-36">
      <div className="flex flex-col justify-center gap-8 sm:flex-row">
        <div className="sm:w-96">
          <p className="pl-1 uppercase sm:text-xl text-slate-400">{t('project')}</p>
          <h2 className="mb-4 text-5xl text-teal-600 sm:text-7xl">{title}</h2>
          <p className="text-lg lg:text-xl">{description}</p>
        </div>
        <div className="relative w-full sm:w-96 aspect-square drop-shadow-md">
          <Image
            src={image}
            alt={title}
            title={title}
            layout="fill"
            className="object-cover rounded-lg dark:brightness-75"
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
