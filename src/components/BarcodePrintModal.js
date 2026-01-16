import { useRef, useState } from "react";
import BarcodePrintSheet from "./BarcodePrintSheet";
import { useReactToPrint } from "react-to-print";

const BarcodePrintModal = ({ product, onClose }) => {
  const [qty, setQty] = useState(1);
  const contentRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: `Barcode_${product?.name || "Product"}`,
    onBeforePrint: () => new Promise((resolve) => setTimeout(resolve, 500)),
  });

  if (!product) return null;

  return (
    <div style={styles.backdrop}>
      <div style={styles.modal}>
        <h3 style={{ marginBottom: "15px" }}>Print Product Barcode</h3>
        <p style={{ marginBottom: "10px" }}>
          Product: <strong>{product.name}</strong>
        </p>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            Quantity:
          </label>
          <input
            type="number"
            min="1"
            value={qty}
            onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
            style={styles.input}
          />
        </div>

        <div style={styles.actions}>
          <button onClick={onClose} style={styles.btnCancel}>
            Cancel
          </button>
          <button onClick={() => handlePrint()} style={styles.btnPrint}>
            Print Now
          </button>
        </div>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: 0,
            overflow: "hidden",
            visibility: "hidden",
          }}
        >
          <div ref={contentRef}>
            <BarcodePrintSheet product={product} qty={qty} />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  modal: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
  },
  input: {
    padding: "10px",
    width: "100px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  actions: { display: "flex", justifyContent: "center", gap: "10px" },
  btnCancel: {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    cursor: "pointer",
  },
  btnPrint: {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default BarcodePrintModal;
