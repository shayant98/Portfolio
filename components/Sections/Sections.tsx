import About from "../../modules/About/About";
import Contact from "../../modules/Contact/Contact";
import Hero from "../../modules/Hero/Hero";
import Projects from "../../modules/Projects/Projects";
import SectionContainer from "./SectionContainer";
import Work from "../../modules/Work/Work";
import useTranslation from "next-translate/useTranslation";

const Sections = () => {
  const { t } = useTranslation("common");
  return (
    <main className=" px-6 md:px-20 lg:px-40 m-auto min-h-screen max-w-screen-2xl w-full overflow-hidden flex flex-col">
      <div id="home">
        <SectionContainer count={0} full={true}>
          <Hero />
        </SectionContainer>
      </div>
      <div id="about">
        <SectionContainer count={1} title={t("about_title")}>
          <About />
        </SectionContainer>
      </div>
      <div className="flex flex-col justify-center items-center mt-10" id="work">
        <SectionContainer count={2} title={t("work_title")}>
          <Work />
        </SectionContainer>
      </div>
      <div id="projects">
        <SectionContainer count={3} title={t("projects_title")}>
          <Projects />
        </SectionContainer>
      </div>
      <div id="contact">
        <SectionContainer count={4} title={t("contact_title")}>
          <Contact />
        </SectionContainer>
      </div>
    </main>
  );
};

export default Sections;
