import React from "react";
import ProjectLinks from "../../ProjectLinks";
import TechnologiesList from "../../TechnologiesList";

const ProjectDescription = ({ flip, project }) => {
  return (
    <div className={`absolute z-40 p-4 md:p-8 w-full ${flip && "text-right"}`}>
      <p className={`text-red-400 justify-self-end `}>Featured Project</p>
      <p className={`text-blue-200 text-2xl  font-bold py-3 `}>
        {project.title}
      </p>
      <p className="leading-6 tracking-wide text-sm text-blue-200">
        {project.description}
      </p>
      <TechnologiesList technologies={project.technologies} />
      <ProjectLinks project={project} flip={flip} />
    </div>
  );
};

export default ProjectDescription;
