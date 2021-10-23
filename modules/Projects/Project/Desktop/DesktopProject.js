import ProjectDescription from "./ProjectDescription/ProjectDescription";
import ProjectImage from "./ProjectImage";

const DesktopProject = ({ project, flip = false }) => {
  return (
    <div className="group relative  h-max mt-24 cursor-pointer hidden xl:flex ">
      <ProjectImage flip={flip} image={project.image} />
      <ProjectDescription flip={flip} project={project} />
    </div>
  );
};

export default DesktopProject;
