import ITechnology from "@interfaces/Technology";
import { motion, Variants } from "framer-motion";

const TechnologiesListItem = ({ index, variants, technology }: TechnologiesListItemProps) => {
  return (
    <motion.li key={index} variants={variants} className="flex mt-1">
      <span className="text-red-400 mr-2">▹</span> <span className="flex gap-2">{technology.icon}{technology.name}</span>
    </motion.li>
  );
};

interface TechnologiesListItemProps {
  index: number
  variants?: Variants
  technology: ITechnology
}

export default TechnologiesListItem;
