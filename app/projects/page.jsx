'use client';
import React, {useState} from 'react';
import {Tabs,TabsList,TabsContent,TabsTrigger} from '@/components/ui/tabs';
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
//remove category duplicates
const uniqueCategories = ['all projects',...new Set(projectData.map(project=>project.category))];
const Projects=()=>{
    const [categories,setCategories]=useState(uniqueCategories);
    const [category,setCategory]=useState('all projects');
    const filteredProjects=projectData.filter(project=>{
        return category === 'all projects' ? project : project.category === category;
    });
    return(
       <section className="min-h-screen pt-12">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    My Projects
                </h2>
                <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
                    <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[600px] mb-12 mx-auto md:border dark:border-none">
                        {categories.map((category,index)=>{
                            return <TabsTrigger
                            onClick={()=>setCategory(category)}
                            value={category} key={index} className="capitalize w-[162px] md:w-auto">{category}</TabsTrigger>;
                        })}
                    </TabsList>
                    <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {
                            filteredProjects.map((project,index)=>{
                                return <TabsContent value={category} key={index}>
                                    <ProjectCard key={index} project={project}/>
                                </TabsContent>
                            })
                        }
                    </div>
                </Tabs>
            </div>
       </section>
    )
}
export default Projects;