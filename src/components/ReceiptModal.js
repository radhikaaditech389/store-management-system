import React, { forwardRef } from "react";

const ReceiptModal = forwardRef(
  ({ isOpen, onClose, data, onPrint, cart_total, cart_detail }, ref) => {

    if (!isOpen) return null;

    const user_data = JSON.parse(localStorage.getItem("user_detail"));

    return (
      <div style={styles.overlay}>
        <div style={styles.modal}>
          {/* Receipt Content */}
          <div ref={ref} style={styles.receiptBox}>
            <h2 style={styles.title}>Receipt</h2>

            <div style={styles.row}>
              <strong>Order ID:</strong> {data.orderId}
            </div>

            <div style={styles.row}>
              <strong>Customer:</strong> {user_data.user.name}
            </div>

            <div style={styles.row}>
              <strong>Date:</strong> {data.date}
            </div>

            <hr />

            <h4>Items</h4>
            {cart_detail.map((item, i) => {
              const price = parseFloat(item.selling_price); // per item price
              const gst = parseFloat(item.gst_rate?.rate || 0); // GST %
              const gstAmount = (price * gst) / 100; // GST value
              const finalPrice = price + gstAmount; // Price + GST

              return (
                <div key={i} style={styles.row}>
                  <span style={styles.row}>{item.name}</span>
                  <span>
                    {item.qty} × ₹{finalPrice.toFixed(2)}
                  </span>
                </div>
              );
            })}

            <hr />

            <div style={styles.cart_row}>
              <strong style={styles.cart_row}>Total:</strong> ₹{cart_total}
            </div>
          </div>

          {/* Buttons */}
          <div style={styles.actions}>
            <button onClick={onPrint} style={styles.printBtn}>
              Print
            </button>
            <button onClick={onClose} style={styles.closeBtn}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default ReceiptModal;

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "395px",
    height: "auto",
    boxShadow: "0px 3px 12px rgba(0,0,0,0.2)",
  },
  receiptBox: {
    padding: "15px",
  },
  title: {
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "34px",
    marginTop: "-22px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
   margin: "5px 0px",
    fontSize: "16px",
  },
  cart_row: {
    display: "flex",
    justifyContent: "space-between",
    margin: "5px 0",
    fontSize: "22px",
  },
  actions: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-between",
  },
  printBtn: {
    padding: "12px 24px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "15px"
  },
  closeBtn: {
    padding: "12px 24px",
    background: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "15px"
  },
};
