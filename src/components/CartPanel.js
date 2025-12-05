import React, { useState } from "react";
import { createSalesBill, paySalesBill } from "../utils/api";
import PaymentModal from "./PaymentModal";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";

export default function CartPanel({ cart, setCart, triggerRefresh }) {
  const [showPayment, setShowPayment] = useState(false);

  const getPriceWithGST = (item) => {
    const price = parseFloat(item.selling_price);
    const gst = parseFloat(item.gst_rate?.rate || 0);

    const gstAmount = (price * gst) / 100;
    const finalPrice = price + gstAmount;

    return { gstAmount, finalPrice };
  };

  const total = cart.reduce((acc, item) => {
    const { finalPrice } = getPriceWithGST(item);
    return acc + finalPrice * item.qty;
  }, 0);

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

  const handlePayment = async (payments) => {
    try {
      const lines = cart.map((i) => ({
        product_id: i.id,
        qty: i.qty,
      }));

      const res = await createSalesBill(lines);
      const billId = res.data.data.id;

      await paySalesBill(billId, payments);

      toast.success("Salesbill created successfully!");
      setCart([]);
      triggerRefresh();
      setShowPayment(false);
    } catch (err) {
      toast.error("Error paying bill");
    }
  };

  return (
    <>
      <div className="w-1/3 bg-gray-50 border-l shadow-2xl p-10 flex flex-col">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-extrabold text-5xl">Cart</h2>

          <Link
            to="/dashboard"
            className="px-8 py-4 text-2xl rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition"
          >
            Dashboard
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto space-y-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-20">
              <p className="text-5xl font-extrabold text-gray-400">
                Empty Cart
              </p>
              <p className="text-2xl text-gray-500 mt-8">
                Add products to begin billing
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-3xl shadow-2xl flex justify-between items-center"
              >
                <div>
                  <p className="font-bold text-xl">{item.name}</p>

                  {(() => {
                    const { gstAmount, finalPrice } = getPriceWithGST(item);
                    return (
                      <>
                        <p className="text-gray-600 text-xl">
                          Base: ₹{item.selling_price}
                        </p>
                        <p className="text-gray-600 text-xl">
                          GST ({item.gst_rate?.rate}%): ₹{gstAmount.toFixed(2)}
                        </p>
                        <p className="font-bold text-2xl text-green-700">
                          Final: ₹{finalPrice.toFixed(2)}
                        </p>
                      </>
                    );
                  })()}
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
            ))
          )}
        </div>
        {/* <div className="cart-details">
          <button className="cart-btn">Cash</button>
          <button className="cart-btn">Online</button>
        </div> */}

        <div className="pt-8 border-t mt-8">
          <div className="flex justify-between text-4xl font-extrabold mb-8">
            <span>Total (Incl. GST)</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <button
            onClick={() => setShowPayment(true)}
            disabled={cart.length === 0}
            className={`w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white p-6 rounded-3xl text-4xl font-extrabold shadow-2xl ${
              cart.length === 0 ? "cursor-not-allowed" : ""
            }`}
          >
            Checkout
          </button>
        </div>
      </div>

      {showPayment && (
        <PaymentModal
          total={total}
          onClose={() => setShowPayment(false)}
          onConfirm={handlePayment}
        />
      )}
    </>
  );
}
