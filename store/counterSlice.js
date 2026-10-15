import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    }
  }
});

// Експортуємо дії (actions) для компонентів
export const { increment, decrement, reset } = counterSlice.actions;

// Експортуємо reducer для store
export default counterSlice.reducer;