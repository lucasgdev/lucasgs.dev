import React from "react";

const Skills = () => {
  return (
    <section className="px-20 py-10 md:flex bg-green-light" id="skills">
      <h1 className="text-3xl font-bold mr-10">
        Skills<span className="text-green">.</span>
      </h1>

      <div className="pr-5 flex-1">
        <h2 className="font-medium">
          <span className="text-green text-lg">Professional skills:</span>
        </h2>
        <p>
          JavaScript, HTML, CSS (SASS, LESS, Styled-components, Emotion),
          Webpack, React, React Native, Next.js, Gatsby, Expo, GraphQL, Elm,
          Parcel, Svelte, Jest, Testing Library, Vue, UX
        </p>
      </div>
      <div className="pr-5 flex-1">
        <h2 className="font-medium">
          <span className="text-green text-lg">Personal skills:</span>
        </h2>
        <p>
          Communication, Team Work, Flexibility, Positive Attitude,
          Open-Mindedness, Creativity, Dedication
        </p>
      </div>
      <div className="flex-1">
        <h2 className="font-medium">
          <span className="text-green text-lg">Languages:</span>
        </h2>
        <p>PT-Br (Native) / EN (Fluent) / ES (Basic) / FR (Basic)</p>
      </div>
    </section>
  );
};

export default Skills;
