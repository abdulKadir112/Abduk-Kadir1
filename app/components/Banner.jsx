import React from 'react';
import Container from '../layer/Container';
import Image from 'next/image';
import banner from '../../public/banner.png';
import Link from 'next/link';
import { FcCallback } from "react-icons/fc";
import { BiLogoGmail } from "react-icons/bi";

const Banner = () => {
    return (
        <div>
            <Container className='pt-10 md:pt-52 md:pl-[135px] px-6'>
                <div className='md:flex justify-between items-center'>
                    {/* Left Section */}
                    <div>
                        <h1 className='w-[250px] md:w-[545px] font-normal text-3xl md:text-8xl text-[#141313] uppercase'>
                            My name is <span className='font-medium text-blue-500'>Abdul Kadir...</span>
                        </h1>
                        <p className='font-common font-medium text-2xl text-[#141313] pt-6 pb-10'>
                            I am a <span>Frontend Developer</span>
                        </p>
                        <Link 
                            href="/contact"
                            className="md:px-10 md:py-4 font-semibold mt-10 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            title="Contact Abdul Kadir"
                        >
                            Let’s talk with me
                        </Link>
                        <div className='md:flex justify-between pt-16'>
                            {/* Contact Section */}
                            <div className='flex items-center gap-2 mt-8 text-lg text-[#141313]'>
                                <FcCallback />
                                <Link href='tel:+8801729628402' aria-label="Call Abdul Kadir">
                                    +88 01729628402
                                </Link>
                            </div>
                            <div className='flex items-center gap-2 mt-8 text-lg text-[#141313]'>
                                <BiLogoGmail className='text-blue-400' />
                                <Link href='mailto:abdulkadir112k@gmail.com' aria-label="Email Abdul Kadir">
                                    abdulkadir112k@gmail.com
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className='max-w-screen-xl'>
                        <Image
                            src={banner}
                            alt="Banner featuring Abdul Kadir"
                            priority
                            placeholder="blur"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;
