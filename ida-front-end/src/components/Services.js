import React from 'react'

export default function Services() {

    const ourServices = [
        {
            image:"/assets/service/app-memo.png",
            title:"Application modernization",
            description:`Application modernization is the practice of updating older software for newer computing 
                    approaches, including newer languages, frameworks and infrastructure platforms.`

        },

        {
            image:"/assets/service/bis-restr.png",
            title:"Business Restructuring",
            description:`We makes significant changes to its financial or 
            operational structure, typically while under financial duress. Companies may also restructure 
            when preparing for a sale, buyout, merger, change in overall goals, or transfer of ownership.`

        },

        {
            image:"/assets/service/digi-app.png",
            title:"Digital Application",
            description:`We help organizations to develop and implement custom digital applications that are tailored to meet their specific needs and goals.
            These applications are created with the aim of performing business analysis.`
        }
    ]

  return (
    <div className='py-10 px-20 bg-slate-200 mt-10'>
        <div className='text-center text-4xl text-blue-800 font-bold pb-10'>Our Services</div>
        <div className='grid grid-cols-12 gap-8'>

            {
                ourServices?.map((each)=>(
                    <div className='col-span-4 rounded-xl shadow-lg border border-gray-400 p-5 
                        service-card cursor-pointer h-fit'>
                        <div className='flex gap-3 items-center'>
                            <img src={each.image} className='h-14 w-14 rounded-full'/>
                            <div className='text-xl font-bold'>{each.title}</div>
                        </div>
        
                        <p className='indent-6 p-2 text-base text-gray-700 font-medium'>
                           {each.description}
                        </p>
                    
                    </div>
                ))
            }
           
        </div>

    </div>
  )
}
