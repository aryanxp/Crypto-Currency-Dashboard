// store.js
import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const initialState = {
  cryptoList: [],
};

export const fetchCryptoList = createAsyncThunk(
  "marketCap/fetchCryptoList",
  async () => {
    try {
      const response = await fetch(
        "https://api.allorigins.win/raw?url=https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data from the API.");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching crypto list: " + error.message);
    }
  }
);

const marketCapReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchCryptoList.fulfilled.type: // Use the action type from createAsyncThunk
      return { ...state, cryptoList: action.payload }; // Make sure to use action.payload to access the data
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    marketCap: marketCapReducer,
  },
  middleware: [thunk], // Add Redux Thunk middleware
});

export default store;
