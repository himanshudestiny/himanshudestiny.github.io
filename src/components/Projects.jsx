import React from 'react'
import OLX from "../assets/OLX.png";
import AirGarage from "../assets/AirGarage.png";
import Lyst from "../assets/Lyst.png";
import nyresa from "../assets/nyresa.png";






const Projects = () => {
    const newtab1 = () => {
        window.open("https://eloquent-kelpie-90cfa5.netlify.app/");
      };
      const newtab2 = () => {
        window.open("https://github.com/himanshudestiny/frantic-week-8502");
      };
      const newtab3 = () => {
        window.open("https://air-garage-clone.netlify.app");
      };
      const newtab4 = () => {
        window.open("https://github.com/fahad9988/naughty-wind-121");
      };
      const newtab5 = () => {
        window.open("https://splendorous-pegasus-bb5e96.netlify.app/");
      };
      const newtab6 = () => {
        window.open("https://github.com/himanshudestiny/frequent-thumb-7462");
      };
      const newtab7 = () => {
        window.open("https://numerous-governor-3295.netlify.app/");
      };
      const newtab8 = () => {
        window.open("https://github.com/himanshudestiny/numerous-governor-3295");
      };
      const newtab9 = () => {
        window.open("https://huddle-4jy50vkbf-himanshudestiny.vercel.app/");
      };
      const newtab10 = () => {
        window.open("https://github.com/masai-course/himanshu_fw20_1081/tree/master/unit-6/project");
      };
      const newtab11 = () => {
        window.open("https://frontend-ankur9900.vercel.app/");
      };
      const newtab12 = () => {
        window.open("https://github.com/Santoshdandin/Digi-Mart-clone");
      };

  return (
    <div name="projects" class="bg-gradient-to-b from-gray-300 to-gray-500 w-full md: h-full">
        <div class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
            <div class="pb-8 mt-20 md:mt-20">
                <p class="text-4xl font-bold inline border-b-4 border-b-black ">Projects</p>
                <p class="py-6">These are some beautiful projects that I made</p>
                </div>
                <div class="grid sm:grid-cols-1 md:grid-cols-1 md:w-3/3 gap-8 px-12 sm:px-0">
                    <div class="flex flex-col sm:flex-row max-w-screen-lg"><div class="bg-gradient-to-r from-purple-500 to-purple-800 rounded-lg text-white md:w-2/3">
                        <div class="flex items-center justify-center"><button onClick={() => newtab1()} class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">  Project    </button> 
                        <button onClick={() => newtab2()} class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">  Github  </button>
                        </div>
                        <img  onClick={() => newtab2()} src={OLX} alt="olx" class="rounded-md duration-300 hover:scale-105"   />
                            </div>
                            <div class="flex flex-col justify-center shadow-xl border-black h-full sm:w-1 md:w-2/3 pl-8 pb-4">
                                <h1 class="text-4xl font-bold mt-4 md:mt-0 ">OLX Clone</h1>
                                <h1>OLX is an e-commerce website to buy and sell old and used products. It is an individual project</h1>
                                <br />
                                <p class="text-2xl font-bold">Features</p>
                                <p >Products page display, Cars page display, Sort and Filter functionalities are developed</p>
                                <br />
                                <p class="text-2xl font-bold">TechStack </p>
                                <p>HTML <br /> CSS <br /> JavaScript</p>
                                </div>
                                </div>
                                <div class="flex flex-col sm:flex-row max-w-screen-lg"><div class="bg-gradient-to-r from-purple-500 to-purple-800 rounded-lg text-white md:w-2/3">
                                    <div class="flex items-center justify-center">
                                        <button  onClick={() => newtab3()} class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">   Project</button>
                                        <button   onClick={() => newtab4()} class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">  Github</button>
                                        </div>
                                        <img   onClick={() => newtab3()} src={AirGarage} alt="AirGarage" class="rounded-md duration-300 hover:scale-105" />
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
                                                        <button  onClick={() => newtab5()}  class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">  Project </button>
                                                        <button  onClick={() => newtab6()} class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">  Github</button>
                                                        </div>
                                                        <img  onClick={() => newtab5()} src={Lyst} alt="Lyst" class="rounded-md duration-300 hover:scale-105" />
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
                                                        <button  onClick={() => newtab7()} class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">  Project </button>
                                                        <button  onClick={() => newtab8()} class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">  Github</button>
                                                        </div>
                                                        <img  onClick={() => newtab7()} src={nyresa} alt="Lyst" class="rounded-md duration-300 hover:scale-105" />
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
    <div class="flex flex-col sm:flex-row max-w-screen-lg">
                                                <div class="bg-gradient-to-r from-purple-500 to-purple-800 rounded-lg text-white md:w-2/3">
                                                    <div class="flex items-center justify-center">
                                                        <button  onClick={() => newtab9()} class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">  Project </button>
                                                        <button  onClick={() => newtab10()} class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">  Github</button>
                                                        </div>
                                                        <img  onClick={() => newtab9()} src='https://i.postimg.cc/PrG52tqS/Screenshot-80.png' alt="Miniproject" class="rounded-md duration-300 hover:scale-105" />
                                                        </div>
                                                        <div class="flex flex-col justify-center shadow-xl border-black h-full sm:w-1 md:w-2/3 pl-8 pb-4">
                                                            <h1 class="text-4xl font-bold mt-4 md:mt-0 ">HuddleCam</h1>
                                                            <h1>This is a full stack mini project consisting of frontend as well as backend</h1>
                                                            <br />
                                                            <p class="text-2xl font-bold">Features</p>
                                                            <p class="font-semibold">Sign up anfd Login functionality, CRUD operation for todos, Home Page, About Page, Todos Page</p>
                                                            <br />
                                                            <p class="text-2xl font-bold">TechStack </p>
                                                            <p class="font-bold">REACT, Chakra UI, Chakra Icons, Local Storage, ExpressJS, Mongo DB Atlas, Mongoose</p>
    </div>
    </div>
    <div class="flex flex-col sm:flex-row max-w-screen-lg">
                                                <div class="bg-gradient-to-r from-purple-500 to-purple-800 rounded-lg text-white md:w-2/3">
                                                    <div class="flex items-center justify-center">
                                                        <button  onClick={() => newtab11()} class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">  Project </button>
                                                        <button  onClick={() => newtab12()} class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">  Github</button>
                                                        </div>
                                                        <img  onClick={() => newtab11()} src='https://i.postimg.cc/kg9wZRNV/Screenshot-74.png' alt="Reliance" class="rounded-md duration-300 hover:scale-105" />
                                                        </div>
                                                        <div class="flex flex-col justify-center shadow-xl border-black h-full sm:w-1 md:w-2/3 pl-8 pb-4">
                                                            <h1 class="text-4xl font-bold mt-4 md:mt-0 ">DigiMart</h1>
                                                            <h1>DigiMart is basically an e-commerec website where users can buy products such as mobile phones, laptops, telivisions and all other tech products.</h1>
                                                            <br />
                                                            <p class="text-2xl font-bold">Features</p>
                                                            <p class="font-semibold">Products Page, Single Product Page, Sorting, Pagination, Add to Cart functionalities applicable </p>
                                                            <br />
                                                            <p class="text-2xl font-bold">TechStack </p>
                                                            <p class="font-bold">REACT, Chakra UI, Chakra Icons, React Icons, Local Storage </p>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Projects;
