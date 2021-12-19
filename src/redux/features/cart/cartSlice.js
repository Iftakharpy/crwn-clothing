import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      { product: { id: "kkk", name: "shirt", price: 99 }, quantity: 10 },
      { product: { id: "kkk", name: "shirt", price: 99 }, quantity: 10 },
    ],
    hidden: true,
  },
  reducers: {
    toggleItemsVisibility: (state) => {
      state.hidden = !state.hidden;
    },
    addItem: (state, action) => {
      state.items.push({ product: action.payload, quantity: 1 });
    },
    removeItem: (state, action) => {
      let items = state.items.filter(
        (product) => product.id !== action.payload
      );
      state.items = items;
    },
    increaseCount: (state, action) => {
      let item = state.items.find(
        ({ product }) => product.id == action.payload
      );
      item.quantity += 1;
    },
    decreaseCount: (state, action) => {
      let item = state.items.find(
        ({ product }) => product.id == action.payload
      );
      item.quantity -= 1;
    },
  },
});

export const {
  toggleItemsVisibility,
  addItem,
  removeItem,
  increaseCount,
  decreaseCount,
} = cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
