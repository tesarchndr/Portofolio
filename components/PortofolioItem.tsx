import Image from 'next/image';
import React from 'react'
type portofolioType = {
    title:string;
    imgUrl: string;
    description: string
}

const PortofolioItem = ({title, imgUrl, description} : portofolioType) => {
  return (
    <li>
        <div className='relative flex w-full flex-1 flex-col rounded-2xl border overflow-hidden group'>
            <div>
                <Image
                    src={imgUrl}
                    width={444}
                    height={444}
                    alt='map'
                />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    </li>
  )
}

export default PortofolioItem