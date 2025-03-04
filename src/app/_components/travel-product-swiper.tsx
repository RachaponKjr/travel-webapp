'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image';
import BoxProduct from './box-product';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import '@/styles/swiper.css';


interface TravelProductProps {
    headerTitle: string
    products?: any[]
}

function TravelProductSwipers({ headerTitle, products }: TravelProductProps) {
    return (
        <div className='space-y-4 my-4'>
            <h3 className='text-xl font-normal px-4'>{headerTitle}</h3>
            <div>
                <Swiper
                    slidesPerView={1.3}
                    spaceBetween={15}
                    centeredSlides={true}
                    loop={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 3
                        }
                    }}
                    modules={[Pagination]}
                    pagination={{
                        el: ".product-pagination",
                        clickable: true,
                    }}
                >
                    {Array.from({ length: 4 }).map((_, index) => (
                        <SwiperSlide key={index}>
                            <BoxProduct />
                        </SwiperSlide>
                    ))}
                    <div className='product-pagination flex justify-center gap-2 mt-4 w-full'></div>
                </Swiper>
            </div>
        </div>
    )
}

export default TravelProductSwipers