import BookCard from '@/components/BookCard';
import React from 'react';

const AllBookPage = async () => {
    const res = await fetch('http://localhost:3000/data.json', {
  cache: 'no-store'
})
    const books = await res.json();
    return (
        <div>
            <h1 className='text-2xl font-bold my-5'>My books</h1>
            <div className='grid grid-cols-4 gap-5 '>
{books.map((book) => <BookCard key={book.id} book={book}></BookCard> )}
            </div>
        </div>
    );
};

export default AllBookPage;