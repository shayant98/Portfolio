import React from "react";
import ProjectImage from "../Mobile/ProjectImage";
import ProjectDescription from "./ProjectDescription/ProjectDescription";

const MobileProject = ({ flip, project }) => {
  return (
    <div className="group flex align-center relative h-max pt-4 cursor-pointer lg:hidden">
      <ProjectImage flip={flip} />

      <ProjectDescription flip={flip} project={project} />
    </div>
  );
};

export default MobileProject;
