import useTranslation from 'next-translate/useTranslation'
import { motion } from "framer-motion";
import Button from "../../components/Button";
const Hero = () => {
    const { t } = useTranslation('common')
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
          {t("hero_description")}
        </motion.p>
        <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 0.5 }} href="mailto:shayant@tuta.io">
          <Button title={t("hero_cta")} size="lg" />
        </motion.a>
      </div>
    </>
  );
};

export default Hero;
