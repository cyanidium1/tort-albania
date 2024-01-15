import React from 'react';
import { FaInstagram, FaFacebook, FaTelegram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-[#F7EFD2] p-8 text-center flex items-center justify-between">
            {/* Логотипы социальных сетей с использованием react-icons */}
            <div className="flex items-center space-x-4">
                <FaInstagram size={32} color="#000000" />
                <FaFacebook size={32} color="#000000" />
                <FaTelegram size={32} color="#000000" />
            </div>

            {/* Номер телефона и адрес */}
            <div className="text-right">
                <p className="text-gray-600 mb-2">Телефон: +355 69 XXX XX XX</p>
                <p className="text-gray-600 mb-2">Адрес: Durres, Albania</p>

                {/* Надпись о правах и авторстве */}
                <p className="text-gray-600 mb-0">All rights reserved. MFD by Cyanidium Studios</p>
            </div>
        </footer>
    );
}

export default Footer;
