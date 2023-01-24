import React from 'react'
import { FaBars, FaTimes} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

const newtab = () => {
  window.open("https://drive.google.com/file/d/1Isq8uizgRn0jwxYQ6DOv64LGgwXVYc6j/view?usp=sharing")
}


const Navbar = () => {

const [ nav, setnav ] = useState(false);

const links = [
    {
        id:1,
        link:"home",
        
    },
    {
        id:2,
        link:"about",
    },
    {
        id:3,
        link:"projects",
    },
    {
        id:4,
        link:"skills",
    },
    {
      id:5,
      link:"github",
    },
    {
        id:6,
        link:"contact",
    }
]


  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-black bg-gray-500 fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">HG</h1>
      </div>
      <ul className="hidden md:flex">
        { links.map(({id, link})=> (
            <li key={id} className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200">
                <Link to={link} smooth duration={700}> {link} </Link>
                </li>
        ))}
         <a href="/Himanshu_Gangwar_Resume.pdf" download={true}>
        <button onClick={()=>newtab()} className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200">Resume</button>      
        </a>
      </ul> 
      <div onClick={()=> setnav(!nav)} className="cursor-pointer pr-4 z-10 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
      </div>

     { nav && (
 <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full hoscreen bg-gradient-to-b from-gray-400 to-gray-200">
 { links.map(({id, link})=> (
       <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
          <Link onClick={() => setnav(!nav)} to={link} smooth duration={700}> {link} </Link>
           </li>
   ))}
   <a href="/Himanshu_Gangwar_Resume.pdf" download={true}>
        <button onClick={()=>newtab()} className="px-4 cursor-pointer capitalize py-6 text-4xl">Resume</button>      
        </a>
 </ul>
     )}

     
    </div>
  )
}

export default Navbar


