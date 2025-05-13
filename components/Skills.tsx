import { SKILLS } from '@/contants'
import React from 'react'
import SkillItem from './SkillItem'

const Skills = () => {
  return (
    <section id='about' className='max-container px-6 lg:px-28 flex gap-6 py-10 pb-32 md:gap-6 lg:py-20 flex-col'>
      {/* title */}
      <div className='text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-6'>
        Skills
      </div>
      {/* Body */}
      <ul className='mt-10 grid gap-20 md:grid-cols-2 lg:grid-cols-2 md:gap-12'>
        {
          SKILLS.map((skill) => (
            <SkillItem 
            key={skill.title}
            title={skill.title} 
            icon={skill.icon}
            description={skill.description}
            tech={skill.tech}/>
          ))
        }
      </ul>
    </section>
  )
}

export default Skills