import React from "react";
import ProjectImage from "./ProjectImage";
import ProjectDescription from "./ProjectDescription/ProjectDescription";
import IProject from "@interfaces/Project";

const MobileProject = ({ flip, project }: CMobileProject) => {
  return (
    <div className=" group flex align-center relative h-max pt-4 mb-5 cursor-pointer lg:hidden">
      <ProjectImage flip={flip} image={project.image} />

      <ProjectDescription flip={flip} project={project} />
    </div>
  );
};

interface CMobileProject {
  flip: boolean
  project: IProject
}

export default MobileProject;
