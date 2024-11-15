import Image from 'next/image'
import React from 'react'
import img from '../../public/Img.png'
import fream from '../../public/photoBg.png'
import Container from '../layer/Container'
import { FcCallback } from "react-icons/fc"
import { BiLogoGmail } from "react-icons/bi"
import Link from 'next/link'
import { LuCalendarDays } from "react-icons/lu";
import { IoLocationSharp } from "react-icons/io5";

const AboutContent = () => {
  return (
    <div>
      <Container className={"pt-12 pl-[100px]"}>
        <div className='pb-24'>
          <p className='font-semibold italic text-lg text-[#141313]'>Nice to meet you!</p>
          <h2 className='text-5xl font-bold text-[#141313] pt-4'>Welcome to...</h2>
        </div>
        <div className='flex gap-x-40 items-center'>
          <div>
            <div className="group relative">
              <Image src={fream} alt="kadir" width={500} className='group-hover:-rotate-180 transition-all duration-1000 ' />
              <Image src={fream} alt="kadir" width={500} className='absolute top-0 right-0 group-hover:rotate-180 transition-all duration-1000 group-hover:scale-110' />
              <div className='w-[330px] h-[340px] bg-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-[15deg]  group-hover:-z-10'>
                <Image src={img} alt='kadir' className='w-full h-full object-contain' />
              </div>
            </div>
            <div className='text-center pt-16'>
              <h1 className='text-5xl font-bold text-[#141313] pt-4'>Abdul Kadir</h1>
              <p className='font-semibold italic text-lg text-[#141313] pt-4 pb-8'>Frontend Developer with <span className='text-blue-500'>React</span></p>
              <a href="#" className='px-10 py-4 font-semibold mt-10 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-[#ff6262]'>Download CV</a>
            </div>
          </div>
          <div>
            <div className='flex gap-x-10 border-b-2 border-[#5755559d] pb-6'>
              <div className='flex flex-col gap-10 text-start'>
                <div className='flex items-center gap-2 text-lg text-[#141313]'>
                  <FcCallback />
                  <Link href={'tel:+8801729628402'}>+88 01729628402</Link>
                </div>
                <div className='flex items-center gap-2 text-lg text-[#141313]'>
                  <BiLogoGmail className='text-blue-400' />
                  <Link href='mailto:abdulkadir112k@gmail.com'>abdulkadir112k@gmail.com</Link>
                </div>
              </div>
              <div className='flex flex-col gap-10 text-start'>
                <div className='flex items-center gap-2 text-lg text-[#141313]'>
                  <LuCalendarDays className='text-blue-400' />
                  <p>24</p>
                </div>
                <div className='flex items-center gap-2 text-lg text-[#141313]'>
                  <IoLocationSharp className='text-blue-400' />
                  <p>Dhaka ,Bangladesh</p>
                </div>
              </div>
            </div>
          <div className='flex gap-x-10 pt-10'>
          <div className='max-w-[315px]'>
            <div className='flex ictems-center gap-2'>
              <p className='text-6xl font-bold text-blue-500'>2+</p>
              <div>
                <h2 className='font-semibold text-base text-[#141313] italic'>Years</h2>
                <h1 className='font-semibold text-base text-[#141313] italic'>Experience</h1>
              </div>
            </div>
            <p className='font-semibold text-base text-[#474545]'>Hello there! My name is Abdul Kadir. I am a web designer & developer with React and Next.js, and I'm very passionate and dedicated to my work.</p>
            </div>
          <div className='max-w-[315px]'>
            <div className='flex ictems-center gap-2'>
              <p className='text-6xl font-bold text-blue-500'>22+</p>
              <div>
                <h2 className='font-semibold text-base text-[#141313] italic'>Clients</h2>
                <h1 className='font-semibold text-base text-[#141313] italic'>Worldwide</h1>
              </div>
            </div>
            <p className='font-semibold text-base text-[#474545]'>With 2+ years experience as a professional web designer and developer, I have a deep understanding of the latest web design trends and technologies. Through my work, I have acquired the skills and knowledge necessary to make your project a success.</p>
            </div>
          </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AboutContent