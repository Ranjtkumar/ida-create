import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';


export default function Services() {

    const [FlipIndex, setFlipIndex] = useState(-1)

    const ourServices = [
        {
            image: "/assets/service/app-memo.png",
            title: "Application modernization",
            description: `Application modernization is the practice of updating older software for newer computing 
                    approaches, including newer languages, frameworks and infrastructure platforms.`

        },

        {
            image: "/assets/service/bis-restr.png",
            title: "Business Restructuring",
            description: `We makes significant changes to its financial or 
            operational structure, typically while under financial duress. Companies may also restructure 
            when preparing for a sale, buyout, merger, change in overall goals, or transfer of ownership.`

        },

        {
            image: "/assets/service/digi-app.png",
            title: "Digital Application",
            description: `We help organizations to develop and implement custom digital applications that are tailored to meet their specific needs and goals.
            These applications are created with the aim of performing business analysis.`
        },

        {
            image: "/assets/service/strategy.jpeg",
            title: "Digital Strategy Consulting",
            description: `Our team of experts work with organizations to develop a comprehensive digital 
            transformation strategy that aligns with their business goals and objectives help businesses 
            apply and re-innovate digital technologies to business models to produce new business capabilities.`
        },

        {
            image: "/assets/service/uiux.jpeg",
            title: "User Interface & Experience Design",
            description: `With our defined approach and step by step process, we deliver beyond what's 
            expected. Our team doesn’t limit itself to delivering a product. We craft brilliance 
            together and deliver experiences that are ever-evolving..`
        }
    ]

    const stages = [
        {
            image: "/assets/vision.jpeg",
            title: "Developing a Vision",
            descp: `team members can buy in and contribute ideas to the vision development process.
                    Identify areas of the business that would benefit most and prioritize them.`
        },
        {
            image: "/assets/build-fnd.jpg",
            title: "Building Foundations",
            descp: `Once the vision is in place, it's time to build the foundations. Create a team that will 
            lead the digital transformation initiatives and have them focus on it.`
        },
        {
            image: "/assets/digi-trans.jpg",
            title: "Digitalizing Operations",
            descp: `With the correct vision and the foundations set, it's time to commit and transform 
                business operations and processes.This stage aims to digitalization and integrate it fully into the business.`
        },
        {
            image: "/assets/val-props.jpeg",
            title: "Value Proposition",
            descp: `Initiate the final stage when the digital transformation has occurred, and the outcomes 
                can be measured.Improving customer experiences and have them make the necessary strategy and content updates`
        }
    ]

    return (
        <div className='py-10 px-20 bg-slate-200 mt-10 mb-10'>
            <div className='text-center text-4xl text-blue-800 font-bold pb-10'>Our Services</div>
            <div className='grid grid-cols-12 gap-8 bg-slate-200'>

                {
                    ourServices?.map((each) => (
                        <div className='col-span-4 rounded-xl shadow-lg border border-gray-400 p-5 
                        service-card cursor-pointer h-fit'>
                            <div className='flex gap-3 items-center'>
                                <img src={each.image} className='h-14 w-14 rounded-full' />
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


            <div className='grid grid-cols-12 mt-10 gap-7'>

                {

                    stages.map((each,index) => (
                        <div className='col-span-3 flex flex-col items-center  bg-white shadow-lg gap-4
                            border-2 border-gray-400 rounded-lg h-52' onMouseOver={() => setFlipIndex(index)}
                            onMouseOut={() => setFlipIndex(-1)} >

                            <ReactCardFlip isFlipped={FlipIndex === index} flipDirection="horizantal">
                                <div>
                                    <img src={each.image} className='h-40 w-full rounded-t-lg' />
                                    <div className='text-lg font-bold text-center text-[#00008B] px-2 pt-2'>
                                        {each.title}
                                    </div>
                                </div>

                                <div className='pt-10'>
                                    <div className='text-sm font-medium text-center text-gray-600 px-2 '>
                                        <p> {each.descp}</p>
                                    </div>
                                </div>
                            </ReactCardFlip>

                        </div>
                    ))

                }
            </div>

        </div>
    )
}
