// src/components/WorkExperience.js

import React from "react";
import { BriefcaseIcon } from "@heroicons/react/solid";
import { workExp } from "../data";

export default function WorkExperience() {
  return (
    <section id="work-experience">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
            <BriefcaseIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
            Work Experience
            </h1>
        </div>

        <div className="flex flex-wrap m-4">
          {workExp.map((exp) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <div className="md:w-2/5 flex justify-start items-right">
                  <img 
                    src={exp.image} // Adjust the path as needed.
                    alt={`${exp.company} logo`} 
                    className="max-h-36 w-auto" // This will constrain the height of the image.
                  />
                </div>
                <BriefcaseIcon className="block w-8 text-gray-500 mb-4" />
                <h2 className="sm:text-2xl text-xl font-medium title-font text-white mb-3">
                  {exp.role} at {exp.company}
                </h2>
                <h3 className="text-gray-500 mb-3">{exp.duration}</h3>
                <ul className="mb-6">
                  {exp.tasks.map((task, index) => (
                    <li key={index} className="leading-relaxed">{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
