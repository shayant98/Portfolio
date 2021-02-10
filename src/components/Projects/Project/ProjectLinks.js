import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
const ProjectLinks = ({ flip, project }) => {
  return (
    <div
      className={`mt-2 flex space-x-4  ${
        flip ? " justify-end lg:justify-start" : "justify-start lg:justify-end"
      }`}
    >
      {project.github && (
        <a
          target="_blank"
          rel="noreferrer"
          href={project.github}
          className="mt-4 text-blue-200 hover:text-red-400 transition ease-in duration-300"
        >
          <FiGithub className="text-2xl" />
        </a>
      )}
      {project.url && (
        <a
          target="_blank"
          rel="noreferrer"
          href={project.url}
          className="mt-4 text-blue-200 hover:text-red-400 transition ease-in duration-300"
        >
          <FiExternalLink className="text-2xl" />
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;
