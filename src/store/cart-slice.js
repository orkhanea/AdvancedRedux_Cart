import { createSlice } from "@reduxjs/toolkit"

const initialCartState = { totalProductCount: 0, totalAmount: 0, cartItems: [], changed: false }
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {

        addToCart(state, action) {

            state.changed = true
            const updatedTotalAmount = state.totalAmount + action.payload.price
            const updatedTotalProductCount = state.totalProductCount + action.payload.amount
            const existingCartItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            const existngCartItem = state.cartItems[existingCartItemIndex];
            let updatedItems;

            if (existngCartItem) {
                const updatedItem = {
                    ...existngCartItem,
                    amount: existngCartItem.amount + action.payload.amount
                };
                updatedItems = [...state.cartItems];
                updatedItems[existingCartItemIndex] = updatedItem
            }
            else {
                updatedItems = state.cartItems.concat(action.payload);
            }

            state.cartItems = updatedItems
            state.totalAmount = updatedTotalAmount
            state.totalProductCount = updatedTotalProductCount

        },
        removeFromCart(state, action) {

            state.changed = true
            const existingCartItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            const existingCartItem = state.cartItems[existingCartItemIndex];
            const updatedTotalAmount = state.totalAmount - existingCartItem.price
            const updatedTotalProductCount = state.totalProductCount - action.payload.amount
            let updatedItems;

            if (existingCartItem && existingCartItem.amount > 1) {
                const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 }
                updatedItems = [...state.cartItems]
                updatedItems[existingCartItemIndex] = updatedItem
            }
            else if (existingCartItem && existingCartItem.amount === 1) {
                updatedItems = state.cartItems.filter(item => item.id !== action.payload.id)
            }

            state.cartItems = updatedItems
            state.totalAmount = updatedTotalAmount
            state.totalProductCount = updatedTotalProductCount
        },
        replaceCart(state, action) {
            state.totalAmount = action.payload.totalAmount
            state.cartItems = action.payload.cartItems
            state.totalProductCount = action.payload.totalProductCount
        },
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer