import React, { useEffect, useState } from 'react';

function CartModal({ cart, closeModal, handleCheckout, handleIncrement, handleDecrement, clearCart }) {
    const cartItems = Object.values(cart);
    const [isCartNotEmpty, setIsCartNotEmpty] = useState(false);

    useEffect(() => {
        document.body.classList.add('modal-open');
        setIsCartNotEmpty(cartItems.length > 0);
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [cartItems]);

    // const handleClearCart = () => {
    //     clearCart();
    //     closeModal();
    // };

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white p-8 rounded-md'>
                <h2 className='text-2xl font-bold mb-4'>Ваш заказ</h2>

                {cartItems.length === 0 ? (
                    <p className='text-gray-500'>Корзина пуста</p>
                ) : (
                    <>
                        {cartItems.map((item) => (
                            <div key={item.id} className='flex items-center justify-between mb-4'>
                                <div>
                                    <h3 className='font-semibold'>{item.name}</h3>
                                    <p className='text-gray-500'>{item.portionSize}</p>
                                </div>
                                <div className='flex items-center'>
                                    <button
                                        onClick={() => handleDecrement(item.id)}
                                        className='text-[#b83d5c] px-2'
                                    >
                                        -
                                    </button>
                                    <span className='mx-2'>{item.quantity}</span>
                                    <button
                                        onClick={() => handleIncrement(item.id)}
                                        className='text-[#b83d5c] px-2'
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div className='mt-8 flex justify-between items-center'>
                            <p className='text-lg font-semibold'>Итого:</p>
                            <p className='text-lg font-bold'>
                                ${cartItems
                                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                                    .toFixed(2)}
                            </p>
                        </div>

                        <button
                            onClick={handleCheckout}
                            className='mt-4 bg-green-400 text-white px-4 py-2 rounded-md mr-2'
                        >
                            Оформить заказ
                        </button>

                        <button
                            onClick={clearCart}
                            className='mt-4 bg-red-400 text-white px-4 py-2 rounded-md'
                        >
                            Очистить корзину
                        </button>
                    </>
                )}

                <button onClick={closeModal} className='absolute top-4 right-4 text-xl'>
                    ✕
                </button>
            </div>
        </div>
    );
}

export default CartModal;
