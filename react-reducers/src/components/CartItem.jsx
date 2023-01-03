const CartItem = ({ data, REMOVE_FROM_CART }) => {
  const { id, name, price, quantity } = data;

  return (
    <div style={{ borderBottom: 'thin solid gray' }}>
      <h4>{name}</h4>
      <h5>
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h5>
      <button onClick={() => REMOVE_FROM_CART(id)}>Remove from cart</button>
      <button onClick={() => REMOVE_FROM_CART(data)}>
        Remove all from cart
      </button>
    </div>
  );
};

export default CartItem;
