import React from 'react'
import kadir from '../../public/kadir 1.png'
import Image from 'next/image'
const ProfileImage = () => {
    return (
        <div className='relative w-48 h-48 border-4 border-[#f4cd81] rounded-full'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 border-4 border-blue-400 rounded-full animated-border'>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-t from-blue-400 hover:from-[#FAE3B6] rounded-full overflow-hidden'>
                    <Image className='w-full h-full object-cover' src={kadir} alt="kadir" />
                </div>
            </div>
            <div className='flex gap-2 absolute -bottom-9 left-3  '>
                <div className=' flex justify-center items-center w-6 h-6 rounded-full bg-green-600'>
                    <div className='w-3 h-3 rounded-full bg-red-700 flex '></div>
                </div>
                <p className='font-common font-medium text-sm text-slate-100'>Bangladesh</p>
            </div>
        </div>
    )
}

export default ProfileImage