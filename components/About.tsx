import React from 'react'

const About = () => {
  return (
    <section id='about' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
      <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>ABOUT</h2>
      </div>
      <div>
        <p className='mb-4'>
        I’m a developer passionate about crafting accessible, 
        pixel-perfect user interfaces that blend thoughtful design with robust engineering. 
        My favorite work lies at the intersection of design and development—creating experiences 
        that not only look great but are also optimized for performance, accessibility, and usability. 
        I enjoy turning Figma designs into clean, maintainable code and care deeply about delivering a 
        great user experience.
        </p>
        <p className='mb-4'>
        With a background in Chemistry and a Full-Stack JavaScript education from Hacktiv8 (graduated with honors),
         I’ve worked across various projects involving both frontend and backend technologies.
          I’ve built and maintained ERP systems, HR platforms, and logistics applications using 
          tools like VueJs, ReactJS, NodeJS, .NET Framework, and Nintex Workflow. I'm also experienced in team leadership, 
          collaborating with UI/UX and QA teams, and translating business needs into scalable technical solutions.
        </p>
        <p className='mb-4'>
        I’m a fast learner, highly committed, and always eager to explore something new. I thrive in both team settings and 
        independent work environments. Outside of coding, I enjoy staying active through sports to keep a balanced and healthy lifestyle.
        </p>
      </div>
    </section>
  )
}

export default About