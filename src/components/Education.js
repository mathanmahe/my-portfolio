// src/components/Education.js

import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education">
      <div className="container px-5 py-10 mx-auto">
        
        <div classname="text-center mb-20">
          <AcademicCapIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
            Education
          </h1>
        </div>
        
        <div className="flex flex-wrap m-4">
          {education.map((edu, index) => (
            <div key={index} className="p-4 md:w-full w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <div className="md:w-2/5 flex justify-start items-right">
                  <img 
                    src={edu.image} // Adjust the path as needed.
                    alt={`${edu.institution} logo`} 
                    className="max-h-36 w-auto" // This will constrain the height of the image.
                  />
                </div>
                <h2 className="sm:text-2xl text-xl font-medium title-font text-white mb-3">
                  {edu.degree}
                  {edu.specialization && `, ${edu.specialization}`}
                </h2>
                <p className="leading-relaxed mb-3">{edu.institution} - {edu.location}</p>
                <p className="leading-relaxed mb-3">{edu.duration}</p>
                {edu.gpa && <p className="leading-relaxed mb-3">GPA: {edu.gpa}</p>}
                <h3 className="text-white text-xs font-medium title-font mb-3">Relevant Courses</h3>
                <ul className="list-disc ml-5 text-white">
                  {edu.courses.map((course, index) => (
                    <li key={index}>{course}</li>
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
