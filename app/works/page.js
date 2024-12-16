import React from 'react';
import Container from '../layer/Container';
import ProjectCard from '../layer/ProjectCard';
import BreadCambe from '../layer/BreadCambe';
import fresh from '../../public/fresh.png';

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
    title: 'E-Commerce App',
    description: 'An advanced e-commerce platform built with Next.js.',
    imageSrc: fresh,
    link: 'https://example.com/ecommerce',
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
