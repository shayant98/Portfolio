import { motion, Variants } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import { ReactNode } from "react";

const AboutDescription = () => {
  const { t } = useTranslation("common");

  const textVarients: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <>
      <motion.p variants={textVarients}>{t("about_personal")}</motion.p>
      <motion.p variants={textVarients} className="pt-5">
        {t("about_passion")}
      </motion.p>
      <motion.p variants={textVarients} className="pt-5">
        {t("about_school") as ReactNode}
        <motion.a href="https://unasat.net/" className="text-red-400">
          {t("about_schoolname")}
        </motion.a>{" "}
        {t("about_bacholar") as ReactNode}
      </motion.p>
      <motion.p variants={textVarients} className="pt-5">
        {t("about_work") as ReactNode}
        <motion.a href="https://telesur.sr/" className="text-red-400">
          {t("about_workname")}
        </motion.a>{" "}
        {t("about_workdesc") as ReactNode}
      </motion.p>
    </>
  );
};

export default AboutDescription;
