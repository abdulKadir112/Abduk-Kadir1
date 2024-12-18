import React from 'react';
import kadir from '../../public/kadir 1.png';
import Image from 'next/image';
import { FaReact, FaBootstrap, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const skills = [
  { icon: <FaCss3Alt />, position: "left-[45px] -top-[4px]" },
  { icon: <FaBootstrap />, position: "right-[45px] -top-[4px]" },
  { icon: <FaHtml5 />, position: "-left-4 top-20" },
  { icon: <SiTailwindcss />, position: "-right-4 top-20" },
  { icon: <SiNextdotjs />, position: "bottom-8 -left-0" },
  { icon: <IoLogoJavascript />, position: "bottom-8 -right-0" },
  { icon: <FaReact />, position: "right-[40%] -bottom-4" },
];

const SkillButton = ({ icon, position }) => (
  <button
    className={`flex justify-center items-center text-3xl text-blue-500 profile_item ${position} absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500`}
  >
    <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
      {icon}
    </span>
  </button>
);

const Profile = ({className}) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="profileCard_container relative p-10 border-2 border-dashed border-transparent rounded-full border-spacing-4 hover:border-gray-400/50">
        <button className="profile_item w-[150px] h-[150px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
          <div className="w-full bg-blue-400 h-full flex items-center justify-center rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500 overflow-hidden">
            <span className="w-full h-full inline-block object-cover">
              <Image className="w-full h-full object-cover" src={kadir} alt="kadir" />
            </span>
          </div>
        </button>
        <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
          {skills.map((skill, index) => (
            <SkillButton key={index} icon={skill.icon} position={skill.position} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
