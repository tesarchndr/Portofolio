import Image from 'next/image';
import React from 'react'

type buttonProps = {
    type: 'button' | 'submit';
    tittle: string;
    icon?: string;
    variant: string;
}

const Button = ({type, tittle, icon, variant} : buttonProps) => {
  return (
    <button type={type} className={`flexCenter gap-2 rounded-full border ${variant}`}>
        <label htmlFor="" className='font-[500] whitespace-nowrap cursor-pointer'>
            {tittle}
        </label>
        {icon && <Image src={icon} width={16} height={16} alt='icon'/>}
    </button>
)
}

export default Button