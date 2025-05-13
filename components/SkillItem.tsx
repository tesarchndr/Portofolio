import Image from 'next/image'
import React from 'react'

type skillItems = {
    title: string,
    icon: string,
    description: string,
    tech: string,
}
const SkillItem = ({title, icon, description, tech} : skillItems) => {
    const techArray = tech.split(',')
  return (
    <li className='relative flex w-full flex-col flex-1 items-center text-center 
    shadow-[0_3px_10px_rgba(0,0,0,0.2)] rounded-2xl p-10
     hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-700 group duration-[500ms] transition'>
        <div className='rounded-full p-5 bg-blue-500 absolute -top-8 group-hover:from-blue-500'>
            <Image
                src={icon}
                alt={title}
                width={28}
                height={28}
            />
        </div>
        <h3 className='bold-20 lg:bold-22 mt-6 capitalize group-hover:text-white'>{title}</h3>
        <p className='regular-16 text-gray-500 mt-4 group-hover:text-white group-hover:hidden'>{description}</p>
        <div className='flex flex-wrap gap-3 mt-6 justify-center'>
            {techArray.map((tech, index) => (
                <span
                    key={index}
                    className='rounded-full border border-blue-500 bg-white px-4 py-1 text-sm text-blue-500 font-medium transition 
                    group-hover:bg-blue-800 group-hover:border-blue-600 group-hover:text-white hidden group-hover:block'
                >
                    {tech}
                </span>
            ))}
        </div>
    </li>
  )
}

export default SkillItem