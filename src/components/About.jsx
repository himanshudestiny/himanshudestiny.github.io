import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-500 to-gray-300">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-20 md:mt-0" >
            <p className="text-4xl font-bold inline border-b-4 border-black">About Me</p>
        </div>
        <p className="text-xl mt-20">
        I'm a passionate and an enthusiastic individual seeking to aquire new and creative skills in the field of Technology.
         I have a keen interest in gadgets and their working. I have good coding and communication skills.
          I like to be around people and learn from them whatever I can learn. 
        </p>
        <br />
        <p className="text-xl">
        Graduated in 2019, I started preparing for defence exams as I was very much interested in the lifestyle that defence personnel
        have. Giving almost 3 years to dedicated preparation and clearing most of the exams and sitting for final stage interviews,
        I still struggled to make it to the final selection. Finally, I dcided to enance my skills and follow my interest towrads 
        gadget and technological world and started learning coding.
        </p>
      </div>
    </div>
  )
}

export default About
