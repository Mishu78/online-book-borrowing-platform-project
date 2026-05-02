import Image from 'next/image';
import React from 'react';

const BookDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('http://localhost:3000/data.json', {
        cache: 'no-store'
    });

    const books = await res.json();
    const book = books.find(p => p.id == id);

    return (
        <div className="max-w-6xl mx-auto p-6">

            {/* Card */}
            <div className="bg-white shadow-lg rounded-xl p-6 grid md:grid-cols-2 gap-8">

                {/* LEFT: Image */}
                <div className="bg-gray-100 p-4 rounded-xl">
                    <div className="relative w-full aspect-[2/3]">
                        <Image
                            src={book?.image_url}
                            fill
                            alt={book?.title}
                            className="object-contain rounded-lg"
                        />
                    </div>
                </div>

                {/* RIGHT: Details */}
                <div className="flex flex-col justify-center">

                    {/* Title */}
                    <h1 className="text-3xl font-bold mb-2">
                        {book?.title}
                    </h1>

                    {/* Author */}
                    <p className="text-gray-600 mb-4">
                        by {book?.author}
                    </p>

                    {/* Description */}
                    <p className="mb-4 text-gray-700">
                        {book?.description}
                    </p>

                    {/* Available Quantity */}
                    <p className="mb-6 font-semibold text-green-600">
                        {book?.available_quantity} copies available
                    </p>

                    {/* Button */}
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-fit">
                        Borrow This Book
                    </button>

                </div>
            </div>

        </div>
    );
};

export default BookDetailsPage;