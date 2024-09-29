// src/components/Cart.jsx
import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <section className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product.id}>
              {item.product.name} - Cantidad: {item.quantity} - Precio Total: ${item.product.price * item.quantity}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Cart;
