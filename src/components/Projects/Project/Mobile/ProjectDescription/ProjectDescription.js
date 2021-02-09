import React from "react";

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
      <ul className="inline-flex space-x-4 text-blue-200 font-mono text-xs mt-4">
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <div className={`mt-2 flex space-x-4 justify-end`}>
        {project.github && (
          <a
            target="_blank"
            rel="noreferrer"
            href={project.github}
            className="mt-4 text-blue-200 hover:text-red-400 transition ease-in duration-300"
          >
            <svg
              role="img"
              width="20px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        )}
        {project.url && (
          <a
            target="_blank"
            rel="noreferrer"
            href={project.url}
            className="mt-4 text-blue-200 hover:text-red-400 transition ease-in duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              width="20px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-external-link"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDescription;
