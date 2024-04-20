import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

function addSpacesBeforeCapitalLetters(text) {
  return text.replace(/([A-Z])/g, ' $1');
}

function capitalizeFirstLetterOfEachWord(text) {
  return text.replace(/\b\w/g, char => char.toUpperCase());
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here is a brief overview of my technical skillset, including programming languages, libraries, tools and concepts I am proficient in.
          </p>
        </div>
        
        {Object.keys(skills).map((category) => (
          <div key={category}>
            <h3 className="sm:text-2xl text-xl font-medium title-font text-white mb-4">
             {capitalizeFirstLetterOfEachWord(addSpacesBeforeCapitalLetters(category))} {/* Capitalize first letter of each word and add spaces */}
            </h3>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {skills[category].map((skill) => (
                <div key={skill} className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                    <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-white">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}