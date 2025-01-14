'use client';
import Image from 'next/image';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import {Pagination} from 'swiper/modules';
const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
const reviewsData= [
  {
    avatar:`${basePath}/reviews/avatar-1.png`,
    name:'Alex',
    job:'Web Developer',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    avatar:`${basePath}/reviews/avatar-2.png`,
    name:'Alex',
    job:'Web Developer',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    avatar:`${basePath}/reviews/avatar-3.png`,
    name:'Alex',
    job:'Web Developer',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    avatar:`${basePath}/reviews/avatar-4.png`,
    name:'Alex',
    job:'Web Developer',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    avatar:`${basePath}/reviews/avatar-5.png`,
    name:'Alex',
    job:'Web Developer',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    avatar:`${basePath}/reviews/avatar-6.jpg`,
    name:'Alex',
    job:'Web Developer',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  }
]
const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
          <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
          {/* Swiper */}
          <Swiper 
          slidesPerView={1} 
          breakpoints={{
              640:{
                  slidesPerView:2
              },
              1400:{slidesPerView:3}
          
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{clickable:true}} className="h-[350px]">
            {reviewsData.map((person,index)=>{
              return (
                <SwiperSlide key={index}>
                    <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                        <CardHeader className='p-0 mb-10'>
                            <div className="flex items-center gap-x-4">
                                <Image src={person.avatar} alt='' width={70} height={70} priority/>
                                {/*name */}
                                <div className="flex flex-col">
                                    <CardTitle>{person.name}</CardTitle>
                                   <p>{person.job}</p>

                                </div>
                            </div>
                        </CardHeader>
                        <CardDescription className='text-lg text-text-muted-foreground'>{person.review}</CardDescription>
                    </Card>
                </SwiperSlide>
              )
            })}
          </Swiper>
      </div>
    </section>
  );
};
export default Reviews;