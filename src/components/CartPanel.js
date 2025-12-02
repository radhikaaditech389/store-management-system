import React from "react";
import { createSalesBill, paySalesBill } from "../utils/api";

export default function CartPanel({ cart, setCart }) {
  const total = cart.reduce(
    (acc, item) => acc + item.selling_price * item.qty,
    0
  );

  const increaseQty = (item) => {
    setCart(cart.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i)));
  };

  const decreaseQty = (item) => {
    setCart(
      cart.map((i) =>
        i.id === item.id ? { ...i, qty: Math.max(i.qty - 1, 1) } : i
      )
    );
  };

  const removeItem = (item) => setCart(cart.filter((i) => i.id !== item.id));

  const checkout = async () => {
    try {
      const lines = cart.map((i) => ({ product_id: i.id, qty: i.qty }));
      const res = await createSalesBill(lines);

      await paySalesBill(res.data.data.id, [{ method: "cash", amount: total }]);
      alert("Sale completed!");
      setCart([]);
    } catch (err) {
      alert("Error during checkout");
    }
  };

  return (
    <div className="w-1/3 bg-gray-50 border-l shadow-2xl p-10 flex flex-col">
      <h2 className="font-extrabold text-4xl mb-10 text-center">Cart</h2>

      <div className="flex-1 overflow-y-auto space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-3xl shadow-2xl flex justify-between items-center"
          >
            <div>
              <p className="font-bold text-2xl">{item.name}</p>
              <p className="text-gray-600 text-xl">₹{item.selling_price}</p>
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => decreaseQty(item)}
                className="bg-gray-200 hover:bg-gray-300 rounded-full w-16 h-16 text-3xl flex items-center justify-center"
              >
                -
              </button>
              <span className="text-3xl font-bold">{item.qty}</span>
              <button
                onClick={() => increaseQty(item)}
                className="bg-gray-200 hover:bg-gray-300 rounded-full w-16 h-16 text-3xl flex items-center justify-center"
              >
                +
              </button>
              <button
                onClick={() => removeItem(item)}
                className="bg-red-100 hover:bg-red-200 rounded-full w-16 h-16 text-red-600 flex items-center justify-center text-3xl"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t mt-8">
        <div className="flex justify-between text-4xl font-extrabold mb-8">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
        <button
          onClick={checkout}
          disabled={cart.length === 0}
          className={`w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white p-6 rounded-3xl text-4xl font-extrabold shadow-2xl ${
            cart.length === 0 ? "cursor-not-allowed" : ""
          }`}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
