import React from 'react'

import htmlLogo from "../assets/htmlLogo.png";
import cssLogo from "../assets/cssLogo.png";
import javaScriptLogo from "../assets/javaScriptLogo.png";
import reactLogo from "../assets/reactLogo.png";
import reduxLogo from "../assets/reduxLogo.png";
import nextJSLogo from "../assets/nextJSLogo.png";
import chakraLogo from "../assets/chakraLogo.png";
import gitHubLogo from "../assets/gitHubLogo.png";
import storybookLogo from "../assets/storybookLogo.png";
import tailwindLogo from "../assets/tailwindLogo.png";
import typeScriptLogo from "../assets/typeScriptLogo.png";
import testingLibraryLogo from "../assets/testingLibraryLogo.png";


const Skills = () => {
  const skills = [
    {
      id:1,
      src: htmlLogo,
      title: "HTML",
      style: 'shadow-orange-500'
    },
    {
      id:2,
      src: cssLogo,
      title: "CSS",
      style: 'shadow-blue-500'
    },
    {
      id:3,
      src: javaScriptLogo,
      title: "JavaScript",
      style: 'shadow-yellow-500'
    },
    {
      id:4,
      src: reactLogo,
      title: "React",
      style: 'shadow-teal-600'
    },
    {
      id:5,
      src: reduxLogo,
      title: "Redux",
      style: 'shadow-purple-500'
    },
    {
      id:6,
      src: nextJSLogo,
      title: "Next JS",
      style: 'shadow-black'
    },
    {
      id:7,
      src: chakraLogo,
      title: "Chakra UI",
      style: 'shadow-teal-500'
    },
    {
      id:8,
      src: gitHubLogo,
      title: "GitHub",
      style: 'shadow-black'
    },
    {
      id:9,
      src: storybookLogo,
      title: "StoryBook",
      style: 'shadow-red-500'
    },
    {
      id:10,
      src: tailwindLogo,
      title: "Tailwind CSS",
      style: 'shadow-blue-500'
    },
    {
      id:11,
      src: typeScriptLogo,
      title: "TypeScript",
      style: 'shadow-blue-500'
    },
    {
      id:12,
      src: testingLibraryLogo,
      title: "Testing Library",
      style: 'shadow-red-500'
    }
  ]
  return (
    <div name="skills" className="bg-gradient-to-b from-gray-500 to-gray-300">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-black p-2 inline">Skills</p>
          <p className="py-6">These are some technical skills that I possess</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {
            skills.map(( { id, src, title, style }) => (
          <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt={title} className="w-20 mx-auto"/>
            <p className="mt-4">{title}</p>
          </div>
            ))
          }
          
        </div>
      </div>
    </div>
  )
}

export default Skills;
