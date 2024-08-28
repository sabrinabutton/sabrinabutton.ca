import React from "react";

const ProjectResume = ({ dates, type, position, company, bullets }) => {
  return (
    <div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between">
      <div className="text-lg">
        <h1>{position}</h1>
        <h2 className="text-lg opacity-75">{company}</h2>
        <h2 className="text-sm opacity-75">{dates}</h2>
        <h3 className="text-sm opacity-50">{type}</h3>
      </div>
    </div>
  );
};

export default ProjectResume;
