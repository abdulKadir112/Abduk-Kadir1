import React from 'react';
import Container from '../layer/Container';
import ProjectCard from '../layer/ProjectCard';
import BreadCambe from '../layer/BreadCambe';
import fresh from '../../public/fresh.png';
import upland from '../../public/upland.jpg';
import restaurant from '../../public/restaurant.png';
import numbergame from '../../public/number-game.png';
import BMI from '../../public/BMI.png';
import Agenc from '../../public/Agence.png';
import tech from '../../public/tach.png';

// Example project data array
const projectData = [
  {
    title: 'Fashion React',
    description: 'A cutting-edge React-based fashion app.',
    imageSrc: fresh,
    link: 'https://fresh-puce.vercel.app/',
    likes: '1k',
  },
  {
    title: 'Upland Next.js',
    description: 'An advanced mobile app platform built with Next.js.',
    imageSrc: upland,
    link: 'https://upland-seven.vercel.app',
    likes: '2k',
  },
  {
    title: 'Gericht HTML and Tailwind',
    description: 'An advanced restaurant platform built with HTML and Tailwind.',
    imageSrc: restaurant,
    link: 'https://abdulkadir112.github.io/tailwind-main/index.html',
    likes: '1.5k',
  },
  {
    title: 'Number Game JavaScript',
    description: 'An advanced number game built with JavaScript.',
    imageSrc: numbergame,
    link: 'https://abdulkadir112.github.io/NumberGame/',
    likes: '1k',
  },
  {
    title: 'Tach Store',
    description: 'An advanced number game built with React.js.',
    imageSrc: tech,
    link: 'https://tach-store.vercel.app/',
    likes: '1k',
  },
  {
    title: 'BMI Calculator JavaScript',
    description: 'An advanced BMI calculator built with JavaScript.',
    imageSrc: BMI,
    link: 'https://abdulkadir112.github.io/BMI/',
    likes: '2k',
  },
  {
    title: 'Agenc HTML and CSS',
    description: 'An advanced agency landing page built with HTML and CSS.',
    imageSrc: Agenc,
    link: 'https://abdulkadir112.github.io/agenc/',
    likes: '3k',
  },
  // Add more projects as needed...
];

const Home = () => {
  return (
    <div>
      <Container className="pt-[100px] px-4 md:px-8 lg:px-16">
        {/* Breadcrumb */}
        <BreadCambe />

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#141313] pb-12 text-center md:text-left">
          Recent Projects
        </h1>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              link={project.link}
              likes={project.likes}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
