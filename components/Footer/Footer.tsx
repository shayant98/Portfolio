import React from "react";
import { useMediaQuery } from "react-responsive";
import SocialList from "./SocialList";

const Footer = () => {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 640px)" });
  return (
    <footer className="py-6 px-3 mt-3 bg-navy-normal flex flex-col items-center justify-center font-mono">
      <p className="text-blue-200 text-opacity-50">
        Designed & Built by <strong>Shayant Sital</strong>
      </p>
      {isMobileScreen && <SocialList />}
    </footer>
  );
};

export default Footer;
