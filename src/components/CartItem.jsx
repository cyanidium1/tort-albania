import React from 'react';

function CartItem({ itemId, quantity }) {
    // Ваши обработчики уменьшения и увеличения количества товара
    const handleIncrement = () => {
        // Логика увеличения количества товара в корзине
    };

    const handleDecrement = () => {
        // Логика уменьшения количества товара в корзине
    };

    return (
        <div className='flex items-center justify-between mb-2'>
            <p className='text-lg'>{itemId} x {quantity}</p>
            <div className='flex items-center'>
                <button onClick={handleIncrement} className='text-[#b83d5c] font-semibold'>
                    +
                </button>
                <button onClick={handleDecrement} className='text-[#b83d5c] font-semibold ml-2' disabled={quantity === 1}>
                    -
                </button>
            </div>
        </div>
    );
}

export default CartItem;
