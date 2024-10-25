"use client"
import { Carousel } from 'flowbite-react'
import React from 'react'

const PageSlider = () => {
  return (
    <div>
         <Carousel>
              <img src="antony.jpg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
              </Carousel>
    </div>
  )
}

export default PageSlider