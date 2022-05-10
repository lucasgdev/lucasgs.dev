import React from "react";

const Skills = () => {
  return (
    <section className="mt-20 md:flex items-center">
      <h1 className="text-3xl font-bold mr-10">
        Skills<span className="text-green">.</span>
      </h1>

      <div className="pr-5 flex-1">
        <h2 className="font-medium">
          <span className="text-green">Professional skills:</span> JavaScript,
          HTML, CSS (SASS, LESS, Styled-components, Emotion), Webpack, React,
          React Native, Next.js, Gatsby, Expo, GraphQL, Elm, Parcel, Svelte,
          Jest, Testing Library, Vue, UX
        </h2>
      </div>
      <div className="pr-5 flex-1">
        <h2 className="font-medium">
          <span className="text-green">Personal skills:</span> Communication,
          Team Work, Flexibility, Positive Attitude, Open-Mindedness,
          Creativity, Dedication
        </h2>
      </div>
      <div className="flex-1">
        <h2 className="font-medium">
          <span className="text-green">Languages:</span> PT-Br (Native) / EN
          (Fluent) / ES (Basic) / FR (Basic)
        </h2>
      </div>
    </section>
  );
};

export default Skills;
