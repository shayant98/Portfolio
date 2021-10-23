import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import useOutsideClick from "../../hooks/useOutsideClick";

const LanguageDropdown = ({ variants }) => {
  const [lang, setLang] = useState(0);
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => {
    if (dropdown) {
      setDropdown(false);
    }
  });
  const languages = ["ENG", "NL"];

  return (
    <>
      <motion.button
        variants={variants}
        className="inline-flex mx-7 text-navy-light hover:text-red-400  transition ease-in duration-200 cursor-pointer"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={() => setDropdown(!dropdown)}
      >
        <HiChevronDown /> {languages[lang]}
      </motion.button>
      <div
        ref={ref}
        className={`origin-top-right absolute  right-20 mt-2 w-20 rounded-sm shadow-lg bg-navy-light ring-1 ring-black ring-opacity-5 ${dropdown ? "visible" : "hidden"}`}
      >
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {languages.map((language, index) => (
            <div
              key={index}
              className="block px-4 py-2 text-sm text-blue-200  hover:text-red-400 transition ease-in duration-200 cursor-pointer"
              role="menuitem"
              onClick={() => {
                setLang(index);
              }}
            >
              {language}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LanguageDropdown;
