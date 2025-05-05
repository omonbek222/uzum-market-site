import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const { cart, addToCart } = useContext(CartContext); // CartContext'dan ma'lumot olish

  const handleRemoveItem = (product) => {
    const updatedCart = cart.filter((item) => item !== product);
    addToCart(updatedCart); // Yangi ro'yxatni saqlash
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Savatcha</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Savatchada hech narsa yo'q.</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((product, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg flex justify-between items-center"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-24 h-24 object-cover mr-4"
                />
                <div>
                  <h2 className="font-bold">{product.title}</h2>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="font-semibold text-gray-800">{product.price} so'm</p>
                </div>
                <button
                  onClick={() => handleRemoveItem(product)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  O'chirish
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <p className="font-bold text-xl">Umumiy narx: {calculateTotal()} so'm</p>
            <button className="bg-green-500 text-white p-3 rounded mt-4">
              To'lovni davom ettirish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
