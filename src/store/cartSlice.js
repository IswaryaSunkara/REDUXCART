import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            const existingProduct = state.find(item => item.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1; 
            } else {
                state.push({ ...action.payload, quantity: 1 }); 
            }
        },
        remove: (state, action) => {
            const existingProduct = state.find(item => item.id === action.payload);
            if (existingProduct.quantity > 1) {
                existingProduct.quantity -= 1; 
            } else {
                return state.filter(item => item.id !== action.payload); 
            }
        }
    }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
