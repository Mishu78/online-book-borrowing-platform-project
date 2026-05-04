import Image from 'next/image';
import React from 'react';
import BorrowButton from '@/components/BorrowButton'; // Adjust import path as necessary

const BookDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('http://localhost:3000/data.json', {
        cache: 'no-store'
    });

    const books = await res.json();
    const book = books.find(p => p.id == id);

    return (
        <div className="max-w-6xl mx-auto p-6 min-h-[80vh] flex items-center">
            
            {/* Card */}
            <div className="bg-white shadow-lg border border-slate-100 rounded-xl p-6 grid md:grid-cols-2 gap-8 w-full">

                {/* LEFT: Image */}
                <div className="bg-gray-100 p-4 rounded-xl flex justify-center items-center">
                    <div className="relative w-full aspect-[2/3] max-w-[350px]">
                        <Image
                            src={book?.image_url || "/logo.jpg"}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            alt={book?.title || "Book Cover"}
                            className="object-contain rounded-lg"
                            priority
                        />
                    </div>
                </div>

                {/* RIGHT: Details */}
                <div className="flex flex-col justify-center">

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 text-slate-800">
                        {book?.title}
                    </h1> 

                    {/* Author */}
                    <p className="text-gray-600 mb-4 text-lg">
                        by <span className="font-medium text-slate-700">{book?.author}</span>
                    </p>

                    {/* Description */}
                    <p className="mb-4 text-gray-700 leading-relaxed">
                        {book?.description}
                    </p>

                    {/* Available Quantity */}
                    <p className="mb-6 font-semibold text-green-600 text-sm bg-green-50 px-3 py-1.5 rounded-lg border border-green-100 w-fit">
                        {book?.available_quantity} copies available
                    </p>

                    {/* Interactive Button */}
                    <BorrowButton book={book} />

                </div>
            </div>

        </div>
    );
};

export default BookDetailsPage;