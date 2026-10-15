import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../store/counterSlice';

const Counter = () => {
    // Читаємо значення count зі store
    const count = useSelector((state) => state.counter.count);
    // Отримуємо функцію dispatch для відправки дій
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
            <h1>Лічильник: {count}</h1>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <button 
                  style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }} 
                  onClick={() => dispatch(increment())}>
                  +
                </button>
                <button 
                  style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }} 
                  onClick={() => dispatch(decrement())}>
                  -
                </button>
                <button 
                  style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer', backgroundColor: '#ff4d4d', color: 'white', border: 'none' }} 
                  onClick={() => dispatch(reset())}>
                  Скинути
                </button>
            </div>
        </div>
    );
};

export default Counter;