import React from "react";
import { educationData } from "./content";

const Education = () => {
  return (
    <section className="py-10 px-20 md:flex bg-green-light">
      <h1 className="text-3xl font-bold mr-10">
        Education<span className="text-green">.</span>
      </h1>

      <div>
        {educationData.map(item => (
          <div
            className="mb-5 pb-4 border-b border-b-green"
            key={item.institution}
          >
            <div className="flex text-lg">
              <h2 className="text-green font-bold mr-2">{item.institution}</h2>
            </div>
            <p className="mb-2">{item.period}</p>
            <p className="italic">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
