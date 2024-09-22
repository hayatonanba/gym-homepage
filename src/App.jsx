import React from 'react'

export default function App() {
  return (
    <div className='relative'>
      <img className='w-full' src="/image/mainimage.jpg"/>
      <p className='text-white text-8xl absolute top-32 right-52'>
        What <br />
        kind of <br /> 
        <span className='text-red-600'>Training</span> <br />
        do you <br />
        want?
      </p>
    </div>
  )
};
