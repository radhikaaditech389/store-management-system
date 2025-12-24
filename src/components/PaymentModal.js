import React, { useState, useMemo, useRef, useEffect } from "react";
// import { QRCodeCanvas } from "qrcode.react";
import QRCode from "react-qr-code";
import ReceiptModal from "../components/ReceiptModal";
import axios from "axios";

export default function PaymentModal({ total, onClose, onConfirm, cart_data }) {
  // console.log("cart",total);
  const allIds = cart_data.map((item) => item.id);
  // console.log(allIds);
  const receiptRef = useRef();
  const [method, setMethod] = useState("cash");
  const [cashGiven, setCashGiven] = useState("");
  const [paymentType, setPaymentType] = useState("cash");
  const [payment, setPayment] = useState([]);
  const [showReceipt, setShowReceipt] = useState(false);
  const parse = (v) => (parseFloat(v) ? parseFloat(v) : 0);
  const cashApplied = Math.min(parse(cashGiven), total);
  const remaining = total - cashApplied;
  const balanceReturn = Math.max(parse(cashGiven) - total, 0);
  const user_data = JSON.parse(localStorage.getItem("user_detail"));
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

    if (paymentType === "upi") {
      payments.push({
        method: "upi",
        amount: total,
        transaction_id: "QR_SCAN",
        cash_received: 0,
        balance_return: 0,
      });
    }

    if (paymentType === "cash") {
      payments.push({
        method: "cash",
        amount: cashApplied,
        cash_received: parse(cashGiven),
        balance_return: balanceReturn,
      });
    }
    if (paymentType === "online") {
      payments.push({
        method: "online",
        amount: total,
        cash_received: parse(cashGiven),
        balance_return: balanceReturn,
      });
    }

    onConfirm(payments);
  };

  const handleMethod = (type) => {
    setPaymentType(type);
  };

  const sampleReceipt = {
    orderId: "ORD1234",
    customer: "John Doe",
    date: new Date().toLocaleDateString(),
    items: [
      { name: "Paracetamol", qty: 2, price: 20 },
      { name: "Vicks", qty: 1, price: 50 },
    ],
    total: 90,
  };

  useEffect(() => {
    handlePrintData();
  }, []);

  const handlePrintData = async () => {
    const values = {
      id: allIds,
    };

    const response = await axios.post(
      "https://loyality-backend.theaditech.in/api/sales-bill/print-data",
      values,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user_data?.token}`,
        },
      }
    );
    setPayment(response.data.data);
  };

  const cart_detail = JSON.parse(localStorage.getItem("cart_detail"));

  const cart_total = localStorage.getItem("cart_total");

  const printReceipt = () => {
    const printContent = receiptRef.current;

    const win = window.open("", "", "width=300,height=600");

    win.document.write(`
    <html>
      <head>
        <title>Receipt</title>
           <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
        <style>
          @page {
            size: auto;
            margin: 15mm 10mm 10mm 10mm; /* TOP RIGHT BOTTOM LEFT */
          }

          body {
            margin: 0;
            padding: 0;
            font-family: "Poppins", sans-serif;
          }

          .receipt-print {
            margin-top: 12mm; /* EXTRA TOP SPACE IF REQUIRED */
          }

          hr {
            border: none;
            border-top: 1px dashed #000;
            margin: 6px 0;
          }
        </style>
      </head>
      <body>
        <div class="receipt-print">
          ${printContent.innerHTML}
        </div>
      </body>
    </html>
  `);

    win.document.close();
    win.focus();

    setTimeout(() => {
      win.print();
      win.close();
    }, 500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="row bg-white rounded-3xl shadow-2xl w-full cart-max-width p-5">
        {/* LEFT SIDE – METHOD LIST */}
        <div className="col-md-7  flex flex-col gap-4">
          <div className="col-span-1 flex flex-col gap-4">
            <h2
              className="text-xl font-bold mb-2"
              style={{ fontSize: "2.5rem" }}
            >
              Payment Options
            </h2>
            <button
              onClick={() => handleMethod("cash")}
              className={`p-5 rounded-2xl text-left transition-all border ${
                paymentType === "cash"
                  ? "bg-blue-600 text-white shadow-xl scale-105"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              style={{ width: "90%" }}
            >
              <div
                className="text-xl font-semibold text-center mb-5"
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
              style={{ marginBottom: "20px", width: "90%" }}
            >
              <div
                className="text-xl font-semibold text-center mb-5"
                style={{ fontSize: "25px" }}
              >
                Online
              </div>
              <div className="text-sm opacity-70 text-center">Scan Only</div>
            </button>
          </div>

          {/* MIDDLE AREA */}
          <div className="col-span-1 space-y-6">
            {paymentType === "cash" && (
              <>
                <h2
                  className="text-xl font-bold mb-20"
                  style={{ fontSize: "2.4rem" }}
                >
                  Enter Amount
                </h2>

                <div>
                  <input
                    type="number"
                    className="payment-cash p-5 text-3xl text-center border rounded-xl shadow mb-20"
                    value={cashGiven}
                    onChange={(e) => setCashGiven(Number(e.target.value))}
                    placeholder="Cash Received"
                  />
                </div>
              </>
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
            <div style={{ fontSize: "45px", marginBottom: "10px" }}>
              <strong>Paid: </strong> ₹
              {paymentType === "online" ? total : cashApplied.toFixed(2)}
            </div>
            {paymentType !== "online" && (
              <div style={{ fontSize: "45px", marginBottom: "20px" }}>
                <strong>Change: </strong> ₹{balanceReturn.toFixed(2)}
              </div>
            )}
          </div>
        </div>

        {/* KEYPAD (only cash mode) */}
        <>
          <div className="col-md-5">
            <div className="grid grid-cols-3 gap-3">
              {paymentType === "cash" && (
                <>
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
                    style={{ fontSize: "20px" }}
                  >
                    Clear
                  </button>
                </>
              )}

              <button
                onClick={() => setShowReceipt(true)}
                className="col-span-3 p-5 text-white rounded-xl text-xl shadow"
                style={{
                  background: "#3F51B5",
                  fontSize: "20px",
                   marginTop: paymentType === "online" ? "40px" : "0px",
                }}
              >
                Print Receipt
              </button>
            </div>
          </div>
        </>

        {/* SUMMARY + ACTION BUTTONS */}
        <div className="col-span-3 flex justify-between items-center mt-6">
          <div>
            {method === "upi" && (
              <div className="text-green-600 font-semibold">
                Waiting for customer to scan
              </div>
            )}
          </div>
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="bg-gray-300 rounded-xl font-semibold"
              style={{ width: "100%", fontSize: "16px", padding: "14px 30px" }}
            >
              Cancel
            </button>

            <button
              disabled={paymentType === "cash" && remaining > 0}
              onClick={handleConfirm}
              className={`rounded-xl text-white font-bold ${
                paymentType === "cash" && remaining > 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
              style={{ width: "100%", fontSize: "16px", padding: "14px 30px" }}
            >
              Confirm
            </button>
          </div>
        </div>
        <ReceiptModal
          isOpen={showReceipt}
          onClose={() => setShowReceipt(false)}
          data={sampleReceipt}
          ref={receiptRef}
          cart_total={cart_total}
          cart_detail={cart_detail}
          onPrint={printReceipt}
        />
      </div>
    </div>
  );
}
