import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const BookCard = ({ book }) => {
    return (
        <Card className='border p-4 flex flex-col gap-3'>
    
            <div className='relative w-full aspect-[3/4] overflow-hidden rounded-xl'>
                <Image 
                    src={book.image_url} 
                    fill 
                    sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw' 
                    alt={book.title} 
                    className='object-cover'
                />         
            </div>

            <div className='flex-grow'>
                <h1 className="font-medium line-clamp-2">{book.title}</h1>
            </div>
            
            <Button variant='bordered' className='w-full'>View Details</Button>
        </Card>
    );
};

export default BookCard;