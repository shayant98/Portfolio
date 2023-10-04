import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiChevronDown } from "react-icons/hi";
import { MdOutlineLanguage } from "react-icons/md";
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";
const LanguageDropdown = ({ variants }) => {
  const { t } = useTranslation("common");
  const languages = ["EN", "NL"];

  return (
    <>
      <Menu as="div" className="relative inline-block text-left text-xs">
        <div>
          <Menu.Button className=" inline-flex items-center mx-7 mt-3 text-navy-light hover:text-red-400  transition ease-in duration-200 cursor-pointer">
            <HiChevronDown size={24} />
            {t("menu_language").toUpperCase()}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-5 origin-top-right bg-navy-light divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
            <div className="px-1 py-1 ">
              {languages.map((lang, index) => {
                return (
                  <Menu.Item key={index}>
                    <button
                      onClick={async () => await setLanguage(lang.toLowerCase())}
                      className="text-white group flex rounded-md items-center w-full px-2 py-2 text-sm hover:bg-red-400 transition duration-200"
                    >
                      <MdOutlineLanguage size={24} className="mr-2" />
                      {lang}
                    </button>
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {/* <motion.button
        variants={variants}
        className="inline-flex mx-7 text-navy-light hover:text-red-400  transition ease-in duration-200 cursor-pointer"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={() => setDropdown(!dropdown)}
      >
        <HiChevronDown size={24} /> {languages[lang]}
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
      </div>*/}
    </>
  );
};

export default LanguageDropdown;
