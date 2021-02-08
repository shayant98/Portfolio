import React from "react";

const Contact = () => {
  return (
    <div className="mb-10 flex flex-col justify-center w-full items-center">
      <h3 className="text-5xl lg:text-7xl text-blue-200 font-bold">
        Get in Touch
      </h3>
      <p className="text-blue-200 text-center text-lg w-80">
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>
      <a
        href="/"
        className="mt-10 px-6 py-4 cursor-pointer border-solid border-2 rounded-md border-red-400 text-red-400  text-lg hover:bg-red-400 hover:bg-opacity-25 transition ease-in duration-300"
      >
        Say Hello
      </a>
    </div>
  );
};

export default Contact;
