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
        },

        {
            image:"/assets/service/strategy.jpeg",
            title:"Digital Strategy Consulting",
            description:`Our team of experts work with organizations to develop a comprehensive digital 
            transformation strategy that aligns with their business goals and objectives help businesses 
            apply and re-innovate digital technologies to business models to produce new business capabilities.`
        },

         {
            image:"/assets/service/uiux.jpeg",
            title:"User Interface & Experience Design",
            description:`With our defined approach and step by step process, we deliver beyond what's 
            expected. Our team doesn’t limit itself to delivering a product. We craft brilliance 
            together and deliver experiences that are ever-evolving..`
        }
    ]

    const vision = [
        {
            Image:""
        }
    ]

  return (
    <div className='py-10 px-20 bg-slate-200 mt-10 mb-10'>
        <div className='text-center text-4xl text-blue-800 font-bold pb-10'>Our Services</div>
        <div className='grid grid-cols-12 gap-8 bg-slate-200'>

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

        
        

        <div className='mt-14 text-center text-3xl text-[#0000FE] font-extrabold'>
            Stages of Our Process
        </div>
        

        <div className='grid grid-cols-12 mt-10'>
            <div className='col-span-3 flex flex-col items-center  bg-white shadow-lg gap-4
                border-2 border-gray-400 rounded-lg'>
                 <img src="/assets/vision.jpeg" className='h-40 w-full rounded-t-lg'/>
                <div className='text-lg font-bold text-center text-[#00008B] px-2'>Developing a Vision</div>
                <div></div>
            </div>
        </div>

    </div>
  )
}
