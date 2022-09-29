import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";

// COMPONENT IMPORTS
import BackgroundGradient from "../ui/background-gradient";

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <BackgroundGradient id="about">
      <div className="flex flex-col justify-between min-h-screen gap-8 px-8 py-24 lg:flex-row lg:p-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: "some" }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
          }}
          className="flex text-3xl sm:text-4xl sm:w-2/3 xl:w-1/3 xl:items-end"
        >
          <p className="pt-4 border-t-4 border-white dark:border-slate-300/70 xl:w-2/3">
            {t("about_me.quote.part1")}
            <strong className="text-slate-800 dark:text-slate-50">
              {t("about_me.quote.part2")}
            </strong>
            {t("about_me.quote.part3")}
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: "some" }}
          transition={{ duration: 3.5, delay: 1, type: "spring" }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="prose sm:columns-2 xl:w-1/2 xl:columns-2 prose-p:text-slate-100 dark:prose-p:text-slate-300/60 prose-strong:text-slate-800 dark:prose-strong:text-slate-100"
        >
          <p>
            {t('about_me.paragraph1.part1')}
            <strong>code</strong> {t('about_me.paragraph1.part2')}
          </p>
          <p>
            {t('about_me.paragraph2.part1')}
            <strong>{t('about_me.paragraph2.strong1')}</strong> {t('about_me.paragraph2.part2')}
          </p>
          <p>
            <strong>Fullstack</strong> {t('about_me.paragraph3.part1')}
            <strong>Web</strong>, {t('about_me.paragraph3.part2')}
          </p>
          <p>
            {t('about_me.paragraph4.part1')} <strong>React</strong>{t('about_me.paragraph4.part2')}<strong>NextJS</strong>{t('about_me.paragraph4.part3')}
            <strong>Node / Adonis</strong>{t('about_me.paragraph4.part4')}
          </p>
          <p>
            {t('about_me.paragraph5.part1')}<strong>{t('about_me.paragraph5.strong1')}</strong>{t('about_me.paragraph5.part2')}
            <strong>{t('about_me.paragraph5.strong2')}</strong>{t('about_me.paragraph5.part3')}
          </p>
          <p>
            {t('about_me.paragraph6.part1')}<strong>{t('about_me.paragraph6.strong1')}</strong>{t('about_me.paragraph6.part2')}
          </p>
        </motion.div>
      </div>
    </BackgroundGradient>
  );
}
