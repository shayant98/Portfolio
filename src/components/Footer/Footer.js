import React from "react";
import SocialList from "./SocialList";

const Footer = () => {
  return (
    <footer className="py-6 px-3 mt-3 bg-navy-normal flex flex-col items-center justify-center font-mono">
      <p className="text-blue-200 text-">
        Designed & Built by <strong>Shayant Sital</strong>
      </p>
      <SocialList />
    </footer>
  );
};

export default Footer;
