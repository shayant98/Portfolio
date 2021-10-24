import { motion, Variants } from "framer-motion";
import useTranslation from "next-translate/useTranslation";

const AboutDescription = () => {
    const {t} = useTranslation("common")

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
      <motion.p variants={textVarients}>
        {t("about_personal")}
      </motion.p>
      <motion.p variants={textVarients} className="pt-5">
       {t("about_passion")}
      </motion.p>
      <motion.p variants={textVarients} className="pt-5">
        {t("about_school")}
        <motion.a href="https://unasat.net/" className="text-red-400">
          {t("about_schoolname")}
        </motion.a>{" "}
        {t("about_bacholar")}
      </motion.p>
      <motion.p variants={textVarients} className="pt-5">
         {t("about_work")}
        <motion.a href="https://telesur.sr/" className="text-red-400">
          {t("about_workname")}
        </motion.a>{" "}
        {t("about_workdesc")}
      </motion.p>
    </>
  );
};

export default AboutDescription;
