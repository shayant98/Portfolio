import React from "react";
import Title from "./Title";

const SectionContainer = ({ children, count, title = "", full = false }) => {
  return (
    <section
      className={`py-40 flex flex-col  items-start ${
        count === 0 && "justify-center"
      } ${full && "min-h-screen"}`}
    >
      {count !== 0 && <Title count={count} title={title} />}
      {children}
    </section>
  );
};

export default SectionContainer;
