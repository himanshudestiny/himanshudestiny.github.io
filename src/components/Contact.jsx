import React from 'react'
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div name="contact" class="bg-gradient-to-b from-gray-500 to-gray-300 w-full md: h-full">
        <div class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
            <div class="pb-8 mt-20 md:mt-20">
                <p class="text-4xl font-bold inline border-b-4 border-b-black ">Contact</p>
                <p class="py-6">You can get in touch with me on submitting this form</p>
                </div>
                <div class="grid sm:grid-cols-1 md:grid-cols-1 md:w-3/3 gap-8 px-12 sm:px-0">
                    <div class="flex flex-col sm:flex-row max-w-screen-lg">
              
                            <div class="flex flex-col justify-center  h-full sm:w-1 md:w-2/3 pl-8 pb-4">
                                <div className='flex flex-row h-10 justify-left'>
                                 <a href="https://www.linkedin.com/in/himanshu-gangwar-747b29237/"> <div className=' h-10 w-10 text-blue text-blue-700'><AiFillLinkedin className='w-full h-full'/></div></a>
                                 <a href="https://www.linkedin.com/in/himanshu-gangwar-747b29237/"> <div className=' h-10 text-2xl ml-4 text-blue-700'>Linkedin</div></a>
                                </div>
                                <div className='flex flex-row h-10 justify-left mt-4'>
                                <a href="https://github.com/himanshudestiny">  <div className=' h-10 w-10'><AiFillGithub className='w-full h-full text-green-700'/></div></a>
                                <a href="https://github.com/himanshudestiny">  <div className=' h-10 text-2xl ml-4 text-green-700'>Github</div> </a>
                                </div>
                                <div className='flex flex-row h-10 justify-left mt-4'>
                                 <a href="mailto:gangwar.himanshu2111@gmail.com"> <div className=' h-10 w-10'><SiGmail className='w-full h-full text-red-700'/></div></a>
                                 <a href="mailto:gangwar.himanshu2111@gmail.com"><div className=' h-10 text-2xl ml-4 text-red-700'>Mail</div></a> 
                                </div>
                                <div className='flex flex-row h-10 justify-left mt-4'>
                                  <div className=' h-10 w-10'><IoMdCall className='w-full h-full text-purple-700'/></div>
                                  <div className=' h-10 text-2xl ml-4 text-purple-700'>8077642844</div>
                                </div>
                                </div>


                                <div className="flex justify-center items-center text-black w-full ">
    <form action="https://getform.io/f/3d2aada3-de95-4499-9968-15cd1b739167" method="POST" className="flex flex-col w-full ">
               <input type="text" name="name" placeholder='Enter your name' className="p-2  border-2 rounded-md focus:outline-none" />
              <input type="text" name="name" placeholder='Enter your email' className="my-4 p-2  border-2 rounded-md focus:outline-none" />
               <textarea name="message" placeholder='Enter your message here' id="" rows="10" className="p-2 border-2 rounded-md focus:outline-none"></textarea>
                <button className="bg-gradient-to-b from-purple-500 to-purple-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Contact Me</button>
            </form>
        </div>
                                </div>
                               
                                           
    </div>
    </div>
    </div>
  )
}

export default Contact
