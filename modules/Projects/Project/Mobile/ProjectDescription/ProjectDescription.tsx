import IProject from "@interfaces/Project";
import useTranslation from "next-translate/useTranslation";
import ProjectLinks from "../../ProjectLinks";
import TechnologiesList from "../../TechnologiesList";

const ProjectDescription = ({ flip, project }: CProjectDescriptionProps) => {
    const {t} = useTranslation("common")

  return (
    <div className={`absolute z-40 p-4 md:p-8 w-full ${flip && "text-right"}`}>
      <p className={`text-red-400 justify-self-end `}>{t("projects_featured")}</p>
      <p className={`text-blue-200 text-xl md:text-2xl  font-bold py-3 `}>
        {project.title}
      </p>
      <p className="leading-6 tracking-wide text-sm text-blue-200 text-opacity-75 ">
        {project.description}
      </p>
      <TechnologiesList technologies={project.technologies} />
      <ProjectLinks project={project} flip={flip} />
    </div>
  );
};

interface CProjectDescriptionProps {
  project: IProject
  flip: boolean
}

export default ProjectDescription;
