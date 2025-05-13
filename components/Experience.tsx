import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


const Experience = () => {
  return (
    <section id='experience' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
        <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
            <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>EXPERIENCE</h2>
        </div>
        <div>
            <ol className='group/list'>
                <li className='mb-12'>
                    <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                        <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                        <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>Aug 2023 - Present</header>
                        <div className='z-10 sm:col-span-6'>
                            <h3 className='font-medium leading-snug text-slate-200'>
                                <div>
                                    <a href="https://www.elistec.com/" target='_blank' className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'>
                                        <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                                        <span>Full Stack Developer · </span>
                                        <span className='inline-block'>Elistec Informatika Utama</span>
                                        {/* <GoArrowUpRight size={20} className='ml-2 '/> */}
                                    </a>
                                </div>
                            </h3>
                            <p className='mt-2 text-sm leading-normal'>
                            Developed and designed new ERP projects using .NET Framework, C#, NodeJS, ReactJS, AngularJS,
                             NextJs, and Nintex Workflow Application, while demonstrating adaptability to various programming 
                             languages and frameworks, leading a team of developers through task management and code reviews, 
                             maintaining and optimizing ERP systems including database and workflow automation, engaging with 
                             clients to align technical solutions with business needs, collaborating on UI/UX design via Figma, 
                             and producing thorough documentation with ongoing technical support.
                            </p>
                            <ul className='mt-2 flex flex-wrap'>
                                <li className='mr-1.5 mt-2'>
                                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                        Next Js
                                    </div>
                                </li>
                                <li className='mr-1.5 mt-2'>
                                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                        .Net
                                    </div>
                                </li>
                                <li className='mr-1.5 mt-2'>
                                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                        React Js
                                    </div>
                                </li>
                                <li className='mr-1.5 mt-2'>
                                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                        Angular Js
                                    </div>
                                </li>
                                <li className='mr-1.5 mt-2'>
                                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                        Nintex Workflow Automation
                                    </div>
                                </li>
                                <li className='mr-1.5 mt-2'>
                                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                        Tailwind CSS
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ol>
            <ol className='group/list'>
                <li className='mb-12'>
                    <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                        <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                        <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>Mar 2023 - Aug 2023</header>
                        <div className='z-10 sm:col-span-6'>
                            <h3 className='font-medium leading-snug text-slate-200'>
                                <div>
                                    <a href="https://andalin.com/" target='_blank' className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'>
                                        <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                                        <span>Front End Developer · </span>
                                        <span className='inline-block'>Andalin</span>
                                    </a>
                                </div>
                            </h3>
                            <p className='mt-2 text-sm leading-normal'>
                                Translated designs from Figma into functional code using HTML, CSS, and JavaScript, 
                                performed API integration and data mapping to the user interface, worked with JavaScript
                                 frameworks such as VueJs and NuxtJs, collaborated with UI/UX teams, QA, and engineers 
                                 throughout the development lifecycle, developed a client-side chat email application 
                                 using Socket.IO, and served as the Front-end Developer responsible for developing and 
                                 maintaining the Andalin Shipping application with VueJs and the Syncargo App with NuxtJs.
                            </p>
                            <ul className='mt-2 flex flex-wrap'>
                                <li className='mr-1.5 mt-2'>
                                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                        Vue Js
                                    </div>
                                </li>
                                <li className='mr-1.5 mt-2'>
                                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                        Nuxt Js
                                    </div>
                                </li>
                                <li className='mr-1.5 mt-2'>
                                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                        Tailwind CSS
                                    </div>
                                </li>
                                <li className='mr-1.5 mt-2'>
                                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                        Bootstrap
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ol>
        </div>
    </section>
  )
}

export default Experience