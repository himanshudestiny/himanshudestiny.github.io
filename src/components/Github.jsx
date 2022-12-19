import React from 'react'
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const Github = () => {
  return (
    <div name='github' className='w-full h-full bg-gradient-to-b from-gray-300 to-gray-500'>
        <div className=' p-10 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
        <div className="pb-8 mt-20 md:mt-20" >
            <p className="text-4xl font-bold inline border-b-4 border-black">Github</p>
        </div>
            <div className=' p-10 shadow-md hover:scale-105 duration-500 shadow-green-600'>
            <GitHubCalendar username='himanshudestiny' ><ReactTooltip /></GitHubCalendar>
            </div>
            <div className=' p-10 mt-10 flex justify-center shadow-md hover:scale-105 duration-500 shadow-pink-500'>
                <img src="https://github-readme-streak-stats.herokuapp.com?user=himanshudestiny&theme=nightowl&hide_border=true&border_radius=0&date_format=M%20j%5B%2C%20Y%5D" alt="streak" className='align-center' />
            </div>
            <div className='p-10 mt-10 flex justify-center shadow-md hover:scale-105 duration-500 shadow-blue-500'>
                <img src="https://camo.githubusercontent.com/7df769453f7660915fda705e544cb70e8b8433436e52329c704546ea0e52e942/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d68696d616e73687564657374696e792673686f775f69636f6e733d74727565266c6f63616c653d656e" alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Github
