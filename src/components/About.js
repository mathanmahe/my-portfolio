import React from "react"
import Typewriter  from "./Typwriter";


export default function About() {
    const jobTitles = ["Software Engineer", "Web Developer", "ML Engineer", "Data Scientist"]; // Array of job titles
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    Hey, I'm Mathan.
                    <br className="hidden lg:inline-block" />I love to build amazing
                    apps.
                    <br className="hidden lg:inline-block" />
                    I am a &nbsp;
                        <Typewriter texts={jobTitles} delay={100} />
                </h1>
                <p className="mb-8 leading-relaxed">
                    I am a Master's student in Computer Science, specializing in Computing Systems at the Georgia Institute of Technology. 
                    
                    I did my Undergraduate in Computer Engineering, at the National University of Singapore.<br />
                    
                    I am on the lookout for internship opportunities in <b>Summer 2024</b>, as well as full-time opportunities in <b>May 2025</b>, in the fields of software engineering, web development, machine learning and data science. <br/>

                    I am a driven individual who likes learning new things everyday, and I want to contribute to making the world a better place through writing code. <br />
                    
                    In my free time, I like reading, working out and travelling. <br />
                    
                    Hit me up if you would like to have a chat!
                </p>
                <div className="flex justify-center">
                    <a
                    href="#contact"
                    className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Work With Me
                    </a>
                    <a
                    href="#work-experience"
                    className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                    See My Past Work
                    </a>
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="./coding.svg"
                />
                </div>
            </div> 
        </section>

    );
}