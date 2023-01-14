const CartItem = ({ data, removeOneFromCart, removeAllFromCart }) => {
  const { id, name, price, quantity } = data;

  return (
    <div style={{ borderBottom: 'thin solid gray' }}>
      <h4>{name}</h4>
      <h5>
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h5>
      <button onClick={() => removeOneFromCart(id)}>Remove one</button>
      <br />
      <button onClick={() => removeAllFromCart(id, true)}>Remove all</button>
      <br />
      <br />
    </div>
  );
};

export default CartItem;
