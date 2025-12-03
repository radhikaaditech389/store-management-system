import React, { useState, useMemo } from "react";
// import { QRCodeCanvas } from "qrcode.react";

export default function PaymentModal({ total, onClose, onConfirm }) {
  const [method, setMethod] = useState("cash");
  const [cashGiven, setCashGiven] = useState("");

  const parse = (v) => (parseFloat(v) ? parseFloat(v) : 0);

  const cashApplied = Math.min(parse(cashGiven), total);
  const remaining = total - cashApplied;
  const balanceReturn = Math.max(parse(cashGiven) - total, 0);

  const upiID = "store@upi"; // ← your UPI ID
  const upiURL = `upi://pay?pa=${encodeURIComponent(
    upiID
  )}&pn=${encodeURIComponent("My Store")}&am=${total}&cu=INR`;

  const keypad = (k) => {
    setCashGiven((prev) => {
      prev = prev || "";
      if (k === "C") return "";
      if (k === "⌫") return prev.slice(0, -1);
      if (k === ".") return prev.includes(".") ? prev : prev + ".";
      return prev + k;
    });
  };

  const handleConfirm = () => {
    let payments = [];

    if (method === "upi") {
      payments.push({
        method: "upi",
        amount: total,
        transaction_id: "QR_SCAN",
        cash_received: 0,
        balance_return: 0,
      });
    }

    if (method === "cash") {
      payments.push({
        method: "cash",
        amount: cashApplied,
        cash_received: parse(cashGiven),
        balance_return: balanceReturn,
      });
    }

    onConfirm(payments);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl p-6 grid grid-cols-3 gap-6">
        {/* LEFT SIDE – METHOD LIST */}
        <div className="col-span-1 flex flex-col gap-4">
          <h2 className="text-xl font-bold mb-2">Payment Options</h2>

          {/* CASH */}
          <button
            onClick={() => setMethod("cash")}
            className={`p-5 rounded-2xl text-left transition-all border ${
              method === "cash"
                ? "bg-blue-600 text-white shadow-xl scale-105"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <div className="text-xl font-semibold">Cash</div>
            <div className="text-sm opacity-70">Take cash from customer</div>
          </button>

          {/* UPI QR */}
          <button
            onClick={() => setMethod("upi")}
            className={`p-5 rounded-2xl text-left transition-all border ${
              method === "upi"
                ? "bg-green-600 text-white shadow-xl scale-105"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <div className="text-xl font-semibold">UPI QR Pay</div>
            <div className="text-sm opacity-70">Scan & Pay</div>
          </button>
        </div>

        {/* MIDDLE AREA */}
        <div className="col-span-1 space-y-6">
          <h2 className="text-xl font-bold">Enter Amount</h2>

          {method === "cash" && (
            <div>
              <input
                className="w-full p-5 text-3xl border rounded-xl shadow"
                value={cashGiven}
                onChange={(e) => setCashGiven(e.target.value)}
                placeholder="Cash Received"
              />
              <div className="text-gray-500 mt-2 text-sm">
                Applied: ₹{cashApplied.toFixed(2)}
                <br />
                Change: ₹{balanceReturn.toFixed(2)}
              </div>
            </div>
          )}

          {method === "upi" && (
            <div className="flex flex-col items-center gap-3">
              {/* <QRCodeCanvas value={upiURL} size={220} level="H" /> */}
              <div className="text-center text-sm text-gray-600">
                Scan UPI QR to pay ₹{total.toFixed(2)}
              </div>
              <div className="text-xs text-gray-500">UPI ID: {upiID}</div>
            </div>
          )}
        </div>

        {/* KEYPAD (only cash mode) */}
        {method === "cash" && (
          <div className="col-span-1">
            <div className="grid grid-cols-3 gap-3">
              {["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "⌫"].map(
                (k) => (
                  <button
                    key={k}
                    className="p-5 bg-gray-100 rounded-xl text-2xl font-bold hover:bg-gray-200 shadow"
                    onClick={() => keypad(k)}
                  >
                    {k}
                  </button>
                )
              )}

              <button
                onClick={() => keypad("C")}
                className="col-span-3 p-5 bg-red-500 text-white rounded-xl text-xl shadow hover:bg-red-600"
              >
                Clear
              </button>
            </div>
          </div>
        )}

        {/* SUMMARY + ACTION BUTTONS */}
        <div className="col-span-3 flex justify-between items-center mt-6">
          <div>
            <div>Total: ₹{total.toFixed(2)}</div>

            {method === "cash" && (
              <>
                <div className="text-green-600 font-semibold">
                  Paid: ₹{cashApplied.toFixed(2)}
                </div>

                <div className="text-red-500">
                  Remaining: ₹{remaining.toFixed(2)}
                </div>
              </>
            )}

            {method === "upi" && (
              <div className="text-green-600 font-semibold">
                Waiting for customer to scan
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gray-300 rounded-xl font-semibold"
            >
              Cancel
            </button>

            <button
              disabled={method === "cash" && remaining > 0}
              onClick={handleConfirm}
              className={`px-8 py-3 rounded-xl text-white font-bold ${
                method === "cash" && remaining > 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
