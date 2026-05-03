import Link from 'next/link';
import React from 'react';

const notFoundPage = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col' >
           <h2 className='font-bold text-5xl text-red-500'>This page is not found</h2> 
           <Link href={'/'}>
           <button className= 'rounded-2xl border p-5 mt-5 btn bg-red-600 text-white'>Back to home</button></Link>
        </div>
    );
};

export default notFoundPage;