import React from "react";

const Email = () => {
  return (
    <div
      className="fixed left text-white bottom-0 right-5 w-12 z-10"
      aria-orientation="vertical"
    >
      <div className="flex flex-col items-center relative">
        <a
          href="mailto:brittany.chiang@gmail.com"
          className="writing-mode-vertical tracking-wider font-mono text-xs"
        >
          shayant98@gmail.com
        </a>
        <div className="h-32 border-l-2 border-white text-center mt-4 border-navy-light"></div>
      </div>
    </div>
  );
};

export default Email;
