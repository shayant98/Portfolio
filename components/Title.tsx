import { AnimatePresence, motion } from "framer-motion";

const Title = ({ title, count }) => {
  return (
    <AnimatePresence>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} className="flex items-center mb-7 w-full">
        <h2 className="flex-none text-purple-200 text-xl  font-bold  md:text-3xl lg:text-4xl font-sans">
          <span className="font-mono text-red-400 text-400 font-normal  text-lg md:text-xl lg:text-2xl ">{`0${count}`}.</span> {title}
        </h2>
        <div className="ml-4 w-full md:w-48 border-b border-navy-light"></div>
      </motion.div>
    </AnimatePresence>
  );
};


interface CTitleProps {
  title: string
  count: number
}

export default Title;
