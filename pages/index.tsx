import { useState } from "react";
import Email from "../components/Email/Email";
import Footer from "../components/Footer/Footer";
import Sections from "../components/Sections/Sections";
import Social from "../components/Social/Social";
import Sidemenu from "../components/Sidemenu/Sidemenu";
import Header from "../components/Header/Header";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={` bg-navy-normal relative min-h-screen  ${menuOpen ? " h-screen overflow-hidden" : "h-full"}`}>
      <Header isOpen={menuOpen} toggleMenu={setMenuOpen} />

      <Sidemenu isOpen={menuOpen} toggleMenu={setMenuOpen} />
      <Social />
      <Sections />
      <Footer />
      <Email />
    </div>)
}
