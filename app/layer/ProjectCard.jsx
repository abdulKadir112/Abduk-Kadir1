import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";

const ProjectCard = ({tim , link}) => {
  return (
    <div className='border border-slate-300 rounded-lg overflow-hidden'>
        <div className='w-64 h-48 bg-slate-400 cursor-pointer object-cover'>
            <Link href="https://fresh-puce.vercel.app/">
            <Image src={tim} alt="kadir" className='w-full h-full'/>
            </Link>
        </div>
        <div className='p-3 flex justify-between bg-slate-300'>
           <div>
           <h1 className='text-2xl font-semibold text-black'>Fashion React</h1>
           <p className='text-sm text-gray-500 w-48'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
           </div>
           <div className='flex flex-col items-center gap-2'>
           <IoMdHeartEmpty className='text-3xl cursor-pointer'/>
           <p>1k+</p>
           </div>
        </div>
    </div>
  )
}

export default ProjectCard