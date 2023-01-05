import React from 'react'
import HeroImage from "../assets/heroImage.jpeg";
import {ImArrowRight2} from "react-icons/im"

const Home = () => {
  return (
    <div name="home" className="h-full w-full bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-60 md:mt-60">
            <h2 className="text-4xl sm:text-7xl font-bold ">Aspiring Full Stack Web Developer</h2>
            <h2 className="text-2xl sm:text-2xl font-bold ">Hello, I am Himanshu Gangwar</h2>
            <p className="py-4 max-w-md">A highly passionate and motivated individual who thrives upon seeking new challenges 
                through career as a Full Stack Web Developer. 
                With good Coding and Programming skills,
                 wants to become a fine asset for the organization working for.</p>
                 <div>
                   <a href="/Himanshu_Gangwar_Resume.pdf" download={true}> <button className= " group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-600 to-purple-800 cursor-pointer">Resume
                        <span className="group-hover:rotate-90 duration-300 ml-2">
                            <ImArrowRight2 />
                        </span>
                    </button> </a>
                 </div>
                 
        </div>
        <div className=' mt-20 md:mt-20'>
             <img src={ HeroImage } alt="my-profile" className="rounded-2xl mx-auto w-2/3 md:w-180"/> 
        </div>
      </div>
    </div>
  )
}

export default Home
