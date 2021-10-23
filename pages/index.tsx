import { useState } from "react";
import Head from 'next/head'
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
      <Head>
        <title>Shayant Sital</title>
      <meta
        name="description"
        content="Shayant Sital is a software engineer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between."
      />
      <meta name="author" content="Shayant Sital"/>
      <meta name="keywords" content="Web Developer, Web Development, Applications, Application Development, Flutter, Responsive, Suriname,"/>
      <meta
        property="og:description"
        content="Shayant Sital is a software engineer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between."
      />
      <meta property="og:title" content="Shayant Sital" />
      <meta
        property="og:image"
        content="https://shayantsital.com/og.png"
      ></meta>
      <meta
        name="twitter:card"
        content="summary_large_image"
      ></meta>
      <meta
        name="twitter:creator"
        content="@ShayantSital"
      ></meta>
      <meta
        name="twitter:title"
        content="Shayant Sital"
      ></meta>
      <meta
        property="twitter:description"
        content="Shayant Sital is a software engineer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between."
      />
      <meta
        name="twitter:image"
        content="https://shayantsital.com/og.png"
     />
      </Head>
      <Header isOpen={menuOpen} toggleMenu={setMenuOpen} />

      <Sidemenu isOpen={menuOpen} toggleMenu={setMenuOpen} />
      <Social />
      <Sections />
      <Footer />
      <Email />
    </div>)
}
