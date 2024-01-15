import React, { useState } from 'react';
import menuItems from '../data/menu.json';
import CartModal from './CartModal';
import ContactIcon from './ContactIcon';

function Menu(props) {
    const [cart, setCart] = useState({});
    const [isCartModalOpen, setCartModalOpen] = useState(false);

    const addToCart = (itemId) => {
        setCart((prevCart) => ({
            ...prevCart,
            [itemId]: {
                ...menuItems.find(item => item.id === itemId),
                quantity: (prevCart[itemId]?.quantity || 0) + 1,
            },
        }));
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            if (updatedCart[itemId]?.quantity > 1) {
                updatedCart[itemId].quantity -= 1;
            } else {
                delete updatedCart[itemId];
            }
            return updatedCart;
        });
    };

    const openCartModal = () => {
        setCartModalOpen(true);
    };

    const closeCartModal = () => {
        setCartModalOpen(false);
    };

    const handleCheckout = () => {
        // Implement your checkout logic here
        console.log('Checkout:', cart);
        setCart({});
        closeCartModal();
    };

    const clearCart = () => {
        setCart({});
    };

    return (
        <div className='bg-[#FFE3C4] p-4'>
            <ContactIcon />
            <h1 className='text-3xl font-bold mb-8 text-center'>Меню домашней кухни</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {menuItems.map((item) => (
                    <div key={item.id} className='bg-white p-6 rounded-md shadow-md'>
                        <img
                            src={item.photo}
                            alt={item.name}
                            className='w-full h-40 object-cover mb-4 rounded-md'
                        />
                        <h2 className='text-xl font-semibold mb-2'>{item.name}</h2>
                        <p className='text-gray-600 mb-2'>{item.description}</p>
                        <p className='text-gray-700 mb-2'>
                            Цена: ${item.price} | Порция: {item.portionSize}
                        </p>
                        <p style={{ color: item.availability ? 'green' : 'red' }}>
                            {item.availability ? 'Доступно' : 'Недоступно'}
                        </p>


                        {/* Кнопки для управления количеством в корзине */}
                        {item.availability ? <div className='flex justify-between mt-4'>
                            <button onClick={() => addToCart(item.id)} className='text-[#b83d5c]'>
                                +
                            </button>
                            <span className='text-[#b83d5c]'>{cart[item.id]?.quantity || 0}</span>
                            <button onClick={() => removeFromCart(item.id)} className='text-[#b83d5c]'>
                                -
                            </button>
                        </div> : null}
                    </div>
                ))}
            </div>

            {/* Кнопка для открытия модального окна корзины */}
            {Object.keys(cart).length > 0 && (
                <button onClick={openCartModal} className='fixed bottom-4 left-4 bg-[#b83d5c] text-white px-4 py-2 rounded-md'>
                    Корзина ({Object.keys(cart).length})
                </button>
            )}

            {/* Модальное окно корзины */}
            {isCartModalOpen && (
                <CartModal
                    cart={cart}
                    closeModal={closeCartModal}
                    handleCheckout={handleCheckout}
                    handleIncrement={addToCart}
                    handleDecrement={removeFromCart}
                    clearCart={clearCart}
                />
            )}
        </div>
    );
}

export default Menu;
