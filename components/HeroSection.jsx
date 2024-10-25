import React from 'react'

const HeroSection = () => {
  return (
    <div>
         <div className='grid grid-cols-1'>
         <div className=''>
            <img src="singer.jpg"   alt="singer" className='h-96 w-full object-fill' />
             <p className='md:text-3xl text-1xl text-white font-bold p-4 ' style={{marginTop:"-250px"}}>
                Get real time updates on songs and news <br/>about jafe jaz ....
              </p>   
         </div>
      </div>
    </div>
   
  )
}

export default HeroSection