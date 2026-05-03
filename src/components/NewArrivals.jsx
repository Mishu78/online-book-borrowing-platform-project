import React from 'react';
import Marquee from 'react-fast-marquee';

const NewArrivalsPage = () => {
    return (
        <div className='bg-gray-200 justify-between gap-4 py-4 px-2 mx-auto flex'>
            <Marquee pauseOnHover speed={50}>
  📚 New Arrivals: A Brief History of Time | The Alchemist | Treasure Island | 🎉 Special discounts on memberships | 🔥 Start reading today
</Marquee>

        </div>
    );
};

export default NewArrivalsPage;