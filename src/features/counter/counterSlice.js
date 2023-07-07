import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0, 
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

//* Store will need this so exporting it

export default counterSlice.reducer;
