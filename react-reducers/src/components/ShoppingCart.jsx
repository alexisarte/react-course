import { useReducer } from 'react';
import {
  shoppingInitialState,
  shoppingReducer,
} from '../reducers/shoppingReducer';
import ProductItem from './ProductItem';

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_ONE_FROM_CART', payload: product });
  };

  const removeAllFromCart = (product) => {
    dispatch({ type: 'REMOVE_ALL_FROM_CART', payload: product });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <h3>Products</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>Cart</h3>
      <article className="box"></article>
    </div>
  );
};

export default ShoppingCart;
