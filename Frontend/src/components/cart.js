import React from "react";

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">🛍 Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between p-2 border-b">
              {item.name} - ₹{item.price}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3 className="font-bold mt-2">Total: ₹{total}</h3>
      <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
        Checkout
      </button>
    </div>
  );
}

export default Cart;
