import IProject from "@interfaces/Project";
import ProjectDescription from "./ProjectDescription/ProjectDescription";
import ProjectImage from "./ProjectImage";

const DesktopProject = ({ project, flip = false }: CDesktopProjectProps) => {
  return (
    <div className="group relative  h-max mt-24 md:flex xs:hidden md:show ">
      <ProjectImage flip={flip} image={project.image} url={project.url ?? project.github!} />
      <ProjectDescription flip={flip} project={project} />
    </div>
  );
};

interface CDesktopProjectProps {
  flip: boolean;
  project: IProject;
}

export default DesktopProject;
