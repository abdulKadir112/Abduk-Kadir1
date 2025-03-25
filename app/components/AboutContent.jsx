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
      <Container className="pt-12 px-5 md:px-24 pb-5">
        <div className="pb-12 text-center md:text-left">
          <p className="font-semibold italic text-lg text-gray-800">Nice to meet you!</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 pt-4">Welcome to...</h2>
        </div>

        {/* Main Content Container */}
        <div className="max-w-[1600px] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="flex flex-col items-center">
            <div className="group relative w-[280px] md:w-[350px]">
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
              <div className="w-[180px] h-[200px] md:w-[230px] md:h-[240px] bg-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-[15deg]">
                <Image src={img} alt="Abdul Kadir portrait" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="text-center pt-8 md:pt-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 pt-4">Abdul Kadir</h1>
              <p className="font-semibold italic text-lg text-gray-800 pt-4 pb-6">
                Frontend Developer with <span className="text-blue-500">React</span>
              </p>
              <a
                href="https://drive.google.com/file/d/1D6QoFYyUMS-e1_9wa4D6h1VfHpv4VCtr/view?usp=sharing"
                className="flex items-center gap-2.5 justify-center px-6 md:px-10 py-3 md:py-4 font-semibold mt-6 md:mt-10 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Download Resume <FaArrowDown />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full">
            <div className="flex flex-col md:flex-row gap-10 md:gap-x-20 border-b-2 border-gray-400 pb-6">
              <div className="flex flex-col gap-6 md:gap-10 text-center md:text-start">
                <div className="flex items-center gap-2 text-lg text-gray-800 justify-center md:justify-start">
                  <FcCallback />
                  <Link href="tel:+8801729628402">+88 01729628402</Link>
                </div>
                <div className="flex items-center gap-2 text-lg text-gray-800 justify-center md:justify-start">
                  <BiLogoGmail className="text-blue-400" />
                  <Link href="mailto:abdulkadir112k@gmail.com">abdulkadir112k@gmail.com</Link>
                </div>
              </div>
              <div className="flex flex-col gap-6 md:gap-10 text-center md:text-start">
                <div className="flex items-center gap-2 text-lg text-gray-800 justify-center md:justify-start">
                  <LuCalendarDays className="text-blue-400" />
                  <p>{myAge} - years</p>
                </div>
                <div className="flex items-center gap-2 text-lg text-gray-800 justify-center md:justify-start">
                  <IoLocationSharp className="text-blue-400" />
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
              {/* Experience Section */}
              <div className="max-w-full text-center md:text-start">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <p className="text-5xl md:text-6xl font-bold text-blue-500">2+</p>
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
              <div className="max-w-full text-center md:text-start">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <p className="text-5xl md:text-6xl font-bold text-blue-500">12+</p>
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

            {/* Quote Section */}
            <div className="mt-10">
              <p className="flex flex-col md:flex-row gap-2 text-lg text-blue-200 mt-6 md:mt-12 border-2 border-gray-400 p-3 bg-gray-700 shadow-lg text-center">
                <RiDoubleQuotesL className="text-gray-400 text-4xl mx-auto md:mx-0" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ab reiciendis quod repudiandae nesciunt
                odio eligendi delectus amet veniam.
                <RiDoubleQuotesL className="rotate-180 text-gray-400 text-4xl mx-auto md:mx-0" />
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutContent;
