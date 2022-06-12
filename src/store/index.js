import { configureStore } from '@reduxjs/toolkit';
import cartButtonSlice from './ui';
import cartSlice from './cart-slice';

const store = configureStore({
    reducer: {
        cartButton: cartButtonSlice,
        cart: cartSlice
    }
})

export default store;