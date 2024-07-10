import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        cost: 0,
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            state.cost = state.cost + (Number(action.payload.card.info.price/100) || Number(action.payload.card.info.defalutPrice/100))
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            return { items: [] };
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;