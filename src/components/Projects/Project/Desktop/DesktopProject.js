import React from "react";
import ProjectDescription from "./ProjectDescription/ProjectDescription";
import ProjectImage from "./ProjectImage";

const DesktopProject = ({ project, flip = false }) => {
  return (
    <div className="group relative  h-max mt-24 cursor-pointer hidden xl:flex ">
      <ProjectImage flip={flip} />
      <ProjectDescription flip={flip} project={project} />
    </div>
  );
};

export default DesktopProject;
