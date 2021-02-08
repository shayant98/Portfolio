import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import SectionContainer from "../SectionContainer";
import Work from "../Work/Work";

const Main = () => {
  return (
    <main className=" px-10 md:px-20 lg:px-40 m-auto min-h-screen max-w-screen-2xl w-full overflow-hidden flex flex-col">
      <div id="home">
        <SectionContainer count={0} full={true}>
          <Hero />
        </SectionContainer>
      </div>
      <div id="about">
        <SectionContainer count={1} title={"About Me"}>
          <About />
        </SectionContainer>
      </div>
      <div
        className="flex flex-col justify-center items-center mt-10"
        id="work"
      >
        <SectionContainer count={2} title={"Where i've worked"}>
          <Work />
        </SectionContainer>
      </div>
      <div id="projects">
        <SectionContainer count={3} title={"Some things i've build"}>
          <Projects />
        </SectionContainer>
      </div>
      <div id="contact">
        <SectionContainer count={3} title={"What's Next"}>
          <Contact />
        </SectionContainer>
      </div>
    </main>
  );
};

export default Main;
