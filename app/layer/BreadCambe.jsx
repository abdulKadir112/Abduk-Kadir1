"use client"

import { usePathname } from 'next/navigation'
import React from 'react'

const BreadCambe = () => {

 const pathname =usePathname()

  return (
    <div>
        <h1 className='text-xl font-semibold italic text-[#141313] pb-4'>{pathname.split("/") [1]}</h1>
    </div>
  )
}

export default BreadCambe