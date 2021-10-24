import IProject from "@interfaces/Project";
import ProjectLinks from "../../ProjectLinks";
import TechnologiesList from "../../TechnologiesList";

const ProjectDescription = ({ flip, project }) => {
  return (
    <div className={`transform ${flip ? "translate-x-24" : "-translate-x-24"} z-10 w-1/2`}>
      <p className={`text-red-400 ${!flip && "text-right"}`}>Featured Project</p>
      <p className={`text-blue-200 text-2xl  font-bold py-3 ${!flip && "text-right"}`}>{project.title}</p>
      <div className="py-5 px-8 bg-navy-light text-blue-200 text-opacity-75 rounded-sm justify-end max-w-xl shadow-xl hover:shadow-2xl transition ease-in duration-200">
        <p className="leading-7 tracking-wide text-md ">{project.description}</p>
      </div>
      <TechnologiesList technologies={project.technologies} flip={flip} />
      <ProjectLinks project={project} flip={flip} />
    </div>
  );
};

interface CProjectDescriptionProps {
  project: IProject
  flip: boolean
}

export default ProjectDescription;
