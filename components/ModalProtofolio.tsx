'use client'
import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

const ModalSlider = ({ isOpen, images, urlApp,name, onClose }: {
  isOpen: boolean,
  images: string[],
  urlApp: string,
  name: string,
  onClose: () => void
}) => {
  if (!isOpen) return null

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl p-6 bg-slate-900 rounded-lg">
        <a href={urlApp} target='_blank'>
            <h1 className='pb-4 font-medium leading-snug text-slate-200 hover:text-slate-500'>{name}</h1>
        </a>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-2xl cursor-pointer"
        >
          &times;
        </button>
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div key={idx} className="flex justify-center items-center px-2">
              <Image src={img} alt={`Slide ${idx}`} width={800} height={450} className="rounded-md object-contain" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default ModalSlider
