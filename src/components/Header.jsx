import React, { useState } from 'react';
import logo from '../pictures/logo.png'

function Header(props) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="relative">
            {/* Background Overlay for Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black opacity-50"
                    onClick={closeMobileMenu}
                />
            )}

            {/* Logo */}
            <div className="bg-[#ffeded] p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-100 h-20 object-contain"
                    />
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <button className="text-xl" onClick={toggleMobileMenu}>
                        <span>☰</span>
                    </button>
                </div>

                {/* Desktop Menu Tabs */}
                <nav className="hidden md:flex space-x-4">
                    <button className="font-medium text-2xl  text-[#b83d5c]">Меню</button>
                    <button className="font-medium text-2xl  text-[#b83d5c]">О нас</button>
                    <button className="font-medium text-2xl  text-[#b83d5c]">Доставка</button>
                </nav>
            </div>

            {/* Mobile Menu Content */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute inset-x-0 top-20 bg-white p-4 border shadow-md">
                    <button
                        className="absolute top-4 right-4 text-xl"
                        onClick={closeMobileMenu}
                    >
                        <span>✕</span>
                    </button>
                    <button className="block mb-2 text-lg font-medium text-[#b83d5c]">Меню</button>
                    <button className="block mb-2 text-lg font-medium text-[#b83d5c]">О нас</button>
                    <button className="block text-lg font-medium text-[#b83d5c]">Доставка</button>
                </div>
            )}
        </header>
    );
}

export default Header;
