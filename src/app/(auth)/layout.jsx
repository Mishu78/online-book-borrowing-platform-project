import Navbar from '@/components/Navbar';
import NewArrivalsPage from '@/components/NewArrivals';
import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <>
           <Navbar/>
           {children} 
    
        </>
    );
};

export default AuthLayout;