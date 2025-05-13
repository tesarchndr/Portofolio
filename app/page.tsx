import About from '@/components/About'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import MouseLight from '@/components/MouseLight'
import Portofolio from '@/components/Portofolio'
import Skills from '@/components/Skills'
import Testimonial from '@/components/Testimonial'
import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const page = () => {
  return (
    <main className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0 !text-slate-400'>
      
      <MouseLight />
      <div className='lg:flex lg:justify-between lg:gap-4'>
        <Hero/>
        <div className='pt-24 lg:w-[52%] lg:py-24'>
          <About/>
          <Experience/>
          <Portofolio/>
        </div>
      </div>
      <>
        {/* 
           <Skills/> 
        <Portofolio/>
        <Testimonial/> */}
      </>
    </main>
  )
}

export default page