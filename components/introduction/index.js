import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";

export default function Introduction() {
  const { t } = useTranslation();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: "some" }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.99 },
      }}
      className="flex flex-col justify-center h-screen p-8 lg:w-2/3 lg:p-24 text-slate-800 dark:text-slate-300 dark:bg-slate-900"
    >
      <h2 className="my-4 text-5xl sm:text-7xl md:text-8xl ">
        <span className="inline-flex items-center gap-4 my-2">Hello ! 👋</span>
        <br /> {t('introduction.greetings')}
         <span className="font-bold text-teal-600 dark:text-teal-600">
          Robin Souriau
        </span>
        .
      </h2>
      <h3 className="text-2xl md:text-3xl">
        {t('introduction.iam')}
        <span className="font-bold text-teal-600 dark:text-teal-600">
          {t('fullstack_dev')}
        </span>{" "}
        {t('introduction.based_in')}
      </h3>
    </motion.div>
  );
}
