"use client";

import React from 'react';
import BookCard from './BookCard';

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TopBookSlider = ({ books }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            // Always slide in groups of 2 cards
            slidesPerGroup={2}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            navigation={true}
            pagination={{ clickable: true }}
            // Responsive layout tailored for exactly 4 cards
            breakpoints={{
                // Mobile: Show 1 card, slide 1 at a time
                0: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                // Tablet: Show 2 cards, slide 2 at a time
                640: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                // Desktop: Show 2 cards, slide 2 at a time
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
            }}
            className="pb-12 top-books-swiper"
        >
            {books.map((book) => (
                <SwiperSlide key={book.id}>
                    <div className="h-full">
                        <BookCard book={book} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TopBookSlider;