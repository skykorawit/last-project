import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">
        <img
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover rounded-md border border-green-300"
        />
      </div>
      <h3 className="text-lg font-bold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-green-500 font-semibold mb-4">${product.price}</p>
      
      {/* ปุ่มเพิ่มสินค้าในตะกร้า */}
      <button 
        onClick={() => addToCart(product)} 
        className="bg-green-500 text-white px-4 py-2 w-full rounded hover:bg-green-600 transition duration-300">
        เพิ่มรายการอาหาร
      </button>
    </div>
  );
};

export default ProductCard;
