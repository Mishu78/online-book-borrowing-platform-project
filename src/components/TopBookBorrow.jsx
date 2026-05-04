import React from 'react';
import TopBookSlider from './TopBookSlider';

const TopBookBorrow = async () => {
    const res = await fetch('https://online-book-borrowing-platform-proj.vercel.app/data.json', {
        cache: 'no-store'
    });
    
    const books = await res.json(); 
    const topBookBorrow = books.slice(0, 4);

    return (
        <div className="my-12 px-4">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold my-5 text-slate-800">
                    Featured Books
                </h1>
                
                {/* Fixed-width wrapper passes the correct sizing to Swiper */}
                <TopBookSlider books={topBookBorrow} />
            </div>
        </div>
    );
};

export default TopBookBorrow;