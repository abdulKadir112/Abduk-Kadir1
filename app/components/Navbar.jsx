"use client";
import React, { useState } from "react";
import Profile from "./profile.jsx";
import Li from "../layer/Li";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { PiReadCvLogoBold } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { GrServices } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md";
import { ImBlog } from "react-icons/im";
import { RiContactsBook3Line } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import Link from "next/link.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="hidden absolute top-3 left-4 text-white text-3xl cursor-pointer lg:hidden">
        {isOpen ? (
          <IoClose
            onClick={() => setIsOpen(false)}
            className="text-red-500 absolute top-0 left-0 text-3xl cursor-pointer"
          />
        ) : (
          <TiThMenu
            onClick={() => setIsOpen(true)}
            className="text-red-500 absolute top-0 left-0 text-3xl cursor-pointer"
          />
        )}
      </div>
    <nav className="hidden md:block top-0 left-0 z-50 w-full h-screen md:bg-slate-500 lg:flex lg:flex-col lg:items-center lg:py-12 md:static">
      {/* Menu Toggle Button for Mobile */}
      

      {/* Main Menu */}
      <div
        className={`${
          isOpen ? "" : ""
        } lg:flex flex-col items-center w-full h-full pt-12 lg:pt-0`}
      >
        {/* Profile Section */}
        <Profile className={`hidden md:block`}/>

        {/* Navigation Links */}
        <div className="md:flex flex-col gap-4 mt-8">
          <Li href={"/"} list={"home"} icon={<IoMdHome />} />
          <Li href={"about"} list={"about"} icon={<ImProfile />} />
          <Li href={"services"} list={"services"} icon={<GrServices />} />
          <Li href={"works"} list={"works"} icon={<MdOutlineWorkOutline />} />
          <Li href={"blogs"} list={"blogs"} icon={<ImBlog />} />
          <Li href={"contact"} list={"contact"} icon={<RiContactsBook3Line />} />
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center mt-8">
          <div className="flex gap-4 text-3xl text-slate-100">
            <Link href={"https://github.com/abdulKadir112"}><FaGithub className="cursor-pointer hover:scale-90" /></Link>
            <Link href={"https://web.facebook.com/mdkadir1118/"}><FaFacebookF className="cursor-pointer hover:scale-90" /></Link>
            <Link href={"https://www.linkedin.com/in/md-abdul-kadir-9079642b6/"}><FaLinkedinIn className="cursor-pointer hover:scale-90" /></Link>
          </div>
          <div className="flex items-center gap-1 pt-4">
            <a
              className="text-slate-100 font-semibold text-xl uppercase px-3 hover:underline hover:underline-offset-8"
              href="https://drive.google.com/file/d/1RAhCTLHVcr_AWakxPGeya0jlTbc2wfYt/view?usp=sharing"
            >
              Resume
            </a>
            <PiReadCvLogoBold className="text-slate-100 text-2xl" />
          </div>
        </div>
      </div>
      {/* Bottom Icon-Only Menu for Mobile */}
    </nav>
    <div
        className={`${
          isOpen ? "hidden" : "flex"
        }  md:hidden justify-center gap-x-10 items-center w-full text-2xl bg-slate-400 py-4 fixed top-0 z-[1100] `}
      >
        <Link href="/" ><IoMdHome className="text-white" /></Link>
        <Link href="about" ><ImProfile className="text-white" /></Link>
        <Link href="services" ><GrServices className="text-white" /></Link>
        <Link href="works" ><MdOutlineWorkOutline className="text-white" /></Link>
        <Link href="blogs" ><ImBlog className="text-white" /></Link>
        <Link href="contact" ><RiContactsBook3Line className="text-white" /></Link>
        
      </div>
    </>
  );
};

export default Navbar;
