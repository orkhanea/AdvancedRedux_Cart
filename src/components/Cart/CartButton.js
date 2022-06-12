import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartButtonActions } from '../../store/ui';

const CartButton = (props) => {

  const totalProductCount = useSelector(state => state.cart.totalProductCount)

  const dispatch = useDispatch()

  const cartToggleHandler = () => {
    dispatch(cartButtonActions.toggleCart())
  }

  return (
    <button type='button' onClick={cartToggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalProductCount}</span>
    </button>
  );
};

export default CartButton;
