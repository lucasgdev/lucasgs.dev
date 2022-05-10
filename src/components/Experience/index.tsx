import React from "react";
import { experienceData } from "./content";

const Experience = () => {
  return (
    <section className="py-10 px-20 md:flex">
      <h1 className="text-3xl font-bold mr-10">
        Experience<span className="text-green">.</span>
      </h1>

      <div>
        {experienceData.map(item => (
          <div className="mb-5 pb-4 border-b border-b-green" key={item.company}>
            <div className="flex text-lg">
              <h2 className="text-green font-bold mr-2">{item.position}</h2>
              <h3 className="font-medium">{item.company}</h3>
            </div>
            <p className="mb-2">{item.period}</p>
            <p className="italic">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
