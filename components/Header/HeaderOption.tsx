import { motion, Variants } from "framer-motion";
import { Link } from "react-scroll";
import IMenuOption from "../../interfaces/MenuOption";

const HeaderOption = ({ index, option, variants }: HeaderOption) => {
  return (
    <motion.button key={index} variants={variants} initial="hidden" animate="visible" transition={{ duration: 0.2 * index + 1 }}>
      <Link to={option.to} smooth={true} className=" mr-7 hover:text-red-400 text-xs cursor-pointer transition ease-in duration-100">
        <span className="text-red-400">0{index + 1}.</span> {option.title}
      </Link>
    </motion.button>
  );
};

interface HeaderOption {
  index: number;
  option: IMenuOption;
  variants: Variants;
}

export default HeaderOption;
