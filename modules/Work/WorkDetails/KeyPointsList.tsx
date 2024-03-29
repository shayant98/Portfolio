import { motion } from "framer-motion";
import KeyPointListitem from "./KeyPointListitem";

const KeyPointsList = ({ points }: {points: string[]}) => {
  return (
    <motion.ul className=" py-3 text-blue-200 text-opacity-50 ">
      {points.map((point, index) => (
        <KeyPointListitem index={index} key={index} point={point} />
      ))}
    </motion.ul>
  );
};

export default KeyPointsList;
