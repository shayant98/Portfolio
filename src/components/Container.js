import React, { useState } from "react";
import Email from "./Email/Email";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sections from "./Sections/Sections";
import Sidemenu from "./Sidemenu/Sidemenu";
import Social from "./Social/Social";

const Container = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={` bg-navy-normal relative min-h-screen  ${
        menuOpen ? " h-screen overflow-hidden" : "h-full"
      }`}
    >
      <Header isOpen={menuOpen} toggleMenu={setMenuOpen} />

      <Sidemenu isOpen={menuOpen} toggleMenu={setMenuOpen} />
      <Social />
      <Sections />
      <Footer />
      <Email />
    </div>
  );
};

export default Container;
