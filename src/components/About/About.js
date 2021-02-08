import React from "react";

const About = () => {
  const technologies = [
    "Javascript (ES6+)",
    "HTML &amp; (S)CSS",
    "React",
    "Next.Js",
    "Node.Js",
  ];

  return (
    <div className="grid  lg:grid-cols-2 gap-4">
      <div className="leading-6 text-blue-100  mt-7 font-sans">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <p className="pt-5">
          Suspendisse faucibus ac metus viverra pharetra. Quisque non magna
          iaculis, cursus mauris ac, fermentum sapien. Praesent euismod sapien
          ac purus fringilla iaculis. Etiam a tempor mauris, in vehicula libero.
          Sed tempus elit nec libero vulputate, sit amet viverra augue
          tincidunt. Phasellus at ipsum nibh. Cras
        </p>
        <p className="pt-5">
          Cras mi est, pretium vel risus at, venenatis tincidunt orci. Nullam
          eget nulla vel mauris egestas convallis vitae quis nunc. Curabitur vel
          tristique lorem
        </p>
        <p className="pt-5">
          Here are a few technologies I've been working with recently:
        </p>
        <ul className="pt-8 grid grid-cols-2 text-sm">
          {technologies.map((technology, index) => (
            <li key={index}>
              <span className="text-red-400 mr-2">▹</span> {technology}
            </li>
          ))}
        </ul>
      </div>
      <div className="group relative h-64 lg:h-80 w-max place-self-center cursor-pointer transition ease-in duration-100">
        <img
          src="https://loremflickr.com/640/360"
          alt="headhsot"
          className="z-10 relative h-full object-cover rounded-sm"
        />
        <div className="h-full w-full z-0 absolute top-0 z-20 bg-opacity-75 bg-red-400 rounded-sm group-hover:bg-opacity-0 transition ease-in duration-300"></div>
        <div className="h-full w-full z-0 absolute top-4 left-4 lg:top-10 lg:left-10 border-4 border-navy-light rounded-sm group-hover:border-red-400  transition ease-in duration-400"></div>
      </div>
    </div>
  );
};

export default About;
