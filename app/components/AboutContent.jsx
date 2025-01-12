import Image from 'next/image';
import React from 'react';
import img from '../../public/Img.png';
import fream from '../../public/photoBg.png';
import Container from '../layer/Container';
import { FcCallback } from 'react-icons/fc';
import { BiLogoGmail } from 'react-icons/bi';
import Link from 'next/link';
import { LuCalendarDays } from 'react-icons/lu';
import { IoLocationSharp } from 'react-icons/io5';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { FaArrowDown } from 'react-icons/fa';

const AboutContent = () => {
  const currentYear = new Date().getFullYear();
  const birthYear = 2000;
  const myAge = currentYear - birthYear;

  return (
    <div>
      <Container className="pt-12 pl-24 pb-5">
        <div className="pb-24">
          <p className="font-semibold italic text-lg text-gray-800">Nice to meet you!</p>
          <h2 className="text-5xl font-bold text-gray-800 pt-4">Welcome to...</h2>
        </div>
        <div className="max-w-[1600px] flex gap-x-40 items-center">
          {/* Left Section */}
          <div>
            <div className="group relative w-[350px]">
              <Image
                src={fream}
                alt="Decorative frame"
                width={500}
                className="group-hover:-rotate-180 transition-all duration-1000"
              />
              <Image
                src={fream}
                alt="Rotating frame"
                width={500}
                className="absolute top-0 right-0 group-hover:rotate-180 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="w-[230px] h-[240px] bg-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-[15deg]">
                <Image src={img} alt="Abdul Kadir portrait" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="text-center pt-16">
              <h1 className="text-5xl font-bold text-gray-800 pt-4">Abdul Kadir</h1>
              <p className="font-semibold italic text-lg text-gray-800 pt-4 pb-8">
                Frontend Developer with <span className="text-blue-500">React</span>
              </p>
              <a
                href="https://drive.google.com/file/d/1RAhCTLHVcr_AWakxPGeya0jlTbc2wfYt/view?usp=sharing"
                className="flex items-center gap-2.5 justify-center px-10 py-4 font-semibold mt-10 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Download Resume <FaArrowDown />
              </a>
            </div>
          </div>
          {/* Right Section */}
          <div className="w-[600px]">
            <div className="flex gap-x-20 border-b-2 border-gray-400 pb-6">
              <div className="flex flex-col gap-10 text-start">
                <div className="flex items-center gap-2 text-lg text-gray-800">
                  <FcCallback />
                  <Link href="tel:+8801729628402">+88 01729628402</Link>
                </div>
                <div className="flex items-center gap-2 text-lg text-gray-800">
                  <BiLogoGmail className="text-blue-400" />
                  <Link href="mailto:abdulkadir112k@gmail.com">abdulkadir112k@gmail.com</Link>
                </div>
              </div>
              <div className="flex flex-col gap-10 text-start">
                <div className="flex items-center gap-2 text-lg text-gray-800">
                  <LuCalendarDays className="text-blue-400" />
                  <p>{myAge} - years</p>
                </div>
                <div className="flex items-center gap-2 text-lg text-gray-800">
                  <IoLocationSharp className="text-blue-400" />
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
            <div className="flex gap-x-10 pt-10">
              {/* Experience Section */}
              <div className="max-w-[315px]">
                <div className="flex items-center gap-2">
                  <p className="text-6xl font-bold text-blue-500">2+</p>
                  <div>
                    <h2 className="font-semibold text-base text-gray-800 italic">Years</h2>
                    <h1 className="font-semibold text-base text-gray-800 italic">Experience</h1>
                  </div>
                </div>
                <p className="font-semibold text-base text-gray-600">
                  Hello there! My name is Abdul Kadir. I am a web designer & developer with React and Next.js, and
                  I'm very passionate and dedicated to my work.
                </p>
              </div>
              {/* Clients Section */}
              <div className="max-w-[315px]">
                <div className="flex items-center gap-2">
                  <p className="text-6xl font-bold text-blue-500">12+</p>
                  <div>
                    <h2 className="font-semibold text-base text-gray-800 italic">Clients</h2>
                    <h1 className="font-semibold text-base text-gray-800 italic">Worldwide</h1>
                  </div>
                </div>
                <p className="font-semibold text-base text-gray-600">
                  With 2+ years experience as a professional web designer and developer, I have a deep understanding of
                  the latest web design trends and technologies.
                </p>
              </div>
            </div>
            <div>
              <p className="flex gap-2 text-lg text-blue-200 mt-12 border-2 border-gray-400 p-3 bg-gray-700 shadow-lg">
                <RiDoubleQuotesL className="text-gray-400 text-4xl" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ab reiciendis quod repudiandae nesciunt
                odio eligendi delectus amet veniam.
                <RiDoubleQuotesL className="rotate-180 text-gray-400 text-4xl" />
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutContent;
