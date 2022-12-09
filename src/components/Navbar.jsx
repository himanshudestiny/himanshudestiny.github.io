import React from 'react'
import { FaBars, FaTimes} from "react-icons/fa";
import { useState } from "react";

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
        link:"skills",
    },
    {
        id:4,
        link:"projects",
    },
    {
        id:5,
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
                {link}
                </li>
        ))}
      </ul> 
      <div onClick={()=> setnav(!nav)} className="cursor-pointer pr-4 z-10 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
      </div>

     { nav && (
 <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full hoscreen bg-gradient-to-b from-gray-400 to-gray-200">
 { links.map(({id, link})=> (
       <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
           {link}
           </li>
   ))}
   <li className=""></li>
 </ul>
     )}

     
    </div>
  )
}

export default Navbar
