import React from 'react';
import Container from '../layer/Container';
import ProjectCard from '../layer/ProjectCard';
import BreadCambe from '../layer/BreadCambe';
import fresh from '../../public/fresh.png';
import upland from '../../public/upland.jpg';

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
  // Add more projects as needed...
];

const Home = () => {
  return (
    <div>
      <Container className="pt-[100px] pl-[135px]">
        {/* Breadcrumb */}
        <BreadCambe />

        {/* Heading */}
        <h1 className="text-5xl font-bold text-[#141313] pb-12">Recent Projects</h1>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
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
