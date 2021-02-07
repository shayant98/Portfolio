import React from "react";
import About from "../About/About";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import SectionContainer from "../SectionContainer";
import Work from "../Work/Work";

const Main = () => {
  return (
    <main className="bg-navy-normal px-40 m-auto min-h-screen max-w-screen-2xl w-full ">
      <SectionContainer count={0} full={true}>
        <Hero />
      </SectionContainer>
      <SectionContainer count={1} title={"About Me"}>
        <About />
      </SectionContainer>
      <div className="pl-40">
        <SectionContainer count={2} title={"Where i've worked"}>
          <Work />
        </SectionContainer>
      </div>
      <SectionContainer count={3} title={"Some things i've build"}>
        <Projects />
      </SectionContainer>
    </main>
  );
};

export default Main;
