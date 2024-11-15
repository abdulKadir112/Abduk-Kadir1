import React from 'react'
import ProfileImage from './ProfileImage'
import Li from '../layer/Li'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { PiReadCvLogoBold } from 'react-icons/pi'
import { IoMdHome } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { GrServices } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md";
import { ImBlog } from "react-icons/im";
import { RiContactsBook3Line } from "react-icons/ri";
import Profile from './Profile'


const Navbar = () => {
  return (
    <div className='flex flex-col items-center gap-14 py-12 w-80 min-h-screen bg-slate-500'>
      {/* <ProfileImage/> */}
      <Profile/>
      <div className='flex flex-col gap-4'>
      <Li href={"/"} list={"home"} icon={<IoMdHome />}/>
      <Li href={"about"} list={"about"} icon={<ImProfile />}/>
      <Li href={"services"} list={"services"} icon={<GrServices />}/>
      <Li href={"works"} list={"works"} icon={<MdOutlineWorkOutline />}/>
      <Li href={"blogs"} list={"blogs"} icon={<ImBlog />}/>
      <Li href={"contact"} list={"contact"} icon={<RiContactsBook3Line />}/>
      </div>
     <div>
     <div className='fall flex gap-4 w-[200px] px-3 text-3xl text-slate-100 '>
      <FaGithub className='cursor-pointer hover:scale-90'/>
      <FaFacebookF className='cursor-pointer hover:scale-90'/>
      <FaLinkedinIn className='cursor-pointer hover:scale-90'/>
      </div>
      <div className='flex items-center gap-1 pt-4'>
        <a className='text-slate-100 font-common font-semibold text-xl uppercase px-3 hover:underline hover:underline-offset-8 ' href="../../public/abdulKadir.pdf" download={"abdulKadir.pdf"}>resume</a>
        <PiReadCvLogoBold className='text-slate-100 text-2xl' />
      </div>
     </div>
          
    </div>
  )
}

export default Navbar