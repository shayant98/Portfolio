import React from "react";

const About = () => {
  const technologies = [
    "Javascript (ES6+)",
    "HTML & (S)CSS",
    "React",
    "Next.Js",
    "Node.Js",
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      <div class="leading-6 text-blue-100 font-sans">
        <p>Hello! I'm Brittany, a software engineer based in Boston, MA.</p>
        <p className="pt-5">
          I enjoy creating things that live on the internet, whether that be
          websites, applications, or anything in between. My goal is to always
          build products that provide pixel-perfect, performant experiences.
        </p>
        <p className="pt-5">
          Shortly after graduating from{" "}
          <a href="https://www.ccis.northeastern.edu">
            Northeastern University
          </a>
          , I joined the engineering team at{" "}
          <a href="https://www.upstatement.com">Upstatement</a> where I work on
          a wide variety of interesting and meaningful projects on a daily
          basis.
        </p>
        <p className="pt-5">
          Here are a few technologies I've been working with recently:
        </p>
        <ul className="pt-8 grid grid-cols-2 text-sm">
          {technologies.map((technology) => (
            <li>
              <span className="text-red-400 mr-2">▹</span> {technology}
            </li>
          ))}
        </ul>
      </div>
      <div class="group relative h-auto w-max cursor-pointer transition ease-in duration-100">
        <img
          src="https://loremflickr.com/640/360"
          alt="headhsot"
          className="z-20 relative rounded-md w-50 h-50"
        />
        <div className="h-full w-full z-0 absolute top-0 z-30 bg-opacity-75 bg-red-400 rounded-md group-hover:bg-opacity-0 transition ease-in duration-100"></div>
        <div className="h-full w-full z-0 absolute top-10 left-10 border-4 border-navy-light rounded-md group-hover:border-red-400  transition ease-in duration-100"></div>
      </div>
    </div>
  );
};

export default About;
