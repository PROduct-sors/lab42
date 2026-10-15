import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  // DevTools автоматично увімкнено для розробки
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;