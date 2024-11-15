import React from 'react';
import kadir from '../../public/kadir 1.png'
import Image from 'next/image';
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";


const Card = () => {
  return (
    <div className="relative group">
      <div className="profileCard_container relative p-10 border-2 border-dashed border-transparent rounded-full border-spacing-4 hover:border-gray-400/50">
      <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full  hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
          <div className="w-full bg-blue-400 h-full flex items-center justify-center rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500 overflow-hidden">
            <span className="w-full h-full inline-block object-cover">
              <Image className='w-full h-full object-cover' src={kadir} alt="kadir" />
            </span>
          </div>
        </button>
        <div className='opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 '>
        <button className="flex justify-center items-center text-3xl text-blue-500 profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
          <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
          <FaCss3Alt />
          </span>
        </button>
        <button className="flex justify-center items-center text-3xl text-blue-500 profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
          <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
          <FaBootstrap />
          </span>
        </button>
        <button className="flex justify-center items-center text-3xl text-blue-500 profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
          <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
          <FaHtml5 />
          </span>
        </button>
        <button className="flex justify-center items-center text-3xl text-blue-500 profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
          <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
          <SiTailwindcss />
          </span>
        </button>
        <button className="flex justify-center items-center text-3xl text-blue-500 profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
          <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
          <SiNextdotjs />
          </span>
        </button>
        <button className="flex justify-center items-center text-3xl text-blue-500 profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
          <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
          <IoLogoJavascript />
          </span>
        </button>
        <button className="flex justify-center items-center text-3xl text-blue-500 profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
          <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
           <FaReact />
          </span>
        </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
