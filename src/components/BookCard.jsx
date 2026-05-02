import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const BookCard = ({book}) => {
    return (
       <Card className='border'>
        <div className='relative w-full aspect-square'>
            <Image src={book.image_url} fill sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw' alt={book.title} className='object-contain rounded-xl'/>         
        </div>

         <div>
<h1  className="font-medium">{book.title}</h1>
        </div>
        <Button variant='outline' className={'w-full'}>Details</Button>
       </Card>
    );
};

export default BookCard;