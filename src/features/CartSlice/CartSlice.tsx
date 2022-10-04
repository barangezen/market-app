import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "../../globals/enums/models";

interface ICartState {
    addedItems: ICartItem[];
}
const initialState: ICartState = {
    addedItems: []
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
           state.addedItems.push(action.payload);
        },
        updateItem: (state, action:PayloadAction<{name: string, price: number, quantity: number}>) => {
            console.log('aaa',action.payload)
            const item = state.addedItems.find((basketItem) => basketItem.name === action.payload.name)
            if (item) {
                if (action.payload.quantity === 0) {
                    let index = state.addedItems.indexOf(item);
                    if (index !== -1) {
                        state.addedItems.splice(index, 1);
                    }
                } else {
                    item.quantity = action.payload.quantity
                }
               
            } 
        },
    }
})

export const {addItem, updateItem} = cartSlice.actions
export default cartSlice.reducer