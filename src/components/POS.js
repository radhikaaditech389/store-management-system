import React, { useState } from "react";
import LeftSidebar from "./LeftSidebar";
import ProductList from "./ProductList";
import CartPanel from "./CartPanel";

export default function POSApp() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [cart, setCart] = useState([]);

  return (
    <div className="flex h-screen bg-gray-100">
      <LeftSidebar
        selectedCategory={selectedCategory} 
        selectedBrand={selectedBrand}
        setCategory={setSelectedCategory}
        setBrand={setSelectedBrand}
      />
      <ProductList
        selectedCategory={selectedCategory}
        selectedBrand={selectedBrand}
        setSelectedCategory={setSelectedCategory}
        setSelectedBrand={setSelectedBrand}
        addToCart={(p) => {
          const exists = cart.find((i) => i.id === p.id);
          if (exists) {
            setCart(
              cart.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i))
            );
          } else {
            setCart([...cart, { ...p, qty: 1 }]);
          }
        }}
      />
      <CartPanel cart={cart} setCart={setCart} />
    </div>
  );
}
