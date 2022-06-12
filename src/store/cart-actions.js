import { cartActions } from "./cart-slice"
import { cartButtonActions } from "./ui"

export const sendCartData = (cartData) => {
    return async (dispatch) => {

        dispatch(cartButtonActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }))

        const fetchData = async () => {
            const response = await fetch('https://cartreact-342a6-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cartData)
            })

            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
        }

        try {
            await fetchData()

            dispatch(cartButtonActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!'
            }))

        } catch (error) {
            dispatch(cartButtonActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Sending cart data failed!'
            }))
        }

    }
}

export const getCartData = () => {

    return async (dispatch) => {

        const getData = async () => {
            const response = await fetch('https://cartreact-342a6-default-rtdb.firebaseio.com/cart.json')

            if (!response.ok) {
                throw new Error('Something went wrong!')
            }

            const responseData = await response.json();
            return responseData;
        }

        try {
            const cartData = await getData()
            dispatch(cartActions.replaceCart({
                cartItems: cartData.cartItems || [],
                totalProductCount: cartData.totalProductCount,
                totalAmount: cartData.totalAmount
            }))

        } catch (error) {

            dispatch(cartButtonActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Getting cart data failed!'
            }))
        }


    }

}