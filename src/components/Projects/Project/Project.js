import React from "react";
import { useMedia } from "react-media";
import DesktopProject from "./Desktop/DesktopProject";
import MobileProject from "./Mobile/MobileProject";

const Project = ({ project, flip = false }) => {
  const isSmallScreen = useMedia({ query: "(max-width: 768px)" });
  return (
    <>
      {isSmallScreen ? (
        <MobileProject flip={flip} project={project} />
      ) : (
        <DesktopProject flip={flip} project={project} />
      )}
    </>
  );
};

export default Project;
