"use client"
import Image from 'next/image'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Button from './Button'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";


const Hero = () => {
  return (
    // <section className='max-container px-6 lg:px-28 flex flex-col flexCenter gap-20 py-10 pb-32
    // md:gap-28 lg:py-20 lg:flex-row'>
    //   <span className="max-container absolute top-64 left-44 h-[144px] w-[777px] bg-blue-400 rounded-full
    //   shadow-lg blur-[7rem] -z-10"></span>
    //   {/* LEFT */}
    //   <div className="relative z-20 flex flex-1 flex-col  pt-16">
    //     <h4 className='bold-20'>Hello,</h4>
    //     <h1 className='bold-48 lg:bold-64 relative '>I'm Tesar Chandra</h1>
    //     <h2 className='bold-28 lg:bold-32 text-[1.8rem] capitalize '>
    //       A {''}
    //       <span>
    //         <Typewriter
    //           words={['Full Stack Developer', 'Front End Developer', 'Back End Developer', 'Programmer']}
    //           loop={5}
    //           cursor
    //           cursorStyle='_'
    //           typeSpeed={70}
    //           deleteSpeed={50}
    //           delaySpeed={1000}
    //         />
    //       </span>
    //     </h2>
    //     <p className='regular-16 max-w-[555px] my-4'>Passionate and driven aspiring software developer, eager to apply my strong programming skills, learn from experienced professionals, and contribute to innovative projects while growing as a versatile developer.</p>
    //     {/* <div className='my-5 flex flex-wrap gap-5'>
    //       <div className='flex items-center gap-2'>
    //         {
    //           Array(5).fill(1).map((_, index) => (
    //             <Image
    //               src='/star.svg'
    //               width={24}
    //               height={24}
    //               alt={'star'}
    //               key={index}
    //             />
    //           ))
    //         }
    //       </div>
    //     </div>
    //     <p></p> */}
    //     <div className=' flexStart gap-1 pt-6'>
    //       <a href="/Resume_Tesar Chandra Esnawan_Full_Stack_Developer.pdf"
    //        download={'/Resume_Tesar Chandra Esnawan_Full_Stack_Developer.pdf'}
    //        className='btn_dark_rounded flexCenter gap-2 rounded-full border' target='_blank'>Download CV</a>
    //       {/* <Button type='button' tittle={'Download CV'} icon='/download.svg' variant='btn_dark_rounded'/> */}
    //       <Button type='button' tittle={'Contact Me'} icon='/arrow-right.svg' variant='btn_white_rounded'/>

    //     </div>
    //   </div>
    //   <div className=''>
    //     <Image src={'/bg.png'} width={488} height={488} alt='bg' className='w-auto'/>
    //   </div>
    // </section>
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24'>
      <div>
        {/* <h4 className='bold-20'>Hello,</h4> */}
        <h1 className='bold-48 lg:bold-64 relative text-slate-300'>I'm Tesar Chandra</h1>
        <h2 className='bold-28 lg:bold-32 text-[1.8rem] capitalize text-slate-300'>
        A {''}
          <span>
            <Typewriter
              words={['Full Stack Developer', 'Front End Developer', 'Back End Developer', 'Programmer']}
              loop={5}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className='mt-4 max-w-xs leading-normal'>I build accessible, pixel-perfect digital experiences for the web.</p>
        <p><a href="/Resume_Tesar Chandra Esnawan_Full_Stack_Developer.pdf"
           download={'/Resume_Tesar Chandra Esnawan_Full_Stack_Developer.pdf'}
          className='mt-6 text-slate-300 hover:text-slate-200 flex items-center' target='_blank'><FaFilePdf size={22} className='mr-2'/>Download CV</a>
        </p>
        <nav className='nav hidden lg:block' aria-label="In-page jump links">
          <ul className='mt-16 w-max'>
            <li>
              <a className='group flex items-center py-3' href="#about">
                <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>ABOUT</span>
              </a>
            </li>
            <li>
              <a className='group flex items-center py-3 active' href="#experience">
                <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>EXPERIENCE</span>
              </a>
            </li>
            <li>
              <a className='group flex items-center py-3' href="#project">
                <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>PROJECT</span>
              </a>
            </li>
          </ul>

        </nav>
      </div>
      <ul className='ml-1 mt-8 flex items-center'>
        <li className='mr-5 shrink-0 text-xs'>
          <a href="https://github.com/tesarchndr" className='block hover:text-slate-200'><FaGithub size={25}/></a>
        </li>
        <li className='mr-5 shrink-0 text-xs'>
          <a href="https://www.linkedin.com/in/tesar-chandra-esnawan/" className='block hover:text-slate-200'><FaLinkedin size={25}/></a>
        </li>
        <li className='mr-5 shrink-0 text-xs'>
          <a href="" className='block hover:text-slate-200'><FaInstagram size={25}/></a>
        </li>
      </ul>
    </header>
  )
}

export default Hero