import { useReducer } from 'react';
import {
  shoppingInitialState,
  shoppingReducer,
} from '../reducers/shoppingReducer';
import CartItem from './CartItem';
import ProductItem from './ProductItem';
import { TYPES } from '../actions/shoppingAction.js';

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const removeFromCart = (id, all = false ) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
      console.log('remove all');
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <h3>Products</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>Cart</h3>
      <article className="box">
        <button onClick={clearCart}>Clear Cart</button>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} removeFromCart={removeFromCart} />
        ))}
      </article>
    </div>
  );  
};

export default ShoppingCart;
