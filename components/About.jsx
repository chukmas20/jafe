"use client";
import { Carousel } from "flowbite-react";


const About = () => {
  return (
    <div style={{marginTop:"200px"}} id="about">
             <p className='md:text-3xl font-bold  text-center'>About</p>
             <div className='grid grid-cols-1 '>
                <div className='p-4'>
                    <h3>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Perferendis, recusandae nihil illum labore repudiandae corporis nam
                        aut animi iure est possimus nostrum aliquam exercitationem dolores,
                         dolorem soluta harum perspiciatis quam.
                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Perferendis, recusandae nihil illum labore repudiandae corporis nam
                        aut animi iure est possimus nostrum aliquam exercitationem dolores,
                         dolorem soluta harum perspiciatis quam.
                    </h3>
                </div>  
                <div className="h-96 p-3 rounded-lg">
                <Carousel>
              <img src="antony.jpg" className="object-cover" alt="..." />
                    <img src="antony2.jpg" alt="..." />
                    <img src="antony3.jpg" alt="..." />
                    <img src="antony4.jpg" alt="..." />
                    <img src="antony5.jpg" alt="..." />
              </Carousel>
                </div>  
            </div>      
        </div>
  )
}

export default About