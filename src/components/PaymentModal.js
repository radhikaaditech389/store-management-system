import React, { useState, useMemo } from "react";
// import { QRCodeCanvas } from "qrcode.react";
import QRCode from "react-qr-code";

export default function PaymentModal({ total, onClose, onConfirm }) {
  const [method, setMethod] = useState("cash");
  const [cashGiven, setCashGiven] = useState("");
  const [paymentType, setPaymentType] = useState("cash");

  const parse = (v) => (parseFloat(v) ? parseFloat(v) : 0);

  const cashApplied = Math.min(parse(cashGiven), total);
  const remaining = total - cashApplied;
  const balanceReturn = Math.max(parse(cashGiven) - total, 0);

  // const upiID = "store@upi"; // ← your UPI ID
  // const upiURL = `upi://pay?pa=${encodeURIComponent(
  //   upiID
  // )}&pn=${encodeURIComponent("My Store")}&am=${total}&cu=INR`;
  // const upiId = "store@upi";
  // const name = "Your Name";
  // const amount = 150;
  // const note = "Payment";
  // const upiString =`upi://pay?pa=${upiId}&pn=${name}&am=${amount}&tn=${note}&cu=INR`;
  const upiId = "store@upi";
  const name = "Your Name";
  const amount = 250;
  const note = "Order Payment";

  const upiLink = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&tn=${note}&cu=INR`;

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const handlePayment = () => {
    window.location.href = upiLink;
  };

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
  const handleMethod = (type) => {
    // console.log({type});
    setPaymentType(type);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-2xl w-full cart-max-width p-6 grid grid-cols-3 gap-6">
        {/* LEFT SIDE – METHOD LIST */}
        <div className="col-span-1 flex flex-col gap-4">
          <h2 className="text-xl font-bold mb-2" style={{ fontSize: "1.8rem" }}>
            Payment Options
          </h2>

          {/* CASH */}
          <button
            onClick={() => handleMethod("cash")}
            className={`p-5 rounded-2xl text-left transition-all border ${
              paymentType === "cash"
                ? "bg-blue-600 text-white shadow-xl scale-105"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <div
              className="text-xl font-semibold text-center"
              style={{ fontSize: "25px" }}
            >
              Cash
            </div>
            <div className="text-sm opacity-70 text-center">
              Take cash from customer
            </div>
          </button>

          {/* UPI QR */}
          <button
            onClick={() => handleMethod("online")}
            className={`p-5 rounded-2xl text-center transition-all border ${
              paymentType === "online"
                ? "bg-blue-600 text-white shadow-xl scale-105"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            style={{ marginBottom: "20px" }}
          >
            <div
              className="text-xl font-semibold text-center"
              style={{ fontSize: "25px" }}
            >
              Online
            </div>
            <div className="text-sm opacity-70 text-center">Scan Only</div>
          </button>

          <div style={{ fontSize: "16px", marginBottom: "10px" }}>
            <strong>Paid: </strong> ₹{cashApplied.toFixed(2)}
          </div>
          <div style={{ fontSize: "16px", marginBottom: "20px" }}>
            <strong>Change: </strong> ₹{balanceReturn.toFixed(2)}
          </div>
        </div>

        {/* MIDDLE AREA */}
        <div className="col-span-1 space-y-6">
          <h2 className="text-xl font-bold" style={{ fontSize: "2.4rem" }}>
            Enter Amount
          </h2>

          {method === "cash" && (
            <div>
              <input
                className="w-full p-5 text-3xl text-center border rounded-xl shadow mb-20"
                value={cashGiven}
                onChange={(e) => setCashGiven(e.target.value)}
                placeholder="Cash Received"
              />
              {/* <div className="text-gray-500 mt-2 text-sm">
                Applied: ₹{cashApplied.toFixed(2)}
                <br />
                Change: ₹{balanceReturn.toFixed(2)}
              </div> */}
            </div>
          )}

          {method === "upi" && (
            <div>
              {isMobile ? (
                <button
                  onClick={handlePayment}
                  style={{ padding: "10px 20px" }}
                >
                  Pay ₹{amount} via UPI
                </button>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <h3>Scan & Pay</h3>
                  <QRCode value={upiLink} size={200} />
                </div>
              )}
            </div>
          )}
          {/* <div style={{fontSize: "16px"}}>Paid: ₹{cashApplied.toFixed(2)}</div>
            <br />
            <div style={{fontSize: "16px"}}>Change: ₹{balanceReturn.toFixed(2)}</div> */}
        </div>

        {/* KEYPAD (only cash mode) */}
        {method === "cash" && (
          <>
            <div className="col-span-1">
              <div className="grid grid-cols-3 gap-3">
                {[
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  ".",
                  "0",
                  "⌫",
                ].map((k) => (
                  <button
                    key={k}
                    className="p-5 bg-gray-100 rounded-xl text-2xl font-bold hover:bg-gray-200 shadow"
                    onClick={() => keypad(k)}
                  >
                    {k}
                  </button>
                ))}

                <button
                  onClick={() => keypad("C")}
                  className="col-span-3 p-5 bg-red-500 text-white rounded-xl text-xl shadow hover:bg-red-600"
                >
                  Clear
                </button>
              </div>
            </div>
          </>
        )}

        {/* SUMMARY + ACTION BUTTONS */}
        <div className="col-span-3 flex justify-between items-center mt-6">
          <div>
            {/* <div>Total: ₹{total.toFixed(2)}</div> */}

            {/* {method === "cash" && (
              <>
                <div className="text-green-600 font-semibold">
                  Paid: ₹{cashApplied.toFixed(2)}
                </div>

                <div className="text-red-500">
                  Remaining: ₹{remaining.toFixed(2)}
                </div>
              </>
            )} */}

            {method === "upi" && (
              <div className="text-green-600 font-semibold">
                Waiting for customer to scan
              </div>
            )}
          </div>
          {/* <div className="flex gap-4">
            <div style={{fontSize: "16px"}}>Paid: ₹{cashApplied.toFixed(2)}</div>
            <br />
            <div style={{fontSize: "16px"}}>Change: ₹{balanceReturn.toFixed(2)}</div>
          </div> */}
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="px-6 py-4 bg-gray-300 rounded-xl font-semibold"
              style={{ width: "100%", fontSize: "14px" }}
            >
              Cancel
            </button>

            <button
              disabled={method === "cash" && remaining > 0}
              onClick={handleConfirm}
              className={`px-8 py-4 rounded-xl text-white font-bold ${
                method === "cash" && remaining > 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
              style={{ width: "100%", fontSize: "14px" }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
