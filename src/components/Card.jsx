import React from "react";

export default function Card({ image, title, description, price, addToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-64 h-[500px] flex flex-col">
      {/* Mahsulot rasmi */}
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />
      
      {/* Card ichidagi ma'lumotlar */}
      <div className="flex flex-col justify-between p-4 flex-grow">
        {/* Mahsulot nomi */}
        <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
        
        {/* Mahsulot tavsifi */}
        <p className="text-sm text-gray-500 mb-4 text-center flex-grow">{description}</p>
        
        {/* Narx va tugma */}
        <div className="flex justify-between items-center mt-4">
          <span className="font-semibold text-lg text-gray-800">{price} so'm</span>
          
          {/* Savatchaga qo'shish tugmasi */}
          <button
            onClick={addToCart}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Savatchaga qo'shish
          </button>
        </div>
      </div>
    </div>
  );
}
