import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    //multiple reducers
    reducers: {
        addItems: (state, action) => {
            // mutating the state herez
            state.items.push(action.payload);
        },
        removeItems: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            // state.items.length = 0;    //original state = []

            return { items: [] }; // this new object will be replaced inside original state = { items: 0}
        },
    },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
//single reducer exported
