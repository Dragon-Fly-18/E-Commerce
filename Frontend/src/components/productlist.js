import React from "react";

function ProductList({ products, addToCart }) {
  return (
    <div className="col-span-2">
      <h2 className="text-xl font-bold mb-2">Products</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">{product.name}</h3>
            <p>₹{product.price}</p>
            <p className="text-sm text-gray-600">{product.category}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
