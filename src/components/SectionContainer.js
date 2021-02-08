import React from "react";
import Title from "./Title";

const SectionContainer = ({ children, count, title = "", full = false }) => {
  return (
    <section
      className={`flex flex-col  items-start ${
        count === 0 && "lg:justify-center"
      } ${full && "min-h-screen"} ${count !== 0 && "mt-10 lg:mt-40"}`}
    >
      {count !== 0 && <Title count={count} title={title} />}
      {children}
    </section>
  );
};

export default SectionContainer;
