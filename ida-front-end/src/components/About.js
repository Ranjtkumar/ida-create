import React from 'react'

export default function About() {

  const feauters = ["Easily, quickly, and reliably accessible information",
    "Increasingly automated in collection, delivery, and execution",
    "Secured transformation!"
  ]

  return (
    <div>

        <div className='text-center text-4xl font-bold text-indigo-700 pt-14'>About Us</div>

        <div className='grid grid-cols-12 px-20 pt-10'>
            <div className='col-span-6 text-lg  text-gray-700 pr-5'>
                <p className='font-medium indent-8'>
                  We making Digital transformation software using digital technologies to transform existing 
                traditional and non-digital business processes and services, or creating new ones, to meet with 
                the evolving market and customer expectations, thus completely altering the way businesses are 
                managed and operated .</p>

                <div className='text-xl text-[#009000]	font-bold pt-5 pb-3'>We providing...</div>
                <ul className='list-disc pl-5 text-black font-bold'>
                  {
                    feauters.map((each,index)=>(
                      <li className={`${index > 0 ?"pt-3":""}`}>{each}</li>
                    ))
                  }
                </ul>
            </div>
            
            <div className='col-span-6'>
                <img src="/assets/digital-transform.jpg"/>
            </div>
        </div>
    </div>
  )
}
