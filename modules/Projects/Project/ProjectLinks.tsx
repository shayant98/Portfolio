import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import IProject from "@interfaces/Project";
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
          className="mt-4 text-blue-200 hover:text-red-400 transition ease-in duration-200"
        >
          <FiGithub className="text-2xl" />
        </a>
      )}
      {project.url && (
        <a
          target="_blank"
          rel="noreferrer"
          href={project.url}
          className="mt-4 text-blue-200 hover:text-red-400 transition ease-in duration-200"
        >
          <FiExternalLink className="text-2xl" />
        </a>
      )}
      {project.android && (
        <a
          target="_blank"
          rel="noreferrer"
          href={project.android}
          className="mt-4 text-blue-200 hover:text-red-400 transition ease-in duration-200"
        >
          <FaGooglePlay className="text-2xl" />
        </a>
      )}
      {project.ios && (
        <a
          target="_blank"
          rel="noreferrer"
          href={project.ios}
          className="mt-4 text-blue-200 hover:text-red-400 transition ease-in duration-200"
        >
          <FaAppStoreIos className="text-2xl" />
        </a>
      )}
    </div>
  );
};

interface CProjectLinksProps {
  flip: boolean
  project: IProject
}

export default ProjectLinks;
