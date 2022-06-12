import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const {id, title, quantity, price } = props.item;
  const cartPayload = {
    id,
    title, 
    amount: 1,
    price
  }

  const minusButtonHandler = () => {
    dispatch(cartActions.removeFromCart(cartPayload))
  }
  const plusButtonHandler = () => {
    dispatch(cartActions.addToCart(cartPayload))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${(price*quantity).toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={minusButtonHandler}>-</button>
          <button onClick={plusButtonHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
