import { createSlice } from '@reduxjs/toolkit';

const initialCartButtonState = { toggleCart: false, notification: null }

const cartButtonSlice = createSlice({

    name: 'cartButton',
    initialState: initialCartButtonState,
    reducers: {
        toggleCart(state) {
            state.toggleCart = !state.toggleCart
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }

})

export const cartButtonActions = cartButtonSlice.actions;

export default cartButtonSlice.reducer;