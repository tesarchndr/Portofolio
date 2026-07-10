'use client'

import { useEffect } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import { IoClose } from 'react-icons/io5'

type ModalSliderProps = {
  isOpen: boolean,
  images: string[],
  urlApp: string,
  name: string,
  onClose: () => void
}

const ModalSlider = ({ isOpen, images, urlApp, name, onClose }: ModalSliderProps) => {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          centerMode: false,
          centerPadding: '0px'
        }
      }
    ]
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-4xl rounded-lg bg-slate-900 p-4 shadow-2xl sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="portfolio-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <a href={urlApp} target="_blank" rel="noopener noreferrer">
          <h1
            id="portfolio-modal-title"
            className="pb-4 pr-10 font-medium leading-snug text-slate-200 transition-colors hover:text-slate-400"
          >
            {name}
          </h1>
        </a>
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 flex size-9 cursor-pointer items-center justify-center text-slate-400 transition-colors hover:text-white sm:right-4 sm:top-4"
          aria-label="Tutup modal"
        >
          <IoClose size={26} aria-hidden="true" />
        </button>
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div key={img} className="px-1 sm:px-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-md">
                <Image
                  src={img}
                  alt={`${name} - gambar ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 896px"
                  className="object-contain"
                  priority={idx === 0}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default ModalSlider
