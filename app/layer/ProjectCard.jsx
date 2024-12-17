'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdHeartEmpty } from "react-icons/io";

const ProjectCard = ({ title, description, imageSrc, link, likes }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image Section */}
      <div className="w-96 h-48 relative">
        <Link href={link} className='overflow-hidden object-cover'>
          <Image
            src={imageSrc}
            alt={`${title} project thumbnail`}
            className="object-cover cursor-pointer"
            layout="fill" // Ensures the image fills its container
            placeholder="blur" // Lazy loading with a placeholder
            blurDataURL="/path/to/placeholder-image.jpg" // Replace with a placeholder image URL
          />
        </Link>
      </div>
      
      {/* Content Section */}
      <div className="p-3 flex justify-between bg-slate-300">
        {/* Project Info */}
        <div className="flex-1">
          <h1 className="text-lg font-semibold text-black">{title}</h1>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
        
        {/* Likes Section */}
        <div
          className={`flex flex-col items-center gap-2  p-2 rounded transition-colors duration-300`}
        >
          <IoMdHeartEmpty
            className={`text-3xl cursor-pointer ${
              liked ? "text-red-500" : "hover:text-red-500"
            } transition-colors duration-300`}
            onClick={handleLikeClick}
          />
          <p>{likes || "0"}+</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
