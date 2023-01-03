import React from 'react';

const ProductItem = ({ data, addToCart }) => {
  const { id, name, price } = data;

  return (
    <div style={{ border: 'thin solid gray', padding: '1rem' }}>
      <h1>Product</h1>
      <p>{name}</p>
      <p>${price}.00</p>
      <button onClick={() => addToCart(id)}>Add to cart</button>
    </div>
  );
};

export default ProductItem;
