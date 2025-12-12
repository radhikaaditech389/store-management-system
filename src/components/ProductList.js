import React, { useEffect, useState, useRef } from "react";
import { getProducts, scanBarcode } from "../utils/api";

export default function ProductList({
  selectedCategory,
  selectedBrand,
  addToCart,
  setSelectedCategory,
  setSelectedBrand,
  refreshProducts,
}) {
  const resetFilters = () => {
    setSearch("");
    setSelectedCategory(null);
    setSelectedBrand(null);
  };

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [barcode, setBarcode] = useState("");
  const barcodeRef = useRef();

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, selectedBrand, search]);

  const fetchProducts = async () => {
    setLoading(true);
    const res = await getProducts({
      category_id: selectedCategory,
      brand_id: selectedBrand,
      search: search,
    });
    setProducts(res.data.products || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, selectedBrand, search, refreshProducts]);

  useEffect(() => {
    barcodeRef.current?.focus();
  }, []);

  return (
    <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
      <div className="flex gap-6 mb-40">
        <input
          ref={barcodeRef}
          type="text"
          placeholder="Scan barcode..."
          className="border p-5 text-2xl w-96 rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400 mb-12"
          value={barcode}
          onChange={async (e) => {
            const value = e.target.value;
            setBarcode(value);

            if (value.length >= 8) {
              try {
                const res = await scanBarcode(value);
                addToCart(res.data.data);
                setBarcode("");
              } catch (err) {
                console.log("Product not found for barcode:", value);
              }
            }
          }}
        />
        <input
          type="text"
          placeholder="Search product..."
          className="border p-5 text-2xl w-full rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {loading &&
          [...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-3xl shadow-2xl animate-pulse mb-15"
            >
              <div className="h-6 bg-gray-300 rounded mb-3"></div>
              <div className="h-4 bg-gray-200 rounded mb-2 w-2/3"></div>
              <div className="h-4 bg-gray-200 rounded mb-2 w-1/2"></div>

              <div className="mt-6 flex justify-between items-center">
                <span className="h-8 w-20 bg-gray-300 rounded"></span>
                <span className="h-8 w-20 bg-gray-200 rounded"></span>
              </div>
            </div>
          ))}

        {products.length === 0 && !loading && (
          <div className="col-span-3 text-center py-20">
            <h2 className="text-5xl font-bold text-gray-700">
              No Products Found
            </h2>
            <p className="text-gray-500 text-2xl mt-8">
              Try adjusting your search, category, or brand filters.
            </p>

            <button
              onClick={resetFilters}
              className="mt-8 px-6 py-3 text-2xl rounded-xl bg-blue-600 text-white shadow hover:bg-blue-700 transition"
            >
              Reset Filters
            </button>
          </div>
        )}

        {!loading &&
          products.map((p) => (
            <div
              key={p.id}
              onClick={() => p.stock > 0 && addToCart({ ...p, qty: 1 })}
              className={`bg-white p-6 rounded-3xl shadow-2xl flex flex-col justify-between transition-transform transform mb-15
        ${
          p.stock > 0
            ? "cursor-pointer hover:scale-105"
            : "cursor-not-allowed opacity-50"
        }`}
            >
              <div className="flex-1">
                <h3 className="font-extrabold text-3xl mb-2">{p.name}</h3>
                <p className="text-gray-600 text-xl mt-2">{p.brand?.name}</p>
                <p className="text-gray-600 text-xl mt-2">{p.category?.name}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-3xl font-bold text-blue-700">
                  ₹{p.selling_price}
                </span>
                <span
                  className={`px-4 py-2 rounded-full text-xl font-semibold ${
                    p.stock < 5
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {p.stock} in stock
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
