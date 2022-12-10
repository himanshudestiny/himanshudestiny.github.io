import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-gray-300 to-gray-500 ">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-black">Contact</p>
            <p className="py-6">You can get in touch with me by submitting this from</p>
        </div>
        <div className="flex justify-center items-center text-black">
            <form action="https://getform.io/f/3d2aada3-de95-4499-9968-15cd1b739167" method="POST" className="flex flex-col w-full md:w-1/2">
                <input type="text" name="name" placeholder='Enter your name' className="p-2  border-2 rounded-md focus:outline-none" />
                <input type="text" name="name" placeholder='Enter your email' className="my-4 p-2  border-2 rounded-md focus:outline-none" />
                <textarea name="message" placeholder='Enter your message here' id="" rows="10" className="p-2 border-2 rounded-md focus:outline-none"></textarea>
                <button className="bg-gradient-to-b from-purple-500 to-purple-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Contact Me</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
