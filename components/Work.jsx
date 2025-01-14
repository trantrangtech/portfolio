'use client';
import Link from 'next/link';
import {Button} from './ui/button';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import {Pagination} from 'swiper/modules';
import ProjectCard from '@/components/ProjectCard';
const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
const projectData=[
    {
        image:`${basePath}/work/1.png`,
        category:'Web Development',
        name:'Project Name',
        description:'Description of the project',
        link:'/',
        github:'/'
    },
    {
        image:`${basePath}/work/2.png`,
        category:'Web Development',
        name:'Project Name',
        description:'Description of the project',
        link:'/',
        github:'/'
    },
    {
        image:`${basePath}/work/3.png`,
        category:'Web Development',
        name:'Project Name',
        description:'Description of the project',
        link:'/',
        github:'/'
    },
    {
        image:`${basePath}/work/4.png`,
        category:'Web Development',
        name:'Project Name',
        description:'Description of the project',
        link:'/',
        github:'/'
    }
]
const Work = () => {
    return (
        <section className='relative mb-12 xl:mb-48'>
            <div className="container mx-auto">
                {/*text*/}
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className="section-title mb-4">Latest Projects</h2>
                    <p className='subtitle mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, dicta. Vel, itaque. Obcaecati dolor esse cum iusto accusantium labore, deleniti, aspernatur nostrum aliquid commodi laboriosam. Necessitatibus, aliquid sint. Officia, saepe!</p>
                    <Link href='/projects'>
                        <Button>All projects</Button>
                    </Link>
                </div>
                {/*swiper*/}
                <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                    <Swiper className='h-[480px]' slidesPerView={1} breakpoints={{
                        640:{
                            slidesPerView:2
                        },
                    
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                        clickable:true
                    }}
                    
                    >
                        {projectData.slice(0,4).map((project,index)=>{
                            return(
                                <SwiperSlide key={index}>
                                    <ProjectCard
                                        project={project}
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
export default Work;