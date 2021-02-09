import React from "react";
import DesktopProject from "./Desktop/DesktopProject";
import MobileProject from "./Mobile/MobileProject";

const Project = ({ project, flip = false }) => {
  return (
    <>
      {/* /Mobile Design */}
      <MobileProject flip={flip} project={project} />
      {/* Large Screen */}
      <DesktopProject flip={flip} project={project} />
    </>
  );
};

export default Project;
