'use client'; 

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logoLoading from '../../../public/logoLoading.png';
import metaLogo from '../../../public/metaLogo.png';
import Home from '../page'; // Assuming 'Home' is the main page component

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // This will run when the component first mounts
        const timer = setTimeout(() => {
            setIsLoading(false); // After 2000ms (2 seconds), set isLoading to false
        }, 1000);

        // Cleanup function to clear the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []);

    // Conditional rendering
    if (isLoading) {
        return (
            <div className='fixed z-[2000] bg-white w-full h-full flex justify-center items-center inset-0'>
                <Image src={logoLoading} alt='logo' width={100} height={100} />
                <div className='fixed text-center bottom-4'>
                    <h1 className='text-lg text-gray-500'>from</h1>
                    <Image src={metaLogo} alt='metaLogo' width={100} height={100} />
                </div>
            </div>
        );
    }
}
