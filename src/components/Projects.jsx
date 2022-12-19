import React from 'react'
import OLX from "../assets/OLX.png";
import AirGarage from "../assets/AirGarage.png";
import Lyst from "../assets/Lyst.png";
import nyresa from "../assets/nyresa.png";






const Projects = () => {
  return (
    <div name="projects" class="bg-gradient-to-b from-gray-300 to-gray-500 w-full md: h-full">
        <div class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
            <div class="pb-8 mt-20 md:mt-20">
                <p class="text-4xl font-bold inline border-b-4 border-b-black ">Projects</p>
                <p class="py-6">These are some beautiful projects that I made</p>
                </div>
                <div class="grid sm:grid-cols-1 md:grid-cols-1 md:w-3/3 gap-8 px-12 sm:px-0">
                    <div class="flex flex-col sm:flex-row max-w-screen-lg"><div class="bg-gradient-to-r from-purple-500 to-purple-800 rounded-lg text-white md:w-2/3">
                        <div class="flex items-center justify-center"><button class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> <a href="https://eloquent-kelpie-90cfa5.netlify.app/">  Project    </a></button> 
                        <button class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> <a href="https://github.com/himanshudestiny/frantic-week-8502"> Github   </a> </button>
                        </div>
                      <a href="https://eloquent-kelpie-90cfa5.netlify.app/">  <img src={OLX} alt="olx" class="rounded-md duration-300 hover:scale-105"   /> </a>
                            </div>
                            <div class="flex flex-col justify-center shadow-xl border-black h-full sm:w-1 md:w-2/3 pl-8 pb-4">
                                <h1 class="text-4xl font-bold mt-4 md:mt-0 ">OLX Clone</h1>
                                <h1>OLX is an e-commerce website to buy and sell old and used products. It is an individual project</h1>
                                <br />
                                <p class="text-2xl font-bold">Features</p>
                                <p class="font-semibold">Products page display, Cars page display, Sort and Filter functionalities are developed</p>
                                <br />
                                <p class="text-2xl font-bold">TechStack </p>
                                <p class="font-bold">HTML, CSS, JavaScript</p>
                                </div>
                                </div>
                                <div class="flex flex-col sm:flex-row max-w-screen-lg"><div class="bg-gradient-to-r from-purple-500 to-purple-800 rounded-lg text-white md:w-2/3">
                                    <div class="flex items-center justify-center">
                                        <button class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> <a href="https://air-garage-clone.netlify.app/sales/index.html">  Project</a></button>
                                        <button class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">  <a href="https://github.com/fahad9988/naughty-wind-121"> Github</a></button>
                                        </div>
                                      <a href="https://air-garage-clone.netlify.app/sales/index.html">  <img src={AirGarage} alt="AirGarage" class="rounded-md duration-300 hover:scale-105" /></a>
                                        </div>
                                        <div class="flex flex-col justify-center shadow-xl border-black h-full sm:w-1 md:w-2/3 pl-8 pb-4">
                                            <h1 class="text-4xl font-bold mt-4 md:mt-0 ">AirGarage Clone</h1>
                                            <h1>AirGarage is an international website to get parking facilities and information inside a city. It is a group project.</h1>
                                            <br />
                                            <p class="text-2xl font-bold">Features</p><p class="font-semibold">Home page display</p>
                                            <br />
                                            <p class="text-2xl font-bold">TechStack </p>
                                            <p class="font-bold">HTML, CSS, JavScript</p>
                                            </div>
                                            </div>
                                            <div class="flex flex-col sm:flex-row max-w-screen-lg">
                                                <div class="bg-gradient-to-r from-purple-500 to-purple-800 rounded-lg text-white md:w-2/3">
                                                    <div class="flex items-center justify-center">
                                                        <button class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> <a href=""> Project </a></button>
                                                        <button class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> <a href="https://github.com/himanshudestiny/frequent-thumb-7462"> Github</a></button>
                                                        </div>
                                                       <a href=""> <img src={Lyst} alt="Lyst" class="rounded-md duration-300 hover:scale-105" /></a>
                                                        </div>
                                                        <div class="flex flex-col justify-center shadow-xl border-black h-full sm:w-1 md:w-2/3 pl-8 pb-4">
                                                            <h1 class="text-4xl font-bold mt-4 md:mt-0 ">Lyst Clone</h1>
                                                            <h1>Lyst is an e-commerce website for shopping clothes. It is an individual project.</h1>
                                                            <br />
                                                            <p class="text-2xl font-bold">Features</p>
                                                            <p class="font-semibold">Home Page display, Login Page display, Signup Page and Authentication functionalities are developed </p>
                                                            <br />
                                                            <p class="text-2xl font-bold">TechStack </p>
                                                            <p class="font-bold">REACT, Chakra UI, Chakra Icons</p>
    </div>
    </div>
    <div class="flex flex-col sm:flex-row max-w-screen-lg">
                                                <div class="bg-gradient-to-r from-purple-500 to-purple-800 rounded-lg text-white md:w-2/3">
                                                    <div class="flex items-center justify-center">
                                                        <button class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> <a href="https://numerous-governor-3295.netlify.app/"> Project </a></button>
                                                        <button class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> <a href="https://github.com/himanshudestiny/numerous-governor-3295"> Github</a></button>
                                                        </div>
                                                       <a href="https://numerous-governor-3295.netlify.app/"> <img src={nyresa} alt="Lyst" class="rounded-md duration-300 hover:scale-105" /></a>
                                                        </div>
                                                        <div class="flex flex-col justify-center shadow-xl border-black h-full sm:w-1 md:w-2/3 pl-8 pb-4">
                                                            <h1 class="text-4xl font-bold mt-4 md:mt-0 ">Mytheresa Clone</h1>
                                                            <h1>Mytheresa is an e-commerce website for shopping clothes. It is a group project under my leadership.</h1>
                                                            <br />
                                                            <p class="text-2xl font-bold">Features</p>
                                                            <p class="font-semibold">Delivery Page display, Payment Page display, Confirm Page display and form their respective functionalities developed </p>
                                                            <br />
                                                            <p class="text-2xl font-bold">TechStack </p>
                                                            <p class="font-bold">REACT, Chakra UI, Chakra Icons, Local Storage, Axios</p>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Projects;
