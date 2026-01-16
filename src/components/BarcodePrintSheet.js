import React, { forwardRef } from "react";
import Barcode from "react-barcode";

const BarcodePrintSheet = forwardRef(({ product, qty = 1 }, ref) => {
  const barcodes = [];
  const val = product?.barcode || product?.sku || "0000";

  for (let i = 0; i < qty; i++) {
    barcodes.push(
      <div
        key={i}
        style={{
          display: "inline-block",
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "white",
          border: "1px solid #eee",
          pageBreakInside: "avoid",
        }}
      >
        <div
          style={{ fontSize: "12px", fontWeight: "bold", marginBottom: "4px" }}
        >
          {product?.name}
        </div>

        <Barcode
          value={product?.barcode || product?.sku || "0000"}
          width={1.5}
          height={50}
          renderer="svg"
          fontSize={12}
        />

        <div
          style={{
            fontSize: "10px",
            marginTop: "4px",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span>SKU: {product?.sku}</span>
          <span style={{ fontWeight: "bold" }}>₹{product?.selling_price}</span>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} style={{ padding: "20px", backgroundColor: "white" }}>
      {barcodes}
    </div>
  );
});

export default BarcodePrintSheet;
