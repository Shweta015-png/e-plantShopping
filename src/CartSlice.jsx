import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {

    // ✅ ADD ITEM
    addItem: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.items.find(
        (item) => item.name === newItem.name
      );

      if (existingItem) {
        existingItem.quantity += 1; // increase quantity
      } else {
        state.items.push({ ...newItem, quantity: 1 }); // add new item
      }
    },

    // ✅ REMOVE ITEM
    removeItem: (state, action) => {
      const name = action.payload;

      state.items = state.items.filter(
        (item) => item.name !== name
      );
    },

    // ✅ UPDATE QUANTITY
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;

      const item = state.items.find(
        (item) => item.name === name
      );

      if (item) {
        item.quantity = amount; // set new quantity
      }
    },

  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;