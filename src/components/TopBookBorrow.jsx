import React from 'react';
import BookCard from './BookCard';

const TopBookBorrow = async () => {
    const res = await fetch('http://localhost:3000/data.json', {
  cache: 'no-store'
})
    const books = await res.json()
    console.log(books)
    const topBookBorrow = books.slice(0,4)
    return (
        <div>
            <h1 className='text-2xl font-bold my-5'>Featured books</h1>
            <div className='grid grid-cols-4 gap-5 '>
{topBookBorrow.map((book) => <BookCard key={book.id} book={book}></BookCard> )}
            </div>
        </div>
    );
};

export default TopBookBorrow;