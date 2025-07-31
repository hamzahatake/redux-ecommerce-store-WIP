import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const product = action.payload;
            const existing = state.items.find((item) => item.id === action.payload.id);
            if (!existing) {
                state.items.push({ ...product, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const update = state.items.find((item) => item.id === id);
            if (update) {
                update.quantity = quantity
            }
        },
        deleteItem: (state, action) => {
            const { id } = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
        },
        clearCart: (state, action) => {
            state.items = [];
        }
    },
});

export const { addItem, removeItem, updateQuantity, deleteItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;