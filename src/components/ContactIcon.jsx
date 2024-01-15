import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

function ContactIcon() {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <div className="fixed bottom-4 right-4 z-10">
            <div className="bg-[#b83d5c] p-3 rounded-full cursor-pointer" onClick={toggleModal}>
                <FaPhoneAlt size={24} color="white" />
            </div>

            {isModalOpen && (
                <div className="absolute bottom-12 right-4 z-10 bg-white p-4 rounded-md">
                    <h2 className="text-2xl font-bold mb-4">Связаться с нами</h2>

                    {/* Ссылки на WhatsApp, Viber и Telegram */}
                    <div className="flex flex-col gap-4">
                        <a href="https://wa.me/номер_телефона" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            WhatsApp
                        </a>
                        <a href="viber://chat?number=номер_телефона" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
                            Viber
                        </a>
                        <a href="tg://resolve?domain=логин_в_telegram" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">
                            Telegram
                        </a>
                    </div>

                    {/* Закрыть модальное окно */}
                    <button onClick={toggleModal} className="mt-4 bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
                        Закрыть
                    </button>
                </div>
            )}
        </div>
    );
}

export default ContactIcon;
