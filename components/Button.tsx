import { motion } from "framer-motion";

const Button = ({ title, icon, size }: CButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className={`${icon && "flex justify-around w-48"}
      ${size === "lg" && "w-56"}
      ${size === "sm" ? "text-sm px-3 py-2" : "px-6 py-4"}
       border-solid border rounded-lg border-red-400 text-red-400`}
    >
      {icon} {title}
    </motion.button>
  );
};

interface CButtonProps {
  title: string;
  icon?: JSX.Element;
  size: "lg" | "sm";
}

export default Button;
