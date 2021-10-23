import React from "react";

const Email = () => {
  return (
    <div className="fixed left text-white bottom-0 right-5 w-12  hidden md:block" aria-orientation="vertical">
      <div className="flex flex-col items-center relative">
        <a
          href="mailto:me@shayantsital.com"
          className="writing-mode-vertical text-navy-light font-mono text-md leading-5 tracking-widest hover:text-red-400 transition delay-300 ease-in"
        >
          me@shayantsital.com
        </a>
        <div className="h-32 border-l-2 border-white text-center mt-4 "></div>
      </div>
    </div>
  );
};

export default Email;
