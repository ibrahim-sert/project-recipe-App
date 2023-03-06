import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div className='about bg-[#3C464F] h-[100vh]'>
      <Navbar/>
      <div>
        <div className='flex justify-center flex-col items-center mt-[3rem]'>
          <iframe src="https://gifer.com/embed/7veW" width="480" height="259.000" > </iframe>
          <div className='text-center w-[25rem]'>
            <p className='tex
            t-2xl text-gray-400 mt-5 font-semibold'>My name is İbrahim, 32 years old React developer from Turkey.</p>
            <p className='text-gray-400 text-xl mt-4 leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur repellat fuga possimus obcaecati dolor esse vero quas, nam natus enim repudiandae totam unde nesciunt laboriosam iusto suscipit itaque quis autem!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About