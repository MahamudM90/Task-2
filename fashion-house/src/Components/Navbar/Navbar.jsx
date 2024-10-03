import logo from '../../assets/images/logo.svg'
import React, { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="py-4">
            <div className="container mx-auto flex gap-12 max-sm:gap-64 items-center">
                <img className='w-[35px] h-[40px]' src={logo}></img>
                <div className="hidden md:flex space-x-6">
                    <p className='text-black font-normal font-family: Arial, sans-serif'>Home</p>
                    <p className='text-black font-normal font-family: Arial, sans-serif'>Product</p>
                    <p className='text-black font-normal font-family: Arial, sans-serif'>Review</p>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <span className="text-xl text-black">&#9776;</span>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden text-center">
                    <p className="block py-2 text-black text-black font-normal font-family: Arial, sans-serif">Home</p>
                    <p className="block py-2 text-black text-black font-normal font-family: Arial, sans-serif">Product</p>
                    <p className="block py-2 text-black text-black font-normal font-family: Arial, sans-serif">Review</p>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
