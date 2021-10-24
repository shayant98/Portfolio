import Button from "../../components/Button";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { HiOutlineHand } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import useTranslation from "next-translate/useTranslation";

const Contact = () => {
  const {t} = useTranslation("common")
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className="mb-10 flex flex-col justify-center w-full items-center">
      <motion.h3 className="text-3xl xl:text-4xl 2xl:text-6xl text-blue-200  font-bold">{t("contact_header")}</motion.h3>
      <motion.p className="mt-3 text-blue-200 text-opacity-50 text-center  2xl:text-lg lg:w-3/6">
        {t("contact_body")}
      </motion.p>
      <motion.a className="py-10" href="mailto:me@shayantsital.com">
        <Button size="lg" title= {t("contact_button")} icon={<HiOutlineHand className="text-xl" />} />
      </motion.a>
    </motion.div>
  );
};

export default Contact;
