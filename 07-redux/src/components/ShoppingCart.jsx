import CartItem from './CartItem';
import ProductItem from './ProductItem';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToCart,
  clearCart,
  removeFromCart,
} from '../actions/shoppingAction';

const ShoppingCart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { products, cart } = state.shopping;

  return (
    <div>
      <h1>Shopping Cart</h1>
      <h3>Products</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            data={product}
            addToCart={() => dispatch(addToCart(product.id))}
          />
        ))}
      </article>
      <h3>Cart</h3>
      <article className="box">
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        {cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            removeOneFromCart={() => dispatch(removeFromCart(item.id))}
            removeAllFromCart={() => dispatch(removeFromCart(item.id, true))}
          />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
