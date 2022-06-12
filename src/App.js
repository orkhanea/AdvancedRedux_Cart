import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react'
import Notification from './components/UI/Notification';
import { sendCartData, getCartData } from './store/cart-actions'

let isInitial = true;

function App() {
  const cartToggle = useSelector((state) => state.cartButton.toggleCart)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.cartButton.notification)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartData())
  }, [dispatch])

  useEffect(() => {

    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart))
    }


  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {!cartToggle && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
