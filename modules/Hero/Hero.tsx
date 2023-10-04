import useTranslation from "next-translate/useTranslation";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import { Link } from "react-scroll";
const Hero = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="text-left">
        <motion.h1 className="mt-40  lg:mt-8 font-mono font-sm text-red-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}>
          Fawaka, {t("hero_greeting")}
        </motion.h1>
        <motion.h2
          className="text-4xl my-3  md:text-6xl md:my-8   lg:text-7xl lg:my-8  text-red-300 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          Shayant Sital.
        </motion.h2>
        <motion.h2
          className="text-4xl my-3  md:text-6xl md:my-8 text-red-100 font-bold text-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          {t("hero_tag")}
        </motion.h2>
        <motion.p
          className="mt-4 mb-10  max-w-lg text-blue-200 text-opacity-50 leading-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          {t("hero_description")}{" "}
          <div>
            <Link
              className=" text-red-400 cursor-pointer relative before:content-[''] before:absolute  before:block before:w-full before:h-[1px]
              before:bottom-0 before:left-0 before:bg-red-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
              to="experience"
              smooth={true}
            >
              {t("hero_company")}
            </Link>
          </div>
        </motion.p>
        <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 0.5 }} href="mailto:me@shayantsital.com">
          <Button title={t("hero_cta")} size="lg" />
        </motion.a>
      </div>
    </>
  );
};

export default Hero;
