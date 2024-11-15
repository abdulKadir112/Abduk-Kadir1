import React from 'react'
import Container from '../layer/Container'
import ProjectCard from '../layer/ProjectCard'
import BreadCambe from '../layer/BreadCambe'
import fresh from '../../public/fresh.png'

const Home = () => {
  return (
    <div>
        <Container className={"pt-[100px] pl-[135px]"}>
            <BreadCambe/>
            <h1 className='text-5xl font-bold text-[#141313] pb-12'>Recent project</h1>
            <div className='grid grid-cols-5 gap-8'>
                <ProjectCard tim={fresh}/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </Container>
    </div>
  )
}

export default Home