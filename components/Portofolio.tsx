"use client"
import { PROJECTS } from '@/contants'
import React, { useState } from 'react'
import PortofolioItem from './PortofolioItem'
import ModalSlider from './ModalProtofolio'

const Portofolio = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImages, setModalImages] = useState<string[]>([])
  const [urlApp, setUrlApp] = useState<string>('')
  const [name, setName] = useState<string>('')
  return (
    <>
    <section id='project' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
        <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
            <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>EXPERIENCE</h2>
        </div>
        <div>
          {PROJECTS.map((item, idx) => (
            <ol className='group/list' key={idx}>
                <li className='mb-12'>
                    <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                        <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                          <img src={item.Url}
                          alt="" width={200} height={80} className='aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 '/>
                        <div className='z-10 sm:order-2 sm:col-span-6'>
                            <h3 className='font-medium leading-snug text-slate-200'>
                                <div>
                                    <div 
                                      onClick={() => {
                                        setModalImages(item.UrlImage || [])
                                        setModalOpen(true)
                                        setUrlApp(item.UrlApp)
                                        setName(item.Name)
                                      }} className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'>
                                        <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                                        <span>{item.Name}</span>
                                    </div>
                                </div>
                            </h3>
                            <p className='mt-2 text-sm leading-normal'>
                              {item.Desc}
                            </p>
                            <ul className='mt-2 flex flex-wrap'>
                              {item.Tech.length > 0 && item.Tech.map((tech, idx) => (
                                <li className='mr-1.5 mt-2'>
                                  <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                      {tech}
                                  </div>
                                </li>
                              ))}
                            </ul>
                        </div>
                    </div>
                </li>
            </ol>
          ))}
        </div>
    </section>
    <ModalSlider
      isOpen={modalOpen}
      images={modalImages}
      urlApp={urlApp}
      name={name}
      onClose={() => setModalOpen(false)}
    />
  </>
  
  )
}

export default Portofolio